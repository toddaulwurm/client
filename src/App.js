import './App.css';
import ProductForm from './Components/ProductForm';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Manager</h1>
      </header>
      <Main></Main>
      <ProductForm></ProductForm>
    </div>
  );
}

export default App;
