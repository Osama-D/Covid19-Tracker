import React from "react";

import { Cards, Charts, Countrypicker } from "./components";
import styles from "./app.module.css";
import { fetchData } from "./API";
import coronaImg from "./imgs/covid19-logofr.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImg} alt="covid-19" />
        <Cards data={data} />
        <Countrypicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}
export default App;
