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

const ProjectSix = () => {
  const router = useRouter();
  const [currentTheme, setCurrentTheme] = useState("light");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);



  const project = data.projects.find((p) => p.id === "5");

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
      <div className="container mx-auto my-10 laptop:px-10 mb-8">
        <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">{project.title}</h1>
        <p className="my-5">{project.description}</p>
        <div className="pt-16">
          <h2 className="text-3xl mt-5 font-bold">Introduction</h2>
          <p className="text-xl my-5">In this presentation, we will discuss the insights we gained from users regarding the placement of the search feature at the bottom of the grocery delivery app.</p>
        </div>
          <img
            src={
              currentTheme === "light" 
              ? "/img/project-5/5-1w.png" 
              : "/img/project-5/5-1.png"
            }
            className="w-full mb-8"
            alt="Presentation slide about moving search to the bottom of grocery delivery app to improve user experience"
          />
          <img
            src={
              currentTheme === "light" 
              ? "/img/project-5/5-2w.png" 
              : "/img/project-5/5-2.png"
            }
            className="w-full"
            alt="UI delivery app. Search field at the bottom"
          />
        <div className="pt-16 mb-8">
          <h2 className="text-3xl mt-5 font-bold">Research Scenarios and Goals</h2>
          <p className="text-2xl mt-5" style={{ color:'#D92F78' }}>Test the Navigation</p>
          <p className="text-xl my-5">To determine if users can find the necessary menu item without a bottom tab bar, we asked them to locate the order history section from the new main screen.</p>
          <p className="text-2xl mt-5" style={{ color:'#D92F78' }}>Assess User Opinions on Bottom-Mounted Search</p>
          <p className="text-xl my-5">The primary scenario involved users searching for milk and adding it to their cart to gather insights on their preferences regarding the new search placement.</p>
          <p className="text-xl my-5">Below are several screens in a prototype</p>
        </div>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
                src="https://player.vimeo.com/video/850056480?transparent=0&autoplay=1&loop=1&muted=0&portrait=0&byline=0&h=2697d04fbb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
        </div>
        <div className="pt-16 mb-8">
          <h2 className="text-3xl my-5 font-bold">Research Findings</h2>
        </div>
          <img
            src={
              currentTheme === "light" 
              ? "/img/project-5/5-3w.png" 
              : "/img/project-5/5-3.png"
            }
            className="w-full"
            alt="Research Scenarios and Goals"
          />
        <div className="pt-16">
          <h2 className="text-2xl mt-5" style={{ color:'#D92F78' }}>User Quotes</h2>
          <p className="text-xl my-5">&apos;&apos;Everything I need is right here, and there&apos;s nothing unnecessary. Everything else is hidden in the menu.&apos;&apos;</p>
          <p className="text-xl my-5">&apos;&apos;The search function was already convenient in the previous app, but the new solution makes it more interesting and modern. Everything is within reach.&apos;&apos;</p>
          <p className="text-xl my-5">Overall, the user feedback has been positive, and we are confident that this new update will elevate the grocery shopping experience for our customers.</p>
        </div>
        <h2 className="mt-40 text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">You May also like</h2>
        <div className="mt-5 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            {[
              data.projects[1], // Project with id 2
              data.projects[2], // Project with id 3
              data.projects[0], // Project with id 1
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

export default ProjectSix;
