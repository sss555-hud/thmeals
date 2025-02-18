import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Search2 from "./pages/Search2";
import Alfavit from "./components/Alfavit/Alfavit";
import AlfavitSearch from "./components/Alfavit/AlfavitSearch";
import Country from "./components/Country/Country";
import CountryInfo from "./components/Country/CountryInfo";
import Info from "./pages/Info";
import RecipesPage from "./pages/RecipesPage";

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
            },
            {
                path: "country",
                element: <Country />,
            },
            {
                path: "country/:country",
                element: <CountryInfo />,
            },
            {
                path: "info/:idMeal",
                element: <Info />,
            },
            {
                path: "recipes/:ingredient",
                element: <RecipesPage />,
            }
        ]
    }
]);
