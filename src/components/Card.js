import React, {useEffect,useState} from 'react';
import {Col, Card,Button} from '@themesberg/react-bootstrap';
import axios from 'axios';

function StatsCard(props) {

  const idToken = localStorage.getItem("idToken");
  const [cardData, setCardData] = useState([]);

  const getCardData =  () => 
    {
      axios.get("https://3mc5pe0gw4.execute-api.eu-central-1.amazonaws.com/Production/kuvid_admin_get_cards", 
      {
          headers: {
              'Authorization': 'Bearer ' + idToken, /* this is the JWT token from AWS Cognito. */
              },
      })
          .then(response => {
              setCardData(response.data);
          })
          .catch(error => {
              console.log(error);
          });
  }

  useEffect(() => {
    getCardData();
});
  return (
    <Card style={{ width: '25rem', height: '10rem',backgroundColor:'#6A0AC7',marginTop:'0.1vw', margin:'2vw', border: "10px", borderRadius:"15px"}}>
  <Card.Img />
  <Card.Body style={{"fontSize":"20px","color":"white","textAlign":"center"}}>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text style={{"fontSize":"30px"}}><br/>
    <strong>{props.number==2? `${cardData[2]*100} %` : cardData[props.number]}</strong>
    </Card.Text>
  </Card.Body>
</Card>
  );
}

export default StatsCard;
