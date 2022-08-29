import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainLayoutRoutes} from "./MainLayoutRoutes";
import {MainPage} from "../../pages/Main-page";
import {ProductPage} from "../../pages/Products-page";
import {OneProductPage} from "../../pages/OneProduct-page";
import {InfoPage} from "../../pages/Info-page";


const MainLayout = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayoutRoutes/>}>
                    {/* oafish (main-page)*/}
                    <Route index element={ <MainPage/> }/>

                    {/* products (list of products)*/}
                    <Route path={'/products'} element={ <ProductPage/> }/>
                    {/* products (list of products)*/}
                    <Route path={'/products/:id'} element={ <OneProductPage/> }/>

                    {/* info (info-page)*/}
                    <Route path={'/info'} element={<InfoPage/>}/>
                    {/* default */}
                    <Route path={'*'} element={ <MainPage/> }/>


                </Route>
            </Routes>
        </div>
    )
}

export {MainLayout}