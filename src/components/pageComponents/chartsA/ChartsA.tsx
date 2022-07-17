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
import { Bubble, PolarArea, Pie } from "react-chartjs-2";
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

const ChartsA: FC = () => {
  const { message } = useContext(MqttContext);
  const [bubbleData, setBubbleData] = useState({
    labels: [],
    datasets: [],
  });
  const [polarData, setPolarData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
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
    setBubbleData(_bubbleData);
    setPolarData(_polarData);
  }, [message]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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

export default ChartsA;
