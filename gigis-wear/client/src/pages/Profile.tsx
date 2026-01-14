import { useState } from 'react';
import { User, Mail, Phone, MapPin, LogOut } from 'lucide-react';
import { toast } from 'sonner';

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'login' | 'profile' | 'orders'>('login');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      toast.success('Login realizado com sucesso!');
      setActiveTab('profile');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setActiveTab('login');
    toast.success('Logout realizado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="gigi-section bg-muted border-b border-border">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold font-bold text-foreground mb-2">
            Meu Perfil
          </h1>
          <p className="text-muted-foreground">
            Gerencie sua conta e pedidos
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="gigi-section">
        <div className="container mx-auto max-w-4xl">
          {!isLoggedIn ? (
            // Login Form
            <div className="max-w-md mx-auto">
              <div className="gigi-card p-8">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <User size={32} className="text-secondary-foreground" />
                </div>
                <h2 className="text-2xl font-bold font-bold text-center text-foreground mb-6">
                  Faça Login
                </h2>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold font-semibold text-foreground mb-2">
                      Senha
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-bold font-bold hover:shadow-lg transition-all duration-300"
                  >
                    Entrar
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-muted-foreground mb-4">
                    Não tem uma conta?
                  </p>
                  <button
                    onClick={() => toast.info('Cadastro em breve!')}
                    className="px-6 py-2 border-2 border-secondary text-secondary rounded-lg font-bold font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                  >
                    Criar Conta
                  </button>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-xs text-muted-foreground text-center">
                    <strong>Demo:</strong> Use qualquer email e senha para fazer login
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Logged In Content
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold font-bold text-foreground">
                  Bem-vindo de volta!
                </h2>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg font-bold font-semibold hover:bg-red-50 transition-all duration-300"
                >
                  <LogOut size={18} />
                  Sair
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-4 mb-8 border-b border-border">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-6 py-3 font-bold font-semibold border-b-2 transition-colors ${
                    activeTab === 'profile'
                      ? 'border-secondary text-secondary'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Meus Dados
                </button>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`px-6 py-3 font-bold font-semibold border-b-2 transition-colors ${
                    activeTab === 'orders'
                      ? 'border-secondary text-secondary'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Meus Pedidos
                </button>
              </div>

              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="gigi-card p-6">
                    <h3 className="font-bold font-bold text-lg text-foreground mb-6">
                      Informações Pessoais
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-bold font-semibold text-muted-foreground">
                          Nome
                        </label>
                        <p className="text-lg text-foreground font-semibold">
                          Gisele Silva
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-bold font-semibold text-muted-foreground flex items-center gap-2">
                          <Mail size={16} />
                          Email
                        </label>
                        <p className="text-lg text-foreground font-semibold">
                          {email}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-bold font-semibold text-muted-foreground flex items-center gap-2">
                          <Phone size={16} />
                          Telefone
                        </label>
                        <p className="text-lg text-foreground font-semibold">
                          (11) 98765-4321
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-bold font-semibold text-muted-foreground flex items-center gap-2">
                          <MapPin size={16} />
                          Endereço
                        </label>
                        <p className="text-lg text-foreground font-semibold">
                          São Paulo, SP
                        </p>
                      </div>
                    </div>
                    <button className="mt-6 w-full px-4 py-2 border-2 border-secondary text-secondary rounded-lg font-bold font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                      Editar Dados
                    </button>
                  </div>

                  <div className="gigi-card p-6">
                    <h3 className="font-bold font-bold text-lg text-foreground mb-6">
                      Preferências
                    </h3>
                    <div className="space-y-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4 rounded border-border cursor-pointer accent-secondary"
                        />
                        <span className="text-foreground">
                          Receber newsletter com promoções
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4 rounded border-border cursor-pointer accent-secondary"
                        />
                        <span className="text-foreground">
                          Notificações de novos produtos
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-border cursor-pointer accent-secondary"
                        />
                        <span className="text-foreground">
                          Notificações de pedidos
                        </span>
                      </label>
                    </div>
                    <button className="mt-6 w-full px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-bold font-semibold hover:shadow-lg transition-all duration-300">
                      Salvar Preferências
                    </button>
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div>
                  <h3 className="font-bold font-bold text-lg text-foreground mb-6">
                    Histórico de Pedidos
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        id: '#GW-001',
                        date: '15/01/2024',
                        items: 3,
                        total: 'R$ 450,00',
                        status: 'Entregue',
                      },
                      {
                        id: '#GW-002',
                        date: '10/01/2024',
                        items: 2,
                        total: 'R$ 280,00',
                        status: 'Em Trânsito',
                      },
                      {
                        id: '#GW-003',
                        date: '05/01/2024',
                        items: 1,
                        total: 'R$ 129,90',
                        status: 'Entregue',
                      },
                    ].map((order) => (
                      <div key={order.id} className="gigi-card p-6 flex items-center justify-between">
                        <div>
                          <p className="font-bold font-bold text-foreground mb-2">
                            Pedido {order.id}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {order.date} • {order.items} item(ns)
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold font-bold text-secondary mb-2">
                            {order.total}
                          </p>
                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full ${
                              order.status === 'Entregue'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
