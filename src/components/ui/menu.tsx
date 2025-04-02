// src/components/Menu.js
import React from 'react';
import { Card } from './card';

const Menu = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Card className="shadow-md hover:shadow-lg transition-all">
            <img src="/udon.jpg" alt="Udon" className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Udon</h3>
              <p className="mt-2">Freshly made udon served with your choice of toppings.</p>
            </div>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-all">
            <img src="/tempura.jpg" alt="Tempura" className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Tempura</h3>
              <p className="mt-2">Crispy, golden tempura for a perfect pairing.</p>
            </div>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-all">
            <img src="/rice-dishes.jpg" alt="Rice Dishes" className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Rice Dishes</h3>
              <p className="mt-2">A variety of delicious rice-based dishes to complement your meal.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Menu;
export {}
