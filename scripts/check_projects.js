import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2024-01-14",
});

async function check() {
  console.log("Checking project ID:", process.env.VITE_SANITY_PROJECT_ID);
  try {
    const projects = await client.fetch('*[_type == "project"]');
    console.log(`Found ${projects.length} projects:`);
    projects.forEach((p) => console.log(`- ${p.title} (${p._id})`));
  } catch (err) {
    console.error("Error fetching projects:", err.message);
  }
}

check();
