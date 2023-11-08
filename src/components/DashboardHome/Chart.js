import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const [charData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      datasets: [
        {
          // label: "Whom'st let the dogs out",
          data: [0.012, 500.0, 1000.0, 1500.0, 2000.0],
          borderColor: "rgb(53, 162, 235)",

          backgroundColor: "#0D2855",
        },
        {
          //   label: "Whom'st let the dogs out",
          data: [0.0, 500.0, 1000.0, 1500.0, 2000.0],
          borderColor: "rgb(53, 162, 235)",

          backgroundColor: "#E8F9FD",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
        },
      },
    });
  }, []);

  return (
    <div>
      <Bar style={{padding:"2vh", width:"100%",marginTop:"-9vh"}} options={chartOptions} data={charData} />
    </div>
  );
}

export default Chart;
