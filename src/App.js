import "./App.css";
// import aixos from "axios";
import { useState, useEffect } from "react";

// https://gateway.marvel.com:443/v1/public/characters?apikey=8528bf2bc67a9510e88b971211d775bf
// public: 8528bf2bc67a9510e88b971211d775bf
// private: e7c9c4b19463f5dc11b97dc071da523d3d0d0ce3
//ts: 1
// 1e7c9c4b19463f5dc11b97dc071da523d3d0d0ce38528bf2bc67a9510e88b971211d775bf
// MD5 Hash: 1b9354f69edaf3dc411fe168d79b0811
// SHA1 Hash: 384fdce8edcb955b5f87663039144a473527218f

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    // console.log(personajes);
    fetch(
      "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8528bf2bc67a9510e88b971211d775bf&hash=1b9354f69edaf3dc411fe168d79b0811"
    )
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.data.results);
        console.log(data.data.results);
      });
  }, []);

  return (
    <div className="App">
      <h1>Marvel</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {personajes.map((per) => (
          <div className="col d-flex justify-content-center" key={per.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={` ${per.thumbnail.path}.${per.thumbnail.extension} `}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">{per.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
