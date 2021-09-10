import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import DinosaurChart from "./DinosaurChart";
import PizzaChart from "./PizzaChart";
import useGoogleCharts from './useGoogleCharts';

function WithHooks() {
  const google = useGoogleCharts();

  return (
    <>
      <Container className="mt-3">
        <h1>With Hooks</h1>
        <Link to="/with-context">With Context</Link>
        <PizzaChart google={google} />
        <DinosaurChart google={google} />
      </Container>
    </>
  );
}

export default WithHooks;
