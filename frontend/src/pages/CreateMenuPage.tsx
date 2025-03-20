import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuForm from "../components/MenuForm";
import MenuList from "../components/MenuList";

const localhostURL = import.meta.env.VITE_LOCAL_HOST;

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

const CreateMenuPage: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await axios.get(`${localhostURL}`);
      setMenus(response.data);
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };

  return (
    <div className="flex flex-row justify-center items-start w-full min-h-screen overflow-hidden p-6">
      <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
        <MenuForm fetchMenus={fetchMenus} />
      </div>
      <div className="w-2/3 bg-white p-6 rounded-lg shadow-md ml-6 overflow-y-auto max-h-[90vh]">
        <MenuList menus={menus} />
      </div>
    </div>
  );
};

export default CreateMenuPage;
