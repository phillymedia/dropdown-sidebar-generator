import React from 'react';

import Header from './components/Header';
import FlexCol from './components/Flexcol';
import Start from './components/Start';
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie] = useCookies(['name']);

  function onChange(newUpdate) {
    setCookie('sidebars', newUpdate, { path: '/' });
  }

  return (<div className="App">
    <FlexCol class="header-section">
      <Header/>
    </FlexCol>
    <FlexCol>
      <Start onChange={onChange} prevdata={cookies.name}/>
    </FlexCol>
  </div>);
}

export default App;
