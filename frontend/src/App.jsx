import './App.css';
import Evaluate from './components/Evaluate';
import ExcuseGenerator from './components/ExcuseGenerator';
import LoginForm from './components/LoginForm';
import SliderComponent from './components/SliderComponent';
import HomePage from './components/HomePage';
import OptionsPage from './components/OptionsPage'; // Import the new OptionsPage
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './components/SignupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />         
        <Route path="/options" element={<OptionsPage />} />     
        <Route path="/evaluate" element={<Evaluate />} />       
        <Route path="/contextualExcuse" element={<ExcuseGenerator />} /> 
        <Route path="/customExcuse" element={<SliderComponent />} /> 
        <Route path="/signup" element={<SignUpPage />} />
   
      </Routes>
    </Router>
  );
}

export default App;
