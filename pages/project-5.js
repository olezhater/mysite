import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import data from "../data/portfolio.json";
import Cursor from "../components/Cursor";

const ProjectFive = () => {
  const project = data.projects.find((p) => p.id === "5");

  const filteredProjects = data.projects.filter((p) => p.url !== project.url && p.id !== "64565912-3f25-4c21-8a6b-bb372a08a2c8");
  const totalProjects = filteredProjects.length;
  const reversedProjects = filteredProjects.slice(Math.max(totalProjects - 3, 0)).reverse();

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Header isBlog/>
      <div className="container mx-auto my-10">
        <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">{project.title}</h1>
        <p className="my-5">{project.description}</p>
        <img src="../img/project-5/5-1.png" className="w-full" alt="security questions, feature for banking app"/>
        <img src="../img/project-5/5-2.png" className="w-full" alt="Design a new feature for the bank application - Security Questions. Control questions serve as an additional method of client identification. In the app settings, users should understand the purpose of security questions, select a question, and provide an answer."/>
        <img src="../img/project-5/5-3.png" className="w-full" alt="An additional method of identification to protect your funds and regain access to your account."/>
        <img src="../img/project-5/5-4.png" className="w-full" alt="Streamlining the question selection process. Instead of multiple taps and gestures, it will be simplified to a single tap. Displaying the entire list of questions on the screen at once."/>
        <img src="../img/project-5/5-5.gif" className="w-full" alt="prototype gif"/>
        <img src="../img/project-5/5-6.png" className="w-full" alt="Hidden unanswered questions. Displaying saved and unsaved questions on a single screen. This allows the user to quickly proceed to setting up the next question after saving."/>
        <img src="../img/project-5/5-7.png" className="w-full" alt="Question list"/>
        <img src="../img/project-5/5-8.png" className="w-full" alt="Adding question deletion functionality."/>
        <img src="../img/project-5/5-9.gif" className="w-full" alt="prototype gif"/>
        <img src="../img/project-5/5-10.png" className="w-full" alt="prototype is below"/>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
                src="https://player.vimeo.com/video/741769309?autoplay=1&loop=1&muted=0&portrait=0&byline=0&h=2697d04fbb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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

export default ProjectFive;
