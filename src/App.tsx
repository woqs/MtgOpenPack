import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OpenAPackPage from './Pages/OpenAPackPage';
import SealedPage from './Pages/SealedPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<OpenAPackPage />} />
          <Route path="draft" element={<SealedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
