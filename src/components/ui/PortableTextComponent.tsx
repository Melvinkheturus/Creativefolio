import { PortableText, PortableTextComponents } from '@portabletext/react';
import React from 'react';

interface PortableTextComponentProps {
  blocks: any[]; // Sanity block content
}

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold my-2">{children}</h4>,
    normal: ({ children }) => <p className="my-2">{children}</p>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 my-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5 my-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : undefined} className="text-blue-500 hover:underline">
          {children}
        </a>
      );
    },
  },
};

const PortableTextComponent: React.FC<PortableTextComponentProps> = ({ blocks }) => {
  if (!blocks) {
    return null;
  }
  return <PortableText value={blocks} components={portableTextComponents} />;
};

export default PortableTextComponent;