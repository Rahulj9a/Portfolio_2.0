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
        <section
          id="aboutMeIntro"
          className="md:h-screen h-fit w-full md:pl-4 pl-1  "
        >
          <div className=" h-full w-full flex md:flex-row flex-col justify-start md:justify-normal items-center ">
            <div className="visual flex md:w-1/3 w-full my-14 h-fit md:items-center items-end justify-center  ">
              <Image
                width={300}
                height={300}
                className="h-[250px] w-[250px] rounded-full shadow-circle-shadow shadow-custom4"
                src="/images/profilrPic.jpg"
              />
            </div>
            <div className="flex items-center w-2/3  md:border-l-2 border-t-2 md:border-t-0 md:flex-row flex-col my-10 border-custom4">
              <div className="words flex items-center md:justify-start justify-center w-full md:w-1/4 md:h-1/3 my-10  px-4">
                <h2 className="text-custom4 text-lg ">
                  Hey! I am{" "}
                  <span className="block text-2xl font-bold">
                    Rahul Solanki
                  </span>
                  A frontend developer
                </h2>
              </div>
              <div className="flex-1 flex   items-center h-full">
                <p className="text-custom3 ">
                  I am a self taught web developer who start his learning
                  journey in starting months of year 2022. I have learn{" "}
                  <span className="text-custom4">C</span> as my first language
                  to have a clear understanding of what the hack coding is.
                  Later I build my interest in{" "}
                  <span className="text-custom4">web development</span> and till
                  now exploring the field. Primarly I have done my graduation
                  and post graduation in the filed of English Literature.
                  <p>
                    Explore more about my skills that I have learned in all this
                    time
                  </p>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="skillsSection">
          <SkillSection skillName={"HTML, CSS"}>
            <ul className="list-disc">
              <li>
                <span className="text-custom4 cursor-pointer">
                  <Link
                    target="_blank"
                    href="https://www.freecodecamp.org/certification/rahulj9a/responsive-web-design"
                  >
                    {" "}
                    Responsive Web Design certification from freeCodeCamp
                  </Link>
                </span>
              </li>
              <li>
                responsive and accessible websites using HTML5, CSS3, and
                flexbox
              </li>
              <li>
                Great grip over frameworks such as Bootstrap and TailwindCSS
              </li>
              <li>Clean and maintainable code keeping accessiblity in mind</li>
            </ul>
          </SkillSection>

          <SkillSection skillName={"Javascript"}>
            <ul className="list-disc">
              <li>
                <span className="text-custom4 cursor-pointer">
                  <Link
                    target="_blank"
                    href="https://www.freecodecamp.org/certification/rahulj9a/javascript-algorithms-and-data-structures"
                  >
                    JavaScript Algorithms and Data Structures certification
                  </Link>
                </span>
              </li>
              <li>
                <span className="text-custom4 cursor-pointer">
                  <Link
                    target="_blank"
                    href="https://www.hackerrank.com/certificates/ef0b91ea9dc6"
                  >
                    JavaScript Certification (Intermediate)
                  </Link>
                </span>
              </li>
              <li>
                Great understanding of concepts such as variables, functions,
                loops, arrays, objects, etc.
              </li>
              <li>
                Can use JavaScript to manipulate the DOM, add interactivity and
                functionality to web pages, and communicate with web APIs.
              </li>
              <li>
                also familiar with some modern JavaScript features and tools,
                such as ES6 syntax, promises, async/await, fetch, etc.
              </li>
            </ul>
          </SkillSection>

          <SkillSection skillName={"Bootstrap, Tailwindcss, MaterialUI"}>
            <ul className="list-disc">
              <li>
                <span className="text-custom4 cursor-pointer">
                  <Link
                    target="_blank"
                    href="https://www.freecodecamp.org/certification/rahulj9a/front-end-development-libraries"
                  >
                    Frontend development libraries Certification
                  </Link>
                </span>
              </li>
              <li>Responsive and interactive UIs</li>
              <li>Can add new Tailwind utility classes</li>
            </ul>
          </SkillSection>
          <SkillSection skillName={"JQuery"}>
            <ul className="list-disc">
              <li>
                <span className="text-custom4 cursor-pointer">
                  <Link
                    target="_blank"
                    href="https://www.freecodecamp.org/certification/rahulj9a/front-end-development-libraries"
                  >
                    Frontend development libraries Certification
                  </Link>
                </span>
              </li>
              <li>
                Skilled in leveraging jQuery's powerful features and functions
                for DOM manipulation and event handling
              </li>
            </ul>
          </SkillSection>
          <SkillSection skillName={"React.js"}>
            <ul className="list-disc">
              <li>
                <span className="text-custom4 cursor-pointer">
                  <Link
                    target="_blank"
                    href="https://www.freecodecamp.org/certification/rahulj9a/front-end-development-libraries"
                  ></Link>
                  Front End Development Libraries certification
                </span>
              </li>
              <li>
                I can use React to create reusable and stateful components,
                manage data flow with props and hooks, handle user events and
                forms, implement routing and navigation, and optimize
                performance and user experience.
              </li>
              <li>
                I can also use tools such as Create React App, React Dev Tools,
                etc. to streamline my React development process.
              </li>
            </ul>{" "}
          </SkillSection>
          <SkillSection skillName={"Next.js"}>
            <ul className="list-disc">
              <li>
                Experienced in leveraging Next.js to build performant, scalable,
                and SEO-friendly websites.
              </li>
              <li>
                Can utilize Next.js's built-in SSR capabilities to render web
                pages on the server before sending them to the client. Able to
                optimize page load times and improve SEO by pre-rendering
                content.
              </li>
              <li>
                Proficient in Next.js's file-based routing system,Able to define
                dynamic routes, nested routes, parllel routes and interseptive
                routes.
              </li>
              <li>
                Experienced in creating API routes with Next.js, enabling the
                development of serverless backend functionality
              </li>
              <li>
                Capable of handling API requests, implementing authentication,
                and integrating with databases or external APIs.
              </li>
            </ul>
          </SkillSection>
          <SkillSection skillName={"Redux, Zustand"}>
            <ul className="list-disc">
              <li>
                Experienced in implementing the Redux architecture to manage
                complex application states effectively.
              </li>
              <li>
                Capable of defining actions and reducers to manage state changes
                and ensure a predictable flow of data.
              </li>
              <li>
                Experienced in leveraging Zustand to manage state in React
                applications with minimal setup and boilerplate.
              </li>
              <li>
                Knowledgeable in utilizing Zustand's reactivity features to
                automatically update components when the state changes
              </li>
              <li>
                Knowledgeable in utilizing Zustand with TypeScript, leveraging
                type annotations to ensure type safety and improve code quality.
              </li>
            </ul>
          </SkillSection>
          {/* <SkillSection skillName={"MongoDB, PostgreSQL"}>
            This is HTML
          </SkillSection>
          <SkillSection skillName={"Express, Prisma"}></SkillSection> */}
        </section>
      </div>
    </div>
  );
};

export default page;
