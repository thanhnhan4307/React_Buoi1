import React, { Component } from 'react'

export default class ExThayDoiFontChu extends Component {

    state = {
        fSize: 67 //state là fontZise
    }

    handleChangeFontSize = (number) => {
        this.setState({
            fSize: this.state.fSize + number
        })
    }


  render() {
    return (
      <div className='container'>
          <h3>Bài tập thay đổi font chữ</h3>
          <p style={{fontSize:`${this.state.fSize}px`}}>Học lập trình</p>
          <button className='btn btn-primary' onClick={()=>{
             this.handleChangeFontSize(5);
          }}>+</button>

          <button className='btn btn-primary ml-2' onClick={()=>{
            this.handleChangeFontSize(-5);
             
          }}>-</button>
      </div>
    )
  }
}


/*Các bước khi thực hiện 1 task hoặc 1 chức năng trên reactjs
B1: Dàn layout (chia component)
B2: Xác định dữ liệu nào trên giao diện sẽ thay đổi khi người dùng thao tác => Đặt nó trong state (numver?string?boolean?object?array)
B3: Binding state lên giao diện nơi chứa dữ liệu thay đổi
B4: 

*/