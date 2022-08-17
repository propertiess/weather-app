import React from 'react';
import './styles/App.css';
import 'normalize.css/normalize.css'
import Form from "./components/Form";
import WeatherItems from "./components/WeatherItems";
import City from "./components/City";

function App() {
    return (
        <div className="App">
            <header className={'header'}>
                <Form/>
            </header>
            <main>
                <City/>
                <WeatherItems/>
            </main>
        </div>
    );
}

export default App;
