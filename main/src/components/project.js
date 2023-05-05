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
    text:'Save this app to your computer for easy access to any notes!',
    image: TextEdit,
    repo:'https://github.com/KyleOetjens/pwa_text_editor',
    deployed: 'https://pwa-text-editor-123.herokuapp.com/'
  },
  {
    id: 2,
    name: "Crypto Converter",
    image: Crypto,
    text:'Find out how many cans of beans your crypto is worth!',
    repo:'https://github.com/KyleOetjens/crypto_converter',
    deployed: 'https://kyleoetjens.github.io/crypto_converter/'
  },
  {
    id: 3,
    name: "Plenty of Guilds",
    text:'Find that perfect World of Warcraft partner!',
    image: Guilds,
    repo:'https://github.com/KyleOetjens/plenty_of_guilds',
    deployed: 'https://kyleoetjens.github.io/plenty_of_guilds/'
  },
  {
    id: 4,
    name: "Weather App",
    text:'Check temps in your favorite cities!',
    image: WeatherLogo,
    repo:'https://github.com/KyleOetjens/weatherApp',
    deployed: 'https://kyleoetjens.github.io/weatherApp/'
  },
  {
    id: 5,
    name: "Password Generator",
    text:'Need a secure password?  Generate one here!',
    image: PasswordGen,
    deployed:'https://kyleoetjens.github.io/javascriptpwgen/',
    repo: 'https://github.com/KyleOetjens/javascriptpwgen'
  },
  {
    id: 6,
    name: "Work Day Scheduler",
    text:'Plan your day with a scheduler that will store your input, and also show which time slots are coming up!',
    image: Schedule,
    deployed:'https://kyleoetjens.github.io/work_day_scheduler/',
    repo: 'https://github.com/KyleOetjens/work_day_scheduler'
  }
];
export default function Project() {
    return <List groceries={groceries} />;
  }



