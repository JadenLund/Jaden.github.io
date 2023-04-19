import React from "react";
import { ReactDOM } from "react";

export default function App() {
  // const [image, setImage] = React.useState({ image: "" });

  // React.useEffect(() => {
  //   fetch('https://api.thecatapi.com/v1/images/search?api_key=live_cryzeMviH86EMISpx1pIcPxIE0uVDaKMbZ2gFSeCEipxAwEztUwW38LZ75mtwl8h')
  //     .then(resp => resp.json())
  //     .then(data => setImage(data[0].url))
  // }, [])

  return (
    <div>
      <h1>hi</h1>
      <image src='https://cdn2.thecatapi.com/images/1k9.jpg' />
      {/* <image src={image} /> */}
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
