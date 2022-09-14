import AboutUs from "components/AboutUs/AboutUs";
import Header from "components/Header/Header";
import NewCollection from "components/NewCollection/NewCollection.jsx";
import GlobalStyle from "GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <NewCollection />
      <AboutUs />
    </>
  );
}

export default App;
