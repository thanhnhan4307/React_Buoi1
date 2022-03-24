/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class ExThayDoiMauXe extends Component {

    state = {
        imgCar: './img/products/black-car.jpg'
    }
    handleChangeColor = (color) => {
        let newImgCar = `./img/products/${color}-car.jpg`
        this.setState({
            imgCar:newImgCar
        })
    }
  render() {
    return (
      <div className='container'>
          
          <div className='row'>
              <div className='col-6'>
              <img src={this.state.imgCar} alt='...' className='w-100' />
              </div>
              <div className='col-6'>
                  <div className='row'>
                      <div className='col-3'>
                          <button style={{backgroundColor:'black', color:'white'}} onClick={()=>{
                              this.handleChangeColor('black');
                          }}>Black car</button>
                      </div>
                      <div className='col-3'>
                          <button style={{backgroundColor:'red', color:'white'}}  onClick={()=>{
                              this.handleChangeColor('red');}}>Red car</button>
                      </div>
                      <div className='col-3'>
                          <button style={{backgroundColor:'silver', color:'white'}} onClick={()=>{
                              this.handleChangeColor('silver');}}>Silver car</button>
                      </div>
                      <div className='col-3'>
                          <button style={{backgroundColor:'steel', color:'white'}} onClick={()=>{
                              this.handleChangeColor('steel');}}>Steel car</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
