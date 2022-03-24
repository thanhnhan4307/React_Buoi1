import './App.css';
import BaiTapLayout from './Component/BaiTapLayout/BaiTapLayout';
import BaiTapLayoutComponent from './Component/BTVNComponent/BaiTapLayoutComponent';
import CardFunc from './Component/DemoComponent/CardFunc';
import CardJSX from './Component/DemoComponent/CardJSX';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import StateDemo from './StateDemo/StateDemo';
//Component App sẽ là nơi chứa toàn bộ giao diện của ứng dụng 
function App() {
  return (
    <div className="App">
      
      {/* <CardJSX/>
      <CardFunc/> */}
      {/* <BaiTapLayout/> */}
      {/* <Databinding/> */}
      {/* <HandleEvent/> */}
      {/* <StateDemo/> */}
      {/* <RenderWithMap/> */}
      <BaiTapLayoutComponent/>
    </div>
  );
}

export default App;
