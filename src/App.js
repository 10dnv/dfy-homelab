import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
        </Routes>
    </Layout>
</BrowserRouter>
  );
}

export default App;
