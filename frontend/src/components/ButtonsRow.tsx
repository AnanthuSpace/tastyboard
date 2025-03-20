import React from "react";

const ButtonsRow: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center w-full py-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/ButtonBg.svg')" }}
    >
      <div className="relative z-10 flex space-x-3">
        <button className="px-6 py-3 bg-black text-white font-bold border-2 border-[#0796EF]  hover:bg-[#0796EF] ">
          FOOD
        </button>
        <button className="px-6 py-3 bg-black text-white font-bold border-2 border-[#0796EF]  hover:bg-[#0796EF]">
          DRINKS
        </button>
        <button className="px-6 py-3 bg-black text-white font-bold border-2 border-[#0796EF]  hover:bg-[#0796EF] ">
          BRUNCH
        </button>
      </div>
    </div>
  );
};

export default ButtonsRow;
