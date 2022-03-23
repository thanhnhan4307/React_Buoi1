import React, { Component } from 'react'
import BTContent from './BTContent'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTNavigation from './BTNavigation'

export default class BaiTapLayout extends Component {
  render() {
    return (
      <section>
         <div> BaiTapLayout</div>
         <BTHeader/>
         <div className='d-flex' style={{ height: "75vh" }}>
             <div className='w-25'>
                <BTNavigation/>
             </div>
             <div className='w-75'>
                <BTContent/>
             </div>
         </div>
         <div>
             <BTFooter/>
         </div>

      </section>
    )
  }
}
