import classes from './WeatherInfo.module.css';

interface WeatherInfoProps {
    weatherData: {
        name: string,
        main: {temp: string, humidity: string, feels_like: string}, 
        wind: {speed: string},
        weather: {description: string}[]
    }
}

const WeatherInfo: React.FC<WeatherInfoProps> = props => {
    return (
        <div className={classes.WeatherInfo}>
            <h2>Current Weather in {props.weatherData.name}</h2>
            <p style={{textTransform: 'uppercase'}}>{props.weatherData.weather[0].description}</p>
            <p>Temperature: {props.weatherData.main.temp} °F</p>
            <p>Feels like: {props.weatherData.main.feels_like} °F</p>
            <p>Humidity: {props.weatherData.main.humidity}%</p>
            <p>Wind Speed: {props.weatherData.wind.speed} mph</p>
        </div>
    )
};

export default WeatherInfo; // Add an export statement to export the component
