import { Heart, Target, Zap } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="gigi-section bg-muted border-b border-border">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold font-bold text-foreground mb-2">
            Quem Somos
          </h1>
          <p className="text-muted-foreground">
            Conheça a história por trás da Gigi's Wear
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="gigi-section">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-bold text-foreground mb-6">
              Nossa História
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A Gigi's Wear nasceu em 2020 com uma visão simples mas poderosa: criar roupas femininas de academia que combinassem qualidade, estilo e conforto. O que começou como um pequeno projeto se transformou em uma marca amada por mulheres ativas em todo o Brasil.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Fundada por um grupo de mulheres apaixonadas por fitness e moda, a Gigi's Wear acredita que as mulheres merecem roupas que as façam se sentir confiantes, bonitas e empoderadas durante seus treinos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada peça é cuidadosamente selecionada com materiais premium e design moderno. Não apenas vendemos roupas, vendemos confiança e estilo de vida.
            </p>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="gigi-card p-8 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="font-bold font-bold text-lg text-foreground mb-3">
                Missão
              </h3>
              <p className="text-muted-foreground">
                Empoderar mulheres ativas através de roupas de qualidade que combinam estilo, conforto e funcionalidade.
              </p>
            </div>

            <div className="gigi-card p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="font-bold font-bold text-lg text-foreground mb-3">
                Valores
              </h3>
              <p className="text-muted-foreground">
                Qualidade, autenticidade, inclusão e sustentabilidade. Acreditamos em fazer a diferença na vida das nossas clientes.
              </p>
            </div>

            <div className="gigi-card p-8 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="font-bold font-bold text-lg text-foreground mb-3">
                Visão
              </h3>
              <p className="text-muted-foreground">
                Ser a marca de referência em roupas femininas de academia, reconhecida pela qualidade e inovação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="gigi-section bg-muted">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-bold text-foreground mb-4">
              Nosso Time
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Gisele Silva',
                role: 'Fundadora & CEO',
                description: 'Apaixonada por fitness e moda desde jovem.',
              },
              {
                name: 'Marina Costa',
                role: 'Diretora de Design',
                description: 'Especialista em moda esportiva e tendências.',
              },
              {
                name: 'Carolina Oliveira',
                role: 'Gerente de Operações',
                description: 'Dedicada a garantir qualidade em cada detalhe.',
              },
            ].map((member) => (
              <div key={member.name} className="gigi-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold font-bold text-secondary-foreground">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-bold font-bold text-lg text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="gigi-section">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold font-bold text-foreground mb-12 text-center">
            Por Que Escolher Gigi's Wear?
          </h2>

          <div className="space-y-6">
            {[
              {
                title: 'Qualidade Premium',
                description:
                  'Todos os nossos produtos são feitos com materiais de alta qualidade, selecionados cuidadosamente para garantir durabilidade e conforto.',
              },
              {
                title: 'Design Moderno',
                description:
                  'Nossas coleções acompanham as tendências mais recentes, com designs exclusivos que te fazem se destacar.',
              },
              {
                title: 'Conforto Total',
                description:
                  'Desenvolvemos nossas peças pensando no conforto durante os treinos, com tecnologias que mantêm você fresco e seco.',
              },
              {
                title: 'Preços Acessíveis',
                description:
                  'Acreditamos que qualidade não precisa ser cara. Oferecemos produtos premium com preços justos.',
              },
              {
                title: 'Atendimento Excepcional',
                description:
                  'Nosso time está sempre pronto para ajudar com dúvidas, trocas e devoluções de forma rápida e eficiente.',
              },
              {
                title: 'Comunidade Ativa',
                description:
                  'Faça parte de uma comunidade de mulheres ativas que compartilham dicas, experiências e se inspiram mutuamente.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary-foreground font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
