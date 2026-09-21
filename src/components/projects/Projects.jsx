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
    title: "Movie & TV Discovery",
    imgSrc: "project-imgs/movie-api.jpg",
    code: "https://github.com/nate2293/movie-api-application",
    projectLink: "https://movie-api-application-oqxp8pgg.on-forge.com",
    tech: [
      "Laravel",
      "React",
      "TypeScript",
      "Inertia.js",
      "TMDB API",
      "Tailwind CSS",
      "MySQL",
      "Motion",
      "Laravel Forge",
    ],
    description:
      "Full-stack Laravel and React application integrating the TMDB API for movie and TV discovery, search and detailed content information.",
    modalContent: (
      <>
        <p>
          Movie & TV Discovery is a full-stack web application built with
          Laravel, React, TypeScript and Inertia.js, integrating the TMDB API to
          provide dynamic movie and television data.
        </p>

        <p>
          The application allows users to explore trending, popular, top-rated
          and genre-based movies and TV series. Multi-category search enables
          users to search TMDB for both movies and television content from a
          single interface.
        </p>

        <p>
          Movie and TV data is retrieved through a dedicated Laravel service
          using authenticated server-side HTTP requests to the TMDB REST API.
          API credentials are securely managed through Laravel environment
          configuration rather than being exposed to the React frontend.
        </p>

        <p>
          The React and TypeScript frontend uses reusable carousel, hero and
          expandable card components to present content responsively. Inertia.js
          connects the Laravel backend with the React frontend while Tailwind
          CSS and Motion are used for responsive styling, transitions and
          interactive interface elements.
        </p>

        <p>
          Detailed movie information can be retrieved dynamically, while TV
          functionality provides series information, seasons and individual
          episode data through additional TMDB endpoints.
        </p>

        <p>
          The application uses Laravel routing, controllers and service classes
          to separate responsibilities between the user interface, application
          logic and external API integration. JSON responses from TMDB are
          processed by Laravel and consumed by reusable React components.
        </p>

        <p>
          The project uses MySQL in production and Git/GitHub for version
          control. The application is deployed through Laravel Forge, including
          production environment configuration, database migrations, Composer
          dependencies and the Vite frontend build process.
        </p>

        <p>
          Developing this project strengthened my experience with full-stack
          Laravel development, React, TypeScript, Inertia.js, REST API
          integration, JSON data handling, server-side API authentication,
          reusable component development, responsive design and production
          deployment.
        </p>
      </>
    ),
  },
]