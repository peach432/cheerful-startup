import React from "react";
import { useParams } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";
import BeltsSection from "../components/productsPages/BeltsSection";
import Footer from "../components/Footer";
import ProductsSection from "../components/productsPages/ProductsSection";
import BrandNavbarSection from "@/components/productsPages/BrandNavbarSection";
import MainNavbarProduct from "@/components/productsPages/MainNavbarProduct";
const CategoryPage = () => {
  const { category } = useParams();

  console.log("Current category:", category);

  return (
    <div className="min-h-screen flex flex-col relative">
      <TopNavbar />
      <div className="flex-grow">
        <BrandNavbarSection />
        <div className="hidden lg:block">
        <MainNavbarProduct />
              </div>
              
        <BeltsSection />
        <ProductsSection />
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
