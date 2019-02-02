import React from "react";
import jokesData from "./jokesData"
import Joke from "./components/Joke";

function App() {
  const JokeComponents = jokesData.map(joke => <Joke key={joke.id} joke={joke}/>)

  return(
    <div className="jokes">
      {JokeComponents}
    </div>
  );
}

export default App;
