/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  name: "default",
  title: "Tasty Marks Bookstore",
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
});
