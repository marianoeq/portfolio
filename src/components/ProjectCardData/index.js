import WeatherDashboardImg from "../../assets/img/weatherDash.png";
import DaySchedulerImg from "../../assets/img/dailyScheduler.png";
import RandomPasswordImg from "../../assets/img/passwordGen.png";
import BelieveImg from "../../assets/img/believe.png";
import MouldyPotatoesImg from "../../assets/img/mouldPot.png";
import WorkoutTrackerImg from "../../assets/img/fitnessTracker.png";
import NoteTakerImg from "../../assets/img/noteTaker.png";
import TechBlogImg from "../../assets/img/techBlog.png";
import EmployeeTrackerImg from "../../assets/img/mySQLTracker.png";
import READMEImg from "../../assets/img/readMEGenerator.png";

const projects = [
    { id: 1, name: "Weather-Dashboard", description: "A simple weather application that will return a five day forecast and current weather data for the specified city.", screenshot: WeatherDashboardImg, repo: "https://github.com/Robbie-Bridgwater/Weather-Dashboard", deployedURL: "https://robbie-bridgwater.github.io/Weather-Dashboard/." },
    { id: 2, name: "Day-Scheduler", description: "A calendar application that allows a user to save events for each hour of the day.", screenshot: DaySchedulerImg, repo: "https://github.com/Robbie-Bridgwater/Daily-Scheduler", deployedURL: "https://robbie-bridgwater.github.io/Daily-Scheduler/" },
    { id: 3, name: "Random-Password-Generator", description: "A password generator that outputs a random password dependent on user preferences.", screenshot: RandomPasswordImg, repo: "https://github.com/Robbie-Bridgwater/Random-Password-Generator", deployedURL: "https://robbie-bridgwater.github.io/Random-Password-Generator/" },
    { id: 4, name: "Believe", description: "A colloborative project that demonstrates competency in AGILE workflow and Git.", screenshot: BelieveImg, repo: "https://github.com/Loosekonnection/believe", deployedURL: "https://robbie-bridgwater.github.io/believe/" },
    { id: 5, name: "Mouldy-Potatoes", description: "A colloborative project that demonstrates competency in AGILE workflow and Git.", screenshot: MouldyPotatoesImg, repo: "https://github.com/Robbie-Bridgwater/mouldy-potatoes", deployedURL: "https://mouldy-potatoes.herokuapp.com/" },
    { id: 6, name: "Workout-Tracker", description: "An app that allows you to track your workouts and see visualisation of the data tracked.", screenshot: WorkoutTrackerImg, repo: "https://github.com/Robbie-Bridgwater/workout-tracker", deployedURL: "https://workout-trakker.herokuapp.com/" },
    { id: 7, name: "Express.js-Note-Taker", description: "An app that allows you to write and save notes.", screenshot: NoteTakerImg, repo: "https://github.com/Robbie-Bridgwater/Express.js-Note-Taker", deployedURL: "https://express-note-taker-js.herokuapp.com/" },
    { id: 8, name: "Tech Blog", description: "a CMS-style application, where developers can publish their blog posts and comment on one anothers posts.", screenshot: TechBlogImg, repo: "https://github.com/Robbie-Bridgwater/tech-blog", deployedURL: "https://robbie-bridgwater-tech-blog.herokuapp.com/" },
    { id: 9, name: "MySQL-Employee-Tracker", description: "A command line application for managing a company's employees using node, inquirer, and MySQL.", screenshot: EmployeeTrackerImg, repo: "https://github.com/Robbie-Bridgwater/MySQL-Employee-Tracker", deployedURL: "" },
    { id: 10, name: "Professional-README-generator", description: "A simple command line application that allows you to generate a README.md file.", screenshot: READMEImg, repo: "https://github.com/Robbie-Bridgwater/Professional-ReadME-Generator", deployedURL: "" }
]

export default projects