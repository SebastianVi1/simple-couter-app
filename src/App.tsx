import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(0);
  const [animate, setAnimate] = useState("");

  const increaseNumber = () => {
    setCounter(counter + 1);
    setAnimate("grow");
  };

  const decreaseNumber = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
    setAnimate("shrink");
  };

  const resetCounter = () => {
    setCounter(0);
    setAnimate("");
  };

  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => setAnimate(""), 250);
      return () => clearTimeout(timeout);
    }
  }, [counter, animate]);

  return (
    <>
      <div className={"main-wrapper"}>
        <div className="main-container">
          <div className="number-container">
            <h2 className={animate}>{counter}</h2>
          </div>
          <div className="buttons-container">
            <button className="btn" onClick={decreaseNumber}>
              -
            </button>
            <Button variant="flat" className="btn" onClick={increaseNumber}>
              +
            </Button>
            <button className="btn" onClick={resetCounter}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <p className="author-name">Andre Sebastian Villarreal Heredia</p>
    </>
  );
}

export default App;
