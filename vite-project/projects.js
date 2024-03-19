// Array of projects to be rendered on portfolio page
import TechBlogImage from "./src/assets/TechBlogImage.jpg";
import WorkDaySchedulerImage from "./src/assets/WorkDaySchedulerImage.jpg";
import WeatherDashBoardImage from "./src/assets/WeatherDashBoardImage.jpg";
import HeroSearchImage from "./src/assets/HeroSearchImage.jpg";
import TextEditorImage from "./src/assets/TextEditorImage.jpg";
import RyansRecipesImage from "./src/assets/RyansRecipesImage.jpg";

export const projects = [
  {
    projectTitle: "Jessica's Tech Blog",
    description:
      "Blog site for tech enthusiasts to share their thoughts and ideas. Users can create an account, make posts, and comment on other posts.",
    image: TechBlogImage,
    liveLink: "https://jessicas-tech-blog-33ef3aaa807c.herokuapp.com",
    gitHub: "https://github.com/jaschmidt22/jessicas-tech-blog",
  },
  {
    projectTitle: "Work Day Scheduler",
    description:
      "A simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.",
    image: WorkDaySchedulerImage,
    liveLink: "https://jaschmidt22.github.io/work-day-scheduler/",
    gitHub: "https://github.com/jaschmidt22/work-day-scheduler",
  },
  {
    projectTitle: "Weather Dashboard",
    description:
      "A weather dashboard that runs in the browser and feature dynamically updated HTML and CSS. It uses the OpenWeather API to retrieve weather data for cities.",
    image: WeatherDashBoardImage,
    liveLink: "https://jaschmidt22.github.io/weather-dashboard/",
    gitHub: "https://github.com/jaschmidt22/weather-dashboard",
  },
  {
    projectTitle: " Hero Searchup",
    description:
      "A collaborative web application that allows users to search for their favorite Marvel charcter, view the comics they are in, and watch a YouTube video. Built with HTML, CSS, JavaScript, YouTube API, and Marvel API.",
    image: HeroSearchImage,
    liveLink: "https://jaschmidt22.github.io/sounds-of-marvel/",
    gitHub: "https://github.com/jaschmidt22/sounds-of-marvel",
  },
  {
    projectTitle: "Text Editor",
    description:
      "A Progressive Web Application that allows users to create, edit and save a number of different file types either on or offline. Built with Webpack bundled JavaScript, generated HTML and saved with IndexedDB. Deployed on Render.",
    image: TextEditorImage,
    liveLink: "https://progressive-web-application-balr.onrender.com/",
    gitHub: "https://github.com/jaschmidt22/progressive-web-application",
  },
  {
    projectTitle: "Ryan's Recipes",
    description:
      "A collaborative recipe app that allows users to create, edit, and delete recipes. Users can also comment on recipe posts. Built with Node and Express backend, MySQL database with a Sequelize ORM, and deployed on Heroku.",
    image: RyansRecipesImage,
    liveLink: "https://asu-ryans-recipes-b97a1cee621f.herokuapp.com/",
    gitHub: "https://github.com/maverickwolfe21/ryans-recipes",
  },
];
