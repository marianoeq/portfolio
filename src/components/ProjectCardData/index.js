import unitConverter from "../../assets/img/unitConverter.png";
import virtualShop from "../../assets/img/virtualShop.png";
import coffeeBlog from "../../assets/img/coffeeBlog.png";
import miniBlog from "../../assets/img/miniBlog.png";
import familiaApp from "../../assets/img/familiaApp.png";
import weatherApp from "../../assets/img/weatherApp.png";
import luckyBlackjack from "../../assets/img/luckyBlackjack.png";
import chromeExtension from "../../assets/img/chromeExtension.png";
import randomPassword from "../../assets/img/randomPassword.png";

const projects = [
  {
    id: 1,
    name: "Unit-converter",
    description: "Unit converter is a simple desktop app that changes a user's choice value from one unit measure to another one. - Length - Volume - Masss",
    screenshot: unitConverter,
    repo: "https://github.com/marianoeq/unit-convertor",
    deployedURL:"https://measures-converter.netlify.app/"
  },
  {
    id: 2,
    name: "Virtual Shop T-Shirt",
    description:
      "A virtual T-shirt shop with an `about us` and a `selecting size and amount of t-shirt` page",
    screenshot: virtualShop,
    repo: "https://github.com/marianoeq/VirtualshopT-shirt",
    deployedURL:"https://virtualt-shirtshop.netlify.app"
  },
  {
    id: 3,
    name: "Coffee-Blog/Shop",
    description:
      "A template of a coffee blog/shop that can be used as a platform to offer courses and a contact form",
    screenshot: coffeeBlog,
    repo: "https://github.com/marianoeq/coffeeBlog",
    deployedURL:
      "https://haveacoffee.netlify.app",
  },
  {
    id: 4,
    name: "Mini-Blog",
    description:
      "A blog where users can record, store and share anything they want to",
    screenshot: miniBlog,
    repo: "https://github.com/marianoeq/mini_blog",
    deployedURL: "https://themini-blog.netlify.app",
  },
  {
    id: 5,
    name: "Familia",
    description:
      "A private social media to be used within your loved ones, where you can share events, pictures, comments and relevant personal information.",
    screenshot: familiaApp,
    repo: "https://github.com/SchoolOfCode/final-project-repo-ukla-room-16",
    deployedURL: "https://ukla.netlify.app/",
  },
  {
    id: 6,
    name: "Weather-App",
    description:
      "A weather application able to fetch the climate condition of a city previously selected by the user.",
    screenshot: weatherApp,
    repo: "https://github.com/marianoeq/Weather-app",
    deployedURL: "https://thegreatestweatherapp.netlify.app/",
  },
  {
    id: 7,
    name: "Lucky Blackjack",
    description:"The classic and well-known casino game, but slightly different. You have 5 lucky shots to hit blackjack. This game is for those superstitious who need that quote of luck to make sure that everything will be right! ",
    screenshot: luckyBlackjack,
    repo: "https://github.com/marianoeq/blackjack",
    deployedURL: "https://lucky-blackjack.netlify.app/",
  },
  {
    id: 8,
    name: "Chrome Extension",
    description:"Chrome Extension built in JavaScript. Useful tool to keep track of web-sites and input comments. Descriptions to make use of it on README.md file",
    screenshot: chromeExtension,
    repo: "https://github.com/marianoeq/chrome-extension",
  },
  {
    id: 9,
    name: "Random Password Generator",
    description:"Random password generator is an app to create a strong password. The user can select the length of the password and copy it to the clipboard.",
    screenshot: randomPassword,
    repo: "https://github.com/marianoeq/passwordGenerator",
    deployedURL: "https://randompasswordgenerator2022.netlify.app/",
  },
];

export default projects;
