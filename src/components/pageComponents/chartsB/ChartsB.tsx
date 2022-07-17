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
import { Line, Bar, Scatter, Bubble, PolarArea, Pie } from "react-chartjs-2";
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
  const [bubbleData, setBubbleData] = useState({
    labels: [],
    datasets: [],
  });
  const [polarData, setPolarData] = useState({
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
    const _bubbleData = {
      datasets: [
        {
          label: "A dataset",
          data: [...message]
            ?.filter((item) => item % 2)
            ?.map((item, index) => ({
              x: item,
              y: index,
              r: item / 3,
            })),
          backgroundColor: "rgba(255, 99, 132, .5)",
        },
      ],
    };

    const _polarData = {
      labels: [
        "(Red < 0)",
        "(0 < Blue < 30)",
        "(30 < Yellow < 60)",
        "(60 < Green < 90)",
        "(90 < Purple < 100)",
        "(100 < Orange)",
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [
            message?.filter((item) => item < 0)?.length,
            message?.filter((item) => item > 0 && item < 30)?.length,
            message?.filter((item) => item > 30 && item < 60)?.length,
            message?.filter((item) => item > 60 && item < 90)?.length,
            message?.filter((item) => item > 90 && item < 100)?.length,
            message?.filter((item) => item > 100)?.length,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
          ],
          borderWidth: 1,
        },
      ],
    };
    setLineData(_lineData);
    setAreaData(_barData);
    setScatterData(_scatterData);
    setBubbleData(_bubbleData);
    setPolarData(_polarData);
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
      <div>
        <ErrorBoundary>
          <Bubble options={optionsScatter} data={bubbleData} />
        </ErrorBoundary>
      </div>
      <div>
        <ErrorBoundary>
          <PolarArea data={polarData} />
        </ErrorBoundary>
      </div>
      <div>
        <ErrorBoundary>
          <Pie data={polarData} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default ChartsB;
