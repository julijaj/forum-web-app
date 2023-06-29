import styles from "./styles.module.css";
import TripCard from 'src/components/tripCard/tripCard'
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [trips, setTrips] = useState(); // fancy way of writing "const trip". We will use "trip" in html later

  // This function fetches data from mockAPI. This is just a definition, we will run it later
  const fetchTrips = async () => {
    const url = `https://64932e05428c3d2035d174ed.mockapi.io/api/v1/trips`
    const response = await axios.get(url);
    console.log("response", response);
    
    setTrips(response.data) // the same as trip = response.data (but have to use next.js method)
  };

  // On first pass tripId doesn't exist yet, so we skip this step
  useEffect(() => {
    fetchTrips(); // fancy way of doing "fetchTrip()". This calls "fetchTrip()" to actually run it.
  },[]);

  const is_data_loaded = trips != null

  return (
    <main>
      {/*when runs first time skip this part of html (because "trip" is still empty).
        On second pass we will have "trip" and this html will get printed.*/}
      {is_data_loaded && (
        <div>
          <h1 className={styles.title}>
            Welcome Julija to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing <code>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            {trips.map((trip) => (
              <TripCard
                id={trip.id}
                destination={trip.destination}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

export default Home;
