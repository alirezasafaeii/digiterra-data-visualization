import { FC, useContext, useEffect, useState } from "react";
import { MqttContext } from "../../../mqttProvider/MqttProvider";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Scatter } from "react-chartjs-2";
import ErrorBoundary from "../../../errorBoundary/ErrorBoundary";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const optionsTop = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart",
    },
  },
};

export const optionsScatter = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ChartsB: FC = () => {
  const { message } = useContext(MqttContext);
  const [lineData, setLineData] = useState({
    labels: [],
    datasets: [],
  });
  const [barData, setAreaData] = useState({
    labels: [],
    datasets: [],
  });
  const [scatterData, setScatterData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const _lineData = {
      labels: [...Array(183).keys()],
      datasets: [
        {
          label: "Dataset 1",
          data: message?.filter((item, index) => index % 2 === 0),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Dataset 2",
          data: message?.filter((item, index) => index % 2 !== 0),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
    const _barData = {
      labels: [
        ...Array(
          message?.filter((item, index) => index % 9 === 0).length
        ).keys(),
      ],
      datasets: [
        {
          label: "Dataset 1",
          data: message?.filter((item, index) => index % 9 === 0),
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Dataset 2",
          data: message?.filter((item, index) => index % 6 === 0),
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
    const _scatterData = {
      datasets: [
        {
          label: "A dataset",
          data: [...message]?.map((item, index) => ({
            x: item,
            y: index,
          })),
          backgroundColor: "rgba(255, 99, 132, 1)",
        },
      ],
    };

    setLineData(_lineData);
    setAreaData(_barData);
    setScatterData(_scatterData);
  }, [message]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* <div>Welcome to ChartsB Page! {message}</div> */}
      <div>
        <ErrorBoundary>
          <Line options={optionsTop} data={lineData} />
        </ErrorBoundary>
      </div>
      <div>
        <ErrorBoundary>
          <Bar options={optionsTop} data={barData} />
        </ErrorBoundary>
      </div>
      <div>
        <ErrorBoundary>
          <Scatter options={optionsScatter} data={scatterData} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default ChartsB;
