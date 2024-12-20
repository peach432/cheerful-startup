import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import Categories from './Categories';
import 'bootstrap-icons/font/bootstrap-icons.css';

const products = [
  { id: 1, name: 'Suit', material: 'WOOL', color: 'Midnight Blue', price: 1295, image: "/Articles/1.png" },
  { id: 2, name: 'Basic shirt', material: 'oxford', color: 'White & Blue', price: 120, image: "/Articles/2.png" },
  { id: 3, name: 'Limited pink shirt', material: 'Pink October', color: 'White & pink', price: 180, image: "/Articles/3.png" },
  { id: 4, name: 'Classic White Shirt', material: 'Cotton', color: 'Pure White', price: 150, image: "/Articles/1.png" },
  { id: 5, name: 'Modern Blazer', material: 'Wool Blend', color: 'Charcoal Grey', price: 450, image: "/Articles/2.png" },
  { id: 6, name: 'Summer Polo', material: 'Cotton Pique', color: 'Navy Blue', price: 95, image: "/Articles/3.png" },
  { id: 7, name: 'Business Suit', material: 'Italian Wool', color: 'Black', price: 1500, image: "/Articles/1.png" },
  { id: 8, name: 'Casual Shirt', material: 'Linen', color: 'Light Blue', price: 110, image: "/Articles/2.png" },
  { id: 9, name: 'Designer Blazer', material: 'Premium Wool', color: 'Dark Grey', price: 750, image: "/Articles/3.png" },
];

const Products = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false, dragFree: false },
    
  );

  return (
    <div className="w-full overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-[#700100] font-['WomanFontBold'] mb-8">
          Nouveautés
        </h1>
        <Categories />
        <div className="relative w-full" ref={emblaRef}>
          <Carousel className="w-full">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              aria-label="Previous Slide"
              className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-transparent border border-gray-200 shadow-lg h-8 w-8 rounded-full z-10"
            >
              <i className="bi bi-chevron-left h-5 w-5 text-red-600 hover:text-red-700"></i>
            </CarouselPrevious>
            <CarouselNext
              aria-label="Next Slide"
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-transparent border border-gray-200 shadow-lg h-8 w-8 rounded-full z-10"
            >
              <i className="bi bi-chevron-right h-5 w-5 text-red-600 hover:text-red-700"></i>
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Products;
