import { createServerFn } from "@tanstack/react-start";

export const askDify = createServerFn({ method: "POST" })
  .inputValidator((input: { query: string }) => {
    const query = typeof input?.query === "string" ? input.query.trim() : "";
    if (!query) throw new Error("Mensagem vazia.");
    if (query.length > 4000) throw new Error("Mensagem muito longa.");
    return { query };
  })
  .handler(async ({ data }) => {
    const apiKey = process.env["DIFY_API_KEY"];
    if (!apiKey) throw new Error("Configuração do assistente indisponível.");

    const response = await fetch("https://api.dify.ai/v1/chat-messages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: {},
        query: data.query,
        response_mode: "blocking",
        conversation_id: "",
        user: "admin-ong",
      }),
    });

    if (!response.ok) {
      console.error("Dify error", response.status, await response.text());
      throw new Error(`Erro ${response.status}`);
    }

    const result = (await response.json()) as { answer?: string };
    return { answer: result.answer ?? "Não foi possível obter uma resposta." };
  });
