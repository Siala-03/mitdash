import React, { useState } from 'react';

// Example props: pass a product object from your catalog
type Product = {
  name: string;
  category: string;
  tagline?: string;
  brand?: string;
  image: string;
  gallery?: string[];
  description: string;
  specs: { label: string; value: string }[];
};

interface ProductMinimalProps {
  product: Product;
}

export const ProductMinimal: React.FC<ProductMinimalProps> = ({ product }) => {
  const [tab, setTab] = useState<'description' | 'specs' | 'gallery'>('description');

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      {/* Hero Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-2xl rounded-2xl object-cover mb-6 shadow-sm"
        style={{ aspectRatio: '16/9' }}
      />

      {/* Essential Info */}
      <div className="w-full max-w-2xl mb-6">
        <h1 className="text-3xl font-semibold mb-1">{product.name}</h1>
        <div className="text-sm text-gray-500 mb-2">
          {product.category}
          {product.brand && <> · {product.brand}</>}
        </div>
        {product.tagline && <div className="text-base text-gray-700 mb-2">{product.tagline}</div>}
      </div>

      {/* Tabs */}
      <div className="w-full max-w-2xl mb-6">
        <div className="flex gap-4 border-b mb-4">
          <button className={`pb-2 px-2 border-b-2 ${tab==='description' ? 'border-black font-medium' : 'border-transparent text-gray-400'}`} onClick={()=>setTab('description')}>Description</button>
          <button className={`pb-2 px-2 border-b-2 ${tab==='specs' ? 'border-black font-medium' : 'border-transparent text-gray-400'}`} onClick={()=>setTab('specs')}>Specs</button>
          {product.gallery && product.gallery.length > 0 && (
            <button className={`pb-2 px-2 border-b-2 ${tab==='gallery' ? 'border-black font-medium' : 'border-transparent text-gray-400'}`} onClick={()=>setTab('gallery')}>Gallery</button>
          )}
        </div>
        {tab === 'description' && (
          <div className="text-gray-800 text-base mb-4 whitespace-pre-line">{product.description}</div>
        )}
        {tab === 'specs' && (
          <table className="w-full text-sm text-left">
            <tbody>
              {product.specs.map((spec) => (
                <tr key={spec.label}>
                  <td className="py-1 pr-4 text-gray-500 whitespace-nowrap">{spec.label}</td>
                  <td className="py-1 text-gray-900">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {tab === 'gallery' && product.gallery && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {product.gallery.map((img, i) => (
              <img key={i} src={img} alt={product.name + ' gallery'} className="h-40 rounded-lg object-cover" />
            ))}
          </div>
        )}
      </div>

      {/* Sticky Quote Button */}
      <a
        href="/contact"
        className="fixed bottom-6 right-6 px-6 py-3 rounded-full bg-black text-white font-medium shadow-lg hover:bg-gray-800 transition"
        style={{ zIndex: 50 }}
      >
        Request Quote
      </a>
    </div>
  );
};
