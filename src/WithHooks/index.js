import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PizzaChart from "./PizzaChart";

function WithHooks() {

  return (
    <>
      <Container className="mt-3">
        <h1>With Hooks</h1>
        <Link to="/with-context">With Context</Link>
        <PizzaChart />
      </Container>
    </>
  );
}

export default WithHooks;
