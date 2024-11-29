import project1 from "../assets/projects/project-besia-thumbnail.png";
import project2 from "../assets/projects/project-bookiemouse-thumbnail.png";
import project3 from "../assets/projects/project-softjobs-thumbnail.png";
import project4 from "../assets/projects/project-tesla-feature-configurator.jpg";
import project5 from "../assets/projects/project-the-african-woman.jpg";
import project6 from "../assets/projects/project-africanhomes-thumbnail.png";
import project7 from "../assets/projects/project-travel-journal.jpg";
import project8 from "../assets/projects/project-youtube-clone.jpg";
import project9 from "../assets/projects/project-amazon-clone.jpg";
// import project6 from "../assets/projects/project-youtube-clone.jpg";
// import project7 from "../assets/projects/project-amazon-clone.jpg";

export const FRONT_EXPERTISE = `Discover my stock of Front and Backend tools and technologies, - JavaScript/TypeScript, React, Next.js Redux, Node.js, Python and MySQL/PostgreSQL/MongoDB. Coupled with UI libraries like Material UI & shadcn/ui custom animations using Framer Motion I create innovative solutions that drive business growth and deliver exceptional user experiences`;

// export const BACKEND_EXPERTISE = `BACKEND technologies including Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences`;


export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const SUB_HERO1 = `“Learning is not a destination, it’s a journey. And the more you learn, the more you realize how much you don’t know.”`
export const SUB_HERO2 = `- Albert Einstein`

// export const SUB_HERO1 = `Break down complex problems into smaller, manageable modules or functions to write clean, maintainable, and reusable code.`
// export const SUB_HERO2 = `use functions, loops, and algorithms to ensure code efficiency, readability, and maintainability.`
// export const SUB_HERO3 = `Design code that is open to extension but closed to modification.`
// export const SUB_HERO4 = `Hide data to reducing coupling between components.`
// export const SUB_HERO5 = `Design code that can take on multiple forms, to allow flexibility and adaptability`
// export const SUB_HERO6 = `Use inheritance to establish a hierarchy of classes to promote code reuse and reduce duplication.`
// export const SUB_HERO7 = ` are the core principles that define my craftmanship in Web Programming `

export const EXPERIENCES = [
  // {
  //   year: "2023 - Present",
  //   role: "Senior Full Stack Developer",
  //   company: "Google Inc.",
  //   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  //   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  // },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  {
    year: "2022 - to date",
    role: "Full Stack Developer / Computational Thinking Instructor",
    company: "Code for Africa e.V/Leipzig - Germany",
    description: `Develop and maintain web and mobile applications using JavaScript, React.js, Next.js, React Native, Node.js, Express.js and MongoDB,. Design and implement RESTful APIs for data communication. Collaborat with cross-functional teams to deliver high-quality software products on schedule. I also offer computational thinking courses for young groups of IT enthusiast and IT cosultancy for Ghanaian institutions and private individuals­`,
    technologies: ["Javascript", 'Python', "React.js", "Node.js","MongoDB"],
  },
  {
    year: "2019 - 2022",
    role: "Administration Assistant (Study and Work)",
    company: "StudirendenWerk, Berlin - Germany",
    description: `Office administration and facility management support. `,
    technologies: ["Microsoft Office"],
  },
  {
    year: "2016 - 2018",
    role: "Market Research Analyst",
    company: "Global Warehouse Limited, Accra - Ghana",
    description: `Conducted customer research and developed appropriate strategies and operational measures to consolidate the needs, trends and competition in the market. `,
    technologies: ["Microsoft Office"],
  },
  {
    year: "2010 - 2015",
    role: "HR Officer",
    company: "Global Talent Masters Limited, Accra - Ghana",
    description: `Managed about 500 casual workers for FMCG companies by performing comprehensive employee report analysis to identify trends to guide employers and improve employees' performance and production. `,
    technologies: ["Recruit Studio and Microsoft Office"],
  },
];


export const EDUCATION = [
  // {
  //   year: "2023 - Present",
  //   role: "Senior Full Stack Developer",
  //   company: "Google Inc.",
  //   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  //   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  // },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },

  {
    year: "2023",
    role: "Web Technologies (Backborn of Emerging Digital World)",
    company: "Hasso Platner Institut, Potsdam - Germany",
    
  },
  {
    year: "2022",
    role: "MSc. Innovation Management, Entrepreneurship and Sustainability",
    company: "Technishe Universität,  Berlin - Germany", 
  },

  {
    year: "2021",
    role: "Data Science and Python Programming",
    company: "Hasso Platner Institut, Potsdam - Germany",
  },

  {
    year: "2009",
    role: "Bachelor of Arts, Psychology and Linguistics",
    company: "University of Ghana, Legon", 
  },

 
];

export const PROJECTS = [
  {
    title: "Besia - E-Commerce Website",
    image: project1,
    description:
      "BESIA is a fully functional e-commerce website with features like product listing, shopping cart, payment functionality and user authentication.",
    technologies: ["HTML", "Tailwind CSS", "React", "Redux Toolkit", "Node.js", "Express Js", "MongoDB","Mongoose", "Json Web Token", "Bcrypt..."],
    link: "#"
  },
  {
    title: "BookieMouse - Facility Bookin App.",
    image: project2,
    description:
      "BookieMouse, is an application for booking facilities like conference rooms, apartments, appointments etc. with features such as authentication and validation, postings/listings and booking system.",
    technologies: ['HTML',"NextJs", "Tailwind CSS", "Appwrite", ""],
    link: "#"
  },
  {
    title: "SoftJobs- Full CRUD JobListing App.",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: "https://randolfspages.github.io/softjobs/"
  },
  // https://randolfspages.github.io/travel-journal-project/
  {
    title: "Feature Configurator - Portfolio Website",
    image: project4,
    description:
      "Tesla Car Feature Configurator is an application for showing the interior features of tesla mdeol Y",
    technologies: ["HTML", "Vanilla JavaScript", "Tailwind CSS",],
    link: "https://randolfspages.github.io/tesla-car-feature-configurator/"
  },
  {
    title: "The African Woman - Blogging Platform",
    image: project5,
    description:
      "AFrican Woman Platform - for creating accurate and an unbiased contents about the african woman.",
    technologies: ["HTML", "CSS", ],
    link: "https://randolfspages.github.io/the-african-woman/"
  },
  {
    title: "AfricanHomes- Real Estate Website Landing Page",
    image: project6,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "React"],
    link: "https://randolfspages.github.io/africanhomes/"
  },
  {
    title: "Travel Journal Platform (Under development)",
    image: project7,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS",],
    link: "https://randolfspages.github.io/travel-journal-project/"
  },
  {
    title: "Cloned Youtube Landing Page (under development)",
    image: project8,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://randolfspages.github.io/youtube-clone-project/"
  },
  {
    title: "Cloned Amazon (under development)",
    image: project9,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", 'Javascript'],
    link: "https://randolfspages.github.io/amazon-website-clone-project/"
  },
];

export const CONTACT = {
  Name: "Randolf Akuamoah Boateng  -  FullStack Developer | Sustainability and Innovation Ethusiast",
  address: "Steingasse 2, 65183, Wiesbaden-Hessen ",
  phoneNo: "+49 163 140 7303 ",
  email: "randolfakuamoah@gmail.com",
  languagues: 'English - Native Speaker Level | German - A2'
};
