import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2024-01-14", // use current date (YYYY-MM-DD) to target the latest API
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source).auto("format");
}
