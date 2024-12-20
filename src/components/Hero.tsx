import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-hero-primary to-hero-secondary animate-gradient">
      <div className="container mx-auto px-4 py-32 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to Your Next Project
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Build something amazing with modern web technologies and beautiful design
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-white text-hero-primary hover:bg-gray-100 transition-colors">
            Get Started
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;