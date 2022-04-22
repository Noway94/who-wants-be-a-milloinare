import { useRef } from "react";

export default function Start({ setUsername,setStop}) {
  const inputRef = useRef();

  const handleClick = () => {
      setStop(false);
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
