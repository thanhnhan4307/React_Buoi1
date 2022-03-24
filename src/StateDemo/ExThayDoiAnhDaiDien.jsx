import React, { Component } from 'react'

export default class ExThayDoiAnhDaiDien extends Component {

    state = {
        imgSrc: 'https://i.pravatar.cc?u=1' //Sau khi xác định state cho giá trị mặc định luôn
    }
    handleChangeAvatar = () => {
        let randomNumber = Math.floor(Math.random() * 100) + 1; //Tạo 1 con số ngẫu nhiên
        let newImgSrc = `https://i.pravatar.cc?u=${randomNumber}`;
        //Xử lý state
        this.setState ({
            imgSrc: newImgSrc
        })
    }
  render() {
    return (
      <div className='container'>
          <h3>Thay đổi ảnh đại diện</h3>
          <div className='card w-25'>
                <img src={this.state.imgSrc} alt='...'></img>
                <div className='card-body'>
                    <button className='btn btn-danger' onClick={()=>{
                        this.handleChangeAvatar();
                    }}>Change Avatar</button>
                </div>
          </div>
      </div>
    )
  }
}
