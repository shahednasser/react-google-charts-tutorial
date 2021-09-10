import { useEffect, useState } from "react";

function useGoogleCharts () {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    if (!loaded) {
      const head = document.head;
      let script = document.getElementById('googleChartsScript');
      console.log(script, window.google)
      if (!script) {
        script = document.createElement('script');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.id = 'googleChartsScript';
        script.onload = () => {
          if (window.google && window.google.charts) {
            window.google.charts.load('current', {'packages':['corechart']});
            
            window.google.charts.setOnLoadCallback(() => setLoaded(true))
          }
        };
        head.appendChild(script);
      } else if (window.google && window.google.charts && window.google.visualization) {
        setLoaded(true);
      }
    }

    return () => {
      let script = document.getElementById('googleChartsScript');
      if (script) {
        script.remove();
      }
    }
  }, [loaded]);

  return loaded;
}

export default useGoogleCharts;