import Signup from "./component/signup";
import Signin from "./component/signin";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Todolist from "./component/todolist";
import Addtodo from "./component/addtodo";



function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<Signin/>}></Route>
             <Route path="/signup" element={<Signup/>}></Route> 
             <Route path="/todolist" element={<Todolist/>}></Route> 
             <Route path="/addtodo" element={<Addtodo/>}></Route> 

          
            {/* <Route path="/logout"  element={<Logout/>}></Route>   */}
          </Routes>
          
      </BrowserRouter>
     
    </div>

  );
}

export default App;