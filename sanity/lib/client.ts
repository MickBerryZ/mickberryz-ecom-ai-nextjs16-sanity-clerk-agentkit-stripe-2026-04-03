import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  perspective: "published", // Use "read" for frontend, "write" for server actions/webhooks
});

// Write client (for mutations - used in webhooks/server actions)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Always set to false for write operations
  token: process.env.SANITY_API_WRITE_TOKEN, // Ensure this token has write permissions and is kept secure
});
