# Shelf UI Kit

Biblioteca de componentes UI reutilizáveis para React, publicada como **GitHub Package**.  
Construída com **React**, **TypeScript** e **Material UI (MUI)**, com sistema de temas customizável por marca.

**Pacote:** [`@nataliavieirab/shelf-ui-kit`](https://github.com/users/nataliavieirab/packages/npm/package/shelf-ui-kit) · **Versão atual:** `0.3.0`

---

## Sobre o projeto

O **Shelf UI Kit** nasceu como uma biblioteca interna de interface para acelerar o desenvolvimento de aplicações React com visual consistente. Em vez de recriar botões, formulários, tabelas e layouts em cada projeto, os componentes ficam centralizados aqui e são consumidos via import.

A biblioteca inclui:

- Componentes de formulário, layout e navegação prontos para uso
- Sistema de design tokens (cores, tipografia, métricas de layout)
- `CustomThemeProvider` para aplicar tema padrão ou cores de marca
- App de demonstração (`npm run dev`) para visualizar os componentes em tempo real
- Build como biblioteca (ESM + CJS) com tipagens TypeScript geradas automaticamente

---

## Stack tecnológica

| Camada | Tecnologia |
| --- | --- |
| UI | React 19, Material UI 7, Emotion |
| Linguagem | TypeScript |
| Build / bundler | Vite 7 (`vite-plugin-dts`) |
| Data & datas | MUI X Data Grid, MUI X Date Pickers, Day.js |
| Roteamento (peer) | React Router DOM |
| Distribuição | GitHub Packages (`npm.pkg.github.com`) |

**Peer dependencies** (instaladas no projeto consumidor):

- `react`, `react-dom`
- `@mui/material`, `@mui/icons-material`, `@mui/x-data-grid`, `@mui/x-date-pickers`
- `@emotion/react`, `@emotion/styled`
- `dayjs`, `react-router-dom`

---

## Instalação

### 1. Autenticar no GitHub Packages

Crie (ou atualize) um arquivo `.npmrc` na raiz do projeto consumidor:

```ini
@nataliavieirab:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=SEU_GITHUB_TOKEN
```

O token precisa da permissão `read:packages` (e acesso ao repositório, se for privado).

### 2. Instalar o pacote e as peers

```bash
npm install @nataliavieirab/shelf-ui-kit
# ou
pnpm add @nataliavieirab/shelf-ui-kit
```

Garanta que as peer dependencies listadas acima estejam instaladas no projeto.

---

## Uso rápido

### Provider de tema

Envolva a aplicação com o `CustomThemeProvider`. Sem `brandTheme`, usa o tema base; com `brandTheme`, sobrescreve cores da marca.

```tsx
import { CustomThemeProvider } from "@nataliavieirab/shelf-ui-kit";

function App() {
  return (
    <CustomThemeProvider
      brandTheme={{
        colors: {
          primary: { main: "#D09822", light: "#EEDB81", dark: "#B8860B" },
          secondary: { main: "#D09822", light: "#EEDB81", dark: "#B8860B" },
        },
      }}
    >
      {/* sua aplicação */}
    </CustomThemeProvider>
  );
}
```

Também é possível criar o tema manualmente com `createCustomTheme` e `globalColors`.

### Importar componentes

```tsx
import {
  CustomContainedButton,
  InputTextfield,
  Select,
  CustomDataTable,
  Sidebar,
  PageTitleContainer,
} from "@nataliavieirab/shelf-ui-kit";

export function ProductsPage() {
  return (
    <>
      <PageTitleContainer title="Produtos" />
      <CustomContainedButton
        placeholder="Adicionar"
        type="add"
        hasIcon
        onClick={() => {}}
      />
      <InputTextfield label="Nome" />
    </>
  );
}
```

---

## Componentes exportados

### Formulários e inputs

| Componente | Descrição |
| --- | --- |
| `InputTextfield` | Campo de texto padrão |
| `PasswordTextfield` | Campo de senha com toggle de visibilidade |
| `SearchTextfield` | Campo de busca |
| `Select` | Dropdown (com opção de busca) |
| `Datepicker` | Seletor de data (Day.js + MUI X) |
| `CheckBoxWithLabel` | Checkbox com label |
| `CustomSwitch` | Switch customizado |

### Ações e feedback

| Componente | Descrição |
| --- | --- |
| `CustomContainedButton` | Botão preenchido (`add` \| `import` \| `export` \| `send`) |
| `CustomOutlinedButton` | Botão outlined com os mesmos tipos |
| `ErrorBox` | Exibição de erros / mensagens |
| `NewImage` | Upload / seleção de imagem |

### Layout e navegação

| Componente | Descrição |
| --- | --- |
| `Sidebar` | Sidebar com seções, módulos, busca e modos de colapso |
| `CustomHeader` | Header da aplicação |
| `PageTitleContainer` | Container de título de página |
| `TabsContainer` | Abas / tabs |

### Dados e ícones

| Componente | Descrição |
| --- | --- |
| `CustomDataTable` | Tabela baseada em MUI X Data Grid |
| Ícones gradientes | Factory e ícones com gradiente via `gradient-icons` |

### Tema e estilos

| Export | Descrição |
| --- | --- |
| `CustomThemeProvider` | Provider MUI + `CssBaseline` |
| `createCustomTheme` | Cria tema a partir de tokens / cores de marca |
| `globalColors` | Paleta base tipada (`GlobalColors`) |
| Estilos dinâmicos | Helpers de layout/scroll (`main-content-container-style`, etc.) |
| `SidebarProvider` / contexto | Estado compartilhado da sidebar |

---

## Estrutura do repositório

```text
src/
├── index.ts                 # Entrada pública da biblioteca (exports)
├── themeProvider/           # CustomThemeProvider + createCustomTheme
├── themes/
│   ├── baseTokens/          # Cores, tipografia, métricas, overrides MUI
│   └── brands/              # Temas de marca (ex.: demoBrand)
├── presentation/
│   ├── components/          # Componentes da biblioteca
│   ├── componentExamples/   # Exemplos usados no playground
│   ├── demoLayout/          # Layout demo (header/sidebar)
│   ├── pages/               # Páginas do playground
│   └── styles/              # Estilos dinâmicos exportados
├── types/                   # Extensões de tipos do MUI
└── utils/                   # Utilitários (ex.: px → rem)
```

O build gera `dist/` com:

- `shelf-ui-kit.es.js` (ESM)
- `shelf-ui-kit.cjs.js` (CommonJS)
- `index.d.ts` (tipagens)

---

## Desenvolvimento local

```bash
# Instalar dependências
npm install
# ou
pnpm install

# Playground / demo (porta 3000)
npm run dev

# Build da biblioteca
npm run build

# Preview do build
npm run preview
```

Antes de publicar, o script `prepublishOnly` roda o build automaticamente.

### Publicar uma nova versão

1. Atualize a versão em `package.json`
2. Faça login no GitHub Packages (`npm login --registry=https://npm.pkg.github.com`)
3. Publique:

```bash
npm publish
```

O pacote é publicado no GitHub Packages sob o escopo `@nataliavieirab` como `@nataliavieirab/shelf-ui-kit`.

---

## Sistema de temas

A identidade visual é controlada por **design tokens**:

- **Cores** (`globalColors`) — primary, secondary, status, texto, backgrounds
- **Tipografia** — família e variantes tipográficas
- **Layout metrics** — larguras/alturas de inputs, bordas, radius
- **Component overrides** — customizações globais dos componentes MUI

Marcas podem sobrescrever apenas as cores necessárias (veja `src/themes/brands/demoBrand/`). Gradientes customizados (`customGradients`) e backgrounds (`customBackground`) são injetados no tema MUI.

---

## Versionamento

O projeto segue [Semantic Versioning](https://semver.org/).  
Histórico de mudanças: [CHANGELOG.md](./CHANGELOG.md).

---

## Autora

Desenvolvido por [Natalia Vieira](https://github.com/nataliavieirab).
