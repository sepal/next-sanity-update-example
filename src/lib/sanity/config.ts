import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { documentInternationalization } from "@sanity/document-internationalization";
import { schema, translatableTypeNames } from "./schemas";
import { languages } from "./languages";

const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_DATASET ||
  "development";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;

if (!projectId) {
  throw new Error(
    "The project ID is required. Set the NEXT_PUBLIC_SANITY_PROJECT_ID environment variable."
  );
}

export default defineConfig({
  name: "default",
  title: "sanity-upload example",
  basePath: "/cms",

  projectId: projectId,
  dataset: dataset,
  schema,

  plugins: [
    documentInternationalization({
      supportedLanguages: languages,
      schemaTypes: translatableTypeNames,
    }),
  ],
});
