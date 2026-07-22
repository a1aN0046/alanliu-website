import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const visitKey = "alanliu:portfolio:total-visits";
const responseHeaders = {
  "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0"
};

let redisClient: Redis | null | undefined;

function getRedis() {
  if (redisClient !== undefined) {
    return redisClient;
  }

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  redisClient = url && token ? new Redis({ url, token }) : null;
  return redisClient;
}

function countResponse(count: number, status = 200) {
  return NextResponse.json(
    { count },
    { status, headers: responseHeaders }
  );
}

export async function GET() {
  const redis = getRedis();

  if (!redis) {
    return countResponse(0, 503);
  }

  try {
    const storedCount = await redis.get<number>(visitKey);
    return countResponse(storedCount ?? 0);
  } catch {
    return countResponse(0, 503);
  }
}

export async function POST() {
  const redis = getRedis();

  if (!redis) {
    return countResponse(0, 503);
  }

  try {
    const count = await redis.incr(visitKey);
    return countResponse(count);
  } catch {
    return countResponse(0, 503);
  }
}
