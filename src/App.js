import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import OnboardingForm from './components/OnboardingForm';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<OnboardingForm/>} />
        <Route path="/profile/:id" element={<ProfilePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
