import "./WeatherForecast.css";
import WeatherData from "./WeatherData";
import WeatherIcon from "./WeatherIcon";

const WeatherForecast = ({ weatherForecast }) => {
  return (
    <div className="weather">
      <h2>{weatherForecast.day}</h2>
      <WeatherIcon img={weatherForecast.img} imgAlt={weatherForecast.imgAlt} />
      <WeatherData weatherForecast={weatherForecast} />
    </div>
  );
};

export default WeatherForecast;
