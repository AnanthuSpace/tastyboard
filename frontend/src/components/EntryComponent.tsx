import React from "react";

const EntryComponent: React.FC = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full text-white text-center px-6 py-16"
      style={{
        backgroundImage: "url('/images/MainBg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 flex flex-col items-center space-y-4">
        <h1 className="text-7xl font-bold">MENU</h1>
        <p className="text-lg max-w-2xl text-secondary" >
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the "Order Online" button located
          below the menu.
        </p>
      </div>
    </div>
  );
};

export default EntryComponent;
