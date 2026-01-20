console.log("Script starting...");
import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log("Env loaded.");

if (!process.env.SANITY_TOKEN) {
  console.log("No token found!");
  process.exit(1);
}

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
  apiVersion: "2024-01-14",
});

client
  .fetch('*[_type == "project"]{title, businessType}[0...3]')
  .then((data) => {
    console.log("Data fetched:");
    console.log(JSON.stringify(data, null, 2));
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });
