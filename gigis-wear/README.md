# Gigi's Wear - Loja Online de Roupas Femininas

Bem-vindo à Gigi's Wear! Uma loja online moderna, responsiva e elegante para roupas femininas de academia com toque casual.

## 🎨 Características

- **Design Perolado Elegante**: Paleta de cores sofisticada com branco perolado, rosa suave e lilás
- **Catálogo Completo**: 30 produtos em 4 categorias (Superiores, Inferiores, Calçados, Cabeça)
- **Carrinho de Compras**: Funcional com localStorage para persistência de dados
- **Filtros Avançados**: Por categoria, preço e ordenação
- **Responsivo**: Mobile-first design que funciona em todos os dispositivos
- **Interface Intuitiva**: Navegação clara e fácil de usar
- **Página de Perfil**: Login simulado e histórico de pedidos fictício
- **Página de Contato**: Formulário funcional e informações de contato

## 🚀 Tecnologias Utilizadas

- **React 19**: Framework JavaScript moderno
- **TypeScript**: Tipagem estática para maior segurança
- **Tailwind CSS 4**: Estilização utilitária
- **shadcn/ui**: Componentes UI de alta qualidade
- **Wouter**: Roteamento leve e eficiente
- **Sonner**: Notificações toast elegantes
- **Lucide React**: Ícones modernos

## 📁 Estrutura do Projeto

```
gigis-wear/
├── client/
│   ├── public/
│   │   └── images/
│   │       ├── hero-banner.jpg
│   │       ├── collection-feature.jpg
│   │       ├── about-section.jpg
│   │       ├── product-placeholder.jpg
│   │       └── category-accessories.jpg
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Catalog.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   ├── Cart.tsx
│   │   │   ├── AboutUs.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── NotFound.tsx
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   └── ErrorBoundary.tsx
│   │   ├── contexts/
│   │   │   ├── CartContext.tsx
│   │   │   └── ThemeContext.tsx
│   │   ├── lib/
│   │   │   └── products.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── package.json
└── README.md
```

## 🛠️ Desenvolvimento Local

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# O site estará disponível em http://localhost:3000
```

### Comandos Disponíveis

```bash
pnpm dev      # Iniciar servidor de desenvolvimento
pnpm build    # Compilar para produção
pnpm preview  # Visualizar build de produção
pnpm check    # Verificar tipos TypeScript
pnpm format   # Formatar código com Prettier
```

## 📦 Produtos

O catálogo inclui 30 produtos fictícios em 4 categorias:

### Superiores (10 produtos)
- Top Esportivo Pérola - R$ 89,90
- Cropped de Compressão - R$ 79,90
- Camiseta Dry Fit - R$ 69,90
- E mais...

### Inferiores (8 produtos)
- Legging Alta Compressão - R$ 139,90
- Shorts de Academia Pearl - R$ 89,90
- E mais...

### Calçados (7 produtos)
- Tênis Corrida Lite - R$ 249,90
- Sneaker Casual Gigi's - R$ 199,90
- E mais...

### Cabeça (5 produtos)
- Boné Aba Curva Pérola - R$ 59,90
- Headband Esportivo - R$ 29,90
- E mais...

## 🛒 Funcionalidades

### Carrinho de Compras
- Adicionar/remover produtos
- Atualizar quantidades
- Cálculo automático de totais
- Persistência com localStorage
- Contador de itens no ícone

### Filtros e Ordenação
- Filtrar por categoria
- Filtro de preço com slider
- Ordenação (relevância, preço, mais vendidos)
- Limpeza de filtros

### Páginas

- **Home**: Banner hero, destaques, categorias, sobre, newsletter
- **Catálogo**: Grid de produtos com filtros avançados
- **Produto**: Detalhes completos, galeria, seletor de tamanho
- **Carrinho**: Resumo de compras com checkout simulado
- **Quem Somos**: História, missão, valores, time
- **Contato**: Formulário e informações de contato
- **Perfil**: Login simulado e histórico de pedidos

## 🎨 Design

### Paleta de Cores
- **Branco Perolado**: #F8F8FF (cor principal)
- **Rosa Suave**: #FFE4E9 (destaque)
- **Lilás**: #E6E6FA (acento)
- **Cinza Claro**: #F5F5F5 (fundos secundários)
- **Preto Suave**: #333333 (texto)

### Tipografia
- **Títulos**: Montserrat (700, 600, 500)
- **Corpo**: Open Sans (400, 500, 600)

## 🚀 Deploy no Vercel

### Passo a Passo

#### 1. Preparar o Repositório GitHub

```bash
# Inicializar git (se não estiver inicializado)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Projeto Gigi's Wear - Loja Online"

# Criar repositório no GitHub e fazer push
git remote add origin https://github.com/seu-usuario/gigis-wear.git
git branch -M main
git push -u origin main
```

#### 2. Conectar ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione "Import Git Repository"
4. Procure por "gigis-wear" e selecione
5. Configure as seguintes opções:
   - **Framework**: Vite
   - **Root Directory**: ./
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`

#### 3. Deploy Automático

```bash
# Após conectar ao Vercel, qualquer push para main dispara deploy automático
git push origin main
```

#### 4. Configurar Domínio Personalizado (Opcional)

1. No painel do Vercel, vá para "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Configure os registros DNS conforme instruído

## 📝 Notas Importantes

- **Dados Fictícios**: Todos os produtos, pedidos e informações de usuário são fictícios para demonstração
- **localStorage**: O carrinho persiste durante a sessão do navegador
- **Sem Backend**: Este é um projeto estático que não requer servidor
- **Responsivo**: Testado em dispositivos móveis, tablets e desktops

## 🔒 Segurança

- Nenhum dado sensível é armazenado
- Formulários são apenas para demonstração
- Checkout é simulado (não processa pagamentos reais)

## 📧 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato através do formulário no site.

## 📄 Licença

Este projeto é fornecido como demonstração e pode ser usado livremente para fins educacionais e comerciais.

---

**Desenvolvido com ❤️ para mulheres ativas**

Versão: 1.0.0
Última atualização: Janeiro 2024
