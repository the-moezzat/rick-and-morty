import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import './index.css'
import {CharacterDetails, loader as characterLoader} from "./components/characterDetails/CharacterDetails";
import Index from './components/router';
import {Error} from "./components/router/Error";

const router = createBrowserRouter([{
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
        {index: true, element: <Index/>},
        {
            path: "/character/:characterId",
            loader: characterLoader,
            element: <CharacterDetails/>
        }
    ]

}]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
);
