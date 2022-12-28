// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Environmental Data Scientist</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Emily Necciai Mayeski"/>
      <p className="content is-italic mt-4">
        I'm Ashley, and Environmental Scientist with a diverse background in data, geospatial analyses, and public health work.
        The full-stack web development certificate will further enhace my analytical and techinical skills.
      </p>
      <p className="content">
        I always act as a product manager for learning resources, which guides
        users to what they need in the moment, but also enable them to explore
        content on their terms using video, audio, documentation, and so much
        more in an advanced learning ecosystem.
      </p>
    </div>
  );
}

export default About;
