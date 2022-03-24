import React, { Component } from 'react'
import BaiTapBody from './BaiTapBody'
import BaiTapFooter from './BaiTapFooter'
import BaiTapHeader from './BaiTapHeader'
import BaiTapItem from './BaiTapItem'

export default class BaiTapLayoutComponent extends Component {
  render() {
    return (
      <div>BaiTapLayoutComponent
      <BaiTapHeader/>
      <BaiTapBody/>
     <div className='d-flex justify-content-center ' >
        <div className='w-50' >
  
        <BaiTapItem/>
        </div>
        
     </div>
      <BaiTapFooter/>
      </div>
    )
  }
}
