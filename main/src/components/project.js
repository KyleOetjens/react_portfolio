import React from 'react'
import List from './list';
import WeatherLogo from '../assets/images/weather.png'
import TextEdit from '../assets/images/texteditor.png'
import Crypto from '../assets/images/cryptoC.png'
import Guilds from '../assets/images/plentyofguilds.png'
import PasswordGen from '../assets/images/passwordgen.png'
import Schedule from '../assets/images/schedule.png'

const groceries = [
  {
    id: 1,
    name: "PWA Text Editor",
    image: TextEdit,
    gitPage:'',
    gitLink: ''
  },
  {
    id: 2,
    name: "Crypto Converter",
    image: Crypto,
    gitPage:'',
    gitLink: ''
  },
  {
    id: 3,
    name: "Plenty of Guilds",
    image: Guilds,
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
    name: "Password Generator",
    image: PasswordGen,
    gitPage:'',
    gitLink: ''
  },
  {
    id: 6,
    name: "Work Day Scheduler",
    image: Schedule,
    gitPage:'',
    gitLink: 'https://github.com/KyleOetjens/TeamProfileGenerator'
  }
];
export default function Project() {
    return <List groceries={groceries} />;
  }



