import { useState } from 'react';
import { useRoute, Link } from 'wouter';
import { Heart, ShoppingCart, ArrowLeft, Star } from 'lucide-react';
import { products } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

export default function ProductDetail() {
  const [route, params] = useRoute('/produto/:id');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const { addItem } = useCart();

  const product = products.find((p) => p.id === params?.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold font-bold text-foreground mb-4">
            Produto não encontrado
          </h1>
          <Link href="/catalogo">
            <a className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-bold font-bold hover:shadow-lg transition-all duration-300">
              <ArrowLeft size={18} />
              Voltar ao Catálogo
            </a>
          </Link>
        </div>
      </div>
    );
  }

  if (!selectedSize && product.sizes.length > 0) {
    setSelectedSize(product.sizes[0]);
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Por favor, selecione um tamanho');
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      size: selectedSize,
      image: product.image,
    });

    toast.success(`${quantity}x ${product.name} adicionado ao carrinho!`);
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-muted border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/">
              <a className="hover:text-secondary transition-colors">Home</a>
            </Link>
            <span>/</span>
            <Link href="/catalogo">
              <a className="hover:text-secondary transition-colors">Catálogo</a>
            </Link>
            <span>/</span>
            <span className="text-foreground font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="gigi-section">
        <div className="container mx-auto">
          <Link href="/catalogo">
            <a className="inline-flex items-center gap-2 px-4 py-2 text-secondary hover:bg-muted rounded-lg transition-colors mb-8">
              <ArrowLeft size={18} />
              Voltar
            </a>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="bg-muted rounded-xl overflow-hidden mb-4 h-96 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-muted rounded-lg h-20 flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-secondary transition-all"
                  >
                    <img
                      src={product.image}
                      alt={`${product.name} - ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold font-bold text-foreground mb-2">
                      {product.name}
                    </h1>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i <= 4 ? 'fill-secondary text-secondary' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">(128 avaliações)</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="p-3 hover:bg-muted rounded-lg transition-colors"
                  >
                    <Heart
                      size={24}
                      className={isFavorite ? 'fill-secondary text-secondary' : 'text-gray-400'}
                    />
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-border">
                <p className="text-5xl font-bold font-bold text-secondary mb-2">
                  R$ {product.price.toFixed(2)}
                </p>
                <p className="text-muted-foreground">
                  Frete grátis em compras acima de R$ 200
                </p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-bold font-semibold text-foreground mb-3">
                  Descrição
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <h3 className="font-bold font-semibold text-foreground mb-4">
                  Tamanho
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 font-bold font-semibold rounded-lg border-2 transition-all ${
                        selectedSize === size
                          ? 'border-secondary bg-secondary text-secondary-foreground'
                          : 'border-border text-foreground hover:border-secondary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="font-bold font-semibold text-foreground mb-4">
                  Quantidade
                </h3>
                <div className="flex items-center gap-4 w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border-2 border-border rounded-lg hover:border-secondary transition-colors"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-2 border-border rounded-lg py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border-2 border-border rounded-lg hover:border-secondary transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-bold font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mb-4"
              >
                <ShoppingCart size={20} />
                Adicionar ao Carrinho
              </button>

              {/* Additional Info */}
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-bold font-semibold text-foreground mb-3">
                  Informações Importantes
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Frete grátis em compras acima de R$ 200</li>
                  <li>✓ Troca grátis em até 30 dias</li>
                  <li>✓ Garantia de qualidade</li>
                  <li>✓ Pagamento seguro</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="gigi-section bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-bold text-foreground mb-8 text-center">
            Produtos Relacionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/produto/${relatedProduct.id}`}>
                  <a className="gigi-card p-4 hover:shadow-lg transition-all">
                    <div className="bg-white rounded-lg h-48 flex items-center justify-center mb-4 overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-bold font-semibold text-foreground mb-2 line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-2xl font-bold font-bold text-secondary">
                      R$ {relatedProduct.price.toFixed(2)}
                    </p>
                  </a>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
