import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Load environment variables
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET;
const token = process.env.SANITY_TOKEN;

if (!token) {
  console.error("Error: SANITY_TOKEN is missing in .env file.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
  apiVersion: "2024-01-14",
});

const projectsToMigrate = [
  {
    _type: "project",
    title: "UMKM Kit - Web Builder",
    category: "UMKM",
    previewUrl: "https://umkmkit.netlify.app/",
    accent: "border-indigo-200 shadow-indigo-500/10",
    businessType: "Platform Digital",
    businessGoal: "Membantu UMKM Go Digital",
    businessFunction: "Dashboard & Pembuatan Web Instan",
  },
  {
    _type: "project",
    title: "Arvin Ramdhan Portfolio",
    category: "Personal",
    previewUrl: "http://arvindev.netlify.app/",
    accent: "border-slate-200 shadow-slate-500/10",
    businessType: "Personal Branding",
    businessGoal: "Menampilkan Skill & Kualitas",
    businessFunction: "Portofolio Interaktif & Kontak",
  },
  {
    _type: "project",
    title: "Smart WMS System",
    category: "Company",
    previewUrl: "https://wms-project-4dtd.vercel.app/",
    accent: "border-blue-200 shadow-blue-500/10",
    businessType: "Sistem Manajemen (B2B)",
    businessGoal: "Efisiensi Operasional Gudang",
    businessFunction: "Tracking Stok & Laporan Realtime",
  },
];

const migrate = async () => {
  console.log(`Starting migration...`);

  for (const project of projectsToMigrate) {
    try {
      const existing = await client.fetch(
        `*[_type == "project" && title == $title][0]`,
        { title: project.title },
      );

      if (existing) {
        console.log(`Update: ${project.title}`);
        await client.patch(existing._id).set(project).commit();
      } else {
        console.log(`Create: ${project.title}`);
        await client.create(project);
      }
    } catch (err) {
      console.error(`Error ${project.title}:`, err.message);
    }
  }

  console.log("Migration complete!");
  fs.writeFileSync(
    path.resolve(__dirname, "../migration_log.txt"),
    "Migration Success at " + new Date().toISOString(),
  );
};

migrate();
