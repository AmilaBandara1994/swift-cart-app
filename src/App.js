import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Product from './components/Product';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Home/>} >
      <Route index element={<Dashboard  />}></Route>
      <Route path='/cart' element={<Cart  />}></Route>
      <Route path='/products' element={<Product  />}></Route>
    </Route>
  ))
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
