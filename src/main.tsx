import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import './index.css'
import {CharacterDetails, loader as characterLoader} from "./components/characterDetails/CharacterDetails";

const router = createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [
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
