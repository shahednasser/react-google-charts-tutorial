import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import GoogleContext from "./GoogleContext";

function PizzaChart () {
  const [chart, setChart] = useState(null);
  const { google } = useContext(GoogleContext);

  useEffect(() => {
    if (google && !chart) {
      // Create the data table.
      var data = new window.google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 1],
        ['Zucchini', 1],
        ['Pepperoni', 2]
      ]);

      // Set chart options
      var options = {'title':'How Much Pizza I Ate Last Night',
                    'width':400,
                    'height':300};

      // Instantiate and draw our chart, passing in some options.
      const newChart = new window.google.visualization.PieChart(document.getElementById('pizza_chart'));
      newChart.draw(data, options);

      setChart(newChart);
    }
  }, [google, chart]);

  return (
    <>
      {!google && <Spinner />}
      <div id="pizza_chart" className={!google ? 'd-none' : ''} />
    </>
  )
}

export default PizzaChart;