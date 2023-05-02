import React, { useRef } from 'react';
import classes from './WeatherForm.module.css';

interface WeatherFormProps {
    onSubmitForm: (location: string) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onSubmitForm(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.FormGroup}>
            <div>
                <label htmlFor='weather-text'>Enter City: </label>
                <input required id="weather-text" type="text" ref={textInputRef} />
            </div>

            <button type="submit">Get Weather</button>
        </form>
    )
};

export default WeatherForm; // Add an export statement to export the component
