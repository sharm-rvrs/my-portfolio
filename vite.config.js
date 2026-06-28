import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { SYSTEM_PROMPT } from "./api/chat.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      {
        name: "dev-api",
        configureServer(server) {
          server.middlewares.use("/api/chat", (req, res) => {
            if (req.method !== "POST") {
              res.statusCode = 405;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "Method not allowed" }));
              return;
            }
            let raw = "";
            req.on("data", (c) => (raw += c));
            req.on("end", async () => {
              try {
                const { messages } = JSON.parse(raw);
                const history = messages
                  .filter((m) => m.role === "user" || m.role === "assistant")
                  .slice(-12);

                const resp = await fetch(
                  "https://api.groq.com/openai/v1/chat/completions",
                  {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${env.GROQ_API_KEY}`,
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      model: "llama-3.3-70b-versatile",
                      messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        ...history,
                      ],
                      temperature: 0.65,
                      max_tokens: 400,
                    }),
                  }
                );

                const data = await resp.json();
                res.setHeader("Content-Type", "application/json");
                res.end(
                  JSON.stringify({ reply: data.choices[0].message.content })
                );
              } catch (err) {
                console.error("[dev-api]", err);
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ error: "Internal error" }));
              }
            });
          });
        },
      },
    ],
    base: "/",
  };
});
