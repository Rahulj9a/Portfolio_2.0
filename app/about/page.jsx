import LeftSideBar from "@/components/LeftSideBar";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { BsBag } from "react-icons/bs";

import Image from "next/image";
import SkillSection from "@/components/SkillSection";
import Link from "next/link";

const page = ({ props }) => {
  const links = [
    { title: "Home", logo: <AiOutlineHome size="30px" /> },
    { title: "About Me", href: "./about", logo: <SiAboutdotme size="30px" /> },
    {
      title: "Projects",
      href: "/projects",
      logo: <FaLaptopCode size="30px" />,
    },
    { title: "Contents", logo: <BsBag size="30px" /> },
    { title: "Contact Me", logo: <MdOutlineContactPhone size="30px" /> },
  ];

  return (
    <div className="md:w-auto w-screen h-auto pb-10">
      <LeftSideBar links={links} className="" />

      <div className="m-auto left-0 right-0 bottom-0 top-0 md:left-20  absolute">
        <section id="aboutMeIntro" className="h-screen w-full md:pl-4 pl-1  ">
          <div className=" h-full w-full flex items-center">
            <div className="visual flex w-1/3 items-center justify-center  ">
              <Image
                width={300}
                height={300}
                className="h-[250px] w-[250px] rounded-full shadow-circle-shadow shadow-custom4"
                src="/images/profilepic.jpg"
              />
            </div>
            <div className="words flex items-center w-1/4 h-2/3 border-l-2 border-custom4 px-4">
              <h2 className="text-custom4 text-lg ">
                Hey! I am{" "}
                <span className="block text-2xl font-bold">Rahul Solanki</span>A
                frontend developer
              </h2>
            </div>
            <div className="flex-1 flex   items-center h-full">
              <p className="text-custom3 ">
                I am a frontend web developer having a great knowledge of{" "}
                <span className="text-custom4">HTML5</span>,{" "}
                <span className="text-custom4">CSS3</span>,{" "}
                <span className="text-custom4"> Javascript</span>,{" "}
                <span className="text-custom4">Typescript</span> with a passion
                for creating modern and responsive webapps using the latest web
                technologies. I have experience in using frameworks and
                libraries like <span className="text-custom4">Next.js</span> ,{" "}
                <span className="text-custom4">React.js</span>,
                <span className="text-custom4"> TailwindCSS</span>,{" "}
                <span className="text-custom4"> React-Query</span> with
                Bootstrap, MaterialUI, Redux, Zustang, Axios and more... to
                build dynamic and interactive web pages.
                <br />I also have some knowledge of how to use backend
                technologies such as MongoDB,{" "}
                <span className="text-custom4"> PostgreSQL</span>, Express,{" "}
                <span className="text-custom4"> Prisma</span>,{" "}
                <span className="text-custom4"> Next-Auth</span> and more...
                <br /> I am proficient in using{" "}
                <span className="text-custom4"> Git</span> and GitHub for
                version control and collaboration, as well as various tools such
                as VSCode, Canva, <span className="text-custom4"> Figma</span>,
                Notion and AI tools for design, development and productivity.
                <br /> I am always eager to learn new skills and explore news
                challenges in the web development field.
              </p>
            </div>
          </div>
        </section>
        <section id="skillsSection">
          <SkillSection skillName={"HTML, CSS"}>
            I have a solid foundation in HTML and CSS, the core languages of web
            with development. I have completed the{" "}
            <span className="text-custom4 cursor-pointer">
              <Link
                target="_blank"
                href="https://www.freecodecamp.org/certification/rahulj9a/responsive-web-design"
              >
                {" "}
                Responsive Web Design certification from freeCodeCamp
              </Link>
            </span>
            , where I learned how to create responsive and accessible websites
            using HTML5, CSS3, and flexbox. I can also use preprocessors such as
            Sass and frameworks such as Bootstrap to enhance my web design
            workflow. I have a keen eye for detail and aesthetics, and I always
            strive to write clean, semantic, and maintainable code. 😊
          </SkillSection>

          <SkillSection skillName={"Javascript"}>
            I have a strong command of JavaScript, the most popular programming
            language for web development. I have earned the{" "}
            <span className="text-custom4 cursor-pointer">
              <Link
                target="_blank"
                href="https://www.freecodecamp.org/certification/rahulj9a/javascript-algorithms-and-data-structures"
              >
                JavaScript Algorithms and Data Structures certification
              </Link>
            </span>{" "}
            from freeCodeCamp, where I learned how to solve various coding
            challenges using JavaScript fundamentals, such as variables,
            functions, loops, arrays, objects, etc. I have also obtained the
            JavaScript (Intermediate) certification from HackerRank, where I
            demonstrated my problem-solving and logic-building skills in a timed
            online test. I can use JavaScript to manipulate the Document Object
            Model (DOM), add interactivity and functionality to web pages, and
            communicate with web APIs. I am also familiar with some modern
            JavaScript features and tools, such as ES6 syntax, promises,
            async/await, fetch, etc. 😊
          </SkillSection>

          <SkillSection skillName={"Bootstrap, Tailwindcss, MaterialUI"}>
            I have experience in using various CSS frameworks and libraries to
            create responsive and attractive web designs. I can use Bootstrap,
            the most popular CSS framework, to quickly build and customize web
            layouts using predefined classes and components. I can also use
            TailwindCSS, a utility-first CSS framework, to create custom and
            consistent designs using low-level classes that can be composed
            together. I can also use MaterialUI, a React UI framework, to
            implement Google’s Material Design system in my web projects using
            ready-made components and themes. 😊
          </SkillSection>
          <SkillSection skillName={"JQuery"}></SkillSection>
          <SkillSection skillName={"React.js"}>
            I have proficiency in React, the most popular JavaScript library for
            building user interfaces. I have completed the <span className="text-custom4 cursor-pointer">
              <Link
                target="_blank"
                href="https://www.freecodecamp.org/certification/rahulj9a/front-end-development-libraries"
              ></Link>Front End Development
            Libraries certification</span> from freeCodeCamp, where I learned how to
            create dynamic and interactive web apps using React. I can use React to
            create reusable and stateful components, manage data flow with props
            and hooks, handle user events and forms, implement routing and
            navigation, and optimize performance and user experience. I can also
            use tools such as Create React App, React Dev Tools, etc. to
            streamline my React development process. 😊
          </SkillSection>
          <SkillSection skillName={"Next.js"}>This is HTML</SkillSection>
          <SkillSection skillName={"Redux, Zustand"}>This is HTML</SkillSection>
          <SkillSection skillName={"MongoDB, PostgreSQL"}>
            This is HTML
          </SkillSection>
          <SkillSection skillName={"Express, Prisma"}></SkillSection>
        </section>
      </div>
    </div>
  );
};

export default page;
