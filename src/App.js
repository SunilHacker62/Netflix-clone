import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Row from "./components/Row";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="Trending Now" />
      <Row title="Top Rated" />
      <Row title="Action Movies" />
    </div>
  );
}

export default App;
