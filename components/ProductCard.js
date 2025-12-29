import { Star } from 'lucide-react';

export default function ProductCard({ title, price, image, rating, reviews }) {
  return (
    <div className="bg-white p-4 z-30 m-2 flex flex-col hover:shadow-lg transition-shadow duration-200">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">Sponsored</p>
      
      {/* Image Placeholder */}
      <div className="h-40 bg-gray-200 w-full mb-4 flex items-center justify-center text-gray-500">
        Product Image
      </div>

      <h4 className="my-3 line-clamp-2 hover:text-[#cd9042] cursor-pointer font-medium">
        {title}
      </h4>

      <div className="flex items-center mb-2">
        {Array(5).fill().map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={`${i < rating ? "text-[#febd69] fill-[#febd69]" : "text-gray-300"}`} 
          />
        ))}
        <span className="text-xs ml-2 text-blue-500 hover:underline cursor-pointer">{reviews}</span>
      </div>

      <div className="mb-3">
        <span className="text-xs align-top">LKR</span>
        <span className="text-2xl font-bold">{price.toLocaleString()}</span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <span className="bg-[#232f3e] text-white text-xs px-2 py-1 rounded">Prime</span>
        <span className="text-xs text-gray-500">Get it by Tomorrow</span>
      </div>

      <button className="mt-auto bg-[#ffd814] border border-[#fcd200] rounded-md py-1 px-4 text-sm hover:bg-[#f7ca00] shadow-sm">
        Add to Cart
      </button>
    </div>
  );
}