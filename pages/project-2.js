import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import data from "../data/portfolio.json";
import Cursor from "../components/Cursor";

const ProjectTwo = () => {
  const project = data.projects.find((p) => p.id === "2");

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
        <img src="../img/project-2/2-1.png" className="w-full" alt="ux design. Problems, Tasks, Manifest, Animation, SEO, Colors & Fonts, Wireframes, User flow"/>
        <img src="../img/project-2/2-2.png" className="w-full" alt="Responsive site development, prioritizing mobile devices due to high user traffic and low engagement on desktop. Limited content on the adaptive version hampers information accessibility. Analytics indicate majority of users access the site via mobile devices, resulting in low visitation and limited relevant search engine traffic. High bounce rate observed."/>
        <img src="../img/project-2/2-3.png" className="w-full" alt="Animation options: GIF, mp4, CSS, JS, JSON. GIF has a drawback of large file size. mp4 requires additional solutions for playback and customization. CSS, JS have a drawback of longer development time. JSON is a format for saving simple animations in After Effects and exporting to lottiefiles. Animations can be embedded on the website either as a JSON file or as a link for lottie player."/>
        <img src="../img/project-2/2-4.png" className="w-full" alt="colors and fonts"/>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
                src="https://player.vimeo.com/video/741775484?autoplay=1&loop=1&muted=0&portrait=0&byline=0&h=2697d04fbb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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

export default ProjectTwo;
