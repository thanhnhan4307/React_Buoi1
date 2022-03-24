import React, { Component } from 'react'

export default class HandleEvent extends Component {

  showMessage = () => {
    alert('Hello sđfd')
  }

  sayHello = (name) => {
    alert('Hi !'+ name);
  }
  
  render() {
    return (
      <div className='container'>
          <h3>Handle Event</h3>
          <button id='btn' className='btn btn-success' onClick={this.showMessage}>Click me!!!</button>
          <button id='btn' className='btn btn-success' onClick={ () => {
            alert('Hello')
          }}>Click me!!!</button>

          <hr />
          <h3>Xử lý sự kiện có tham số</h3>
          <button className='btn btn-success' onclick={this.sayHello.bind(this,'Nhân')}>Say hello</button>
          <button className='btn btn-primary' onclick={() =>{
            this.sayHello('Hoàng Vê');
          }}>Say hello</button>
      </div>
    )
  }
}
