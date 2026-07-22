"use client";

import { useEffect, useState } from "react";

const storageKey = "alanliu-visit-counted";
let pendingRequest: Promise<number | null> | null = null;

async function fetchVisitCount() {
  try {
    const alreadyCounted = window.sessionStorage.getItem(storageKey) === "true";
    const method = alreadyCounted ? "GET" : "POST";
    const response = await fetch("/api/visits", {
      method,
      cache: "no-store",
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      return null;
    }

    const data: unknown = await response.json();
    const count =
      typeof data === "object" && data !== null && "count" in data
        ? (data as { count: unknown }).count
        : null;

    if (typeof count !== "number" || !Number.isSafeInteger(count) || count < 0) {
      return null;
    }

    if (method === "POST") {
      window.sessionStorage.setItem(storageKey, "true");
    }

    return count;
  } catch {
    return null;
  }
}

function getVisitCount() {
  if (!pendingRequest) {
    pendingRequest = fetchVisitCount();
    void pendingRequest.finally(() => {
      pendingRequest = null;
    });
  }

  return pendingRequest;
}

interface VisitCounterProps {
  label: string;
  locale: string;
}

export function VisitCounter({ label, locale }: VisitCounterProps) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let isActive = true;

    void getVisitCount().then((nextCount) => {
      if (isActive) {
        setCount(nextCount);
      }
    });

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <span className="inline-block min-h-5 text-xs tabular-nums" aria-live="polite">
      {count === null ? null : `${label}: ${new Intl.NumberFormat(locale).format(count)}`}
    </span>
  );
}
