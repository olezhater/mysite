import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import data from "../data/portfolio.json";
import Cursor from "../components/Cursor";

const ProjectFive = () => {
  const project = data.projects.find((p) => p.id === "3");

  const filteredProjects = data.projects.filter((p) => p.url !== project.url);
  const totalProjects = filteredProjects.length;
  const reversedProjects = filteredProjects.slice(Math.max(totalProjects - 3, 0)).reverse();

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Header />
      <div className="container mx-auto my-10">
        <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">{project.title}</h1>
        <p className="my-5">{project.description}</p>
        <img src="../img/project-3/3-1.png" className="w-full" />
        <img src="../img/project-3/3-2.png" className="w-full" />
        <img src="../img/project-3/3-3.png" className="w-full" />
        <img src="../img/project-3/3-4.png" className="w-full" />
        <img src="../img/project-3/3-5.gif" className="w-full" />
        <img src="../img/project-3/3-6.png" className="w-full" />
        <img src="../img/project-3/3-7.gif" className="w-full" />
        <h2 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold" style={{ marginTop: '60px' }}>You May also like</h2>
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

export default ProjectFive;
