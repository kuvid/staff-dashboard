import React, {useEffect,useState}from "react";
import Chart from "react-apexcharts";
import axios from 'axios';

function Barchart() {
  const idToken = localStorage.getItem("idToken");
  const [chartData, setChartData] = useState([]);

  const getChartData = () => 
    {
     axios.get("https://3mc5pe0gw4.execute-api.eu-central-1.amazonaws.com/Production/kuvid_admin_get_statistics", 
      {
          headers: {
              'Authorization': 'Bearer ' + idToken, /* this is the JWT token from AWS Cognito. */
              },
      })
          .then(response => {
              console.log('getting data from axios', response.data);
              setChartData(response.data);
          })
          .catch(error => {
              console.log(error);
          });
  }

  useEffect(() => {
    getChartData();
});

  //Apexchart Objects

  let series = [{
    name:"İyileşen",
    data: chartData[1]
  }, {
      name:"Aktif (İzolasyonda)",
    data: chartData[2]
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
        categories: chartData[0],
      },
  }

  return (
    <div>
      <div className="card card-custom card-stretch gutter-b">
        <div className="card-body d-flex flex-column p-0">
        <div className="d-flex flex-column mr-2">
            </div>
          <div
            id="kt_stats_widget_7_chart"
            className="card-rounded-bottom"
            style={{ height: "500px"}}
          >
            <Chart options={chartOptions} series={series} type={"bar"} height={"400px"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Barchart;
