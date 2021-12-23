import React, { useReducer, useState } from 'react';
import Background from '../assets/koc-background.jpg';
import Navbar from '../components/Navbar'
import axios from "axios";

const formReducer = (state, event) => {
  if(event.reset) {
   return {
     covid_status: '',
     student_id: '',
     update_date: '',
   }
 }
  return {
    ...state,
    [event.name]: event.value
  }
}

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
      marginTop:"1.5vw",
      textAlign:"center", 
      marginLeft:"20vw", 
      marginRight:"20vw"
    },

    title : {
        marginBottom:"1vw",
        fontSize:"3vh"
    }
  }

function Admin() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const idToken = localStorage.getItem("idToken");

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
       reset: true
     })
    }, 3000);
    console.log(formData);
    console.log(idToken);

     axios
      .post(
        "https://3mc5pe0gw4.execute-api.eu-central-1.amazonaws.com/Production/kuvid_admin_change_status",
        formData,
        {
          headers: {
            Authorization: `Bearer ${idToken}` /* this is the JWT token from AWS Cognito. */,
            "Content-Type": "application/json",
          },
        }
      )
      .catch((error) => {
        console.log(error);
      });
      alert(`You have submitted updated ${formData.covid_status} covid status for ${formData.covid_code} on ${formData.update_date}`);

  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
      
      <div style={styles.header}>  
            <Navbar/>  
          <h1 style={{"textAlign":"center","marginTop":"1vw"}}><br/></h1>
    <div>
      <form onSubmit={handleSubmit} style={styles.content}>
          <div style={{"paddingTop":"2vw"}}>
              <h4>Negatif PCR testi sonucu gönderen öğrencilerin COVID durumunu negatif olarak güncelleyiniz.</h4>
            </div>
        <fieldset style={{"marginBottom":"4vw","padding":"4vw","borderWidth":"0"}}>
          <label>
            <p style={styles.title}><strong>Patient ID</strong></p>
            <input style={{"borderRadius":"10px","width":"15vw","height":"2.5vw","textAlign":"center","fontSize":"1.2vw","marginBottom":"2vw"}} name="student_id" onChange={handleChange} value={formData.student_id || ''}/>
          </label>
          <label>
            <p style={styles.title}><strong>Covid Status</strong></p>
            <select style={{"borderRadius":"10px","width":"18vw","height":"2.5vw","marginBottom":"2vw","textAlign":"center","fontSize":"1.2vw"}} name="covid_status" onChange={handleChange} value={formData.covid_status || ''}>
                <option value="">Please choose an option</option>
                <option value="negative">Negative</option>
                <option value="positive">Positive</option>
            </select>
          </label>
          <label>
            <p style={styles.title}><strong>Date</strong></p>
            <input style={{"borderRadius":"10px","width":"15vw","height":"2.5vw","textAlign":"center","fontSize":"1.2vw"}} type="date" id="start" name="update_date"
                min="2021-01-01" max="2023-12-31" onChange={handleChange} value={formData.update_date || ''}/>
          </label>
        </fieldset>
        <button onClick={handleSubmit} style={{"width":"10vw","height":"5vh","borderRadius":"10px","fontSize":"1.8vw","marginBottom":"3vw"}} type="submit"><strong>Submit</strong></button>
      </form>
    </div>
    </div>
  )
}

export default Admin;