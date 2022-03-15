import { Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

// domain.com/welcome => Welcome component 
// domain.com/products => Products component 
function App() {
  return (
    <div>
      <MainHeader />
      <header></header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          {/* Load the products */}
          <Route path="/products" exact>
            <Products />
          </Route>
          {/* Load the details of that product */}
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/<any value>