import React from 'react';
import { useState} from 'react';
import Auth from '@aws-amplify/auth';
import { Col, Row, Form,FormControl, Button } from '@themesberg/react-bootstrap';
import Background from '../assets/koc-background.jpg';
import { Navigate } from 'react-router-dom';
import { IconAirlineSeatLegroomExtra } from '@aws-amplify/ui-react';

const styles = {
    header: {
      backgroundImage: "url(" + Background + ")",
      marginBottom:"3vw",
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
  
    content: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      textAlign:"center", 
      marginLeft:"20vw", 
      marginRight:"20vw",
      marginTop:"20vh"
    },
    inputbox : {
        borderRadius:"10px",
        marginBottom:"4vh",
        textAlign:"center",
        fontSize:"2vw"
    }
  }


export default function LoginScreen() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [path, setPath] = useState("");
  const [isAlert, setAlert] = useState(false);

  const login = (e) => {
    e.preventDefault();
    Auth.signIn({
      username: email,
      password,
    })
      .then((user) => {
        console.log(user.signInUserSession.idToken.jwtToken);
        if(user) {
          setAlert(false);
          localStorage.setItem("idToken",user.signInUserSession.idToken.jwtToken);
          localStorage.setItem("isAuthenticated", "true");
          setPath("/dashboard");
        }
      })
      .catch((err) => {
        alert("Wrong Email or Password! Try again!");
        console.log(err);
      });
  };
    return (
    <div style={styles.header}>
        <h1 style={{"textAlign":"center","marginBottom":"0.5vw","color":"white","fontSize":"8vh"}}><br/>KUvid Admin Dashboard</h1>
        <div style={styles.content}><br/>
        <Form>
            <Form.Group style={styles.inputbox} className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>KU Mail Address</Form.Label><br/>
                <FormControl 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    style={{"borderRadius":"10px","width":"15vw","height":"2.5vw","textAlign":"center","fontSize":"1.2vw"}}
                />
            </Form.Group>
            <Form.Group style={styles.inputbox} as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label><br/>
                <Col sm="10">
                <FormControl 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    style={{"borderRadius":"10px","width":"15vw","height":"2.5vw","textAlign":"center","fontSize":"1.2vw"}}
                />
                </Col>
            </Form.Group>
        </Form>
        <Button style={{"width":"10vw","height":"5vh","borderRadius":"10px","fontSize":"1.8vw","marginBottom":"5vw"}} onClick={login}>
            <strong>LOGIN</strong>
            {path == "/dashboard" ? <Navigate to="/dashboard" /> : null}
        </Button>

        </div>
    </div>
    );
}