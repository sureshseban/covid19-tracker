import React from "react";

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaimage from './images/image.png';

class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({
            data
        })
    }

    handleCountryChange = async (country) => {
        console.log(country)
        const data = await fetchData(country);
        this.setState({
            data,
            country
        })
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container} >
                <img src={coronaimage} className={styles.image} alt="COVID-19"></img>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;