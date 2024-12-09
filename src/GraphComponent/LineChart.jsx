import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { color } from 'chart.js/helpers';
import zoomPlugin, { zoom } from 'chartjs-plugin-zoom'

// Enregistrement des composants de Chart.js nécessaires pour les graphiques en ligne
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, zoomPlugin);

const LineChart = ({ monnaie }) => {
  const [taux_change, settaux_change] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // État pour le loader
  const [date_change, setdate_change] = useState([]);

  useEffect(() => {
    if(monnaie){
      const fetchTaux = async () => {
        let taux = []
        let date = []
        try{
          setIsLoading(true)
          const reponse = await fetch(` ${import.meta.env.VITE_APP_API_ADRESSE}api/donnee/${monnaie}`)
          const data = await reponse.json()
          console.log(reponse)
          if(reponse.status == 200 ){
            for(let i = 0; i < (data.data.length); i++){
              date[i] = data.data[i].date.date.slice(0, -7)
              taux[i] = data.data[i].taux
            }
            console.log(monnaie)
            
          }
          setdate_change(date)
          settaux_change(taux)
          
        }catch(e){
          console.log("il rentre dedans " + e)
        }finally{
          setIsLoading(false)
        }
      }

      fetchTaux()
    }
  }, [monnaie])

  // Données pour les axes X et Y
  const data = {
    labels: date_change, // Labels pour l'axe X
    datasets: [
      {
        label: monnaie,
        data: taux_change,
        borderColor: 'white',
        backgroundColor: '#303030',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      zoom: {
        pan: {
          enabled: true, // Active le déplacement
          mode: 'x', // Déplacement sur l'axe X uniquement
        },
        zoom: {
          wheel: {
            enabled: true, // Active le zoom avec la molette
          },
          pinch: {
            enabled: true, // Active le zoom au pincement sur mobile
          },
          mode: 'x', // Zoom sur l'axe X uniquement
        },
      },
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
        beginAtZero: false,
        min: Math.min(...taux_change),
        max: Math.max(...taux_change),
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
    <>
      <div style={{ width: '80%', margin: '0 auto', backgroundColor: 'rgb(48, 48, 48)', alignItems: 'center', marginTop: '2%', borderRadius: '3px', color:'white'}}>
      {!isLoading ? (
        <Line data={data} options={options} />
      ) : (
        <div className="loader"></div>
      )}
      </div>
    </>
  );
};

export default LineChart;
