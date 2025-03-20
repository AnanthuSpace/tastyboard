import React from "react";

const CardComponent: React.FC = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-[500px] text-white text-center px-6 py-16"
      style={{
        backgroundImage: "url('/images/CardBg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative container w-full max-w-1xl sm:w-[100%] md:w-[80%] lg:w-[60%] px-4 sm:px-4 lg:px-6 h-full flex items-center justify-center border-1 border-white">
        <img
          src="/images/Juice.svg"
          alt="Juice"
          className="absolute top-1 left-1 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40  z-0"
        />

        <img
          src="/images/cocktail.svg"
          alt="Cocktail"
          className="absolute bottom-4 right-4 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40  z-0"
        />

        <div className="w-full max-w-2xl  z-10">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-0.5 w-12 bg-[#857878]"></div>
            <h2 className="text-2xl sm:text-3xl font-bold">BRUNCH COCKTAILS</h2>
            <div className="h-0.5 w-12 bg-[#857878]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg">CINNAMON TOAST CRUNCH</h3>
                <span className="text-lg font-bold">$16</span>
              </div>
              <p className="text-secondary text-sm text-left">
                Skrewball peanut butter whiskey, vanilla extract, Amaretto,
                Baileys, egg white, cinnamon
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg">MOET SPRITZ</h3>
                <span className="text-lg font-bold">$20</span>
              </div>
              <p className="text-secondary text-sm text-left">
                Aperol, St Germain, botanical liquor, fresh lime juice, mini
                brut Moet topper
              </p>
            </div>

            {/* Column 1 */}
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg">BAR 42 MARY</h3>
                <span className="text-lg font-bold">$14</span>
              </div>
              <p className="text-secondary text-sm text-left">
                Titos, tomato juice, worcestershire, celery salt, black pepper,
                tabasco, fully loaded
              </p>
            </div>

            {/* Column 2 - Empty for even layout */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
