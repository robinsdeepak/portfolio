/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Deepak Kumar",
  title: "Hi, I'm Deepak",
  subTitle: emoji(
    "An experienced Software Engineer 🚀 skilled in building and deploying backend solutions using Python, Django, Flask, and FastAPI. Proven track record in delivering high-performance applications, optimizing query performance, and designing scalable architectures. Proficient in HLD, LLD, SOLID principles, and Design Patterns."
  ),
  resumeLink:
    "https://drive.google.com/file/d/15w0xjfqDdUU3Yz3VaagjN-cAXx10zksV/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/robinsdeepak/",
  gmail: "robinsdeepak@gmail.com",
  facebook: "https://www.facebook.com/robinsdeepak",
  github: "https://github.com/robinsdeepak",
  medium: "https://medium.com/@robinsdeepak",
  instagram: "https://www.instagram.com/robinsdeepak/",
  // gitlab: "https://gitlab.com/robinsdeepak",
  // stackoverflow: "https://stackoverflow.com/users/<user>",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Backend Development",
  skills: [
    emoji(
      "⚡ Developing highly scalable production ready Web Applications and Mobile Applications for various use cases"
    ),
    emoji(
      "⚡ Proven records in leading projects, managing teams, and delivering high-quality software solutions."
    ),
    emoji("⚡ Creating application backend in Python, Django & Flask")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bakhtiyarpur College of Engineering",
      logo: require("./assets/images/bcelogo.png"),
      subHeader: "B. Tech",
      duration: "Aug 2016 - Dec 2020",
      desc: "",
      descBullets: [
        // "-",
        // "-"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Django",
      progressPercentage: "70%"
    },
    {
      Stack: "FastAPI",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Goldman Sachs",
      companylogo: require("./assets/images/gslogo.png"),
      date: "August 2023 - Present",
      desc: "Built scalable backend solutions, optimized databases, automated legacy integrations, enhanced test coverage, and led teams using Python, FastAPI, PostgreSQL, and AWS.",
      descBullets: []
    },
    {
      role: "Lead Consultant",
      company: "Genpact",
      companylogo: require("./assets/images/genpactlogo.jpeg"),
      date: "August 2023 - Present",
      desc: "Working as Lead Consultant for Backend Software Development",
      descBullets: []
    },
    {
      role: "Team Lead",
      company: "Headrun",
      companylogo: require("./assets/images/headrunlogo.png"),
      date: "October 2022 - July 2023",
      desc: "Led a team to build a scalable data system, optimize backend performance, and develop efficient data storage using Python, Django, PostgreSQL, Redis, and AWS.",
      descBullets: []
    },
    {
      role: "Software Engineer",
      company: "Headrun",
      companylogo: require("./assets/images/headrunlogo.png"),
      date: "May 2021 - Oct 2022",
      desc: "Built a scalable data store, led SportX App development, optimized performance, and improved code efficiency using Django, PostgreSQL, and AWS.",
      descBullets: []
    }
  ]
};

const internshipExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Intern",
      company: "IDeepeners",
      companylogo: require("./assets/images/logos/Ideepeners_logo.png"),
      date: "October 2020 - Dec 2020",
      desc: "",
      descBullets: []
    },
    {
      role: "Research Intern",
      company: "VestellaLab",
      companylogo: require("./assets/images/logos/vestellalab_logo.jpeg"),
      date: "Jan 2020 - July 2020",
      desc: "",
      descBullets: []
    },
    {
      role: "Research Intern",
      company: "IIT Patna",
      companylogo: require("./assets/images/logos/iitp_logo.png"),
      date: "May 2019 - June 2019",
      desc: "",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "-",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Ocean",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Gold Medalist - Bihar Skill Development Mission",
      subtitle:
        "Participated in state-level coding competition, secured 1st rank, and was awarded by the Governor of Bihar.",
      image: require("./assets/images/logo_bsdm.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Bihar Skill Development Mission",
          url: "https://skillmissionbihar.org/"
        }
      ]
    },
    {
      title: "Mentor of the Year",
      subtitle: "",
      image: require("./assets/images/headrunlogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["link1", "link2"],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "",
  number: "",
  email_address: "robinsdeepak@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  internshipExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
