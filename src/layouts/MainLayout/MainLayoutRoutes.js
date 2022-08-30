import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../../elements/Header";
// import Image from "../../photos/istockphoto-545812816-612x612.jpg";
// import Image from "../../photos/istockphoto-545812816-612x6122222222.jpg";
import Image from "../../photos/start-a-clothing-line-retail.webp";


const MainLayoutRoutes = () => {


    return (
        <div>
            <div
                // style={{backgroundImage: `url(../../photos/istockphoto-545812816-612x612.jpg)`}}
                // style={{backgroundImage: `url(${background})`, height: '100%'}}
                style={{
                    backgroundImage: 'url(' + Image + ')',
                    backgroundPosition: 'center',
                    backgroundSize: '100%',
                    minHeight: '100vh',
                    // maxHeight: '100vh',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <header>
                    <Header/>
                </header>

                <main>
                    <Outlet/>
                </main>
            </div>

            {/*<div style={{height: 200, background: "black"}}>*/}
            {/*    <Footer/>*/}
            {/*</div>*/}

        </div>
    )
}

export {MainLayoutRoutes}