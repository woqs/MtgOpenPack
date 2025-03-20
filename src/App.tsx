import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OpenAPackPage from './Pages/OpenAPackPage';
import DraftPage from './Pages/DraftPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<OpenAPackPage />} />
          <Route path="draft" element={<DraftPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
