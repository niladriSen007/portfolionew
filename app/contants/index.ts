import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";
import { GiSkills, GiSoapExperiment, GiProgression } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Stripe Payment",
    Image: "/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 50,
    height: 40,
  },
  // {
  //   name: "Kotlin",
  //   Image: "/kotlin.png",
  //   width: 150,
  //   height: 80,
  // },
];

export const Socials = [

  {
    name: "Facebook",
    src: "/facebook.svg",
    link:"https://www.facebook.com/profile.php?id=100070480083500"
  },
  {
    name: "Linkedin",
    src: "/lknd.png",
    link:"https://www.linkedin.com/in/niladri-sen/"
  },
];
export const Projects = [
  {
    title: "Pizza Nextjs app",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/pizza.png",
    linkedinLink:"https://www.linkedin.com/posts/niladri-sen_david-nxtwave-nxtwaveccbp-activity-7133810681140674560-x_lu?utm_source=share&utm_medium=member_desktop",
    githubLink:"https://github.com/niladriSen007/pizzanext14"
  },
  {
    title: "Spotify Clone",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/Spotify.png",
    linkedinLink:"https://www.linkedin.com/posts/niladri-sen_spotifyclone-activity-7102571341618315265-PXae?utm_source=share&utm_medium=member_desktop",
    githubLink:"https://github.com/niladriSen007/spotify_mern"
  },
  {
    title: "Youtube",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/youtube.png",
    linkedinLink:"https://www.linkedin.com/posts/niladri-sen_nxtwave-ccbp-ccbpian-activity-7019645771683696641-hImY?utm_source=share&utm_medium=member_desktop",
    githubLink:"https://github.com/niladriSen007/youtubeclone"
  },
  
  {
    title: "Job Nextjs app",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/job.png",
    linkedinLink:"https://www.linkedin.com/posts/niladri-sen_job-search-application-using-mern-stack-activity-7134885833727217664-_vrY?utm_source=share&utm_medium=member_desktop",
    githubLink:"https://github.com/niladriSen007/job"
  },
];



export const NavLinks1 = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
    text:"Home"
  },
  {
    name: "/my-skills",
    icon: GiSkills,
    link: "/my-skills",
    text:"My Skills"
  },
];

export const NavLinks2 = [
  {
    name: "/my-projects",
    icon: GiSoapExperiment,
    link: "/my-projects",
    text:"My Projects"
  },
  {
    name: "/contact-me",
    icon: IoIosContact,
    link: "/contact-me",
    text:"Contact me"
  },
];