import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app.jsx";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import questions from "./mocks/questions.js";
>>>>>>> 15097b720522dacef9ee605469853d26177cc928
=======
import reducer from "./reducer/reducer.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./reducer/user/user.js";
import {createAPI} from "./api.js";
>>>>>>> f630f2bed8a8b913adfedc5f14a2c6e0d187ed5e


// Выносим код в отдельную функцию, чтобы развязать циклическую зависимость:
// `store` зависит от `api`, а `api` зависит от `store`.
const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadQuestions());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
<<<<<<< HEAD
    <App
      errorsCount={Settings.ERRORS_COUNT}
<<<<<<< HEAD
=======
      questions={questions}
>>>>>>> 15097b720522dacef9ee605469853d26177cc928
    />,
=======
    <Provider store={store}>
      <App />
    </Provider>,
>>>>>>> f630f2bed8a8b913adfedc5f14a2c6e0d187ed5e
    document.querySelector(`#root`)
);
