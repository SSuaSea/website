import './App.css';
import Header from "./layout/Header.jsx";
import {Button,Form,Carousel } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Route,Routes } from 'react-router-dom';
import Login from './Login.jsx';

function App() {
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  let [libs] = useState(data);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <h1 className="my-3">Best</h1>
              <Carousel className="carousel carousel-dark slide">
                {chunkArray(libs, 3).map((group, index) => (
                  <Carousel.Item key={index}>
                    <div className="row text-dark">
                      {group.map((lib, idx) => (
                        <Card key={idx} lib={lib} image={lib.image} />
                      ))}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="container">
              <h1 className="text-end my-3">New</h1>
              <Carousel className="carousel carousel-dark slide">
                {chunkArray(libs.slice(9, 17), 3).map((group, index) => (
                  <Carousel.Item key={index}>
                    <div className="row text-dark">
                      {group.map((lib, idx) => (
                        <Card key={idx} lib={lib} image={lib.image} />
                      ))}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div>
              <h1 className="text-center my-3">Collection</h1>
            </div>
          </>
        } />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4 text-center">
      <img src={props.image} width="50%" alt="book" />
      <h5>{props.lib.title}</h5>
      <h6>{props.lib.price}</h6>
    </div>
  );
}

export default App;