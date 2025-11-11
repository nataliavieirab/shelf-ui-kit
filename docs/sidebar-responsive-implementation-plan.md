# Plano de Implementação de Responsividade - Sidebar em Fases

## Visão Geral

Este plano define a implementação de responsividade no componente **Sidebar** utilizando uma abordagem incremental e organizada em fases. O objetivo é criar um sistema de responsividade generalizável que possa ser aplicado a outros componentes do projeto.

## Breakpoints MUI Utilizados

Seguindo o padrão estabelecido no projeto:
- **xs**: 0px - 599px (mobile)
- **sm**: 600px - 899px (tablet pequeno)
- **md**: 900px - 1199px (tablet grande)
- **lg**: 1200px - 1535px (desktop)
- **xl**: 1536px+ (desktop grande)

## Estrutura Atual do Sidebar

### Arquivos Envolvidos
```
src/presentation/components/Sidebar/
├── sidebar.tsx (150 linhas)
├── sidebar.styles.tsx (134 linhas)
├── sidebar.types.tsx (40 linhas)
└── use-sidebar.tsx (105 linhas)
```

### Funcionalidades Atuais
- Sidebar expansível/colapsável
- Sistema de busca
- Navegação hierárquica (seções > módulos > itens)
- Largura fixa: 260px (expandido) / 60px (colapsado)

---

## Fases de Implementação

### **Fase 1: Sistema de Breakpoints e Configuração Base**
**Objetivo:** Estabelecer infraestrutura de responsividade

#### 1.1 Expandir Global Metrics
**Arquivo:** `src/presentation/styles/global-metrics.ts`

```typescript
// Adicionar ao globalMetrics
sidebar: {
  sections: {
    // ... configurações existentes
  },
  responsive: {
    breakpoints: {
      mobile: {
        drawerWidth: 0, // Overlay completo
        collapsedWidth: 0,
        behavior: 'overlay'
      },
      tablet: {
        drawerWidth: 200,
        collapsedWidth: 60,
        behavior: 'collapsible'
      },
      desktop: {
        drawerWidth: 260,
        collapsedWidth: 60,
        behavior: 'persistent'
      }
    }
  }
}
```

#### 1.2 Criar Hook de Viewport
**Arquivo:** `src/presentation/hooks/useViewport.tsx` (novo)

```typescript
export interface ViewportConfig {
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
}

export const useViewport = (): ViewportConfig;
```

#### 1.3 Expandir Tipos do Sidebar
**Arquivo:** `src/presentation/components/Sidebar/sidebar.types.tsx`

```typescript
export interface ResponsiveSidebarDimensions {
  mobile: SidebarDimensions;
  tablet: SidebarDimensions;
  desktop: SidebarDimensions;
}

export interface SidebarBehavior {
  type: 'overlay' | 'collapsible' | 'persistent';
  autoClose: boolean;
  swipeEnabled: boolean;
}
```

**Resultado:** Base sólida para responsividade reutilizável em outros componentes

---

### **Fase 2: Detecção de Viewport e Lógica de Comportamento**
**Objetivo:** Implementar lógica que detecta o tamanho da tela

#### 2.1 Integrar useViewport no useSidebar
**Arquivo:** `src/presentation/components/Sidebar/use-sidebar.tsx`

```typescript
export const useSidebar = (sections: SidebarProps["sections"]) => {
  const viewport = useViewport();
  const [openModules, setOpenModules] = useState<OpenModulesState>({});
  const [open, setOpen] = useState(() => 
    viewport.isDesktop // Auto-expand apenas no desktop
  );

  // Lógica responsiva
  const sidebarBehavior = useMemo(() => {
    if (viewport.isMobile) return { type: 'overlay', autoClose: true };
    if (viewport.isTablet) return { type: 'collapsible', autoClose: false };
    return { type: 'persistent', autoClose: false };
  }, [viewport]);

  const responsiveDimensions = useMemo(() => 
    globalMetrics.sidebar.responsive.breakpoints[
      viewport.isMobile ? 'mobile' : 
      viewport.isTablet ? 'tablet' : 'desktop'
    ], [viewport]);
};
```

#### 2.2 Implementar Auto-comportamento
- **Mobile**: Sidebar fecha automaticamente após seleção
- **Tablet**: Comportamento toggle preservado, inicia colapsado
- **Desktop**: Comportamento atual mantido

**Resultado:** Sidebar que responde automaticamente às mudanças de viewport

---

### **Fase 3: Comportamentos Específicos por Dispositivo**
**Objetivo:** Definir como sidebar se comporta em cada breakpoint

#### 3.1 Mobile (xs - sm): Overlay Modal
```typescript
// Comportamento mobile
- variant="temporary" // MUI Drawer como modal
- anchor="left"
- open={open && viewport.isMobile}
- onClose={() => setOpen(false)}
- ModalProps={{ keepMounted: true }} // Performance
```

#### 3.2 Tablet (sm - md): Sidebar Colapsível
```typescript
// Comportamento tablet
- variant="permanent"
- width: responsiveDimensions.drawerWidth
- defaultState: collapsed
- swipeEnabled: true
```

#### 3.3 Desktop (lg+): Sidebar Persistente
```typescript
// Comportamento desktop
- variant="permanent"
- width: 260px (atual)
- defaultState: expanded
- behavior: current
```

**Resultado:** Experiência otimizada para cada tipo de dispositivo

---

### **Fase 4: Estilos Responsivos**
**Objetivo:** Adaptar visual para diferentes telas

#### 4.1 Refatorar sidebar.styles.tsx
**Arquivo:** `src/presentation/components/Sidebar/sidebar.styles.tsx`

```typescript
export const drawerStyles = (
  theme: Theme, 
  open: boolean, 
  viewport: ViewportConfig
): SxProps<Theme> => ({
  // Mobile: Overlay
  ...(viewport.isMobile && {
    '& .MuiDrawer-paper': {
      width: '80vw',
      maxWidth: '300px',
      backgroundColor: globalMetrics.colors.darkMainColor,
    }
  }),
  
  // Tablet: Responsivo
  [theme.breakpoints.between('sm', 'lg')]: {
    width: open ? 200 : 60,
    '& .MuiDrawer-paper': {
      width: open ? 200 : 60,
      transition: 'width 0.3s ease',
    }
  },
  
  // Desktop: Atual
  [theme.breakpoints.up('lg')]: {
    width: open ? 260 : 60,
    '& .MuiDrawer-paper': {
      width: open ? 260 : 60,
    }
  }
});
```

#### 4.2 Componentes Internos Responsivos
```typescript
// Tamanhos de fonte adaptativos
export const moduleTextStyles = (theme: Theme): SxProps<Theme> => ({
  fontSize: "14px",
  [theme.breakpoints.down('md')]: {
    fontSize: "13px",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "12px",
  },
});

// Espaçamentos adaptativos
export const moduleButtonStyles = (theme: Theme): SxProps<Theme> => ({
  paddingY: "16px",
  [theme.breakpoints.down('md')]: {
    paddingY: "12px",
  },
  [theme.breakpoints.down('sm')]: {
    paddingY: "10px",
  },
});
```

**Resultado:** Visual consistente e adequado em todas as telas

---

### **Fase 5: Melhorias de UX Mobile**
**Objetivo:** Otimizar experiência em dispositivos móveis

#### 5.1 Gestos Touch
**Arquivo:** `src/presentation/components/Sidebar/use-sidebar.tsx`

```typescript
// Implementar swipe para abrir/fechar
const useSwipeGesture = () => {
  useEffect(() => {
    if (!viewport.isMobile) return;
    
    const handleSwipe = (direction: 'left' | 'right') => {
      if (direction === 'right' && !open) setOpen(true);
      if (direction === 'left' && open) setOpen(false);
    };
    
    // Implementar listeners de touch
  }, [viewport.isMobile, open]);
};
```

#### 5.2 Tap Outside para Fechar
```typescript
// Fechar ao clicar fora (mobile)
const handleBackdropClick = () => {
  if (viewport.isMobile) setOpen(false);
};
```

#### 5.3 Animações Otimizadas
```typescript
// Transições suaves específicas para mobile
const mobileTransitions = {
  enter: theme.transitions.create('transform', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  exit: theme.transitions.create('transform', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
};
```

**Resultado:** Experiência mobile polida e intuitiva

---

### **Fase 6: Testes e Refinamentos**
**Objetivo:** Garantir qualidade e performance

#### 6.1 Testes Responsivos
```typescript
// Testes por breakpoint
describe('Sidebar Responsiveness', () => {
  test('Mobile: Should render as overlay', () => {});
  test('Tablet: Should be collapsible', () => {});
  test('Desktop: Should maintain current behavior', () => {});
});
```

#### 6.2 Performance
- Lazy loading de componentes por breakpoint
- Memoização de estilos responsivos
- Otimização de re-renders

#### 6.3 Acessibilidade
- Navegação por teclado em todos os breakpoints
- Screen readers
- Foco adequado em diferentes dispositivos

**Resultado:** Componente totalmente responsivo e testado

---

## Implementação Técnica Detalhada

### Estrutura de Arquivos Após Implementação

```
src/presentation/components/Sidebar/
├── sidebar.tsx (componente principal)
├── sidebar.styles.tsx (estilos responsivos)
├── sidebar.types.tsx (tipos expandidos)
├── use-sidebar.tsx (lógica responsiva)
└── components/ (novo)
    ├── MobileSidebar.tsx
    ├── TabletSidebar.tsx
    └── DesktopSidebar.tsx
```

### Padrão de Imports

```typescript
import { Theme, useTheme } from '@mui/material/styles';
import { useViewport } from '../../../hooks/useViewport';
import globalMetrics from '../../styles/global-metrics';
```

### Estrutura do Hook Responsivo

```typescript
export const useSidebar = (sections: SidebarProps["sections"]) => {
  const theme = useTheme();
  const viewport = useViewport();
  
  // Estados responsivos
  const [open, setOpen] = useState(() => viewport.isDesktop);
  const [openModules, setOpenModules] = useState<OpenModulesState>({});
  
  // Configuração responsiva
  const responsiveConfig = useMemo(() => ({
    dimensions: globalMetrics.sidebar.responsive.breakpoints[
      viewport.isMobile ? 'mobile' : 
      viewport.isTablet ? 'tablet' : 'desktop'
    ],
    behavior: {
      variant: viewport.isMobile ? 'temporary' : 'permanent',
      autoClose: viewport.isMobile,
      swipeEnabled: viewport.isMobile || viewport.isTablet,
    }
  }), [viewport]);
  
  return {
    // Estados
    open,
    openModules,
    
    // Configuração responsiva
    viewport,
    responsiveConfig,
    
    // Ações
    toggleDrawer,
    handleModuleClick,
    handleSearchChange,
  };
};
```

---

## Benefícios da Abordagem Faseada

### 1. **Reutilização Máxima**
- Sistema de breakpoints criado na Fase 1 pode ser usado em outros componentes
- Hook useViewport reutilizável em todo o projeto
- Padrões de estilos responsivos aplicáveis universalmente

### 2. **Escalabilidade**
- Cada fase adiciona funcionalidade sem quebrar a anterior
- Estrutura modular permite extensões futuras
- Fácil manutenção e debugging

### 3. **Testabilidade**
- Permite testar cada comportamento isoladamente
- Validação incremental de funcionalidades
- Rollback fácil se necessário

### 4. **Experiência do Usuário**
- Adaptação perfeita a diferentes dispositivos
- Comportamentos específicos por plataforma
- Performance otimizada

### 5. **Manutenibilidade**
- Separação clara de responsabilidades
- Código limpo e bem documentado
- Estrutura previsível e consistente

---

## Critérios de Aceitação

### Por Fase:
- [ ] Funcionalidade implementada sem quebrar código existente
- [ ] Testes passando para todos os breakpoints
- [ ] Performance mantida ou melhorada
- [ ] Código segue padrões do projeto
- [ ] Documentação atualizada

### Validação Final:
- [ ] **Mobile (xs-sm)**: Sidebar como overlay, swipe gestures funcionando
- [ ] **Tablet (sm-md)**: Sidebar colapsível, comportamento adaptativo
- [ ] **Desktop (lg+)**: Comportamento atual preservado
- [ ] **Performance**: Sem degradação de performance
- [ ] **Acessibilidade**: Navegação acessível em todos os dispositivos

---

## Próximos Passos

### Ordem de Implementação Recomendada:

1. **Fase 1** - Sistema de Breakpoints (Base)
   - Expandir global-metrics
   - Criar useViewport hook
   - Atualizar tipos

2. **Fase 2** - Lógica de Comportamento
   - Integrar viewport detection
   - Implementar auto-comportamentos
   - Testes básicos

3. **Fase 3** - Comportamentos por Dispositivo
   - Mobile overlay
   - Tablet collapsible
   - Desktop preservado

4. **Fase 4** - Estilos Responsivos
   - Refatorar sidebar.styles.tsx
   - Implementar breakpoints CSS
   - Componentes internos responsivos

5. **Fase 5** - UX Mobile
   - Gestos touch
   - Animações otimizadas
   - Acessibilidade

6. **Fase 6** - Testes e Refinamentos
   - Testes automatizados
   - Performance optimization
   - Documentação final

---

## Status de Implementação

### 🔄 Status Atual: **Planejamento Concluído**

- [x] **Análise** do componente atual realizada
- [x] **Plano detalhado** criado e documentado
- [x] **Estrutura de fases** definida
- [x] **Critérios de aceitação** estabelecidos
- [ ] **Implementação** das fases
- [ ] **Testes** e validação
- [ ] **Documentação** final

### Próxima Ação:
**Aguardando aprovação para iniciar Fase 1: Sistema de Breakpoints e Configuração Base**

---

## Considerações Finais

Este plano de implementação foi projetado para ser:

- **Incremental**: Cada fase adiciona valor sem quebrar funcionalidades
- **Reutilizável**: Padrões aplicáveis a outros componentes
- **Escalável**: Estrutura que suporta futuras expansões
- **Testável**: Permite validação contínua de qualidade
- **Manutenível**: Código limpo e bem documentado

A abordagem faseada garante que o projeto mantenha estabilidade durante todo o processo de implementação, permitindo rollbacks seguros e validação incremental de funcionalidades.


