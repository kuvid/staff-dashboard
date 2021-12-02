import React from "react";
import Chart from "react-apexcharts";

function Barchart(props) {
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
      <div class="card card-custom card-stretch gutter-b">
        <div class="card-body d-flex flex-column p-0">
        <div class="d-flex flex-column mr-2">
            </div>
          <div
            id="kt_stats_widget_7_chart"
            class="card-rounded-bottom"
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
