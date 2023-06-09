import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import data from "../data/portfolio.json";
import Cursor from "../components/Cursor";

const ProjectThree = () => {
  const project = data.projects.find((p) => p.id === "3");

  const filteredProjects = data.projects.filter((p) => p.url !== project.url && p.id !== "64565912-3f25-4c21-8a6b-bb372a08a2c8");
  const totalProjects = filteredProjects.length;
  const reversedProjects = filteredProjects.slice(Math.max(totalProjects - 3, 0)).reverse();

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}

      <Head>
        <title>{project.alt}</title>
        <meta name="description" content={project.description} />
      </Head>

      <Header isBlog/>
      <div className="container mx-auto my-10">
        <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">{project.title}</h1>
        <p className="my-5">{project.description}</p>
        <img src="../img/project-3/3-1.png" className="w-full" alt="Hearing Impaired Alarm app"/>
        <img src="../img/project-3/3-2.png" className="w-full" alt="user story map"/>
        <img src="../img/project-3/3-3.png" className="w-full" alt="wireframing"/>
        <img src="../img/project-3/3-4.png" className="w-full" alt="mix wireframes, story map"/>
        <img src="../img/project-3/3-5.gif" className="w-full" alt="prototype gif"/>
        <img src="../img/project-3/3-6.png" className="w-full" alt="font and colors"/>
        <img src="../img/project-3/3-7.gif" className="w-full" alt="prototype gif"/>
        <h2 className="mt-40 text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">You May also like</h2>
        <div className="mt-5 grid grid-cols-1 tablet:grid-cols-3 gap-4">
          {reversedProjects.map((p) => (
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

export default ProjectThree;
