import {
    shogi,
    bot,
    medium,
    bayt,
    snake,
    quiz,
    godaddy,
    nyu,
    burt,
    blackrocket
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  
  const experiences = [
    {
      title: "Solutions Engineer Intern",
      company_name: "Burt Intelligence",
      icon: burt,
      iconBg: "#383E56",
      date: "June 2024 - Present",
      points: [
        "Build and modify custom and standard API connectors for clients: create job to query API, extract and parse data, write to AWS database, and create automated unit tests",
        "Define and document client requirements, create detailed Jira tickets for developers, and conduct user testing in various environments for reporting client analytics and better decision making.",
        "Investigate data discrepancies on behalf of customers such as Adevinta (eBay), Paramount, and Hearst.",
      ],
    },
    {
      title: "Software Development Engineer I",
      company_name: "GoDaddy",
      icon: godaddy,
      iconBg: "#000000",
      date: "August 2023 - Feb 2024",
      points: [
        "Reindexed ElasticSearch indices and decreased disk usage for each node by 35% by implementing an ingest pipeline that filtered incoming logs using ElasticSearch API",
        "Integrated Data Quality checks for the Platform and Delivery team databases to upgrade the tables to Tier 2 according to data governance requirements.",
        "Conducted the Discovery work necessary to create detailed tickets, outlining the scope and requirements. Updated our Data producer documentation with business impacts if data fails required consumer SLA."
      ],
    },
    {
      title: "Operations Analyst/Web Developer",
      company_name: "NYU Courant Institute of Mathematical Sciences ",
      icon: nyu,
      iconBg: "#383E56",
      date: "September 2021 - August 2023",
      points: [
        "Receive requests from Math/Comp-Sci department faculty members and edit/manage websites, mainly through using Django or editing the HTML code on the Linux server.",
        "Work on projects such as using Google Apps Script to modify the CS department’s Internship Approval Form.",
        "Assist with any issues or projects on the NYU Courant websites, mainly pertaining to code written in Django and JS.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "GoDaddy",
      icon: godaddy,
      iconBg: "#000000",
      date: "May 2022 - September 2022",
      points: [
        "Extended existing Python code for a Slackbot meant to notify MarTech team on Pull Requests, updating its security and enabling it for GHEC via GitHub webhooks, AWS Lambda, and the SlackAPI",
        "Removed over 90 security vulnerabilities from team APIs and Lambda projects by upgrading all projects to .NET6, detecting vulnerable parent libraries, and upgrading and installing necessary NuGet library packages.",
        "Won Tools Innovation category in the company-wide Intern Hackathon for my Python Q&A message history SlackBot and its web server application.",
      ],
    },
    {
      title: "TechRoom Assistant",
      company_name: "BlackRocket Productions",
      icon: blackrocket,
      iconBg: "#000000",
      date: "May 2021 - August 2021",
      points: [
        "Fixed student software bugs and tech issues on different applications",
        "Taught children how to use simple prototyping software such as MagicaVoxel, how to create simple video game animations, and how to design 2D games using GameMaker.",
        "Taught basic file management to students",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Simplified Shogi",
      description:
        "Console-based simplified version of Japanese Chess that incorporates Promotion, Drops, and Check Detection features.",
      tags: [
        {
          name: "python",
          color: "text-amber-100",
        },
        {
          name: "OOP",
          color: "text-amber-100",
        }
      ],
      image: shogi,
      source_code_link: "https://github.com/dianaYepes/ShogiGame",
    },
    {
      name: "Bayt - A shared housing app",
      description:
        "Full stack web app for sharing responsibilities and finances between roommates.",
      tags: [
        {
          name: "mongoDB",
          color: "text-amber-100",
        },
        {
          name: "express",
          color: "text-amber-100",
        },
        {
          name: "react",
          color: "text-amber-100",
        },
        {
          name: "Node.js",
          color: "text-amber-100",
        },
      ],
      image: bayt,
      source_code_link: "https://github.com/agiledev-students-spring2023/final-project-bayt",
    },
    {
      name: "NYC Mobility:Bikes vs. Taxi",
      description:
        "Analyzing Citi Bike and Taxi trip data between 2019 and 2021 to get insight into how the pandemic impacted mobility in the city.",
      tags: [
        {
          name: "Apache Hive",
          color: "text-amber-100",
        },
        {
          name: "Apache MapReduce",
          color: "text-amber-100",
        },
      ],
      image: medium,
      source_code_link: "https://medium.com/@manurod19/transportation-in-nyc-citi-bike-vs-taxi-edbd5461aee2",
    },
    {
      name: "Message History Slackbot",
      description:
        "A Hackathon python project that integrates the Slack Api in order to go through channel message history and return the most relevant results to a question asked in that Channel. ",
      tags: [
        {
          name: "Python",
          color: "text-amber-100",
        },
        {
          name: "Flask",
          color: "text-amber-100",
        },
        {
          name: "Spacy",
          color: "text-amber-100",
        },
      ],
      image: bot,
      source_code_link: "https://github.com/dianaYepes/HackathonSlackbot",
    },
    {
      name: "React Quiz",
      description:
        "Simple timer based quiz used for studying react concepts.  Displays results and stats once the test is finished.",
      tags: [
        {
          name: "React",
          color: "text-amber-100",
        },
      ],
      image: quiz,
      source_code_link: "https://github.com/dianaYepes/React_quiz",
    },
  ];
  
  export { experiences, projects };