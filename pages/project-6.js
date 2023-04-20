import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import data from "../data/portfolio.json";
import Cursor from "../components/Cursor";

const ProjectSix = () => {
  const project = data.projects.find((p) => p.id === "6");

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
        <img src="../img/project-6/6-1.png" className="w-full" />
        <img src="../img/project-6/6-2.png" className="w-full" />
        <img src="../img/project-6/6-3.png" className="w-full" />
        <img src="../img/project-6/6-4.png" className="w-full" />
        <img src="../img/project-6/6-5.png" className="w-full" />
        <img src="../img/project-6/6-6.png" className="w-full" />
        <img src="../img/project-6/6-7.png" className="w-full" />
        <img src="../img/project-6/6-8.png" className="w-full" />
        <video src="../img/project-6/6-9.mov" autoplay="true" className="w-full" />
        <h2 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold" style={{ marginTop: '60px' }}>You May also like</h2>
        <div className="mt-5 grid grid-cols-1 tablet:grid-cols-3 gap-4">
          {reversedProjects.map((p) => (
            <WorkCard
              key={p.id}
              img={p.imageSrc}
              name={p.title}
              description={p.description}
              onClick={() => window.open(p.url)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectSix;
