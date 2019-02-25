import React from 'react';
import London from './components/London.js';
import Info from './components/Info.js';
import Backmanchester from './components/Backmanchester.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Manchester from './components/Manchester.js';
import Warsaw from './components/Warsaw.js';
import Backwarsaw from './components/Backwarsaw.js';


const API_KEY = "6a52b66a952a9c69db563a5172dd7eff";

class App extends React.Component {
  state = {
    temp: '',
    temp_max: '',
    temp_min: '',
    city: '',
    country: '',
    humidity: '',    
  }

  getWeatherLondon = async (city) => {      
      const api_call =
       await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=${API_KEY}`);
    const data = await api_call.json();    
    this.setState({
      temp: data.main.temp,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,      
    }); 
  }
  componentDidMount(){
    this.getWeatherLondon()
  }

  getWeatherManchester = async (e) => {    
    e.preventDefault();
      const api_call =
       await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Manchester,UK&appid=${API_KEY}`);
    const data = await api_call.json();    
    this.setState({
      temp: data.main.temp,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,      
    });
  }

  getWeatherWarsaw = async (e) => {    
    e.preventDefault();
      const api_call =
       await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Warsaw,PL&appid=${API_KEY}`);
    const data = await api_call.json();    
    this.setState({
      temp: data.main.temp,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
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
            <Route path="/manchester" render={props => <Backmanchester getWeatherLondon={this.getWeatherLondon}/>} /> 
            <Route path="/warsaw" render={props => <Backwarsaw getWeatherManchester={this.getWeatherManchester}/>} />
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
            <Route exact path="/" render={props => <London 
              getWeatherLondon={this.getWeatherLondon} 
              getWeatherManchester={this.getWeatherManchester}/>}
            />           
            <Route path="/Manchester" render={props => <Manchester 
              getWeatherManchester={this.getWeatherManchester} 
              getWeatherWarsaw={this.getWeatherWarsaw}/>} 
            />
            <Route path="/Warsaw" render={props => <Warsaw 
              getWeatherWarsaw={this.getWeatherWarsaw} 
              getWeatherLondon={this.getWeatherLondon}/>} 
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
