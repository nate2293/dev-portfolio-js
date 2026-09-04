import React from "react";
import { SectionHeader } from "../util/SectionHeader";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Application Tracker | Final Year Project",
    imgSrc: "project-imgs/Final-Year-Project.jpg",
    code: "https://github.com/nate2293/final-year-project",
    projectLink: "https://final-year-project-nsprz1mq.on-forge.com/",
    tech: ["Laravel", "PHP", "BLADE", "Javascript"],
    description:
      "Developed a Laravel web application that allows students to manage placement opportunities, track applications, monitor deadlines and store supporting evidence in one central system, hosted on laravel cloud",
    modalContent: (
      <>
        <p>
          My final year project is a Laravel web application for managing
          student placement opportunities. This app is my baby, designed and
          built on my own.
        </p>
        <p>
          The application was built using Laravel and PHP, with Blade and
          Tailwind CSS used to create the user interface. MySQL was used for
          data storage, with the completed application deployed to a production
          environment.
        </p>
        <p>
          Students can record and manage placement activities including job
          applications, interviews, assessments, follow-ups, offers and
          rejections. This provides a central location for keeping track of
          their placement progress rather than relying on information spread
          across multiple platforms.
        </p>
        <p>
          Additional features include an interactive calendar for viewing
          upcoming activities, application timelines for tracking progress, CV
          management and the ability to generate PDF evidence reports from
          recorded placement activity.
        </p>
        <p>
          Developing the project gave me practical experience across the full
          development lifecycle, including database design, authentication, CRUD
          functionality, validation, responsive interface development, testing,
          debugging and deployment.
        </p>
      </>
    ),
  },
  {
    title: "WEATHER API Dashboard V2",
    imgSrc: "project-imgs/Weather-Dashboard.jpg",
    code: "https://github.com/nate2293/weather-app-v2",
    projectLink: "https://github.com/nate2293/weather-app-v2",
    tech: [
      "Laravel",
      "PHP",
      "RESTAPI",
      "BLADE",
      "CSS",
      "TailwindCSS",
      "MARYUI",
    ],
    description:
      "A weather dashboard built with Laravel and PHP, utilizing REST API for fetching weather data. The frontend is designed with Blade and Tailwind CSS.",
    modalContent: (
      <>
        <p>
          The Weather API Dashboard is a Laravel web application that allows
          users to view current weather conditions and forecasts for various
          locations.
        </p>

        <p>
          The backend is built with Laravel and PHP, handling API requests and
          data processing. Weather data is retrieved from the OpenWeather REST
          API and passed to the frontend for display.
        </p>

        <p>
          The application uses geocoding to convert a searched location into
          latitude and longitude coordinates. These coordinates are then used to
          request accurate weather data for the selected location.
        </p>

        <p>
          The dashboard presents weather information including temperature,
          weather conditions, location data and forecasts through a responsive
          and user-friendly interface.
        </p>

        <p>
          Developing this project strengthened my understanding of REST APIs,
          HTTP requests, JSON responses and integrating third-party services
          within a Laravel application.
        </p>

        <p>
          The project also gave me practical experience handling API
          configuration, environment variables and processing external data
          before presenting it through a Laravel Blade interface.
        </p>
      </>
    ),
  },
  {
    title: "Weather Application V1",
    imgSrc: "project-imgs/Weather-Version-One.jpg",
    code: "https://github.com/nate2293/weather-app",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: [
      "Laravel",
      "RESTFUL API",
      "Blade",
      "TailwindCSS",
      "MARYUI",
      "JavaScript",
      "OpenWeather API",
    ],
    description:
      "A weather application built with Laravel and PHP, utilizing RESTful API for fetching weather data. The frontend is designed with Blade and Tailwind CSS.",
    modalContent: (
      <>
        <p>
          Please note: when viewing the live project, begin from the
          application's home page before navigating to the Weather Dashboard.
          Opening the /weather route directly may prevent the weather
          information from loading correctly.
        </p>
        <p>
          The Weather App is an interactive Laravel weather dashboard that
          allows users to search for a location and view current and forecast
          weather information.
        </p>

        <p>
          The application integrates with the OpenWeather API to retrieve
          real-time weather and forecast data including temperature, weather
          conditions, humidity, wind speed, minimum and maximum temperatures,
          and sunrise and sunset times.
        </p>

        <p>
          Location searches are processed using geocoding to convert the
          searched location into latitude and longitude coordinates. These
          coordinates are then used to retrieve the relevant weather and
          forecast data from OpenWeather.
        </p>

        <p>
          Weather information is presented through a responsive dashboard built
          with Blade, Mary UI and Tailwind CSS. Reusable components are used
          throughout the interface to maintain a consistent and structured
          design.
        </p>

        <p>
          The dashboard also integrates Leaflet and OpenStreetMap to provide an
          interactive map centred on the searched location, with OpenWeather map
          layers used to display additional weather information such as cloud
          coverage.
        </p>

        <p>
          ApexCharts is used to visualise temperature changes over the next 24
          hours. Interactive tooltips provide additional forecast information
          including temperature, feels-like temperature, humidity, wind speed
          and weather conditions.
        </p>

        <p>
          Developing this project strengthened my understanding of REST APIs,
          Laravel HTTP requests, JSON data, third-party API integration and
          combining JavaScript libraries with a Laravel application.
        </p>
      </>
    ),
  },
  {
    title: "To-Do-List",
    imgSrc: "project-imgs/To-Do-List.jpg",
    code: "https://github.com/nate2293/To-Do-List",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: [
      "Laravel",
      "CRUD",
      "MySQL",
      "Blade",
      "Tailwind CSS",
      "TermonUI",
      "PHPUnit",
    ],
    description:
      "To-Do-List application built with Laravel, allowing users to manage tasks efficiently.",
    modalContent: (
      <>
        <p>
          To-Do List is a Laravel task management application designed to help
          users organise and manage their everyday tasks through a simple and
          intuitive interface.
        </p>

        <p>
          The application provides user authentication, allowing each user to
          maintain their own personal task list. Tasks are associated with
          individual users to ensure that users can only access and manage their
          own data.
        </p>

        <p>
          Users can create, view, update and delete tasks through a complete
          CRUD workflow. Tasks can also be marked as completed or pending, with
          completion dates recorded to provide additional progress tracking.
        </p>

        <p>
          The interface is built using Blade, Tailwind CSS and reusable Termon
          UI components. Components including forms, cards, buttons, modals,
          chips and pagination are used to maintain a clean and consistent
          interface throughout the application.
        </p>

        <p>
          Additional functionality includes paginated task lists, flash
          notifications to provide feedback after actions and confirmation
          modals to help prevent tasks from being accidentally deleted.
        </p>

        <p>
          PHPUnit feature tests are used to test key application functionality,
          including task creation, updating and deletion, as well as ensuring
          users cannot access tasks belonging to other users.
        </p>

        <p>
          Developing this project strengthened my understanding of Laravel's MVC
          architecture, CRUD operations, Eloquent relationships, authentication,
          validation, database interactions and feature testing.
        </p>
      </>
    ),
  },
];
