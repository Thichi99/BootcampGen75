import Card from "./components/card/Card";
import Contador from "./components/contador/Contador";
import Tarefa from "./components/tarefa/Tarefa";

function App() {
  return (
    <>
      <Tarefa />
      <Contador />
      <Card titulo="React" descricao="Biblioteca JS" />
      <Card titulo="Vue.JS" descricao="Biblioteca JS" />
      <Card titulo="Spring" descricao="Framework Java" />
      <Card titulo="Angular" descricao="Framework JavaScript" />
    </>
  );
}

export default App;
