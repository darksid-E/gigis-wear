import { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import { ChevronDown } from 'lucide-react';
import { products, categories } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

type SortOption = 'relevancia' | 'preco-baixo' | 'preco-alto' | 'mais-vendidos';

export default function Catalog() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split('?')[1] || '');
  const categoryFilter = searchParams.get('categoria') || '';

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryFilter ? [categoryFilter] : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [sortBy, setSortBy] = useState<SortOption>('relevancia');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }

    // Filter by price
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'preco-baixo':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'preco-alto':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'mais-vendidos':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategories, priceRange, sortBy]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((c) => c !== categoryId) : [...prev, categoryId]
    );
  };

  const maxPrice = Math.max(...products.map((p) => p.price));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="gigi-section bg-muted border-b border-border">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold font-bold text-foreground mb-2">
            Catálogo de Produtos
          </h1>
          <p className="text-muted-foreground">
            Encontre as roupas perfeitas para seus treinos
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="gigi-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories Filter */}
                <div>
                  <h3 className="font-bold font-semibold text-foreground mb-4">
                    Categorias
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <label key={category.id} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.id)}
                          onChange={() => toggleCategory(category.id)}
                          className="w-4 h-4 rounded border-border cursor-pointer accent-secondary"
                        />
                        <span className="text-foreground hover:text-secondary transition-colors">
                          {category.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="font-bold font-semibold text-foreground mb-4">
                    Preço
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max={maxPrice}
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseFloat(e.target.value)])
                      }
                      className="w-full accent-secondary"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>R$ {priceRange[0].toFixed(2)}</span>
                      <span>R$ {priceRange[1].toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedCategories.length > 0 || priceRange[1] < maxPrice) && (
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setPriceRange([0, maxPrice]);
                    }}
                    className="w-full px-4 py-2 border-2 border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                  >
                    Limpar Filtros
                  </button>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Sort Options */}
              <div className="mb-8 flex items-center justify-between">
                <p className="text-muted-foreground">
                  Mostrando <span className="font-semibold">{filteredProducts.length}</span> produtos
                </p>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="appearance-none px-4 py-2 pr-10 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-white cursor-pointer"
                  >
                    <option value="relevancia">Relevância</option>
                    <option value="preco-baixo">Preço: Menor para Maior</option>
                    <option value="preco-alto">Preço: Maior para Menor</option>
                    <option value="mais-vendidos">Mais Vendidos</option>
                  </select>
                  <ChevronDown
                    size={18}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-muted-foreground"
                  />
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground mb-4">
                    Nenhum produto encontrado com os filtros selecionados.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setPriceRange([0, maxPrice]);
                    }}
                    className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Limpar Filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
