import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import DinosaurChart from "./DinosaurChart";
import GoogleContext from "./GoogleContext";
import PizzaChart from "./PizzaChart";

function WithContext() {
  const [google, setGoogle] = useState(null);

  useEffect(() => {
    if (!google) {
      const head = document.head;
      let script = document.getElementById('googleChartsScript');
      if (!script) {
        script = document.createElement('script');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.id = 'googleChartsScript';
        script.onload = () => {
          if (window.google && window.google.charts) {
            window.google.charts.load('current', {'packages':['corechart']});
            
            window.google.charts.setOnLoadCallback(() => setGoogle(window.google))
          }
        };
        head.appendChild(script);
      } else if (window.google) {
        setGoogle(window.google);
      }
    }

    return () => {
      let script = document.getElementById('googleChartsScript');
      if (script) {
        script.remove();
      }
    }
  }, [google]);

  return (
    <GoogleContext.Provider value={{google, setGoogle}}>
      <Container className="mt-3">
        <h1>With Context</h1>
        <Link to="/with-hooks">With Hooks</Link>
        <PizzaChart />
        <DinosaurChart />
      </Container>
    </GoogleContext.Provider>
  );
}

export default WithContext;
