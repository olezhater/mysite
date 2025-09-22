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
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-extrabold"
            >
              {data.headerTaglineOne}
            </p>
            <div className="w-[1em] h-[1em] text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl" style={{ transform: "rotate(-15deg)" }}>
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
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-extrabold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h2>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-extrabold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <p
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-extrabold w-full laptop:w-4/5"
              style={{ lineHeight: '1.25' }}
            >
              {data.headerTaglineFour}
            </p>
          </div>

          <Socials className="my-2 laptop:my-5" />

          {/* Before and after for desktop */}
          <div className="relative rounded-lg overflow-hidden hidden laptop:block"
            style={{
              position: "relative",
              padding: "2px", // Это нужно для создания пространства под градиентный бордер
              borderRadius: "16px", // Устанавливаем радиус бордера здесь, чтобы это соответствовало контейнеру
              backgroundImage: `url('../images/card-bg.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="relative rounded-lg overflow-hidden"
              style={{
                background: "#1B1B1B", // Внутренний фон
                borderRadius: "14px", // Радиус немного меньше, чтобы градиент был виден как бордер
              }}
            >
            {/* Ваш контент здесь */}
            <VideoCompare />
            <div
              className="rounded-lg p-2"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                zIndex: "2",
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <p className="text-base opacity-50 font-medium text-white">
                #before&after
              </p>
              <p className="text-base text-white">
                Redesign Product Detail Screen for Pizza Delivery App
              </p>
            </div>
          </div>
            {/* Fullscreen button
              <div
              className="hover:scale-110"
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                zIndex: "2",
                background: "rgba(0, 0, 0, 0.50)",
              }}
              onClick={() =>
                window.open(
                  "https://player.vimeo.com/video/867038923?transparent=0&autoplay=1&loop=1&muted=0&portrait=0&byline=0&h=2697d04fbb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                )
              }
            >
              <img
                className="h-6"
                src="../images/fullscreen.svg"
                alt="Fullscreen Button"
              />
            </div> */}
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                right: "20px",
                zIndex: "2",
              }}
            >
            <div className="flex items-center gap-2 mb-1em ">
              <a className="transition-all duration-300 ease-out hover:scale-105" href="https://apps.apple.com/gb/app/dodo-pizza-pizza-delivery/id894649641" target="_blank" rel="noopener noreferrer">
                <img src="/img/project-4/download_appstore.png" alt="Download on the App Store" style={{ width: '120px', marginBottom: '1em' }} />
              </a>
              <a className="transition-all duration-300 ease-out hover:scale-105" href="https://play.google.com/store/apps/details?id=ru.dodopizza.app&hl=en" target="_blank" rel="noopener noreferrer">
                <img src="/img/project-4/download_googleplay.png" alt="Get it on Google Play" style={{ width: '120px', marginBottom: '1em' }} />
              </a>
            </div>
            </div>
          </div>

          {/* Before and after for mobile */}
          <div enableParallax={true} className="relative rounded-lg block laptop:hidden"
            style={{
              position: "relative",
              padding: "2px", // Это нужно для создания пространства под градиентный бордер
              borderRadius: "16px", // Устанавливаем радиус бордера здесь, чтобы это соответствовало контейнеру
              backgroundImage: `url('../images/card-bg.jpg')`, // Градиент для бордера
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
        >
          <div className="relative rounded-lg overflow-hidden"
              style={{
                background: "#1B1B1B", // Внутренний фон
                borderRadius: "14px", // Радиус немного меньше, чтобы градиент был виден как бордер
                padding: "16px", // Внутренний контент с padding
              }}
          >
            {/* Ваш контент здесь */}
            <div className="pb-4">
              <img src="../images/before_and_after.gif" alt="Redesign of Pizza Delivery App Screen" />
            </div>
            <div
              className="rounded-lg p-2"
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                zIndex: "2",
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <p className="text-base opacity-50 font-medium text-white">
                #before&after
              </p>
              <p className="text-base text-white">
                Redesign Product Detail Screen for Pizza Delivery App
              </p>
            </div>
          </div>
          </div>


        </div>

       {/* Tabs */}
        <div className="mt-12 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
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
          <p className="tablet:m-10 text-2xl text-bold">About.</p>
          <div className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5" style={{ whiteSpace: 'pre-line' }}>
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
