import React, { useState } from "react";
import { Menu, X, Gift, Shirt, Watch, Scissors, ShoppingBag, Phone, ChevronDown, ChevronUp, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import StoreLocationsModal from "./StoreLocationsModal";
import ContactModal from "./ContactModal";
import CartModal from "./cart/CartModal";
import { useCart } from "./cart/CartProvider";

const menuItems = [
  {
    title: "Le monde Fiori",
    icon: Gift,
    link: "/category/le-monde-fiori",
    subItems: [
      { href: "/category/le-monde-fiori/printemps", title: "Collections Printemps" },
      { href: "/category/le-monde-fiori/ete", title: "Collections Été" },
      { href: "/category/le-monde-fiori/mariage", title: "Marriage" },
      { href: "/category/le-monde-fiori/soiree", title: "Soirée" }
    ]
  },
  {
    title: "L'univers Cadeaux",
    icon: ShoppingBag,
    link: "/category/univers-cadeaux",
    subItems: [
      { href: "/category/univers-cadeaux/pack-prestige", title: "Pack Prestige" },
      { href: "/category/univers-cadeaux/pack-premium", title: "Pack Premium" },
      { href: "/category/univers-cadeaux/pack-trio", title: "Pack Trio" },
      { href: "/category/univers-cadeaux/pack-duo", title: "Pack Duo" },
      { href: "/category/univers-cadeaux/pack-mini-duo", title: "Pack Mini Duo" },
      { href: "/category/univers-cadeaux/pack-mono", title: "Pack Mono" }
    ]
  },
  {
    title: "Le prêt à porter",
    icon: Shirt,
    link: "/category/pret-a-porter",
    subItems: [
      { href: "/category/pret-a-porter/homme/costumes", title: "Costumes" },
      { href: "/category/pret-a-porter/homme/blazers", title: "Blazers" },
      { href: "/category/pret-a-porter/homme/chemises", title: "Chemises" },
      { href: "/category/pret-a-porter/homme/pulls", title: "Pulls" },
      { href: "/category/pret-a-porter/homme/pantalons", title: "Pantalons" }
    ]
  },
  {
    title: "Accessoires",
    icon: Watch,
    link: "/category/accessoires",
    subItems: [
      { href: "/category/accessoires/homme/portefeuilles", title: "Portefeuilles" },
      { href: "/category/accessoires/homme/ceintures", title: "Ceintures" },
      { href: "/category/accessoires/homme/cravates", title: "Cravates" },
      { href: "/category/accessoires/homme/mallettes", title: "Mallettes" }
    ]
  },
  {
    title: "Sur mesure",
    icon: Scissors,
    link: "/category/sur-mesure"
  },
  {
    title: "Outlet",
    icon: ShoppingBag,
    link: "/category/outlet"
  }
];

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  
  const { cartItems, removeFromCart, updateQuantity, cartCount } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setExpandedItem(null);
  };

  const toggleSubmenu = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  return (
    <div className="font-['Montserrat'] font-light">
      <nav className="bg-primary px-6 py-4 shadow-md">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-red-500 transition-colors duration-300 -ml-6"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={26} className="text-white" />
              ) : (
                <Menu size={26} className="text-white" />
              )}
            </button>

            <button
              onClick={() => setIsStoreModalOpen(true)}
              className="text-sm text-white whitespace-nowrap hover:text-red-500 transition-colors duration-300"
            >
              TROUVER UNE BOUTIQUE
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-sm text-white whitespace-nowrap hover:text-red-500 transition-colors duration-300 mb-2 sm:mb-0 hidden sm:block"
            >
              CONTACTEZ-NOUS
            </button>
            
            <button
              onClick={() => setIsCartModalOpen(true)}
              className="text-sm text-white whitespace-nowrap hover:text-red-500 transition-colors duration-300 relative"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full bg-[#700100]/40 backdrop-blur-md shadow-2xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50 w-80 overflow-y-auto`}
      >
        <div className="flex flex-col p-4">
          {menuItems.map((item) => (
            <div key={item.title} className="relative">
              <Link to={item.link} className="flex items-center justify-between p-2 text-white hover:bg-red-500 transition-colors">
                <span>{item.title}</span>
                {item.subItems && (
                  <button onClick={() => toggleSubmenu(item.title)} className="text-white">
                    {expandedItem === item.title ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                )}
              </Link>
              {item.subItems && expandedItem === item.title && (
                <ul className="ml-4">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.href}>
                      <Link to={subItem.href} className="block text-white hover:text-red-400 transition-colors">
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <StoreLocationsModal 
        isOpen={isStoreModalOpen}
        onOpenChange={setIsStoreModalOpen}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />

      <CartModal
        isOpen={isCartModalOpen}
        onOpenChange={setIsCartModalOpen}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
};

export default TopNavbar;