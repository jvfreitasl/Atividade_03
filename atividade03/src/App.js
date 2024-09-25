import "./App.css";
import Login from "./components/Login/Login";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import BarraMenu from "./components/BarraMenu/BarraMenu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="titulo">Atividade 03 - BootCamp Front-End</h1>
      </header>
      <main className="containerCorpo">
        <div className="containerLoginLista">
          <section className="containerLogin">
            <Login name="login" type="text" textName={"Login"} />
            <Login name="password" type="password" textName={"Senha"} />
            <Button name="botaoEntrar" type="input" textButton={"Entrar"} />
          </section>
          <form className="formulario">
            <BarraMenu />
          </form>
        </div>
      </main>
      <Footer className="appFooter" />
    </div>
  );
}

export default App;
