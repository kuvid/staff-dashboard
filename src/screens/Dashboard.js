import React, {useEffect, useState} from "react";
import Barchart from "../components/Barchart";
import StatsCard from '../components/Card';
import Navbar from '../components/Navbar';
import axios from 'axios';

function Dashboard() {

  return (
    <div>  
        <Navbar/>  
        <Barchart/>
        <div style={{"display": "flex", "justifyContent": "space-between"}}>
            <StatsCard title={"COVID Geçiren Öğrencilerin Toplama Oranı"} number={2}/>
            <StatsCard title={"COVID Geçiren Öğrencilerin Sayısı"} number={1}/>
            <StatsCard title={"İyileşen Öğrenci Sayısı"} number={0}/>
        </div>
    </div>
  );
}

export default Dashboard;
