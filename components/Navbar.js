import { Search, ShoppingCart, Menu, MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex flex-col">
      {/* Top Header */}
      <div className="bg-[#131921] text-white flex items-center p-2 gap-4">
        {/* Logo Placeholder */}
        <div className="text-2xl font-bold px-2 cursor-pointer">LankaMart</div>

        {/* Location Selector */}
        <div className="hidden md:flex flex-col text-sm px-2 cursor-pointer hover:outline outline-white">
          <span className="text-gray-300 text-xs">Deliver to</span>
          <span className="font-bold flex items-center gap-1">
            <MapPin size={14} /> Sri Lanka
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 h-10 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#cd9042]">
          <select className="bg-gray-100 text-black text-xs px-2 border-r border-gray-300">
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
          </select>
          <input 
            type="text" 
            className="flex-1 px-3 text-black outline-none" 
            placeholder="Search LankaMart"
          />
          <button className="bg-[#febd69] hover:bg-[#cd9042] px-4 flex items-center justify-center">
            <Search className="text-black" size={20} />
          </button>
        </div>

        {/* Account & Cart */}
        <div className="flex items-center gap-4 text-sm">
          <div className="cursor-pointer hover:underline">
            <p className="text-xs">Hello, Sign in</p>
            <p className="font-bold">Account & Lists</p>
          </div>
          <div className="cursor-pointer hover:underline">
            <p className="text-xs">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>
          <div className="flex items-center gap-1 cursor-pointer font-bold">
            <ShoppingCart size={28} />
            <span className="mt-2">Cart</span>
          </div>
        </div>
      </div>

      {/* Sub Header */}
      <div className="bg-[#232f3e] text-white text-sm p-2 flex gap-4 pl-4 overflow-x-auto">
        <button className="flex items-center gap-1 font-bold">
          <Menu size={20} /> All
        </button>
        <a href="#" className="hover:border border-white px-1">Today's Deals</a>
        <a href="#" className="hover:border border-white px-1">Customer Service</a>
        <a href="#" className="hover:border border-white px-1">Registry</a>
        <a href="#" className="hover:border border-white px-1">Gift Cards</a>
        <a href="#" className="hover:border border-white px-1">Sell</a>
      </div>
    </nav>
  );
}