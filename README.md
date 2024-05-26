# Farmácia Jatobá

Este é um projeto desenvolvido para a disciplina de Sistema de Informação da faculdade de Ciência da Computação. O projeto consiste em uma farmácia simples com as páginas: Inicial, Produtos e Carrinho. O website foi construído utilizando Next.js, Tailwind CSS, Radix UI, Shadcn UI e a biblioteca de gerenciamento de estados Zustand.

## URL de Produção

A aplicação está disponível em: [farmaciajatoba.vercel.app](https://farmaciajatoba.vercel.app)

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Shadcn UI](https://shadcn.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)

## Requisitos

- Node.js v14.0 ou superior
- npm v6.0 ou superior (ou yarn como alternativa)

## Como Rodar o Projeto na Sua Máquina

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/devedsonalves/jatoba-pharmacy.git
   cd jatoba-pharmacy
   ```

2. **Instale as dependências:**

   Usando npm:
   ```bash
   npm install
   ```

   Ou usando yarn:
   ```bash
   yarn install
   ```

4. **Inicie o servidor de desenvolvimento:**

   Usando npm:
   ```bash
   npm run dev
   ```

   Ou usando yarn:
   ```bash
   yarn dev
   ```

5. **Abra o navegador e acesse:**

   ```
   http://localhost:3000
   ```

## Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

```
.
├── components        # Componentes React reutilizáveis
├── pages             # Páginas da aplicação Next.js
│   ├── _app.tsx      # Configuração do aplicativo
│   ├── index.tsx     # Página inicial
│   ├── products.tsx  # Página de produtos
│   └── cart.tsx      # Página do carrinho
├── public            # Arquivos estáticos
├── styles            # Arquivos de estilos (CSS, Tailwind)
├── store             # Arquivos relacionados ao Zustand
│   └── store.ts      # Configuração do Zustand
├── utils             # Utilitários e helpers
├── .env.local        # Arquivo de variáveis de ambiente (não incluído)
├── tsconfig.json     # Configuração do TypeScript
├── tailwind.config.js # Configuração do Tailwind CSS
├── package.json      # Dependências e scripts npm
└── README.md         # Este arquivo
```

## Desenvolvimento

Para contribuir com este projeto, siga as etapas abaixo:

1. **Crie um fork do repositório**
2. **Crie uma branch para sua feature/bugfix:**

   ```bash
   git checkout -b minha-feature
   ```

3. **Commit suas alterações:**

   ```bash
   git commit -m 'Minha nova feature'
   ```

4. **Envie para o repositório remoto:**

   ```bash
   git push origin minha-feature
   ```

5. **Abra um Pull Request**

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Se você encontrar algum problema ou tiver sugestões de melhorias, por favor, abra uma issue ou contribua com um pull request.