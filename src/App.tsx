import React from 'react';

import City from './components/City';
import Form from './components/Form';
import WeatherItems from './components/WeatherItems';

import './styles/App.css';
import 'normalize.css/normalize.css';

function App() {
  return (
    <div className='App'>
      <header className={'header'}>
        <Form />
      </header>
      <main>
        <City />
        <WeatherItems />
      </main>
    </div>
  );
}

export default App;
