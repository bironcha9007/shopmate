import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components";
import { ProductList } from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
}

export default App;
