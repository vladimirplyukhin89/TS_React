import React from "react";

interface IProps {
  className: string,
  children: React.ReactNode
}

export const Button: React.FC<IProps> = ({className, children}: IProps) => {
  return <button className={className}>{children}</button>;
};

const Parent: React.FC = () => {
  return (
    <>
      <Button className={'my-class'}>Any another text</Button>

      <Button className="my-class">Any text</Button>
    </>
  );
};
