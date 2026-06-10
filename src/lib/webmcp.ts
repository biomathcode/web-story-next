import type { seoType, state } from "@/pages/index";

type ModelContextTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations?: {
    readOnlyHint?: boolean;
    untrustedContentHint?: boolean;
  };
  execute: (input: any) => Promise<string>;
};

type ModelContextDocument = Document & {
  modelContext?: {
    registerTool: (
      tool: ModelContextTool,
      options?: { signal?: AbortSignal }
    ) => void;
  };
};

export const registerWebMcpTools = ({
  getStoryState,
  setStoryText,
  setSeo,
}: {
  getStoryState: () => state[];
  setStoryText: (slideIndex: number, text: string) => void;
  setSeo: (seo: Partial<seoType>) => void;
}) => {
  if (typeof document === "undefined") {
    return undefined;
  }

  const modelContext = (document as ModelContextDocument).modelContext;

  if (!modelContext?.registerTool) {
    return undefined;
  }

  const controller = new AbortController();

  modelContext.registerTool(
    {
      name: "get_web_story_draft",
      description:
        "Read the current Google Web Story draft slides and SEO metadata from the editor.",
      inputSchema: {
        type: "object",
        properties: {},
      },
      annotations: {
        readOnlyHint: true,
      },
      execute: async () => JSON.stringify(getStoryState()),
    },
    { signal: controller.signal }
  );

  modelContext.registerTool(
    {
      name: "update_web_story_slide_text",
      description:
        "Update one slide text in the Web Story editor. Use zero-based slideIndex.",
      inputSchema: {
        type: "object",
        properties: {
          slideIndex: {
            type: "number",
            description: "Zero-based slide index to update.",
          },
          text: {
            type: "string",
            description: "New concise slide text.",
          },
        },
        required: ["slideIndex", "text"],
      },
      annotations: {
        readOnlyHint: false,
      },
      execute: async ({ slideIndex, text }) => {
        setStoryText(Number(slideIndex), String(text));
        return `Updated slide ${Number(slideIndex) + 1}.`;
      },
    },
    { signal: controller.signal }
  );

  modelContext.registerTool(
    {
      name: "update_web_story_seo",
      description:
        "Update SEO title, description, or social preview image for the current Web Story.",
      inputSchema: {
        type: "object",
        properties: {
          title: { type: "string" },
          description: { type: "string" },
          image: { type: "string" },
        },
      },
      annotations: {
        readOnlyHint: false,
      },
      execute: async ({ title, description, image }) => {
        setSeo({ title, description, image });
        return "Updated Web Story SEO metadata.";
      },
    },
    { signal: controller.signal }
  );

  return () => controller.abort();
};
