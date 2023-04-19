import React from "react";
import { useEffect, useState } from "react";

export default function CatCard() {
    const [image, setImage] = React.useState({ image: "" });

    React.useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?api_key=live_cryzeMviH86EMISpx1pIcPxIE0uVDaKMbZ2gFSeCEipxAwEztUwW38LZ75mtwl8h')
            .then(resp => resp.json())
            .then(data => setImage(data[0].url))
    }, [])

    return (
        <div>
            <image scr='https://cdn2.thecatapi.com/images/1k9.jpg' />
        </div>
    );
};

