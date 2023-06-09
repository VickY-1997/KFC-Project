import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './Footer'
import Home from './Home/Home';
import Main from './Main';
import Listing from './listing/listingLogic';
import DetailDisplay from './Details/detailsLogic';
import PlaceOrder from './Orders/PlaceOrder';
import ViewOrder from './Orders/ViewOrder';
import Register from './login/registerComponent';
import Login from './login/loginComponent';


const Routing = () => {
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="listing/:mealId" element={<Listing/>}/>
                    <Route path="details" element={<DetailDisplay/>}/>
                    <Route path="placeOrder/:restName" element={<PlaceOrder/>}/>
                    <Route path="viewOrder" element={<ViewOrder/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="login" element={<Login/>}/>

                </Route>
            </Routes>

            <Footer/>
            
            </BrowserRouter>
        </div>
    )
}

export default Routing;