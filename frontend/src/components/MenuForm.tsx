import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

interface MenuFormProps {
  fetchMenus: () => void; 
}

const MenuForm: React.FC<MenuFormProps> = ({ fetchMenus }) => {
  const [menuName, setMenuName] = useState("");
  const [menuDescription, setMenuDescription] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [selectedMenu, setSelectedMenu] = useState("");

  const localhostURL = import.meta.env.VITE_LOCAL_HOST;

  const createMenu = async () => {
    try {
      await axios.post(`${localhostURL}/menus`, {
        name: menuName,
        description: menuDescription,
        items: [],
      });

      toast.success("Menu Created Successfully!");
      setMenuName("");
      setMenuDescription("");

      fetchMenus();
    } catch (error) {
      console.error("Error creating menu:", error);
      toast.error("Error creating menu!");
    }
  };

  const addItemToMenu = async () => {
    try {
      await axios.put(`${localhostURL}/menus/add-item`, {
        menuName: selectedMenu,
        item: {
          name: itemName,
          description: itemDescription,
          price: itemPrice,
        },
      });

      toast.success("Item Added Successfully!");
      setItemName("");
      setItemDescription("");
      setItemPrice("");

      fetchMenus(); 
    } catch (error) {
      console.error("Error adding item:", error);
      toast.error("Error adding item!");
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-lg w-full max-w-md mx-auto bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Create Menu</h2>

      <input
        type="text"
        placeholder="Menu Name"
        value={menuName}
        onChange={(e) => setMenuName(e.target.value)}
        className="w-full border p-3 rounded mb-2 text-black bg-gray-100"
      />
      <input
        type="text"
        placeholder="Menu Description"
        value={menuDescription}
        onChange={(e) => setMenuDescription(e.target.value)}
        className="w-full border p-3 rounded mb-2 text-black bg-gray-100"
      />
      <button
        onClick={createMenu}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded w-full mt-2"
      >
        Create Menu
      </button>

      <h2 className="text-2xl font-bold mt-6 mb-4 text-gray-900">
        Add Item to Menu
      </h2>
      <input
        type="text"
        placeholder="Menu Name"
        value={selectedMenu}
        onChange={(e) => setSelectedMenu(e.target.value)}
        className="w-full border p-3 rounded mb-2 text-black bg-gray-100"
      />
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        className="w-full border p-3 rounded mb-2 text-black bg-gray-100"
      />
      <input
        type="text"
        placeholder="Item Description"
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
        className="w-full border p-3 rounded mb-2 text-black bg-gray-100"
      />
      <input
        type="number"
        placeholder="Price"
        value={itemPrice}
        onChange={(e) => setItemPrice(e.target.value)}
        className="w-full border p-3 rounded mb-2 text-black bg-gray-100"
      />
      <button
        onClick={addItemToMenu}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold p-3 rounded w-full mt-2"
      >
        Add Item
      </button>
    </div>
  );
};

export default MenuForm;
