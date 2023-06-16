import Overlay from "./components/Overlay";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper">
      <Overlay />
      <Header/>

      <div className="content">
        <div className="searchWrapper">
          <h1>Всі кросівки</h1>
          <div className="search-block">
            <img className="" src="/img/search.svg" alt="search" />
            <input placeholder="Пошук..." />
          </div>
        </div>
        <div className="cardWrapper">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
