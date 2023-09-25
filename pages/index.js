import Head from "next/head";
import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import { useTheme } from "next-themes";
import VideoCompare from "../components/VideoCompare";


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
        <meta name="description" content="Senior Product Designer and Expert Mobile UX/UI Designer specializing in fintech, edtech, and e-commerce. With a strong focus on enhancing user experience for mobile devices, Oleg brings extensive experience in designing intuitive interfaces for millions of users. Connect with Oleg for innovative design solutions and collaborations." />
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <Header
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
      />
      <div className="container mx-auto mb-10">
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-extrabold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-extrabold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-extrabold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-extrabold w-full laptop:w-4/5"
              style={{ lineHeight: '1.25' }}
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="my-2 laptop:my-5" />
          <div className="relative rounded-lg overflow-hidden"
            style={{
              position: "relative",
              overflow: "hidden",
              background: "#1D1D1D",
              boxShadow: "rgba(0, 0, 0, 0.6)"
            }}
          >
            <VideoCompare />
            <div className="rounded-lg p-2"
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                zIndex: "2",
                background: "rgba(0, 0, 0, 0.50)",
              }}
            >
              <h1 className="text-base opacity-50 font-medium text-white">
                In progress..
              </h1>
            </div>
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
            </div>
          </div>
        </div>

        <div className="mt-12 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
          {[
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
                className={project.id === "4" ? 'laptop:col-span-2 tablet:col-span-2' : ''}
                enableParallax={true}
              />
            ))}
          </div>
          <div className="mx-auto mt-20 text-center">
            <Button type="primary" onClick={() => window.open("https://www.behance.net/teretenko")}>View earlier projects on Behance</Button>
          </div>
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
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <div className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5" style={{ whiteSpace: 'pre-line' }}>
            {data.aboutpara}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
