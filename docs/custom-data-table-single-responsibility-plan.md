# Plano de Implementação - Single Responsibility para Componentes

## Objetivo
Aplicar o princípio de Single Responsibility do SOLID a componentes únicos do projeto, seguindo o padrão estabelecido pelo componente Datepicker. Este plano pode ser aplicado a qualquer componente que misture responsabilidades em um único arquivo.

## Análise do Componente Atual

### Responsabilidades Típicas Identificadas em Componentes Únicos:
1. **JSX/UI** - Renderização do componente React
2. **Estilização** - Todos os estilos e configurações visuais (sx props, styled-components, CSS)
3. **Lógica de Negócio** - Hooks, transformações de dados, cálculos, validações
4. **Tipos** - Definições de interfaces, tipos TypeScript
5. **Utilitários** - Funções auxiliares e helpers

### Sinais de Violação do Single Responsibility:
- Arquivo com mais de 100-150 linhas
- Mistura de responsabilidades (JSX + estilos + lógica)
- Estilos inline ou sx props extensos
- Lógica de negócio no componente principal
- Funções utilitárias no mesmo arquivo
- Múltiplas responsabilidades em um único componente

## Estrutura Proposta

Seguindo o padrão do componente Datepicker:

```
[NomeDoComponente]/
├── [nome-do-componente].tsx (JSX principal)
├── [nome-do-componente].styles.tsx (estilos)
├── use-[nome-do-componente].tsx (hooks e lógica)
└── [nome-do-componente].types.tsx (tipos)
```

### Convenções de Nomenclatura:
- **Pasta**: PascalCase (ex: `CustomDataTable/`)
- **Arquivo JSX**: kebab-case (ex: `custom-data-table.tsx`)
- **Arquivo de estilos**: kebab-case + `.styles.tsx`
- **Arquivo de hook**: `use-` + kebab-case + `.tsx`
- **Arquivo de tipos**: kebab-case + `.types.tsx`

## Fases de Implementação

### Fase 1: Criar Pasta e Arquivo de Tipos
- [ ] Criar pasta `[NomeDoComponente]/`
- [ ] Criar `[nome-do-componente].types.tsx` com todas as interfaces
- [ ] Mover props e tipos relacionados do componente original
- [ ] Organizar imports e exports de tipos

### Fase 2: Extrair Estilos
- [ ] Criar `[nome-do-componente].styles.tsx`
- [ ] Extrair todos os estilos (sx props, styled-components, CSS) do componente principal
- [ ] Criar funções utilitárias de estilo se necessário
- [ ] Organizar estilos por responsabilidade (container, elementos internos, estados)
- [ ] Manter consistência com design system do projeto

### Fase 3: Extrair Lógica para Hook
- [ ] Criar `use-[nome-do-componente].tsx`
- [ ] Extrair lógica de negócio (transformações, cálculos, validações)
- [ ] Criar hooks customizados para funcionalidades específicas
- [ ] Separar lógica de renderização condicional
- [ ] Manter estado e efeitos relacionados ao componente

### Fase 4: Refatorar Componente Principal
- [ ] Simplificar `[nome-do-componente].tsx` para focar apenas no JSX
- [ ] Importar estilos, tipos e hook
- [ ] Remover lógica inline e estilos
- [ ] Manter apenas a estrutura de renderização
- [ ] Garantir que props são passadas corretamente

### Fase 5: Limpeza e Atualização
- [ ] Remover arquivo original do componente
- [ ] Atualizar imports em outros arquivos que usam o componente
- [ ] Verificar funcionamento e testes
- [ ] Validar integração com outros componentes
- [ ] Documentar mudanças se necessário

## Benefícios Esperados

### Manutenibilidade
- Código mais organizado e fácil de manter
- Separação clara de responsabilidades
- Facilita testes unitários

### Reutilização
- Estilos podem ser reutilizados
- Lógica pode ser testada independentemente
- Tipos podem ser compartilhados

### Escalabilidade
- Facilita adição de novas funcionalidades
- Reduz acoplamento entre responsabilidades
- Melhora legibilidade do código

## Padrão de Referência

Este plano segue o padrão estabelecido pelos componentes já refatorados:

### Exemplo 1: Datepicker
```
Datepicker/
├── basic-datepicker.tsx (JSX)
├── datepicker.styles.tsx (estilos)
└── use-datepicker.tsx (hooks)
```

### Exemplo 2: CustomDataTable
```
CustomDataTable/
├── custom-data-table.tsx (JSX)
├── custom-data-table.styles.tsx (estilos)
├── use-custom-data-table.tsx (hooks)
└── custom-data-table.types.tsx (tipos)
```

## Checklist de Aplicação

Antes de aplicar este plano a um componente:

- [ ] O componente tem mais de 100 linhas de código
- [ ] Mistura responsabilidades (JSX + estilos + lógica)
- [ ] Tem estilos inline ou sx props extensos
- [ ] Contém lógica de negócio no componente principal
- [ ] Tem funções utilitárias no mesmo arquivo
- [ ] É um componente único (não já organizado em pasta)

## Critérios de Sucesso

- [ ] Componente mantém funcionalidade original
- [ ] Código está organizado em arquivos com responsabilidades únicas
- [ ] Imports e exports estão corretos
- [ ] Não há regressões visuais ou funcionais
- [ ] Código segue padrões estabelecidos no projeto

## Exemplos de Aplicação

### Componentes Candidatos para Refatoração:
- Componentes com mais de 100 linhas
- Componentes que misturam JSX, estilos e lógica
- Componentes com estilos inline extensos
- Componentes com lógica de negócio complexa

### Próximos Passos:

1. **Identificar Componentes**: Listar todos os componentes únicos que violam o Single Responsibility
2. **Priorizar**: Começar pelos componentes mais complexos ou mais utilizados
3. **Aplicar Plano**: Seguir as 5 fases para cada componente
4. **Validar**: Testar cada refatoração antes de prosseguir
5. **Documentar**: Manter registro das mudanças realizadas

## Manutenção do Plano

Este plano deve ser atualizado conforme:
- Novos padrões são estabelecidos no projeto
- Novas tecnologias são adotadas
- Feedback da equipe é coletado
- Melhores práticas são identificadas

Após a implementação deste plano em múltiplos componentes, será possível criar uma arquitetura consistente e escalável em todo o projeto.
