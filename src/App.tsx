import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Documents from './pages/Documents';
import Team from './pages/Team';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="documents" element={<Documents />} />
            <Route path="team" element={<Team />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
