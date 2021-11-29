import React from "react";
import "./App.css";
import Btn from "./Shared/Component/Buttons/Btn";
import Title from "./Shared/Component/Title";
import { AiFillProject } from "react-icons/all";
function App() {
  return (
    <div className="App">
      <Title title="Hello" icon={<AiFillProject size={50}/>}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ut autem
        vel, velit consequatur molestiae et natus quibusdam reprehenderit
        voluptates.
      </Title>
      <Btn>Hello Sakib</Btn>
    </div>
  );
}
export default App;
