import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';
import Layout from './components/Layout/Layout';
import BurgerBuider from './containers/BurgerBuilder/BurgerBuider';


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Layout>
          <BurgerBuider />
        </Layout>
      </div>
    );
  }
}

export default App;
