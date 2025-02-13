import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Search2 from "./pages/Search2";
import Alfavit from "./components/Alfavit/Alfavit";
import AlfavitSearch from "./components/Alfavit/AlfavitSearch";

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,  
            },
            {
                path: "search2/:value",
                element: <Search2 />,
            },
            {
                path: "alfavit",
                element: <Alfavit />, 
            },
            {
                path: "alfavit/:letter",
                element: <AlfavitSearch />, 
            }
        ]
    }
]);
