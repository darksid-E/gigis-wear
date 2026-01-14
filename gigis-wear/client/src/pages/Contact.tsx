import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="gigi-section bg-muted border-b border-border">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold font-bold text-foreground mb-2">
            Entre em Contato
          </h1>
          <p className="text-muted-foreground">
            Estamos aqui para ajudar. Fale conosco!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="gigi-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold font-bold text-foreground mb-6">
                Envie sua Mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold font-semibold text-foreground mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold font-semibold text-foreground mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold font-semibold text-foreground mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
                    placeholder="Sua mensagem aqui..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-bold font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold font-bold text-foreground mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="gigi-card p-6 flex gap-4 items-start">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold font-semibold text-foreground mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:contato@gigiswear.com"
                      className="text-secondary hover:text-secondary/80 transition-colors"
                    >
                      contato@gigiswear.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Respondemos em até 24 horas
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="gigi-card p-6 flex gap-4 items-start">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold font-semibold text-foreground mb-2">
                      Telefone
                    </h3>
                    <a
                      href="tel:+5511987654321"
                      className="text-secondary hover:text-secondary/80 transition-colors"
                    >
                      (11) 98765-4321
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Seg-Sex: 9h às 18h
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="gigi-card p-6 flex gap-4 items-start">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold font-semibold text-foreground mb-2">
                      Endereço
                    </h3>
                    <p className="text-muted-foreground">
                      Rua Elegância, 123<br />
                      São Paulo, SP 01234-567<br />
                      Brasil
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="gigi-card p-6">
                  <h3 className="font-bold font-semibold text-foreground mb-4">
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta:</span>
                      <span className="font-semibold">9h - 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span className="font-semibold">10h - 14h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span className="font-semibold">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="gigi-section bg-muted">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold font-bold text-foreground mb-8 text-center">
            Nos Encontre
          </h2>
          <div className="w-full h-96 bg-gray-300 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">
                Mapa interativo - Localização da Gigi's Wear em São Paulo, SP
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
