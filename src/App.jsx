import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout/Layout'
// import About from './pages/About'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Products from './pages/Products';
import FeaturedProducts from './components/Products/FeaturedProducts';
import NewProduct from './components/Products/NewProducts';
import Users from './pages/Users'
import Userdetails from './pages/Userdetails'
import Admin from './pages/Admin'
const LazyAbout  = React.lazy(()=>import('./pages/About'));

function App() {
  return (  
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<React.Suspense fallback="...Loading"><LazyAbout /></React.Suspense>} />
        <Route path = "/gallery" element={<Gallery />}/>
        <Route path="/products" element={<Products />} >
          <Route index element ={<FeaturedProducts />} />
          <Route path="feature" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="/users" element = {<Users />} >
          <Route path=":userid" element={<Userdetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>    
    </>  
  )
}

export default App
