import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import MyProjects from "../components/MyProjects";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import { useTheme } from "next-themes";
import VideoCompare from "../components/VideoCompare";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop -20,
      left: 0,
      behavior: "smooth",
    });
  };

  //Show projects
  const [showWork, setShowWork] = useState(true);
  const [showMyProjects, setShowMyProjects] = useState(false);
  const [showDot, setShowDot] = useState(true);

  const handleWorkClick = () => {
    setShowWork(true);
    setShowMyProjects(false);
    setShowDot(true);
  };

  const handleMyProjectsClick = () => {
    setShowWork(false);
    setShowMyProjects(true);
    setShowDot(false);
  };

  //..
  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop -20,
      left: 0,
      behavior: "smooth",
    });
  };

  const { theme } = useTheme();

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name} - {data.headerTaglineThree}</title>
        <meta name="description" content="Senior Product Designer and Expert Mobile UX/UI Designer specializing in fintech and e-commerce. With a strong focus on enhancing user experience for mobile devices, Oleg brings extensive experience in designing intuitive interfaces for millions of users. Connect with Oleg for innovative design solutions and collaborations." />
        <meta name="keywords" content="UX/UI Designer, Product Designer, Mobile Design, Fintech Design, E-commerce Design, User Experience" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${data.name} - ${data.headerTaglineThree}`} />
        <meta property="og:description" content="Senior Product Designer and Expert Mobile UX/UI Designer specializing in fintech and e-commerce." />
        <meta property="og:image" content="/img/og.png" />
        <meta property="og:url" content="https://teretenko.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${data.name} - ${data.headerTaglineThree}`} />
        <meta name="twitter:description" content="Senior Product Designer and Expert Mobile UX/UI Designer specializing in fintech and e-commerce." />
        <meta name="twitter:image" content="/img/og.png" />
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <header>
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
      </header>
      <div className="container mx-auto mb-10">
      <main>
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
          <div className="flex items-center">
            <p
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 font-extrabold"
            >
              {data.headerTaglineOne}
            </p>
            <div className="w-[1em] h-[1em] text-3xl tablet:text-6xl laptop:text-5xl laptopl:text-7xl" style={{ transform: "rotate(-15deg)" }}>
              <DotLottieReact
                src="/img/lottie.json"
                autoplay
                loop={false}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
            <h2
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 font-extrabold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h2>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 font-extrabold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <p
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 font-extrabold w-full laptop:w-4/5"
              style={{ lineHeight: '1.25' }}
            >
              {data.headerTaglineFour}
            </p>
          </div>

          <Socials className="my-2 laptop:my-5" />
        </div>

       {/* Tabs */}
        <div className="mt-20 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <div className="flex items-center">
            <p
              className={`text-2xl font-bold cursor-pointer ${showWork ? "opacity-100 underline-tab" : "opacity-60"}`}
              onClick={handleWorkClick}
            >
              Work
            </p>
            <p
              className={`text-2xl font-bold cursor-pointer ml-12 ${showMyProjects ? "opacity-100 underline-tab" : "opacity-60"}`}
              onClick={handleMyProjectsClick}
            >
              My Projects
              <span
                className="ml-2"
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  display: showDot ? "inline-block" : "none",  // Условный рендеринг
                  verticalAlign: "top",
                }}
              ></span>
            </p>
          </div>            

          <div className={`mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4 ${showWork ? "" : "hidden"}`}> {/*Это блок 1*/}
            {[
              data.projects[9], // Project with id 10
              data.projects[10], // Project with id 11
              data.projects[3], // Project with id 4
              data.projects[4], // Project with id 5
              data.projects[1], // Project with id 2
              data.projects[2], // Project with id 3
              data.projects[0], // Project with id 1
            ].map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                isHomepage={true}
                onClick={() => window.location.href = project.url}
                alt={project.alt}
                //className={project.id === "4" ? 'laptop:col-span-2 tablet:col-span-2' : ''}
                enableParallax={true}
              />
            ))}
          </div>
          
          <div className={`mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4 ${showMyProjects ? "" : "hidden"}`}> {/*Это блок 2*/}
          {[
            data.projects[8], // Project with id 9
            //data.projects[7], // Project with id 8
            data.projects[5], // Project with id 6
            data.projects[6], // Project with id 7
          ].map((project) => (
            <div key={project.id} className="relative">
              <MyProjects
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                isHomepage={true}
                onClick={() => window.open(project.url, '_blank')}
                alt={project.alt}
                className={project.id === "4" ? 'laptop:col-span-2 tablet:col-span-2' : ''}
                enableParallax={true}
              />
              {project.id === "9" && ( // Проверяем, является ли текущий проект с id 6
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  NEW
                </div>
              )}
            </div>
          ))}
          </div>

          {/*<div className={`mx-auto mt-20 text-center ${showWork ? "" : "hidden"}`}> 
            <Button type="primary" onClick={() => window.open("https://www.behance.net/teretenko")}>View earlier projects on Behance</Button>
          </div>*/}
        </div>

{/* 
<div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
          {data.projects.slice(0).reverse().map((project) => (
            <WorkCard
              key={project.id}
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              isHomepage={true}
              onClick={() => window.location.href = project.url}
              alt={project.alt}
            />
          ))}
</div>
*/}


        {/*<div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>*/}
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-40" ref={aboutRef}>
          <p className="text-2xl text-bold">About.</p>
          <div className="mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5" style={{ whiteSpace: 'pre-line' }}>
            {data.aboutpara}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
      </div>
    </div>
  );
}
