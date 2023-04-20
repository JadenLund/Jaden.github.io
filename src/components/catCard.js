import React from "react";
import { useEffect, useState } from "react";
import { Card, Header } from "semantic-ui-react";
import { Image } from "semantic-ui-react";

export default function CatCard() {
    const [image, setImage] = React.useState({ image: "" });

    React.useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?api_key=live_cryzeMviH86EMISpx1pIcPxIE0uVDaKMbZ2gFSeCEipxAwEztUwW38LZ75mtwl8h')
            .then(resp => resp.json())
            .then(data => setImage(data[0].url))
    }, [])

    return (
        <>
            <Card centered>
                <Image className="cat-image" src={image} />
                <Header textAlign='center'>
                    meow
                </Header>
            </Card>

        </>
    );
};
