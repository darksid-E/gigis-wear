import { Link } from 'wouter';
import { ArrowRight, Heart } from 'lucide-react';
import { products, categories } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-screen md:h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-banner.jpg)',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold font-bold text-foreground mb-6 leading-tight">
            Eleve Seu <span className="text-secondary">Fitness</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Descubra nossa coleção exclusiva de roupas femininas de academia com design moderno, elegante e confortável.
          </p>
          <Link href="/catalogo">
            <a className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-bold font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Explorar Catálogo
              <ArrowRight size={20} />
            </a>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="gigi-section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-bold text-foreground mb-4">
              Destaques da Coleção
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/catalogo">
              <a className="inline-flex items-center gap-2 px-6 py-3 border-2 border-secondary text-secondary rounded-lg font-bold font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                Ver Todos os Produtos
                <ArrowRight size={18} />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="gigi-section bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-bold text-foreground mb-4">
              Categorias
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/catalogo?categoria=${category.id}`}>
                <a className="group gigi-card p-8 text-center hover:bg-secondary/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold font-bold text-secondary-foreground">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-semibold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="gigi-section bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/about-section.jpg"
                alt="Estúdio Gigi's Wear"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-bold text-foreground mb-6">
                Sobre a <span className="text-secondary">Gigi's Wear</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                A Gigi's Wear nasceu da paixão por roupas femininas de qualidade que combinam estilo, conforto e funcionalidade. Nossa missão é empoderar mulheres ativas oferecendo peças que as fazem se sentir confiantes e bonitas.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Cada peça é cuidadosamente selecionada com materiais premium e design moderno. Acreditamos que moda esportiva não precisa abrir mão da elegância.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary-foreground font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold font-semibold text-foreground mb-1">Qualidade Premium</h4>
                    <p className="text-muted-foreground">Materiais de alta qualidade selecionados com cuidado</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary-foreground font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold font-semibold text-foreground mb-1">Design Moderno</h4>
                    <p className="text-muted-foreground">Estilos contemporâneos que acompanham as tendências</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-secondary-foreground font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold font-semibold text-foreground mb-1">Conforto Total</h4>
                    <p className="text-muted-foreground">Tecnologias que garantem conforto durante seus treinos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="gigi-section bg-gradient-to-r from-secondary/20 to-accent/20">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-bold text-foreground mb-4">
            Fique por Dentro das Novidades
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Inscreva-se na nossa newsletter e receba ofertas exclusivas, dicas de moda e lançamentos em primeira mão.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Seu melhor email"
              className="flex-1 px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
            <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-bold font-bold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Inscrever
            </button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Prometemos não enviar spam. Você pode cancelar a inscrição a qualquer momento.
          </p>
        </div>
      </section>
    </div>
  );
}
