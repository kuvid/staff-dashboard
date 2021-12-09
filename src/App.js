import React, { useEffect } from "react";
import './App.css';
import Dashboard from './screens/Dashboard';
import ProtectedRoute from './components/ProtectedRoute'
import Admin from './screens/Admin'
import Login from './screens/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

const awsConfig = {
  identityPoolId: 'eu-central-1_fkiHAFH6D',
  region: 'eu-central-1',
  userPoolId: 'eu-central-1_fkiHAFH6D',
  userPoolWebClientId: '72o3b96k1ciththpdudj6ores9'
}

function App() {
  useEffect(() => {
    Amplify.configure(awsConfig);
  });

  return (
    <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/dashboard" element={<ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute><Admin />
    </ProtectedRoute>} />
            </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
