import React from 'react';
import London from './components/London.js';
import Info from './components/Info.js';
import Backmanchester from './components/Backmanchester.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Manchester from './components/Manchester.js';
import Warsaw from './components/Warsaw.js';
import Backwarsaw from './components/Backwarsaw.js';


const API_KEY = "25da215c731956fb73b2bcb39cbce924";

class App extends React.Component {
  state = {
    temp: '',
    temp_max: '',
    temp_min: '',
    city: '',
    country: '',
    humidity: '',    
  }
  getTime = async => {
    
  }
  getWeather = async (city) => {      
      const api_call_london =
       await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call_london.json();  
    this.setState({
      temp: data.main.temp.toFixed(0),
      temp_max: data.main.temp_max.toFixed(0),
      temp_min: data.main.temp_min.toFixed(0),
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,      
    }); 
  }

  render() {
    return (
      <BrowserRouter>
        <div className="main-grid">
          <div>
            <Route path="/manchester" component={Backmanchester} /> 
            <Route path="/warsaw" component={Backwarsaw} />
          </div>
          <div className="container">
            <Info 
              temp={this.state.temp}
              temp_max={this.state.temp_max}
              temp_min={this.state.temp_min}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              error={this.state.error}          
            />
          </div>        
          <Switch> 
            <Route className="london" exact path="/" render={() => <London getWeather={this.getWeather}/>} />           
            <Route path="/Manchester" render={() => <Manchester getWeather={this.getWeather}/>} />
            <Route className="london" path="/Warsaw" render={() => <Warsaw getWeather={this.getWeather}/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
