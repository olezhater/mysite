import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import data from "../data/portfolio.json";
import Cursor from "../components/Cursor";

const ProjectSix = () => {
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
      <div className="container mx-auto my-10 laptop:px-10">
        <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">{project.title}</h1>
        <p className="my-5">{project.description}</p>
        <div className="pt-16 laptop:px-6 tablet:px-4">
          <h2 className="text-3xl mt-5 font-bold">Introduction</h2>
          <h2 className="text-xl my-5">The main task of the project is to create an interface for the bank&apos;s technical support service, which is responsible for installing new application releases and troubleshooting. To configure and redirect traffic between data centers (DC), you need to access the code using different applications. It&apos;s tedious and inconvenient.The new UI can switch traffic between DC&apos;s when we have an accident with one of them (when one of the DC&apos;s is offline), when we want to start beta testing, or when we want to do a smooth rollout of the new release.</h2>
        </div>
        <img src="../img/project-3/3-2.png" className="w-full" alt="The design was developed for another bank. The presentation describes only the core essence of the interface."/>
        <div className="pt-16 laptop:px-6 tablet:px-4">
          <h2 className="text-3xl my-5 font-bold">Design Thinking</h2>
        </div>
        <img src="../img/project-3/3-3.png" className="w-full" alt="Process Design Thinking: We need to understand how a serial exchange works with the Gateway"/>
        <div className="pt-16 laptop:px-6 tablet:px-4">
          <h2 className="text-3xl my-5 font-bold">Wireframes</h2>
        </div>
        <img src="../img/project-3/3-4.png" className="w-full" alt="wireframes and sitemap"/>
        <div className="pt-16 laptop:px-6 tablet:px-4">
          <h2 className="text-3xl mt-5 font-bold">Figma Plugin</h2>
          <h2 className="text-xl my-5">In the process of creating layouts, it was necessary to work with a large amount of data. I received content, but the architects could change it every week. I had to make changes in design layouts (it was important to get the most plausible prototypes for approval and testing). I found a great plugin for Figma - Google Sheets Sync. I made a table and sent it to the architects. So I got my own backend system for layouts.</h2>
        </div>
        <img src="../img/project-3/3-5.png" className="w-full" alt="During layout creation, working with a large volume of data was required."/>
        <div className="pt-16 laptop:px-6 tablet:px-4">
          <h2 className="text-3xl my-5 font-bold">Prototype</h2>
        </div>
        <img src="../img/project-3/3-6.png" className="w-full" alt="user interface"/>
        <div className="my-5">
          <img src="../img/project-3/3-7.png" className="w-full" alt="user interface"/>
        </div>
        <div className="mt-5" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
                src="https://player.vimeo.com/video/722856848?transparent=0&autoplay=1&loop=1&muted=0&portrait=0&byline=0&h=2697d04fbb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
