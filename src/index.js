import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
<<<<<<< HEAD
=======
import questions from "./mocks/questions.js";
>>>>>>> 15097b720522dacef9ee605469853d26177cc928

const Settings = {
  ERRORS_COUNT: 3
};

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
<<<<<<< HEAD
=======
      questions={questions}
>>>>>>> 15097b720522dacef9ee605469853d26177cc928
    />,
    document.querySelector(`#root`)
);
