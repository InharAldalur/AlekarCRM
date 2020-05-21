import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import FormIndex from './components/form/FormIndex'
import Home from './components/home/home'
import history from './components/history/history'
import Menu from './components/menu'



ReactDOM.render(
  <React.StrictMode>
        <Router>
      <div className='container-block'>
        <Menu />
        <section className='display-container'>
          <Switch>
            <Route path='/home' component={Home} />
          </Switch>
          <Switch>
            <Route path='/nuevo' component={FormIndex} />
          </Switch>
          <Switch>
            <Route path='/historial' component={history} />
          </Switch>
        
        </section>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


