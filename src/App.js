import "./styles.css";
import { useState } from "react";
import Animal_show from "./Animal_show";

export default function App() {
  const [animals, setAnimals] = useState([]); //array destructuring

  const handelx = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  function getRandomAnimal() {
    const ani = ["bird", "cat", "cow", "dog", "gator", "horse"];

    return ani[Math.floor(Math.random() * ani.length)];
  }

  const randerAni = animals.map((animal) => {
    return <Animal_show type={animal} />;
  });

  return (
    <div className="App" style={{ float: "inline-block" }}>
      <button onClick={handelx}>Add Animal</button>
      <p>{randerAni}</p>
    </div>
  );
}
