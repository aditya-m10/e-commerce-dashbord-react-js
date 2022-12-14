import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Footer from './components/Footer';
import SignUp from './components/Signup';
import PrivateComponent from './components/PrivateComponenet';
import Login from './components/login';
import AddProduct from  "./components/AddProduct"
import ProductList from './components/ProductList';
import Updateproduct from './components/Updateproduct';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Nav />
         <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path="/" element={<ProductList/>} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update/:id" element={<Updateproduct />} />
            <Route path="/logout" element={<h1>logout product  </h1>} />
            </Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />}></Route>
         </Routes>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
