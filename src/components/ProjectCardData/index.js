import googleHome from "../../assets/img/googleHome.png";
import virtualShop from "../../assets/img/virtualShop.png";
import coffeeBlog from "../../assets/img/coffeeBlog.png";
import miniBlog from "../../assets/img/miniBlog.png";
import familiaApp from "../../assets/img/familiaApp.png";

const projects = [
  {
    id: 1,
    name: "Google-Homepage",
    description: "The simple and very well known Google homepage",
    screenshot: googleHome,
    repo: "https://github.com/marianoeq/google-homepage",
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
    deployedURL: "https://ukla16.netlify.app",
  },
];

export default projects;
