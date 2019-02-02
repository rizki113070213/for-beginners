import React from "react";

function Joke(props) {
  // const question = props.question && <p>Question: {props.question}</p>
  return(
    <div className="joke">
      {/* {question} */}
      <p style={{display: !props.question && "none"}}>Question: {props.question}</p>
      <p style={{color: !props.question && "grey"}}>Answer: {props.punchLine}</p>
      <hr />
    </div>
  );
}

export default Joke;
