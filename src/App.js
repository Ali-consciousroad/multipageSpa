import { Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';

// domain.com/welcome => Welcome component 
// domain.com/products => Products component 
function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
