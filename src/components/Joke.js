import React from "react";

function Joke(props) {
  // const question = props.question && <p>Question: {props.question}</p>
  return(
    <div className="joke">
      {/* {question} */}
      <p style={{display: !props.joke.question && "none"}}>Question: {props.joke.question}</p>
      <p style={{color: !props.joke.question && "grey"}}>Answer: {props.joke.punchLine}</p>
      <hr />
    </div>
  );
}

export default Joke;
