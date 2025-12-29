import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  // Mock Data mimicking Sri Lankan market items
  const products = [
    { id: 1, title: "Dilmah Ceylon Tea - Premium Box 500g", price: 1250, rating: 5, reviews: 405 },
    { id: 2, title: "Samsung Galaxy A05 (4GB/64GB) - TRCSL Approved", price: 34900, rating: 4, reviews: 120 },
    { id: 3, title: "Men's Batik Shirt - Traditional Kandyan Style", price: 2800, rating: 4, reviews: 55 },
    { id: 4, title: "Maliban Cream Crackers - Family Pack", price: 450, rating: 5, reviews: 890 },
    { id: 5, title: "Sony WH-CH520 Wireless Headphones", price: 18500, rating: 4, reviews: 230 },
    { id: 6, title: "Elephant House Ginger Beer (EGB) - 6 Pack", price: 1100, rating: 5, reviews: 600 },
    { id: 7, title: "Rice Cooker 1.8L - Damro Warranty", price: 8500, rating: 3, reviews: 45 },
    { id: 8, title: "Atlas Chooty Pens - Blue (Box of 50)", price: 1500, rating: 4, reviews: 102 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner Section */}
        <div className="relative">
          <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
          <div className="h-[300px] bg-blue-300 flex items-center justify-center text-4xl font-bold text-white">
            {/* Replace this div with an <img> tag later */}
            Big Sale in Colombo! Up to 50% Off Electronics
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto -mt-16 z-30 px-4 mb-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              reviews={product.reviews}
            />
          ))}
        </div>
        
        {/* Vendor Call to Action */}
        <div className="bg-white p-8 my-8 text-center border-t border-b">
          <h2 className="text-2xl font-bold mb-2">Sell on LankaMart</h2>
          <p className="mb-4">Reach millions of customers across Sri Lanka.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Start Selling
          </button>
        </div>
      </main>
    </div>
  );
}