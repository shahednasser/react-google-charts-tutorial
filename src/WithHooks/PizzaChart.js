import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useGoogleCharts from "./useGoogleCharts";

function PizzaChart () {
  const loaded = useGoogleCharts();
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (loaded && !chart) {
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
  }, [loaded, chart]);

  return (
    <>
      {!loaded && <Spinner />}
      <div id="pizza_chart" className={!loaded ? 'd-none' : ''} />
    </>
  )
}

export default PizzaChart;