import React, { useEffect } from "react";
import EntryComponent from "../components/EntryComponent";
import ButtonsRow from "../components/ButtonsRow";
import CardComponent from "../components/CardComponent";
import axios from "axios";

const localhostURL = import.meta.env.VITE_LOCAL_HOST;

const HomePage: React.FC = () => {
  const fetchData = async (): Promise<void> => {
    try {
      await axios.get(localhostURL);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <EntryComponent />
      <ButtonsRow />
      <CardComponent />
    </div>
  );
};

export default HomePage;
