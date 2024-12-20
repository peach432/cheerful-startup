import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Gift,
  Shirt,
  Watch,
  Scissors,
  ShoppingBag,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import StoreLocationsModal from "./StoreLocationsModal";
import ContactModal from "./ContactModal";

// Menu Items with subitems
const menuItems = [
  {
    title: "Le monde Fiori",
    icon: Gift,
    link: "/category/le-monde-fiori",
    subItems: [
      { href: "/category/le-monde-fiori/printemps", title: "Collections Printemps" },
      { href: "/category/le-monde-fiori/ete", title: "Collections Été" },
      { href: "/category/le-monde-fiori/mariage", title: "Marriage" },
      { href: "/category/le-monde-fiori/soiree", title: "Soirée" },
    ],
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
      { href: "/category/univers-cadeaux/pack-mono", title: "Pack Mono" },
    ],
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
      { href: "/category/pret-a-porter/homme/pantalons", title: "Pantalons" },
    ],
  },
  {
    title: "Accessoires",
    icon: Watch,
    link: "/category/accessoires",
    subItems: [
      { href: "/category/accessoires/homme/portefeuilles", title: "Portefeuilles" },
      { href: "/category/accessoires/homme/ceintures", title: "Ceintures" },
      { href: "/category/accessoires/homme/cravates", title: "Cravates" },
      { href: "/category/accessoires/homme/mallettes", title: "Mallettes" },
    ],
  },
  {
    title: "Sur mesure",
    icon: Scissors,
    link: "/category/sur-mesure",
  },
  {
    title: "Outlet",
    icon: ShoppingBag,
    link: "/category/outlet",
  },
];

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full bg-[#700100]/80 backdrop-blur-md shadow-2xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50 w-80`}
      >
        <div className="flex items-center justify-between p-6 border-b border-red-300/50">
          <h2 className="text-2xl font-semibold text-white tracking-wider">Menu</h2>
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="text-white hover:text-red-400"
          >
            <X size={28} />
          </button>
        </div>
        <ul className="p-6 space-y-8">
          {menuItems.map((item) => (
            <li key={item.title} className="text-white">
              <div
                className="flex items-center gap-4 cursor-pointer hover:text-red-400 transition-colors duration-300"
                onClick={() => item.subItems && toggleSubmenu(item.title)}
              >
                <item.icon size={28} />
                <Link to={item.link} className="text-lg font-medium hover:text-red-500 transition-colors">
                  {item.title}
                </Link>
                {item.subItems && (
                  <span className="ml-auto">
                    {expandedItem === item.title ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </span>
                )}
              </div>
              {item.subItems && expandedItem === item.title && (
                <ul className="ml-8 mt-2 space-y-2">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.href} className="hover:text-red-400">
                      <Link
                        to={subItem.href}
                        className="text-sm hover:text-red-500 transition-colors"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      <StoreLocationsModal
        isOpen={isStoreModalOpen}
        onOpenChange={setIsStoreModalOpen}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
      />
    </div>
  );
};

export default TopNavbar;
