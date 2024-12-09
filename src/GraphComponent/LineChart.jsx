import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { color } from 'chart.js/helpers';

// Enregistrement des composants de Chart.js nécessaires pour les graphiques en ligne
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ monnaie }) => {
  // Données pour les axes X et Y
  const data = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'], // Labels pour l'axe X
    datasets: [
      {
        label: monnaie,
        data: [45, 72, 57, 89, 60, 93, 102],
        borderColor: 'white',
        backgroundColor: '#303030',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white', // Légende en blanc
        },
      },
      title: {
        display: true,
        text: 'Cours de la monnaie : ' + monnaie,
        color: 'white',
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white', // Couleur des labels de l'axe X
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Couleur des lignes de la grille de l'axe X
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white', // Couleur des labels de l'axe Y
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // Couleur des lignes de la grille de l'axe Y
        },
      },
    },
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', backgroundColor: 'rgb(48, 48, 48)', alignItems: 'center', marginTop: '2%', borderRadius: '3px', color:'white'}}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
