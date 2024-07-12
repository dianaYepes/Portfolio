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
        "Create and integrate custom API connectors for clients, including jobs for querying APIs, writing to AWS Athena, and merging client datasources.",
        "Define and document client requirements, create comprehensive Jira tickets for developers, and conduct thorough user testing across multiple environments to enhance client analytics and support informed decision-making.",
        "Investigate and resolve data discrepancies for high-profile customers such as CBS (Paramount), Chess.com, and Hearst, ensuring data integrity and client satisfaction.",
      ],
    },
    {
      title: "Software Development Engineer",
      company_name: "GoDaddy",
      icon: godaddy,
      iconBg: "#000000",
      date: "August 2023 - Feb 2024",
      points: [
        "Reindexed ElasticSearch indices and decreased disk usage for each node by 35% by implementing an ingest pipeline that filtered incoming logs using ElasticSearch API",
        "Integrated Data Quality checks for the Platform and Delivery teams’ Athena databases to upgrade the tables to Tier 2 according to data governance requirements, and enabling data analytics usage for customer success team",
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
        "Managed and edited websites for math and computer science department faculty members using Django and HTML on Linux servers.",
        "Developed projects using Google Apps Script, including modifications to the CS department’s faculty members list.",
        "Trouble-shoot issues users have with software and computer and printer hardware (Linux OS)",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "GoDaddy",
      icon: godaddy,
      iconBg: "#000000",
      date: "May 2022 - September 2022",
      points: [
        "Developed Python code for an automated backend Slackbot meant to notify MarTech team on Pull Requests, updating its security and enabling it for GHEC via GitHub webhooks, AWS Lambda, and the SlackAPI",
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
        "Taught children how to use simple prototyping software such as MagicaVoxel, how to create simple video game animations, how to design 2D games using GameMaker, and elementary python coding.",
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
        {
          name: "Java",
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
        {
          name: "Javascript",
          color: "text-amber-100",
        },
      ],
      image: quiz,
      source_code_link: "https://github.com/dianaYepes/React_quiz",
    },
  ];
  
  export { experiences, projects };