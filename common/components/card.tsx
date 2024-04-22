import React, { ReactNode } from "react";

interface ICard {
  children: ReactNode;
  onClick?: () => void;
}

const Card = ({ children, onClick, ...props }: ICard) => {
  return (
    <div className="border-2 p-2 hover:bg-slate-200 cursor-pointer" onClick={onClick}>
      <p className="text-center">{children}</p>
    </div>
  );
};

export default Card;
