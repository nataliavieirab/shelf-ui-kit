# UI-KomponentProjekt

Biblioteca de componentes UI reutilizáveis desenvolvida com React, TypeScript e Styled Components.

## 📋 Descrição

O UI-KomponentProjekt é uma biblioteca moderna de componentes de interface de usuário, desenvolvida com foco em reutilização, acessibilidade e performance. O projeto oferece uma coleção abrangente de componentes customizáveis que podem ser facilmente integrados em qualquer projeto React, independente do domínio de aplicação.

## 🚀 Funcionalidades

### Biblioteca de Componentes
- **TextField**: Campo de texto básico com validação e customização
- **PasswordTextField**: Campo de senha com toggle de visibilidade
- **SearchTextField**: Campo de busca com funcionalidade de filtro
- **Dropdown**: Menu dropdown com suporte a busca e seleção múltipla
- **DatePicker**: Seletor de data com interface intuitiva e formatação
- **Switch**: Toggle switch customizado com estados visuais
- **Header**: Cabeçalho reutilizável com navegação flexível
- **Sidebar**: Menu lateral responsivo e customizável

### Sistema de Design
- **Tema Flexível**: Suporte a temas claro e escuro
- **Design Tokens**: Cores, tipografia e espaçamentos padronizados
- **Responsividade**: Componentes adaptáveis a diferentes tamanhos de tela
- **Acessibilidade**: Componentes desenvolvidos seguindo padrões WCAG

### Utilitários
- **Validação**: Sistema de validação de formulários integrado
- **Mensagens**: Sistema de feedback visual customizável
- **Ícones**: Biblioteca de ícones gradientes e customizáveis
- **Tipos TypeScript**: Definições completas de tipos para todos os componentes

## 🛠️ Tecnologias

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Linguagem tipada para JavaScript
- **Styled Components** - Estilização CSS-in-JS
- **Create React App** - Configuração e build
- **Storybook** - Documentação e desenvolvimento de componentes (planejado)
- **Jest & Testing Library** - Testes unitários e de integração

## 📦 Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd ui-komponentenprojekt

# Instale as dependências
npm install
```

## 🚀 Scripts Disponíveis

### `npm start`

Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

A página será recarregada automaticamente quando você fizer edições.\
Você também verá erros de lint no console.

### `npm test`

Executa o test runner no modo interativo.\
Veja a seção sobre [executando testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Constrói a aplicação para produção na pasta `build`.\
Ele empacota corretamente o React em modo de produção e otimiza a build para melhor performance.

A build é minificada e os nomes dos arquivos incluem hashes.\
Sua aplicação está pronta para ser deployada!

Veja a seção sobre [deploy](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Nota: esta é uma operação irreversível. Uma vez que você `eject`, não pode voltar!**

Se você não estiver satisfeito com as ferramentas de build e escolhas de configuração, você pode `eject` a qualquer momento. Este comando removerá a dependência única de build do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente para o seu projeto para que você tenha controle total sobre eles. Todos os comandos exceto `eject` ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto você está por conta própria.

Você não precisa usar `eject`. O conjunto de recursos curados é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar este recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para isso.

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Imagens e recursos estáticos
├── presentation/        # Biblioteca de componentes
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Textfields/  # Campos de texto e entrada
│   │   ├── Dropdown/    # Menus dropdown e seleção
│   │   ├── Datepicker/  # Seletores de data e tempo
│   │   ├── Switches/    # Toggles e controles
│   │   ├── Header/      # Cabeçalhos e navegação
│   │   └── Icons/       # Ícones e elementos visuais
│   ├── componentExamples/ # Exemplos e demonstrações
│   └── styles/          # Estilos globais e tokens
├── theme/               # Sistema de design e temas
└── types/               # Definições de tipos TypeScript
```

## 📝 Documentação

- [CHANGELOG.md](CHANGELOG.md) - Histórico de mudanças e versões
- [Componentes](src/presentation/components/) - Biblioteca completa de componentes
- [Exemplos](src/presentation/componentExamples/) - Exemplos de uso e demonstrações
- [Sistema de Design](src/theme/) - Tokens de design e configuração de temas

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir com a biblioteca de componentes:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/novo-componente`)
3. Implemente o componente seguindo os padrões estabelecidos
4. Adicione exemplos e documentação
5. Commit suas mudanças (`git commit -m 'feat: adicionar componente X'`)
6. Push para a branch (`git push origin feature/novo-componente`)
7. Abra um Pull Request com descrição detalhada

### Diretrizes para Contribuição
- Siga os padrões de design estabelecidos
- Mantenha a acessibilidade em mente
- Adicione testes para novos componentes
- Atualize a documentação e exemplos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte, envie um email para [email@exemplo.com] ou abra uma issue no repositório.
