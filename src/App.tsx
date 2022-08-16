import React from 'react';
import './styles/App.css';
import 'normalize.css/normalize.css'
import Form from "./components/Form";
import Weathers from "./components/Weathers";
import City from "./components/City";

function App() {

    return (
        <div className="App">
            <header className={'header'}>
                <Form/>
            </header>
            <main>
                <City/>
                <Weathers/>
            </main>
        </div>
    );
}

export default App;
