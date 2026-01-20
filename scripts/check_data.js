import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET;
const token = process.env.SANITY_TOKEN;

const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false, // We want the latest
  apiVersion: "2024-01-14",
});

const checkData = async () => {
  try {
    const projects = await client.fetch(`*[_type == "project"]{
      title,
      businessType,
      businessGoal,
      businessFunction
    }`);
    console.log("Current Sanity Data:");
    console.log(JSON.stringify(projects, null, 2));
  } catch (err) {
    console.error("Error fetching data:", err.message);
  }
};

checkData();
