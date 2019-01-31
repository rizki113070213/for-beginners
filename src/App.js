import React from "react";
// import Header from "./components/Header"
// import MainContent from "./components/MainContent"
// import Footer from "./components/Footer"

function App() {
  const firstName = "Muhammad";
  const lastName = "Rizki";
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return(
    <div>
      <h1>Hello {`${firstName} ${lastName}`}!</h1>
      <h1>Good {timeOfDay}!</h1>
    </div>
  );
}

export default App;
