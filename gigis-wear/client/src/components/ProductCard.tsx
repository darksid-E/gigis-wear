import { useState } from 'react';
import { Link } from 'wouter';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      size: selectedSize,
      image: product.image,
    });
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  return (
    <Link href={`/produto/${product.id}`}>
      <a className="group gigi-card flex flex-col h-full hover:shadow-xl transition-all duration-300">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-muted h-64 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Heart
              size={20}
              className={isFavorite ? 'fill-secondary text-secondary' : 'text-gray-400'}
            />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 flex flex-col">
          <h3 className="font-bold font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {product.description}
          </p>

          {/* Size Selector */}
          <div className="mb-4">
            <label className="text-xs font-bold font-semibold text-foreground mb-2 block">
              Tamanho
            </label>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedSize(size);
                  }}
                  className={`px-3 py-1 text-xs font-semibold rounded border-2 transition-all ${
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

          {/* Price and Button */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold font-bold text-secondary">
              R$ {product.price.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              className="p-2 bg-secondary text-secondary-foreground rounded-lg hover:shadow-lg hover:scale-110 transition-all duration-300"
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </a>
    </Link>
  );
}
