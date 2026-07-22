# alanliu-website
Alan's Personal Engineering Portfolio

## Visit counter setup

1. Create an Upstash Redis database.
2. Copy the database REST URL and REST token.
3. Add these environment variables to the Vercel project:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
4. Redeploy the project.

The portfolio still builds and runs when these variables are missing. The visit counter stays hidden until Redis is configured.
