import { useState } from "react";
import GenerateQuotes from "./components/GenerateQuotes";

function App() {
  return (
    <>
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="font-body text-wrap text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
          Random Quote Generator
        </h1>
        <p className="font-mono text-2xl">
          Displays a different quote everytime !!!
        </p>
        <GenerateQuotes />
      </div>
    </>
  );
}
export default App;
