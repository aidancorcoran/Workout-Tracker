import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages & Components
import Navbar from "./components/Navbar"
import Home from "./pages/home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar>
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
            </Routes>
          </div>
        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
