const WeatherData = ({ weatherForecast }) => {
  const { conditions, time } = weatherForecast;

  return (
    <>
      <p>
        <span>conditions: </span>
        {conditions}
      </p>

      <p>
        <span>time: </span>
        {time}
      </p>
    </>
  );
};

export default WeatherData;
