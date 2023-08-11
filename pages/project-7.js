import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import data from "../data/portfolio.json";
import Cursor from "../components/Cursor";

const ProjectSix = () => {
  const project = data.projects.find((p) => p.id === "7");

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
        <div className="flex items-center gap-2 mb-1em">
          <a href="https://apps.apple.com/ru/app/магнит-акции-и-скидки/id881463973" target="_blank" rel="noopener noreferrer">
            <img src="../img/project-7/download_appstore.png" alt="Download on the App Store" style={{ width: '120px', marginBottom: '1em' }} />
          </a>
          <a href="https://play.google.com/store/apps/details?id=ru.tander.magnit&hl=ru&pli=1" target="_blank" rel="noopener noreferrer">
            <img src="../img/project-7/download_googleplay.png" alt="Get it on Google Play" style={{ width: '120px', marginBottom: '1em' }} />
          </a>
        </div>
        <img src="../img/project-7/7-1.png" className="w-full" alt="One of the top food retail chains"/>
        <img src="../img/project-7/7-2.png" className="w-full" alt="UX Challenge"/>
        <img src="../img/project-7/7-3.png" className="w-full" alt="Our design team utilized a new design system built with design tokens"/>
        <img src="../img/project-7/7-4.png" className="w-full" alt="We anticipate that the online ordering feature will be sought after by 20% of the main app users"/>
        <img src="../img/project-7/7-5.png" className="w-full" alt="Key Customer Journey Map Areas"/>
        <img src="../img/project-7/7-6.png" className="w-full" alt="Ideate and Prototype"/>
        <img src="../img/project-7/7-7.png" className="w-full" alt="Design Research Unveils Valuable Insights"/>
        <img src="../img/project-7/7-8.png" className="w-full" alt="User interface delivery app cart and checkout"/>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
                src="https://player.vimeo.com/video/849881203?transparent=0&autoplay=1&loop=1&muted=0&portrait=0&byline=0&h=2697d04fbb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
        </div>
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

export default ProjectSix;
