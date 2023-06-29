import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router'

const tripForm = () => {
    const router = useRouter()

    const [destination, setDestination] = useState();
    const [date, setDate] = useState();
    const [duration, setDuration] = useState();
    const [image, setImage] = useState();

    const insertTrip = async () => {
        const data = {
            destination: destination,
            date: date,
            duration: duration,
            image_url: image
        };

        console.log(data);

        const url = `https://64932e05428c3d2035d174ed.mockapi.io/api/v1/trips/`
        const response = await axios.post(url, data);

        console.log("response", response);

        const tripId = response.data.id;
        const redirectUrl = `/trips/${tripId}`
    
        router.push(redirectUrl)
    };

    return (
        <div>
            <input
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                placeholder="Trip Destination"
            />
            <input
                value={date}
                onChange={(event) => setDate(event.target.value)}
                placeholder="Choose Date"
            />
            <input
                value={duration}
                onChange={(event) => setDuration(event.target.value)}
                placeholder="Choose Duration"
            />
            <input
                value={image}
                onChange={(event) => setImage(event.target.value)}
                placeholder="Image URL"
            />
            <button onClick={() => insertTrip()}>Book Trip!</button>
        </div>
    )
}

export default tripForm;