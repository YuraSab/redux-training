import React from 'react';
import {FullWindowLayout} from "./layouts/FullWindowLayout";
// import {useSelector} from "react-redux";

const App = () => {

    // const {cart, wishList} = useSelector( ({ cart: {cart}, wishList: {wishList} }) => ({ cart, wishList }) );


    return (
        <div>
            <FullWindowLayout/>
        </div>
    )
}

export default App;