import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-hero-primary">Logo</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-hero-primary transition-colors">Features</a>
          <a href="#about" className="text-gray-600 hover:text-hero-primary transition-colors">About</a>
          <a href="#contact" className="text-gray-600 hover:text-hero-primary transition-colors">Contact</a>
        </nav>
        <Button className="bg-hero-primary hover:bg-hero-secondary transition-colors">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;