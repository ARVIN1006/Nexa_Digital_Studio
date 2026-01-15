import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Nexa Studio Portfolio",

  projectId: "iz9h8b1m",
  dataset: "production",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
