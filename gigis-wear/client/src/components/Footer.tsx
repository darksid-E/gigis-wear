import { Facebook, Instagram, Twitter, CreditCard, DollarSign } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-foreground mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold font-bold text-secondary-foreground">G</span>
              </div>
              <span className="font-bold font-bold text-lg">Gigi's Wear</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Roupas femininas de academia com estilo e qualidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/catalogo" className="text-muted-foreground hover:text-secondary transition-colors">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="/quem-somos" className="text-muted-foreground hover:text-secondary transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="/contato" className="text-muted-foreground hover:text-secondary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: contato@gigiswear.com</li>
              <li>Telefone: (11) 98765-4321</li>
              <li>Endereço: São Paulo, SP</li>
              <li>Horário: Seg-Sex 9h-18h</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Receba nossas novidades e promoções exclusivas.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Social Media */}
            <div>
              <h4 className="font-bold font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground hover:opacity-80 transition-opacity"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground hover:opacity-80 transition-opacity"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground hover:opacity-80 transition-opacity"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="font-bold font-semibold mb-4">Formas de Pagamento</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-white border border-border rounded flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">VISA</span>
                </div>
                <div className="w-10 h-10 bg-white border border-border rounded flex items-center justify-center">
                  <CreditCard size={18} className="text-gray-600" />
                </div>
                <div className="w-10 h-10 bg-white border border-border rounded flex items-center justify-center">
                  <DollarSign size={18} className="text-green-600" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <h4 className="font-bold font-semibold mb-4">Informações</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Termos de Serviço
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Trocas e Devoluções
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Gigi's Wear. Todos os direitos reservados. | Desenvolvido com ❤️ para mulheres ativas
          </p>
        </div>
      </div>
    </footer>
  );
}
