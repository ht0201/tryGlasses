import React, { Component } from "react";
import "./BTtryGlasses.css";

let arrProduct = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/v1.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/v2.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/v3.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 4,
    price: 30,
    name: "DIOR D6005U",
    url: "./img/v4.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 5,
    price: 30,
    name: "PRADA P8750",
    url: "./img/v5.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 6,
    price: 30,
    name: "PRADA P9700",
    url: "./img/v6.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 7,
    price: 30,
    name: "FENDI F8750",
    url: "./img/v7.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 8,
    price: 30,
    name: "FENDI F8500",
    url: "./img/v8.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 9,
    price: 30,
    name: "FENDI F4300",
    url: "./img/v9.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class TryGlasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: null,
        price: null,
        name: "",
        url: "./img/model.jpg",
        desc: "",
      },
    };
  }

  renderListGlass = () => {
    const listGlassTr = arrProduct.map((glass, index) => {
      return (
        <img
          key={index}
          className="glass"
          src={glass.url}
          alt={glass.desc}
          onClick={() => {
            this.handleChangeGlass(glass);
          }}
        />
      );
    });

    return listGlassTr;
  };

  handleChangeGlass = (glass) => {
    this.setState({
      product: {
        id: glass.id,
        price: glass.price,
        name: glass.name,
        url: glass.url,
        desc: glass.desc,
      },
    });
  };

  render() {
    const { name, url, desc } = this.state.product;

    if (this.state.product.id !== null) {
      document.getElementById("glass__try").style.opacity = "0.5";
      document.getElementById("card-body").style.opacity = "0.5";
    }
    return (
      <div className="main">
        <div className="title">
          <h2>TRY GLASSESS APP ONLINE</h2>
        </div>
        <div className="content container">
          <div className="content__model row">
            <div className="col-6 d-flex">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./img/model.jpg"
                  alt="temp_img"
                />
                <img
                  id="glass__try"
                  className="glass__try"
                  src={url}
                  alt="temp_img"
                />
                <div id="card-body" className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{desc}</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img className="glass" src="./img/model.jpg" alt="2" />
            </div>
          </div>
          <div className="content__glasses row d-flex">
            {this.renderListGlass()}
          </div>
        </div>
      </div>
    );
  }
}
