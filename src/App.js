import React from 'react';
import Header from "./components/Header/Header"
import {HashRouter} from 'react-router-dom';

import routes from './Routes';

function App() {
  return (
    <HashRouter>
   <body>
     <Header/>
    {routes}
   </body>

    </HashRouter>
  );
}

export default App;
