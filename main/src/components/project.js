import React from 'react'
import List from './list';
import WeatherLogo from '../assets/images/oceanrock.jpeg'


const groceries = [
  {
    id: 1,
    name: "PWA Text Editor",
    image: '',
    gitPage:'',
    gitLink: ''
  },
  {
    id: 2,
    name: "Social Network API",
    image: '',
    gitPage:'',
    gitLink: ''
  },
  {
    id: 3,
    name: "Ecommerce Backend",
    image: '',
    gitPage:'',
    gitLink: ''
  },
  {
    id: 4,
    name: "Weather App",
    image: WeatherLogo,
    gitPage:'https://kyleoetjens.github.io/weatherApp/',
    gitLink: 'https://github.com/KyleOetjens/weatherApp'
  },
  {
    id: 5,
    name: "Employee Tracker",
    image: '',
    gitPage:'',
    gitLink: ''
  },
  {
    id: 6,
    name: "Team Profile Generator",
    image: WeatherLogo,
    gitPage:'',
    gitLink: 'https://github.com/KyleOetjens/TeamProfileGenerator'
  }
];
export default function Project() {
    return <List groceries={groceries} />;
  }



