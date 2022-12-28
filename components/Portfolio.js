//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Alternative Endings",
    languages: "HTML, CSS, Javascript",
    packages: "Express, Express-Handlebars, Handlebars, mysql, sequelize",
    image: "/img/Alternative-Endings.png",
    description: "Have you ever watched a movie that takes you on a captivating journey and keeps you invested throughout its duration only to leave you devastated because of its lackluster ending?",
    repo: "https://github.com/ashleymullikin/alternative-endings",
    live: "https://alternative-endings.herokuapp.com/",
  },
  {
    id: 1,
    title: "Carbon Footprint Calculator",
    languages: "HTML, CSS, Javascript",
    packages: "Bulma CSS framework, Carbon Interface API, Icons8 API",
    image: "/img/Carbon-Footprint-Home.png",
    description: "An app that calculates a users yearly carbon footprint; based on their type of car and miles driven, and compares it to the United States average. The app stores data to calculate the average carbon footprint for multiple days.",
    repo: "https://github.com/ashleymullikin/carbon-footprint",
    live: "https://ashleymullikin.github.io/carbon-footprint/",
  },
  {
    id: 2,
    title: "Workday Scheduler",
    languages: "HTML, CSS, Javascript",
    packages: "jQuery",
    image: "/img/Workday-Scheduler.png",
    description: "Work Day Scheduler Description a simple calendar application that allows a user to save events for each hour of the day. It runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
    repo: "https://github.com/ashleymullikin/work-day-scheduler",
    live: "https://ashleymullikin.github.io/work-day-scheduler/",
  },
  {
    id: 3,
    title: "noheadphones",
    languages: "html, css, js",
    image: "/img/noheadphones.png",
    packages: "none",
    description: "Gives you a recommendation for media that will entertain you during your commute.",
    repo: "https://github.com/EmilyNecciai/no-headphones",
    live: "https://emilynecciai.github.io/no-headphones/",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    languages: "HTML, CSS, Javascript",
    packages: "weatherAPI",
    image: "/img/Weather-Dashboard.png",
    description: "A weather dashboard that allows users to see the weather of their chosen location based on search, then save the location for future use as wanted/needed, or it can be deleted from history as well.",
    repo: "https://github.com/ashleymullikin/weather-dashboard",
    live: "https://ashleymullikin.github.io/weather-dashboard/",
  },
  {
    id: 5,
    title: "Basic Portfolio",
    languages: "html, css",
    packages: "none",
    image: "/img/work-portfolio.png",
    description: "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/EmilyNecciai/work-portfolio",
    live: "https://emilynecciai.github.io/work-portfolio/",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    languages: "html, css, js",
    packages: "none",
    image: "/img/weather-app.png",
    description: "A basic app that allows you to see the weather for a specific searched or saved city.",
    repo: "https://github.com/EmilyNecciai/weather-app",
    live: "https://emilynecciai.github.io/weather-app/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
