import React from 'react';
import { useState, useContext } from 'react';
import Auth from '@aws-amplify/auth';
import AuthContext from '../context/AuthContext';
import { Col, Row, Form,FormControl, Button } from '@themesberg/react-bootstrap';
import Background from '../assets/koc-background.jpg';
import { Link} from "react-router-dom";

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

    const signIn = useContext(AuthContext);
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [link, setLink] = useState('/dashboard');
    const login = async () => {
        console.log("Email ",email);
        console.log("Password ",password);

        if (email.length > 4 && password.length > 2) {
          await Auth.signIn(email, password)
            .then((user) => {
              signIn(user);
            })
            .then((user) => console.log(user))
            .catch((err) => {
              if (!err.message) {
                console.log('1 Error when signing in: ', err);
              } else {
                if (err.message) {
                  setErrorMessage(err.message);
                }
              }
            });
        } else {
          setErrorMessage('Provide a valid email and password');
        }
      };

    return (
    <div style={styles.header}>
        <h1 style={{"textAlign":"center","marginBottom":"1vw"}}><br/></h1>
        <div style={styles.content}><br/>
        <Form>
            <Form.Group style={styles.inputbox} className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>KU Mail Address</Form.Label><br/>
                <FormControl 
                    type='email'
                    name='email' 
                    placeholder='name@example.com' 
                    onChange={(event) => onChangeEmail(event.target.value)}
                    style={{"borderRadius":"10px","width":"15vw","height":"2.5vw","textAlign":"center","fontSize":"1.2vw"}}
                />
            </Form.Group>
            <Form.Group style={styles.inputbox} as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label><br/>
                <Col sm="10">
                <FormControl 
                    type='password'
                    name='password' 
                    placeholder='Password' 
                    onChange={(event) => onChangePassword(event.target.value)}
                    style={{"borderRadius":"10px","width":"15vw","height":"2.5vw","textAlign":"center","fontSize":"1.2vw"}}
                />
                </Col>
            </Form.Group>
        </Form>
        <Button style={{"width":"10vw","height":"5vh","borderRadius":"10px","fontSize":"1.8vw","marginBottom":"5vw"}} onClick={()=>login()}>
            <strong>
            <Link to={link} style={{ textDecoration: 'none' }}>LOGIN</Link> 
            </strong>
        </Button>
        </div>
    </div>
    );
}