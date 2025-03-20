import React, { useState } from "react";

interface MenuItem {
  name: string;
  description: string;
  price: number;
}

interface Menu {
  _id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

interface MenuListProps {
  menus: Menu[];
}

const MenuList: React.FC<MenuListProps> = ({ menus }) => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  return (
    <div className="p-6 w-full max-w-2xl">
      <h2 className="text-xl font-bold mb-4">Menus</h2>
      {menus.length === 0 ? (
        <p>No menus found</p>
      ) : (
        menus.map((menu) => (
          <div
            key={menu._id}
            className="border rounded-lg p-4 mb-4 shadow-md bg-white cursor-pointer"
            onClick={() => setSelectedMenu(menu._id === selectedMenu ? null : menu._id)}
          >
            <h3 className="text-lg font-bold">{menu.name}</h3>
            <p className="text-gray-600">{menu.description}</p>

            {/* Show items only when this menu is selected */}
            {selectedMenu === menu._id && (
              <div className="mt-2">
                <h4 className="text-md font-semibold">Items:</h4>
                {menu.items.length === 0 ? (
                  <p>No items in this menu</p>
                ) : (
                  <ul className="list-disc ml-4">
                    {menu.items.map((item, index) => (
                      <li key={index}>
                        <strong>{item.name}</strong> - {item.description} ($
                        {item.price})
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MenuList;
