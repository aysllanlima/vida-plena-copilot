<div align="center">

# 🧠 Vida Plena Copilot

### Copiloto Corporativo Inteligente utilizando Inteligência Artificial Generativa

Assistente virtual desenvolvido para centralizar e democratizar o acesso às informações da **ONG Vida Plena**, permitindo consultas em linguagem natural sobre beneficiários, eventos e inscrições.

<br>

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Dify](https://img.shields.io/badge/Dify-AI-5B4BFF?style=for-the-badge)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-4285F4?style=for-the-badge&logo=google)
![RAG](https://img.shields.io/badge/RAG-Retrieval--Augmented--Generation-111827?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Acadêmico-success?style=for-the-badge)

</div>

---

# 📑 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Objetivos](#-objetivos)
- [Arquitetura da Solução](#-arquitetura-da-solução)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Ferramentas de IA Aplicadas](#-ferramentas-de-ia-aplicadas)
- [Diferenciais Técnicos](#-diferenciais-técnicos-e-governança-de-ia)
- [Como Executar](#-como-executar-o-projeto)

---

# 📖 Sobre o Projeto

O **Vida Plena Copilot** é um assistente corporativo inteligente desenvolvido como projeto acadêmico, integrando **Inteligência Artificial Generativa**, **desenvolvimento web moderno** e **busca semântica** para apoiar a gestão da ONG Vida Plena.

O sistema foi concebido para eliminar a dependência de consultas manuais em planilhas, permitindo que colaboradores realizem perguntas em linguagem natural e obtenham respostas rápidas, precisas e contextualizadas.

A solução segue uma arquitetura moderna baseada em:

- Interface Web (Front-end)
- Agente Inteligente (LLM)
- Busca Vetorial (RAG)
- Base de Conhecimento

---

# 🎯 Objetivos

O projeto possui como principais objetivos:

- Centralizar informações corporativas.
- Democratizar o acesso ao conhecimento institucional.
- Reduzir tempo gasto em buscas manuais.
- Facilitar consultas utilizando linguagem natural.
- Melhorar a produtividade operacional da ONG.
- Demonstrar a aplicação prática da IA Generativa em ambientes corporativos.

---

# 🏗 Arquitetura da Solução

O projeto foi desenvolvido utilizando uma arquitetura desacoplada entre interface de usuário e processamento inteligente.

```text
                 Usuário
                    │
                    ▼
        Front-end (React + Vite)
                    │
             Requisições HTTP
               (fetch API)
                    │
                    ▼
          Plataforma Dify (RAG)
                    │
        ┌───────────┴────────────┐
        │                        │
        ▼                        ▼
 Google Gemini            Base Vetorial
 (LLM + Embeddings)      Dados da ONG

                    │
                    ▼
          Resposta Contextualizada
```

A comunicação entre os componentes ocorre por meio de requisições HTTP, permitindo que o front-end permaneça totalmente desacoplado da camada de inteligência artificial.

---

# 💻 Tecnologias Utilizadas

## Front-end

| Tecnologia | Finalidade |
|------------|------------|
| React | Interface da aplicação |
| TypeScript | Tipagem estática |
| Vite | Build e desenvolvimento |
| Tailwind CSS | Estilização |
| Fetch API | Comunicação com o agente |

---

## Inteligência Artificial

| Tecnologia | Utilização |
|------------|------------|
| Dify | Orquestração do agente RAG |
| Google Gemini | Modelo de linguagem |
| Gemini Embedding | Vetorização da base de conhecimento |

---

## Base de Conhecimento

A base utilizada pelo agente é composta por informações estruturadas contendo:

- Beneficiários
- Eventos
- Inscrições

Esses dados são processados através de **busca vetorial**, permitindo consultas semânticas em linguagem natural.

---

# ⚙ Fluxo Geral da Aplicação

```text
Pergunta do Usuário
        │
        ▼
 Interface React
        │
        ▼
 Fetch API
        │
        ▼
 Dify
        │
        ▼
 Busca Vetorial (RAG)
        │
        ▼
 Google Gemini
        │
        ▼
Resposta Contextualizada
```

# 🤖 Ferramentas de IA Aplicadas

O desenvolvimento do **Vida Plena Copilot** foi realizado utilizando o conceito de **Desenvolvimento Assistido por Inteligência Artificial**, onde diferentes ferramentas especializadas atuaram em etapas distintas do projeto.

---

## 💙 Lovable

O **Lovable** foi utilizado como acelerador do desenvolvimento Front-end.

Seu papel foi gerar, através de engenharia de prompts, praticamente toda a estrutura inicial da aplicação, incluindo:

- Interface em React;
- Componentização da aplicação;
- Estrutura utilizando TypeScript;
- Estilização com Tailwind CSS;
- Barra lateral;
- Interface do chat;
- Integração inicial utilizando `fetch`.

Dessa forma, foi possível reduzir significativamente o tempo necessário para construção da interface.

---

## 🟣 Dify

O **Dify** é o núcleo responsável pela orquestração da Inteligência Artificial.

Sua responsabilidade dentro da arquitetura inclui:

- Gerenciamento do agente inteligente;
- Configuração do modelo de linguagem;
- Pipeline de processamento;
- Base de Conhecimento Vetorial;
- Recuperação de contexto (RAG);
- Construção do Prompt de Sistema.

Toda a lógica relacionada ao processamento das consultas passa pelo Dify antes da geração da resposta.

---

## 🔵 Google Gemini

O **Google Gemini** atua como o modelo cognitivo da aplicação.

Foi utilizado tanto para:

- geração das respostas;
- criação dos embeddings da Base de Conhecimento.

Além disso, auxiliou diretamente durante o desenvolvimento do projeto na:

- estruturação dos dados;
- criação de scripts em Python;
- organização semântica das informações;
- resolução de problemas relacionados à recuperação de contexto.

---

# 🧠 Arquitetura RAG (Retrieval-Augmented Generation)

O projeto utiliza uma arquitetura baseada em **RAG**, permitindo que o modelo consulte informações reais antes da geração da resposta.

Fluxo simplificado:

```text
Usuário faz uma pergunta
            │
            ▼
 Interface React
            │
            ▼
         Fetch API
            │
            ▼
           Dify
            │
            ▼
 Pesquisa Vetorial
            │
            ▼
 Recuperação dos Chunks
            │
            ▼
 Google Gemini
            │
            ▼
Resposta Final
```

Essa abordagem garante que as respostas sejam construídas utilizando os dados existentes na Base de Conhecimento, reduzindo respostas genéricas e aumentando a precisão das informações.

---

# 📚 Base de Conhecimento

A Base de Conhecimento utilizada pelo agente foi construída a partir de dados estruturados da ONG.

Os documentos processados representam informações relacionadas a:

- Beneficiários;
- Eventos;
- Inscrições.

Esses dados são convertidos em representações vetoriais utilizando **embeddings**, permitindo buscas semânticas eficientes.

---

# 🛡 Diferenciais Técnicos e Governança de IA

Além da utilização de IA Generativa, o projeto incorpora mecanismos voltados para segurança, confiabilidade e qualidade das respostas.

## ✔ Integração com APIs

A comunicação entre o Front-end e o agente é realizada através de requisições HTTP assíncronas utilizando o método `fetch`.

Isso mantém a arquitetura desacoplada e facilita futuras integrações.

---

## ✔ Histórico de Conversas

A aplicação mantém o histórico das interações realizadas pelo usuário.

Esse recurso permite que perguntas subsequentes preservem o contexto da conversa, proporcionando uma experiência muito mais natural.

---

## ✔ Tratamento de Limites de Contexto

Durante o desenvolvimento foi identificado que consultas amplas sofriam limitações causadas pelo número reduzido de documentos recuperados (Top K).

Para minimizar esse comportamento foram realizados ajustes na estratégia de recuperação de contexto, aumentando a qualidade das respostas obtidas pelo modelo.

---

## ✔ Busca Semântica

Ao invés de localizar apenas palavras-chave, a aplicação realiza consultas considerando o significado da pergunta.

Essa abordagem permite identificar documentos relacionados mesmo quando o usuário utiliza diferentes formas de escrita.

---

## ✔ Regra de Ouro

Uma das principais preocupações do projeto foi impedir a geração de informações inexistentes.

Para isso foi implementada uma regra de governança no agente.

> **O modelo deve responder exclusivamente com base nas informações presentes na Base de Conhecimento.**

Caso uma informação não exista, o sistema retorna uma mensagem informando que aquele dado não foi encontrado.

Essa abordagem reduz significativamente o risco de alucinações do modelo.

---

# 🔒 Governança de IA

O projeto foi concebido considerando boas práticas de uso responsável da Inteligência Artificial.

Entre elas destacam-se:

- utilização exclusivamente interna;
- proteção das informações corporativas;
- respostas baseadas apenas em evidências;
- prevenção de desinformação;
- recuperação contextual antes da geração da resposta.

---

# 🚀 Como Executar o Projeto

O projeto pode ser acessado tanto pela versão publicada na nuvem quanto executado localmente para fins de desenvolvimento.

---

# ☁ Acesso via Nuvem

A aplicação pode ser acessada através do ambiente hospedado.

> **Interface (Lovable)**

```text
[INSERIR LINK DA APLICAÇÃO]
```

> **Agente Inteligente (Dify)**

```text
[INSERIR LINK DO AGENTE]
```

---

# 💻 Execução Local

## Pré-requisitos

Certifique-se de possuir instalado:

- Node.js
- npm

---

## Clonando o projeto

```bash
git clone https://github.com/SEU-USUARIO/vida-plena-copilot.git
```

```bash
cd vida-plena-copilot
```

---

## Instalando as dependências

```bash
npm install
```

---

## Executando o projeto

```bash
npm run dev
```

Após iniciar o servidor, a aplicação estará disponível em:

```text
http://localhost:5173
```

---

# 📁 Estrutura do Projeto

```text
vida-plena-copilot/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

# 📈 Diferenciais da Solução

O **Vida Plena Copilot** reúne diferentes conceitos modernos de desenvolvimento de software e Inteligência Artificial em uma única aplicação.

Entre seus principais diferenciais destacam-se:

- Interface moderna desenvolvida em React;
- Arquitetura desacoplada entre Front-end e IA;
- Comunicação assíncrona utilizando Fetch API;
- Utilização de arquitetura RAG;
- Busca semântica baseada em embeddings;
- Base de Conhecimento vetorial;
- Histórico de conversas;
- Recuperação contextual das informações;
- Tratamento de limitações de contexto (Top K);
- Governança de IA com mecanismos anti-alucinação.

---

# 🔮 Evolução do Projeto

A arquitetura foi concebida para permitir futuras expansões.

Entre as possibilidades previstas estão:

- Integração dinâmica via API com Airtable;
- Integração com bancos de dados relacionais (SQL);
- Atualização automática da Base de Conhecimento;
- Agente capaz de executar ações além de consultas;
- Integração com APIs externas bidirecionais;
- Automação de fluxos internos da ONG;
- Utilização do Model Context Protocol (MCP).

---

# 🎥 Demonstração

## Vídeo Pitch

```text
[INSERIR LINK DO VÍDEO]
```

---

# 📚 Documentação Complementar

O repositório também contém:

- Trabalho acadêmico;
- README técnico;
- Base de Conhecimento utilizada pelo agente;
- Arquivos auxiliares do projeto.

---

# 👨‍💻 Autor

**Aysllan Lima Rodrigues**

Projeto desenvolvido como atividade acadêmica da disciplina de **IA Generativa Aplicada ao Desenvolvimento**, demonstrando a aplicação prática de Inteligência Artificial Generativa, Recuperação Aumentada por Geração (RAG) e desenvolvimento web moderno na construção de soluções corporativas inteligentes.

---

# 📄 Licença

Este projeto foi desenvolvido exclusivamente para fins acadêmicos.

---

<div align="center">

## ⭐ Vida Plena Copilot

Assistente Corporativo Inteligente desenvolvido utilizando IA Generativa.

**React • TypeScript • Vite • Tailwind CSS • Dify • Google Gemini • RAG**

---

Desenvolvido por **Aysllan Lima Rodrigues**

</div>
