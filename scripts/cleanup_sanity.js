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
  token: process.env.SANITY_TOKEN,
  useCdn: false,
  apiVersion: "2024-01-14",
});

async function cleanupSanity() {
  console.log("🧹 Starting Sanity cleanup...");

  try {
    // Get all document types
    const types = [
      "benefit",
      "pricing",
      "faq",
      "process",
      "project",
      "post",
      "category",
      "siteSettings",
    ];

    for (const type of types) {
      console.log(`\n🗑️  Deleting all documents of type: ${type}`);

      // Fetch all documents of this type
      const query = `*[_type == "${type}"]._id`;
      const ids = await client.fetch(query);

      if (ids.length === 0) {
        console.log(`   ℹ️  No documents found for type: ${type}`);
        continue;
      }

      console.log(`   Found ${ids.length} document(s) to delete`);

      // Delete all documents
      const transaction = client.transaction();
      ids.forEach((id) => {
        transaction.delete(id);
      });

      await transaction.commit();
      console.log(`   ✅ Deleted ${ids.length} document(s) of type: ${type}`);
    }

    console.log("\n✨ Sanity cleanup complete! All data has been removed.");
    console.log("💡 You can now run 'npm run populate' to add fresh data.");
    process.exit(0);
  } catch (error) {
    console.error("\n❌ Error during cleanup:", error);
    process.exit(1);
  }
}

cleanupSanity();
