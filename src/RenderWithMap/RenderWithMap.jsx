import React, { Component } from "react";

export default class RenderWithMap extends Component {
  productList = [
    {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
    { id: 2, name: "red car", img: "./img/products/red-car.jpg", price: 1000 },
    {
      id: 3,
      name: "silver car",
      img: "./img/products/silver-car.jpg",
      price: 1000,
    },
    {
      id: 4,
      name: "steel car",
      img: "./img/products/steel-car.jpg",
      price: 1000,
    },
  ];
  renderProduct = () => {
    // let arrJSX = [];
    // for (let prod of this.productList) {
    //   let trJSX = (
    //     <tr>
    //       <td>{prod.id}</td>
    //       <td>{prod.name}</td>
    //       <td>
    //         <img src={prod.img} alt="..." width={50} height={50} />
    //       </td>
    //       <td>{prod.price}</td>
    //     </tr>
    //   );
    //   //Đưa tr vào mảng jsx
    //   arrJSX.push(trJSX);
    // }
    // return arrJSX;

    let result = this.productList.map((prod,index)=>{
        return <tr>
            <td>{prod.id}</td>
            <td>{prod.name}</td>
            <td>
            <img src={prod.img} alt="..." width={50} height={50} />
            </td>
            <td>{prod.price}</td>
        </tr>
    })
    return result;
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead className="bg-dark text-light">
            <tr>
              <td>id</td>
              <td>name</td>
              <td>img</td>
              <td>price</td>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
      </div>
    );
  }
}
