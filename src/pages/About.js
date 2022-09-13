import { useState, useEffect } from 'react';

function About(props) {
    // create state to hold our data
    const [about, setAbout] = useState(null);

    // function to make api call
    const getAboutData = async () => {
        const response = await fetch(props.URL + "about");
        const data = await response.json();
        setAbout(data);
    };

    // make initial call for the data inside useEffect, so it only happens once on component load
    useEffect(() => {
        getAboutData();
    }, []);

    // function that will return the JSX needed once we get the data
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    );

    // if data arrives return the result of loaded. If not, an h1 that says loading
    
    return about ? loaded() : <h1>Loading...</h1>;

  }
  
  export default About;