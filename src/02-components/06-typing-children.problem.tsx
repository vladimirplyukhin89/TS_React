import React from "react";

interface IProps {
  children?: React.ReactNode
}

export const Button: React.FC<IProps> = (props: IProps) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};
