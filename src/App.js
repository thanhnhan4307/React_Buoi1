import './App.css';
import BaiTapLayout from './Component/BaiTapLayout/BaiTapLayout';
import CardFunc from './Component/DemoComponent/CardFunc';
import CardJSX from './Component/DemoComponent/CardJSX';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
//Component App sẽ là nơi chứa toàn bộ giao diện của ứng dụng 
function App() {
  return (
    <div className="App">
      
      {/* <CardJSX/>
      <CardFunc/> */}
      {/* <BaiTapLayout/> */}
      {/* <Databinding/> */}
      <HandleEvent/>
    </div>
  );
}

export default App;
