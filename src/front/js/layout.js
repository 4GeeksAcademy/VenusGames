import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import PokemonView from "./pages/PokemonView.jsx";
import PokemonDetails from "./pages/pokemonDetails.js";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import Footer from "./component/footer";
import Signup from "./component/SignUp.jsx";
import LogIn from "./component/logIn.jsx";
import CustUser from "./pages/CustUser.js";
import listUser from "./component/listUsers.jsx";
import CustomizedUser from "./component/CustomizedUser.jsx";
import PokeMarket from "./pages/PokeMarket.jsx";
import Products from "./pages/Products.jsx";
import Favorites from "./pages/Favorites.jsx";
import SearchBar from "./pages/SearchBar.jsx";
import TechnicalSupport from "./pages/technicalSupport.js";
import Aboutus from "./pages/aboutUs.js";
import FrequentQuestions from "./pages/frequentQuestions.js";
import { HeaderMenu } from "./pages/headerMenu.js";
import FilterBar from "./pages/FilterBar.jsx";
import NewProductForm from "./component/NewProductForm.js";
import NewProductPage from "./component/NewProductPage.js";



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<LogIn />} path="/logIn" />
                        <Route element={<Signup />} path="/Signup" />
                        <Route element={<CustUser />} path="/CustUser" />
                        <Route element={<listUser />} path="listUser"/>
                        <Route eleent={<CustomizedUser />} path="/CustomizedUser" />
                        <Route element={<PokeMarket />} path="/PokeMarket" />
                        <Route element={<Products />} path="/Products" />
                        <Route element={<NewProductForm />} path="/NewProductForm" />
                        <Route element={<NewProductPage/>} path="/NewProductPage"/>
                        <Route element={<Favorites />} path="/Favorites" />
                        <Route element={<SearchBar />} path="/SearchBar" />
                        <Route element={<PokemonView />} path="/pokemonView" />
                        <Route element={<PokemonDetails />} path="/pokemon/:name" />
                        <Route element={<HeaderMenu />} path="/Headermenu" />
                        <Route element={<FilterBar />} path="/FilterBar" />
                        <Route element={<Home />} path="/" />
                        <Route element={<Footer />} path="/footer" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<TechnicalSupport />} path="/TechnicalSupport" />
                        <Route element={<Aboutus />} path="/aboutus" />
                        <Route element={<FrequentQuestions />} path="/frequentQuestions" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
