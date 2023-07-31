import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import data from "../data/portfolio.json";
import Cursor from "../components/Cursor";

const ProjectSix = () => {
  const project = data.projects.find((p) => p.id === "6");

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
        <img src="../img/project-6/6-1.png" className="w-full" alt="The project's main task is to create an interface for the bank's technical support service, enabling installation of new releases and troubleshooting. It simplifies traffic configuration and redirection between data centers, eliminating the need for multiple applications. The new UI allows seamless traffic switching in case of offline data centers, beta testing, or smooth release rollouts."/>
        <img src="../img/project-6/6-2.png" className="w-full" alt="Process Design Thinking: We need to understand how a serial exchange works with the Gateway, show the process immediately after pressing the command execution button, provide successful statuses for user assurance, allow error message redirection to settings for quick fixes, create the first prototype for the Gateway Settings page, ensure up-to-date data in the interface without constant application switching, accommodate technical limitations of data processing centers, and enable users to continuously verify configuration relevance in another application."/>
        <img src="../img/project-6/6-3.png" className="w-full" alt="First prototype"/>
        <img src="../img/project-6/6-4.png" className="w-full" alt="wireframes and sitemap"/>
        <img src="../img/project-6/6-5.png" className="w-full" alt="During layout creation, working with a large volume of data was required. The content provided could be altered weekly by architects, necessitating design layout modifications. To ensure realistic prototypes for approval and testing, I discovered and utilized the Figma plugin, Google Sheets Sync. By creating a table and sharing it with the architects, I established my own backend system for layouts."/>
        <img src="../img/project-6/6-6.png" className="w-full" alt="user interface"/>
        <img src="../img/project-6/6-7.png" className="w-full" alt="Pages redesigned for presentation using the Vienna design system by Raiffeisen bank. Utilized vibrant colors and well-crafted components"/>
        <img src="../img/project-6/6-8.png" className="w-full" alt="prototype is below"/>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
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
