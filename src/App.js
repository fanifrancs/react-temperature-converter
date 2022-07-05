import React from 'react';
import { useState } from 'react';
import './App.css';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Water would <span className='boil'>boil</span>.</p>;
  }
  return <p>Water would <span className='not-boil'>not boil</span>.</p>;
}

function toCelsius(fahrenheit) {
  if (fahrenheit === '') {
    return '';
  }
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  if (celsius === '') {
    return '';
  }
  return (celsius * 9 / 5) + 32;
}

function TemperatureInput(props) {
  return (
    <fieldset>
      <legend>Enter temperature in {props.scale}</legend>
      <input value={props.temp} onChange={props.onTemperatureChange} />
    </fieldset>
  );
}

export default function Converter() {
  const [CTemp, setCTemp] = useState();
  const [FTemp, setFTemp] = useState();

  function handleCelsiusChange(e) {
    let input = e.target.value;
    let result = toFahrenheit(input);
    setCTemp(input); setFTemp(result);
  }

  function handleFahrenheitChange(e) {
    let input = e.target.value;
    let result = toCelsius(input);
    setCTemp(result); setFTemp(input);
  }

  return (
    <>
      <TemperatureInput
        scale="celsius"
        temp = {CTemp}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="fahrenheit"
        temp = {FTemp}
        onTemperatureChange={handleFahrenheitChange} 
      />
      <BoilingVerdict celsius={CTemp}/>
    </>
  );
}