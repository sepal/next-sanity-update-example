import { Image } from "lucide-react";
import { defineField, defineType } from "sanity";

export default {
  name: "portableText",
  title: "Portable Text",
  type: "array",
  of: [
    {
      name: "block",
      type: "block",
      styles: [
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "URL",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    },
    defineField({ name: "image", type: "image", icon: Image }),
  ],
};
