import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import data from "../data/portfolio.json";
import Cursor from "../components/Cursor";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const { showProjectSix } = data;

const ProjectSix = () => {
  const router = useRouter();
  const [currentTheme, setCurrentTheme] = useState("light");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const project = data.projects.find((p) => p.id === "10");
  
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
        <div className="flex items-center gap-2 mb-1em">
          <a href="https://apps.apple.com/app/yoloprice/id6502083345" target="_blank" rel="noopener noreferrer">
            <img src="/img/project-4/download_appstore.png" alt="Download on the App Store" style={{ width: '120px', marginBottom: '1em' }} />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.yolo_price_mobile" target="_blank" rel="noopener noreferrer">
            <img src="/img/project-4/download_googleplay.png" alt="Get it on Google Play" style={{ width: '120px', marginBottom: '1em' }} />
          </a>
        </div>
          <img
            src={
              currentTheme === "light" 
              ? "/img/project-6/6-1.png" 
              : "/img/project-6/6-1.png"
            }
            className="w-full"
            alt="YoloPrice"
          />
        <h2 className="mt-40 text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">You May also like</h2>
        <div className="mt-5 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            {[
              data.projects[3], // Project with id 3
              data.projects[4], // Project with id 5
              data.projects[1], // Project with id 2
            ].map((p) => (
            <WorkCard
                key={p.id}
                img={p.imageSrc}
                name={p.title}
                description={p.description}
                isHomepage={true}
                onClick={() => window.location.href = p.url}
                style={{ transform: "none" }}
          />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProjectSix;
