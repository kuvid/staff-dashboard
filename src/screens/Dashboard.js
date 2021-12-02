import React from "react";
import Chart from "react-apexcharts";
import Barchart from "../components/Barchart";
import StatsCard from '../components/Card';
import Navbar from '../components/Navbar'

function Dashboard(props) {
  //Oriantation Check
  let ishorizontal = true;

  //Apexchart Objects
  let series = [{
    name:"İyileşen",
    data: [44, 55, 41, 64, 22, 43, 21]
  }, {
      name:"Aktif (İzolasyonda)",
    data: [53, 32, 33, 52, 13, 44, 32]
  }];

  let chartOptions = {
    chart: {
        type: 'bar',
        height: 430
      },
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: 'top',
          },
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      xaxis: {
        categories: ["29.11.2021", "30.11.2021", "01.12.2021", "02.12.2021", "03.12.2021", "04.12.2021", "05.12.2021"],
      },
  }

  return (
    <div>  
        <Navbar/>  
        <Barchart/>
        <div style={{"display": "flex", "justify-content": "space-between"}}>
            <StatsCard title={"Aktif Vaka Oranı"} number={"120"}/>
            <StatsCard title={"COVID Geçiren Öğrencilerin Oranı"} number={"10%"}/>
            <StatsCard title={"COVID Geçiren Öğrenci Sayısı"} number={"500"}/>
        </div>
    </div>
  );
}

export default Dashboard;
