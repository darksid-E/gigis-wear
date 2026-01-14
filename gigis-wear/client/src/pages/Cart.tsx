import { useState } from 'react';
import { Link } from 'wouter';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const shipping = items.length > 0 ? 15.0 : 0;
  const subtotal = total;
  const finalTotal = subtotal + shipping;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      toast.success('Pedido finalizado com sucesso! Obrigado pela compra.');
      clearCart();
      setIsCheckingOut(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="gigi-section bg-muted border-b border-border">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold font-bold text-foreground">
            Carrinho de Compras
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="gigi-section">
        <div className="container mx-auto">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="mb-6">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🛒</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold font-bold text-foreground mb-2">
                Seu carrinho está vazio
              </h2>
              <p className="text-muted-foreground mb-8">
                Comece a adicionar produtos para sua coleção Gigi's Wear!
              </p>
              <Link href="/catalogo">
                <a className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-bold font-bold hover:shadow-lg transition-all duration-300">
                  <ArrowLeft size={18} />
                  Voltar ao Catálogo
                </a>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.size}`}
                      className="gigi-card p-6 flex gap-6 items-start"
                    >
                      {/* Image */}
                      <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold font-semibold text-foreground mb-2">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Tamanho: <span className="font-semibold">{item.size}</span>
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.size, item.quantity - 1)
                            }
                            className="p-1 hover:bg-muted rounded transition-colors"
                          >
                            <Minus size={16} className="text-foreground" />
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.id,
                                item.size,
                                Math.max(1, parseInt(e.target.value) || 1)
                              )
                            }
                            className="w-12 text-center border border-border rounded px-2 py-1"
                          />
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.size, item.quantity + 1)
                            }
                            className="p-1 hover:bg-muted rounded transition-colors"
                          >
                            <Plus size={16} className="text-foreground" />
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm text-muted-foreground mb-2">
                          R$ {item.price.toFixed(2)}
                        </p>
                        <p className="text-lg font-bold font-bold text-secondary mb-4">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-500"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/catalogo">
                    <a className="inline-flex items-center gap-2 px-6 py-3 border-2 border-secondary text-secondary rounded-lg font-bold font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                      <ArrowLeft size={18} />
                      Continuar Comprando
                    </a>
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="gigi-card p-6 sticky top-24">
                  <h3 className="font-bold font-bold text-lg text-foreground mb-6">
                    Resumo do Pedido
                  </h3>

                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between text-foreground">
                      <span>Subtotal</span>
                      <span className="font-semibold">R$ {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-foreground">
                      <span>Frete</span>
                      <span className="font-semibold">R$ {shipping.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-6">
                    <span className="font-bold font-bold text-lg text-foreground">
                      Total
                    </span>
                    <span className="font-bold font-bold text-2xl text-secondary">
                      R$ {finalTotal.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-bold font-bold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isCheckingOut ? 'Processando...' : 'Finalizar Compra'}
                  </button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Você será redirecionado para pagamento seguro
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
