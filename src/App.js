

import './App.css';

import { Header, Footer } from './Component/Index';

import { About, Blog, Cart, Connection, Contact, Home, Shop, Product, Login, SignUp } from './Pages';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (

    <>

      <Header />

      <Routes>
          <Route path='/'             element= {<Home />} />
          <Route path='/Blog'         element= {<Blog />} />
          <Route path='/Shop'         element= {<Shop />} />
          <Route path='/About'        element= {<About />} />
          <Route path='/Login'        element= {<Login />} />
          <Route path='/SignUp'       element= {<SignUp />} />
          <Route path='/Cart'         element= {<Cart />} />

      </Routes>

      <Footer />


    </>
  );
}

export default App;
