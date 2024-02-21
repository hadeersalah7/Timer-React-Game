import { useState, useRef } from "react";
export default function Player() {
  const [entityName, setEntityName] = useState(null)
  const playerName = useRef()

  const handleBtnClick = () => {
    setEntityName(playerName.current.value)
    playerName.current.value = ""
  }
  return (
    <section id="player">
      <h2>Welcome {entityName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleBtnClick}>Set Name</button>
      </p>
    </section>
  );
}
