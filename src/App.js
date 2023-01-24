import Nav from "./components/Navbar"
import Form from "./components/Text-Form"

function App() {
  return (
    <>
      <Nav name ="Text-Formatter" logo="Text-Formatter" two="About us" />
      <div className="container">
      <Form head="Enter Your Text"/>

      </div>
    </>
  );
}

export default App;
