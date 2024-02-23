import React from "react";

interface Props {
  className: string;
  children: React.ReactNode
}

export const Button: React.FC<Props> = (props: Props) => {

  return (
    <div className={props.className}>
      {props.children}
    </div>
  )

};

const Parent: React.FC = () => {
  return (
    <>
      <Button className="my-class">123</Button>
    </>
  );
};
