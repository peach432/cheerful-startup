import React from 'react';

interface SubMenuSectionProps {
  title: string;
  items: Array<{
    href: string;
    title: string;
    description: string;
  }>;
}

const ListItem = ({ href, title }: { href: string; title: string }) => (
  <li className="text-left text-black">
    <a href={href} className="block text-sm hover:underline">
      {title}
    </a>
  </li>
);

const SubMenuSection = ({ title, items }: SubMenuSectionProps) => {
  return (
    <div>
      <h4 className="text-lg font-medium leading-none mb-3 text-[#700100] text-left">{title}</h4>
      <ul className="grid gap-1 pl-0"> 
        {items.map((item) => (
          <ListItem 
            key={item.href}
            href={item.href}
            title={item.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default SubMenuSection;
