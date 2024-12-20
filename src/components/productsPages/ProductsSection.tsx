import React, { useState } from "react";
import ProductCard from "./ProductCardSection";

const products = [
  { id: 1, name: "Suit", material: "WOOL", color: "Midnight Blue", price: 1295, image: "/Articles/1.png" },
  { id: 2, name: "Basic shirt", material: "oxford", color: "White & Blue", price: 120, image: "/Articles/2.png" },
  { id: 3, name: "Limited pink shirt", material: "Pink October", color: "White & pink", price: 180, image: "/Articles/3.png" },
  { id: 4, name: "Classic White Shirt", material: "Cotton", color: "Pure White", price: 150, image: "/Articles/1.png" },
  { id: 5, name: "Modern Blazer", material: "Wool Blend", color: "Charcoal Grey", price: 450, image: "/Articles/2.png" },
  { id: 6, name: "Summer Polo", material: "Cotton Pique", color: "Navy Blue", price: 95, image: "/Articles/3.png" },
  { id: 7, name: "Business Suit", material: "Italian Wool", color: "Black", price: 1500, image: "/Articles/1.png" },
  { id: 8, name: "Casual Shirt", material: "Linen", color: "Light Blue", price: 110, image: "/Articles/2.png" },
  { id: 9, name: "Designer Blazer", material: "Premium Wool", color: "Dark Grey", price: 750, image: "/Articles/3.png" },
];

const ProductsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Responsive grid: 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {currentProducts.map((product) => (
            <div className="w-full">
              <ProductCard 
                key={product.id} 
                product={product} 
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`mx-1 px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-[#471818] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
