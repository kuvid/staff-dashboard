import logo from './logo.svg';
import './App.css';
import Dashboard from './screens/Dashboard'
import Navbar from './components/Navbar'
import Login from './screens/Login'
import Admin from './screens/Admin'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

const awsConfig = {
  identityPoolId: 'eu-central-1_fkiHAFH6D',
  region: 'eu-central-1',
  userPoolId: 'eu-central-1_fkiHAFH6D',
  userPoolWebClientId: '72o3b96k1ciththpdudj6ores9'
}
Amplify.configure(awsConfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default withAuthenticator(App)
