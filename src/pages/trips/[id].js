import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { useRouter } from 'next/router'

const Trip = () => {
  const [trip, setTrip] = useState(); // fancy way of writing "const trip". We will use "trip" in html later
  // Get raw data
  const router = useRouter()
  const tripId = router.query.id // get tripId "3" from "http://localhost:3000/trips/3"

  // This function fetches data from mockAPI. This is just a definition, we will run it later
  const fetchTrip = async () => {
    const url = `https://64932e05428c3d2035d174ed.mockapi.io/api/v1/trips/${tripId}`
    const response = await axios.get(url);
    console.log("response", response);

    setTrip(response.data) // the same as trip = response.data (but have to use next.js method)
  };

  // On first pass tripId doesn't exist yet, so we skip this step
  useEffect(() => {
    tripId && fetchTrip(); // fancy way of doing "fetchTrip()". This calls "fetchTrip()" to actually run it.
  }, [tripId]);

  const is_data_loaded = trip != null

  // Display data
  return (
    <main>
      {/*when runs first time skip this part of html (because "trip" is still empty).
        On second pass we will have "trip" and this html will get printed.*/}
      {is_data_loaded && (
        <div>
          <h1 className={styles.title}>
            Welcome to <a href={trip.image_url}>{trip.destination}!</a>
          </h1>
          <img src={trip.image_url}></img>
          <p className={styles.description}>
            <code>{JSON.stringify(trip)}</code>
          </p>

          <div className={styles.grid}>
            <a
              href="/"
              className={styles.card}
            >
              <h3>Back &rarr;</h3>
            </a>
          </div>
        </div>
      )}
    </main>
  )
}

export default Trip;
