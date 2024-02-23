import React from 'react';

interface IComponent extends React.HTMLAttributes<HTMLDivElement> {
  'aria-posinset': number
  'aria-setsize': number
  onChange: React.FormEventHandler<HTMLDivElement>
}

export const Component: React.FC<IComponent> = () => {
  return (
    <div
      // How do I figure out what type aria-posinset expects?
      aria-posinset={1}
      aria-setsize={1}
      // How do I figure out what type onChange expects?
      onChange={() => {}}

      // How do I get autocomplete with JSX?
    />
  );
};
