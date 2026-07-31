# Vida Plena Copilot

Atue como um Engenheiro Front-end Sênior. Crie uma interface completa de Copiloto Corporativo para a ONG Vida Plena utilizando React, TypeScript, Tailwind CSS e Lucide Icons.

Design e Layout:

O tema deve ser moderno, clean, focado na usabilidade e usar as cores institucionais Verde e Branco (ex: tons de emerald ou green do Tailwind).

Crie uma barra lateral (Sidebar) contendo: Logotipo 'Vida Plena Copilot', um botão 'Nova Conversa', e uma seção de 'Atalhos Rápidos' (com botões fictícios para 'Consultar Beneficiário', 'Status de Eventos' e 'Rodas de Conversa').

A área principal deve ser um chat estilo ChatGPT, diferenciando visualmente as mensagens do Usuário e do Assistente. O input de texto deve ficar fixado na parte inferior com um botão de envio.

Lógica e Integração com Dify API:

Crie um estado para armazenar as mensagens ({ role: 'user' | 'assistant', content: string }).

Ao enviar uma mensagem, exiba-a no chat imediatamente e faça um POST via fetch para [https://api.dify.ai/v1/chat-messages](https://api.dify.ai/v1/chat-messages).

No header do fetch, inclua: Authorization: Bearer app-l0sr3eeWEqUhvpDnlhcAip5J e Content-Type: application/json.

O body do fetch deve ser dinâmico, formatado exatamente assim: { "inputs": {}, "query": variavelComOTextoDoUsuario, "response_mode": "blocking", "conversation_id": "", "user": "admin-ong" }. Certifique-se de que a query receba o estado do texto digitado no input.

Trate a resposta capturando o campo answer do JSON retornado e adicione-o ao estado de mensagens para renderizar a resposta do assistente na tela. Gerencie também um estado de 'loading' enquanto aguarda a resposta.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://vida-plena-copilot.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/58009588-93b2-4e02-928e-2c9770d6af16).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
