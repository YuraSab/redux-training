import React from 'react';
import Image from "../../photos/start-a-clothing-line-retail.webp";
// import Image from "../../photos/ava.jpg";

const MainPage = () => {

    return (
        <div
            style={{
            // background: 'linear-gradient(to right, #E1E0DC, #ECECEC)',
            backgroundImage: 'url(' + Image + ')',
            backgroundPosition: 'center',
            backgroundSize: '100%',
            // minHeight: '100vh',
                minHeight: 870,
            backgroundRepeat: 'no-repeat'

        }}>
            {/*MainPage*/}
        </div>
    )
}

export {MainPage}