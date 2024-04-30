import { SchemaTypeDefinition, Template } from "sanity";
import blog from "./documents/blog";
import portableText from "./objects/portableText";

export const schema: {
  types: SchemaTypeDefinition[];
} = {
  types: [portableText, blog],
};

export const translatableTypes = [blog];
export const translatableTypeNames: string[] = translatableTypes.map(
  (translatableType) => translatableType.name
);
