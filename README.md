# Alyson Camargo – Site Pessoal & Portfólio  

> Bem‑vindo ao meu site pessoal! Aqui apresento meus projetos, habilidades, contato profissional e um pouco mais sobre mim.

---

## Índice  
- [Introdução](#introdução)  
- [Demo ao Vivo](#demo-ao-vivo)  
- [Instalação](#instalação)  
- [Uso](#uso)  
- [Funcionalidades](#funcionalidades)  
- [Tecnologias](#tecnologias)  
- [Configuração](#configuração)  
- [Deploy](#deploy)  
- [Documentação](#documentação)  
- [Exemplos](#exemplos)  
- [Contribuição](#contribuição)  
- [Licença](#licença)  

---

## Introdução  
Este repositório contém o código‑fonte do meu site pessoal/portfólio — desenvolvido para destacar meus projetos, habilidades em desenvolvimento web, e facilitar o contato profissional. Foi construído com foco em performance, responsividade e boas práticas modernas de front‑end.

---

## Demo ao Vivo  
🔗 [Acesse o site aqui](https://alyson-camargo-dev.vercel.app/) (hosted via Vercel)  
Veja a versão de produção em funcionamento para explorar o layout, animações, temas e navegação.

---

## Instalação  
Para rodar o projeto localmente, siga os passos abaixo:

```bash
git clone https://github.com/AlysonCamargo/alyson-camargo-dev.git  
cd alyson-camargo-dev  
npm install     # ou yarn install  
```

---

## Uso  
Após instalação:

```bash
npm run dev     # ou yarn dev  
```

Abra seu navegador em `http://localhost:3000` (ou porta configurada) para visualizar localmente.  
Para gerar uma versão otimizada para produção:

```bash
npm run build   # ou yarn build  
```

O build geralmente será gerado em uma pasta `dist/` ou conforme configuração do bundler.

---

## Funcionalidades  
- Layout responsivo, adaptado para desktop, tablet e mobile.  
- Seções dedicadas: sobre mim, habilidades, projetos, contato.  
- Código em TypeScript para maior robustez e escalabilidade.  
- Estilização com Tailwind CSS — design ágil e moderno.  
- Build e bundling rápidos com Vite.  
- Otimizações para SEO e performance (ex: lazy loading, images otimizadas).  
- Deploy automatizado via Vercel — facilidade para manter atualizado.

---

## Tecnologias  
- **Linguagem:** TypeScript  
- **Framework / Build‑Tool:** Vite  
- **Estilo:** Tailwind CSS  
- **Lint / Formatação:** ESLint, Prettier  
- **Deploy:** Vercel  
- **Estrutura típica:**  
  ```
  ├── public/
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   └── assets/
  ├── tailwind.config.ts
  ├── vite.config.ts
  └── tsconfig.json
  ```

---

## Configuração  
Você pode personalizar o projeto conforme preferências:  
- `tailwind.config.ts` → tema, cores, plugins Tailwind.  
- `vite.config.ts` → alias de módulos, plugins Vite, definição da porta.  
- `tsconfig.json` → opções do TypeScript (strict, paths, etc).  
- `postcss.config.js` → configuração de autoprefixer ou css‑nano.  
- `src/` → edite componentes, textos, imagens, logos, links de contato.

---

## Deploy  
Este projeto está preparado para deploy com Vercel e as seguintes etapas típicas:

1. Conecte o repositório GitHub à sua conta Vercel.  
2. Em Vercel, defina o build command (ex: `npm run build`) e a pasta de saída (ex: `dist/` ou conforme `vite.config.ts`).  
3. Configure variáveis de ambiente (se houver) no painel da Vercel.  
4. A cada `git push` na branch principal (ex: `main` ou `master`), o Vercel disparará o deploy automático.  
5. Após o deploy, você terá uma URL como `https://alyson-camargo-dev.vercel.app/` ou com domínio customizado, por exemplo, `https://alysoncamargo.dev`.

ℹ️ *Dica:* Ative HTTPS, configure domínio personalizado, e use os “Preview Deployments” do Vercel para revisar antes de produção.

---

## Documentação  
- Consulte os arquivos fonte em `src/` para entender como os componentes estão organizados (por exemplo, `src/components/ProjectCard.tsx`, etc).  
- Regras de estilo e lint configuradas em `.eslintrc`, `prettier.config.js`.  
- Para adicionar um novo projeto ao portfólio:  
   1. Crie entrada no arquivo de dados (ex: `src/data/projects.ts`).  
   2. Atualize componente de listagem (`src/components/ProjectsList.tsx`).  
   3. Adicione imagem, descrição, link e tecnologias utilizadas.

---

## Exemplos  
- Versão local executando com `npm run dev`.  
- Versão de produção com build otimizado — código minificado, imagens otimizadas, carregamento rápido.  
- Pode servir como template base para outro portfólio pessoal: substitua textos, imagens, cores, temas, links.

---

## Contribuição  
Contribuições são bem‑vindas 🙌  
Se você quiser contribuir:  
- Abra uma *issue* para sugerir melhorias ou reportar bugs.  
- Crie um *pull request* com suas alterações.  
- Mantenha o estilo de código existente (ESLint + Prettier).  
- Adicione ou atualize documentação conforme sua contribuição.

---

## Licença  
Este projeto está licenciado sob a licença **MIT**.

---

**Boa codificação!** 🚀  
Obrigado por visitar meu portfólio.  
