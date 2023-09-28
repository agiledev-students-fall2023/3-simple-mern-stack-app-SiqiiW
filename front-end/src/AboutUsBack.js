import React, { useState, useEffect } from 'react';


const AboutUsBack = () => {
  const [aboutData, setAboutData] = useState({
  });
  
  useEffect(() => {
    fetch('http://localhost:5002/about')
      .then(res => res.json())
      .then(data => setAboutData(data));
  }, []);

  return (
    <div>
      <h1>About Us (Backend Fetch)</h1>
      <p>{aboutData.about}</p>
      <img src={aboutData.pictureUrl}
      alt="Me" 
    style={{
    width: "150px", 
    height: "auto"}}   />

    </div>
  );
}

export default AboutUsBack;



