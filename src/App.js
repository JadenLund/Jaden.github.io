import React from "react";
import { ReactDOM } from "react";

export default function App() {
  const [image, setImage] = React.useState({ image: "" });

  React.useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?api_key=live_cryzeMviH86EMISpx1pIcPxIE0uVDaKMbZ2gFSeCEipxAwEztUwW38LZ75mtwl8h')
      .then(resp => resp.json())
      .then(data => setImage(data[0].url))
  }, [])

  return (
    <div>
      <img className="cat-image" src={image} />
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById("root"));
