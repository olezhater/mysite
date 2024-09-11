import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import data from "../data/portfolio.json";
import Cursor from "../components/Cursor";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const ProjectFive = () => {
  const router = useRouter();
  const [currentTheme, setCurrentTheme] = useState("light");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const project = data.projects.find((p) => p.id === "2");

  const filteredProjects = data.projects.filter((p) => p.url !== project.url && p.id !== "64565912-3f25-4c21-8a6b-bb372a08a2c8");
  const totalProjects = filteredProjects.length;
  const reversedProjects = filteredProjects.slice(Math.max(totalProjects - 3, 0)).reverse();

  useEffect(() => {
    setMounted(true);
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}

      <Head>
        <title>{project.alt}</title>
        <meta name="description" content={project.description} />
      </Head>

      <Header isBlog/>
      <div className="container mx-auto my-10 laptop:px-10">
        <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">{project.title}</h1>
        <p className="my-5">{project.description}</p>
        <div className="pt-16 laptop:px-6 tablet:px-4">
          <h2 className="text-3xl mt-5 font-bold">Introduction</h2>
          <h2 className="text-xl my-5">I had to develop the design for a new feature in the bank&apos;s application. Security questions are an additional means of client identification. My task was to ensure that in the application settings, users could understand the purpose of security questions and easily configure them.</h2>
        </div>
        <div className="pt-16 laptop:px-6 tablet:px-4 mb-8">
          <h2 className="text-3xl my-5 font-bold">First prototype</h2>
        </div>
          <img
            src={
              currentTheme === "light" 
              ? "/img/project-2/2-1w.png" 
              : "/img/project-2/2-1.png"
            }
            className="w-full"
            alt="security questions, feature for banking app"
          />
        <div className="pt-16 laptop:px-6 tablet:px-4 mb-8">
          <h2 className="text-3xl mt-5 font-bold">Research Findings</h2>
          <h2 className="text-xl my-5">After several user tests, we realized that we needed to first explain to the users why they need security questions. Therefore, we decided to add onboarding to this feature. Additionally, users were unclear about why they couldn&apos;t delete previously added questions, as they might forget the answers to those questions. We have decided to give users this option, and now deletion is available along with SMS code confirmation.</h2>
        </div>
          <img
            src={
              currentTheme === "light" 
              ? "/img/project-2/2-2w.png" 
              : "/img/project-2/2-2.png"
            }
            className="w-full"
            alt="An additional method of identification to protect your funds and regain access to your account"
          />
        <div className="pt-16 laptop:px-6 tablet:px-4 mb-8">
          <h2 className="text-3xl mt-5 font-bold">How it works</h2>
          <h2 className="text-xl my-5">An example of a money transfer</h2>
        </div>
          <img
            src={
              currentTheme === "light" 
              ? "/img/project-2/2-3w.png" 
              : "/img/project-2/2-3.png"
            }
            className="w-full"
            alt="Adding question deletion functionality"
          />
          <div className="pt-16 laptop:px-6 tablet:px-4">
          <h2 className="text-xl my-5">This feature has impacted overall user satisfaction positively. With security questions in place, users feel more secure. Furthermore, as we&apos;ve implemented an additional security system, we hope it will help reduce the number of fraudulent transactions.</h2>
        </div>
        <h2 className="mt-40 text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">You May also like</h2>
        <div className="mt-5 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            {[
              data.projects[2], // Project with id 3
              data.projects[0], // Project with id 1
              data.projects[3], // Project with id 4
            ].map((p) => (
            <WorkCard
              key={p.id}
              img={p.imageSrc}
              name={p.title}
              description={p.description}
              isHomepage={true}
              onClick={() => window.location.href = p.url}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectFive;
