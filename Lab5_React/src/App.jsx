import { useState } from "react";
import "./app.css";

// Exercise 1
import ClickButton from "./exercises/exercise1/ClickButton";
import ToggleButton from "./exercises/exercise1/ToggleButton";
import ThreeButtons from "./exercises/exercise1/ThreeButtons";
import Counter from "./exercises/exercise1/Counter";

// Exercise 2
import DisplayTab from "./exercises/exercise2/DisplayTab";

// Exercise 3
import AuthForm from "./exercises/exercise3/AuthForm";

// Exercise 4
import DivForm from "./exercises/exercise4/DivForm";

function App() {
  const [exercise, setExercise] = useState(1); // 1,2,3,4
  const table1 = ["hello", "world", "from", "react"];
  const table2 = ["apple", "banana", "cherry", "date"];

  return (
    <div className="app-container">
      <nav className="exercise-nav">
        <button onClick={() => setExercise(1)}>Exercise 1</button>
        <button onClick={() => setExercise(2)}>Exercise 2</button>
        <button onClick={() => setExercise(3)}>Exercise 3</button>
        <button onClick={() => setExercise(4)}>Exercise 4</button>
      </nav>

      <div className="exercise-page">
        {exercise === 1 && (
          <div>
            <h1>Exercise 1</h1>
            <ClickButton />
            <ToggleButton />
            <ThreeButtons />
            <Counter />
          </div>
        )}

        {exercise === 2 && (
          <div>
            <h1>Exercise 2</h1>
            <DisplayTab table={table1} />
            <hr />
            <DisplayTab table={table2} />
          </div>
        )}

        {exercise === 3 && (
          <div>
            <h1>Exercise 3</h1>
            <AuthForm />
          </div>
        )}

        {exercise === 4 && (
          <div>
            <h1>Exercise 4</h1>
            <DivForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
