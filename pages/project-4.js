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
  const project = data.projects.find((p) => p.id === "4");
  
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
          <a href="https://apps.apple.com/ru/app/магнит-акции-и-скидки/id881463973" target="_blank" rel="noopener noreferrer">
            <img src="/img/project-4/download_appstore.png" alt="Download on the App Store" style={{ width: '120px', marginBottom: '1em' }} />
          </a>
          <a href="https://play.google.com/store/apps/details?id=ru.tander.magnit&hl=ru&pli=1" target="_blank" rel="noopener noreferrer">
            <img src="/img/project-4/download_googleplay.png" alt="Get it on Google Play" style={{ width: '120px', marginBottom: '1em' }} />
          </a>
        </div>
        <div className="pt-16 laptop:px-6 tablet:px-4 mb-8">
          <h2 className="text-3xl mt-5 font-bold">Introduction</h2>
          <h2 className="text-xl my-5">In this presentation, I will give you an overview of what I&apos;ve been working on at Magnit recently. Specifically, the exciting new major update of the Magnit app, which now includes the features of the Magnit Delivery app. But first, let&apos;s take a look at some key figures that define Magnit as a company.</h2>
        </div>
          <img
            src={
              currentTheme === "light" 
              ? "/img/project-4/4-1w.png" 
              : "/img/project-4/4-1.png"
            }
            className="w-full"
            alt="One of the top food retail chains"
          />
        <div className="pt-16 laptop:px-6 tablet:px-4 mb-8">
          <h2 className="text-3xl mt-5 font-bold">The Challenge</h2>
          <h2 className="text-xl my-5">Magnit Company faces the challenge of managing two applications: Magnit Sales and Discounts, and Magnit Delivery. The decision has been made to merge these two applications and integrate the delivery feature into the primary Magnit app.</h2>
        </div>
        <img
          src={
            currentTheme === "light" 
            ? "/img/project-4/4-2w.png" 
            : "/img/project-4/4-2.png"
          }
          className="w-full"
          alt="UX Challenge"
        />
        <div className="pt-16 laptop:px-6 tablet:px-4">
          <h2 className="text-xl my-5">My contributions involved working on the shopping cart and checkout, as well as participating in the design of order history, detailed order view, and address selection and delivery method.</h2>
        </div>
        <img
          src={
            currentTheme === "light" 
            ? "/img/project-4/4-3w.png" 
            : "/img/project-4/4-3.png"
          }
          className="w-full"
          alt="My contributions"
        />
        <div className="pt-16 laptop:px-6 tablet:px-4 mb-8">
          <h2 className="text-3xl mt-5 font-bold">Discover/Empathize</h2>
          <h2 className="text-xl my-5">Before delving into the task, we collaborated with the business analyst to gather user feedback from App Store and Google Play reviews. Additionally, our UX researcher assisted in collecting user feedback during recent interviews. Through these efforts, we pinpointed several issues concerning the shopping cart and checkout process.</h2>
        </div>
        <img
          src={
            currentTheme === "light" 
            ? "/img/project-4/4-4w.png" 
            : "/img/project-4/4-4.png"
          }
          className="w-full mb-8"
          alt="Discover and Empathize"
        />
        <img
          src={
            currentTheme === "light" 
            ? "/img/project-4/4-5w.png" 
            : "/img/project-4/4-5.png"
          }
          className="w-full"
          alt="Discover and Empathize"
        />
        <div className="pt-16 laptop:px-6 tablet:px-4 mb-8">
          <h2 className="text-3xl mt-5 font-bold">Ideate and Prototype</h2>
          <h2 className="text-xl my-5">Together with the product manager, we decided to implement the following interface changes in the application</h2>
        </div>
        <img
          src={
            currentTheme === "light" 
            ? "/img/project-4/4-6w.png" 
            : "/img/project-4/4-6.png"
          }
          className="w-full mb-8"
          alt="Ideate and Prototype"
        />
        <img
          src={
            currentTheme === "light" 
            ? "/img/project-4/4-7w.png" 
            : "/img/project-4/4-7.png"
          }
          className="w-full"
          alt="Ideate and Prototype"
        />
        <div className="pt-16 laptop:px-6 tablet:px-4 mb-8">
          <h2 className="text-3xl mt-5 font-bold">Testing</h2>
          <h2 className="text-xl my-5">With the UX researcher, we conducted several user tests. Additionally, with the collaboration of the development team we launched A/B tests. Here are the insights we gained after several rounds of testing.</h2>
        </div>
        <img
          src={
            currentTheme === "light" 
            ? "/img/project-4/4-8w.png" 
            : "/img/project-4/4-8.png"
          }
          className="w-full mb-8"
          width="100%" 
          height="100%"
          alt="Testing"
        />
        <img
          src={
            currentTheme === "light" 
            ? "/img/project-4/4-9w.png" 
            : "/img/project-4/4-9.png"
          }
          className="w-full"
          alt="UI components"
        />
        <div className="pt-16 laptop:px-6 tablet:px-4 mb-8">
          <h2 className="text-3xl my-5 font-bold">Prototype - Round 2 | and Results</h2>
        </div>
        <img
          src={
            currentTheme === "light" 
            ? "/img/project-4/4-10w.png" 
            : "/img/project-4/4-10.png"
          }
          className="w-full mb-8"
          alt="Prototype and Results"
        />
        <img
          src={
            currentTheme === "light" 
            ? "/img/project-4/4-11w.png" 
            : "/img/project-4/4-11.png"
          }
          className="w-full"
          alt="User interface delivery app cart and checkout"
        />
        <div className="pt-16 laptop:px-6 tablet:px-4">
          <h2 className="text-xl my-5">By making these positive changes, we have effectively addressed user pain points, improved the user journey, and achieved significant results in terms of user satisfaction and order success rates. I thank the team for the work done!</h2>
        </div>
        <div className="pt-16 laptop:px-6 tablet:px-4 mb-8">
          <h2 className="text-3xl mt-5 font-bold">Outcomes</h2>
          <h2 className="text-xl my-5">By consolidating all major services in one app, we significantly enhance the shopping experience. Now, making an online order doesn&apos;t require downloading a separate app. We anticipate that the online ordering feature will be sought after by 20% of the main app users, which will significantly impact the company&apos;s profitability.</h2>
          <h2 className="text-xl my-5">Below are several screens in a prototype</h2>
        </div>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
                src="https://player.vimeo.com/video/849881203?transparent=0&autoplay=1&loop=1&muted=0&portrait=0&byline=0&h=2697d04fbb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
        </div>
        <div className="pt-16 laptop:px-6 tablet:px-4 mb-8">
          <h2 className="text-3xl mt-5 font-bold">Bonus: Design Tokens</h2>
          <h2 className="text-xl my-5">In the new update of the Magnit app, our design team utilized a new design system built with design tokens. We rebuilt all components for Magnit Express, Hyper, Cosmetics, and Pharmacy delivery services. With the introduction of variables in Figma, switching between these services in the design creation process has become even easier.</h2>
        </div>
        <img
          src={
            currentTheme === "light" 
            ? "/img/project-4/4-12w.png" 
            : "/img/project-4/4-12.png"
          }
          className="w-full"
          alt="Our design team utilized a new design system built with design tokens"
        />
        <h2 className="mt-40 text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">You May also like</h2>
        <div className="mt-5 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            {[
              data.projects[4], // Project with id 5
              data.projects[1], // Project with id 2
              data.projects[2], // Project with id 3
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
