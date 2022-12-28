//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Alternative Endings",
    languages: "HTML, CSS, Javascript",
    packages: "Express, Express-Handlebars, Handlebars, MySQL, Sequelize",
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
    title: "PAW Text Editor",
    languages: "HTML, CSS, Javascript",
    packages: "Express, Node",
    image: "/img/PAW-Text-Editor.png",
    description: "The application is a web text editor where the user can create notes or code snippets with or without an internet connection and where the user can reliably retrieve them for later use.",
    repo: "https://github.com/ashleymullikin/PAW-text-editor",
    live: "https://github.com/ashleymullikin/PAW-text-editor",
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
    languages: "HTML, CSS",
    packages: "none",
    image: "/img/Professional-Portfolio.png",
    description: "A basic work portfolio that holds my projects along with linking to my other work and personal infomration to contact me or find further information on me.",
    repo: "https://github.com/ashleymullikin/professional-portfolio",
    live: "https://ashleymullikin.github.io/professional-portfolio/",
  },
  {
    id: 6,
    title: "Employee Tracker",
    languages: "HTML, CSS, Javascript",
    packages: "Express, Node, MySQL",
    image: "/img/Employee-Tracker.png",
    description: "Employee Manager Summary Employee Manager is a CLI app for managing human resources. You can add, edit, and delete employees, departments, and roles, and manage the associations between them.",
    repo: "https://github.com/ashleymullikin/employee-tracker",
    live: "https://github.com/ashleymullikin/employee-tracker",
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
