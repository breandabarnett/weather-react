import React from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";
import "./Weather.css";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}ºC`
    );
  }
  let apikey = "fd723d0878943be9e88ff512b0c0f747";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apikey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Rings
      height="150"
      width="150"
      color="#62DAFB"
      radius="6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
}
