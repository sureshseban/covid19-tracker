import React from "react";

import { Cards, Chart, CountryPicker } from './components'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Covid app</h1>
                <Cards/>
                <Chart/>
                <CountryPicker/>
            </div>
        )
    }
}

export default App;