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
        <div className="pt-16 mb-8">
          <h2 className="text-3xl mt-5 font-bold">Introduction</h2>
          <p className="text-xl my-5">
            YoloPrice is an app that allows users to search for products across more than 100 stores with just one tap. I joined this project as a product designer and built the app from scratch. My responsibilities included:
          </p>
          <ul mx-2 className="mx-2 text-xl list-disc pl-5">
            <li className="mb-2">Designing the user flow and overall UX;</li>
            <li className="mb-2">Creating the design system, including icons, illustrations, color palette, and typography;</li>
            <li className="mb-2">Structuring and designing layouts.</li>
          </ul>
        </div>
          <img
            src={
              currentTheme === "light" 
              ? "/img/project-6/6-1.png" 
              : "/img/project-6/6-1.png"
            }
            className="w-full"
            alt="One of the top food retail chains"
          />
        <div className="pt-16 mb-8">
          <h2 className="text-3xl mt-5 font-bold">Problem</h2>
          <p className="text-xl my-5">
            Users were not returning to the app after modifying the list of stores in the filters. This led to a decline in:
          </p>
          <ul className="mx-2 text-xl list-disc pl-5">
            <li className="mb-2">
              <strong>Click-Through Rate (CTR):</strong> Fewer users clicked through to the stores&apos; websites.
            </li>
            <li className="mb-2">
              <strong>Retention:</strong> Fewer users came back to the app over time.
            </li>
          </ul>
        </div>
        <div className="pt-16 mb-8">
          <h2 className="text-3xl mt-5 font-bold">Problem Analysis</h2>
          <p className="text-xl my-5">
            <strong>What I observed:</strong>
          </p>
          <p className="text-xl mb-4">
            Upon analyzing metrics, I discovered that users who disabled certain stores often stopped using the app. Their behavior could be split into two patterns:
          </p>
          <h3 className="text-xl my-3">
            Successful Path
          </h3>
          <ol className="mx-2 text-xl list-decimal pl-8 mb-4">
            <li className="mb-2">Start a search →</li>
            <li className="mb-2">Open filters →</li>
            <li className="mb-2">Edit the store list →</li>
            <li className="mb-2">Start a new search →</li>
            <li className="mb-2">Open a product card →</li>
            <li className="mb-2">Visit the store&apos;s website.</li>
          </ol>
          <h3 className="text-xl my-3">
            Unsuccessful Path
          </h3>
          <ol className="mx-2 text-xl list-decimal pl-8 mb-4">
            <li className="mb-2">Start a search after several days →</li>
            <li className="mb-2">Exit the app.</li>
          </ol>
          <h2 className="text-xl my-5">
            <strong>Conclusion:</strong>
          </h2>
          <p className="text-xl">
            The issue stemmed from users disabling stores in the search and the lack of clarity in the interface. Users often forgot which stores they had excluded, causing confusion and reducing trust in the app.
          </p>
        </div>
        <img
          src={
            currentTheme === "light" 
            ? "/img/project-6/6-2w.png" 
            : "/img/project-6/6-2.png"
          }
          className="w-full mb-8"
          alt="Discover and Empathize"
        />
        <div className="pt-16 mb-8">
          <h2 className="text-3xl mt-5 font-bold">First Iteration of the Solution</h2>
          <p className="text-xl my-5">
            I proposed adding a clear display of:
          </p>
          <ul className="mx-2 text-xl list-disc pl-5 mb-4">
            <li className="mb-2">The number of stores included in the search.</li>
            <li className="mb-2">A list of excluded stores.</li>
          </ul>
          <h3 className="text-xl my-3">
            Hypothesis:
          </h3>
          <p className="text-xl">
            Users don&apos;t care about seeing which store is being queried at any given moment. What matters is their confidence that the search is conducted across all relevant stores or their selected ones.
          </p>
        </div>
        <img
          src={
            currentTheme === "light" 
            ? "/img/project-6/6-3w.png" 
            : "/img/project-6/6-3.png"
          }
          className="w-full mb-8"
          alt="Ideate and Prototype"
        />
        <div className="pt-16 mb-8">
          <h2 className="text-3xl mt-5 font-bold">User Testing and Insights</h2>
          <p className="text-xl my-5">
            To test my hypothesis, I conducted user interviews. Here are the key findings:
          </p>
          <ol className="mx-2 text-xl list-decimal pl-8 mb-4">
            <li className="mb-2">
              <strong>Hypothesis confirmed:</strong> Users were not interested in logos of the stores being queried.
            </li>
            <li className="mb-2">
              <strong>Forgotten excluded stores:</strong> One user shared a story where they excluded a store due to a bad delivery experience. Later, after resolving the issue with the store, they searched for products in the app again but didn&apos;t see results from that store. They thought the app was broken, not realizing they had disabled the store earlier.
            </li>
            <li className="mb-2">
              <strong>Long search times:</strong> Users, accustomed to fast searches on marketplaces, were puzzled by the app&apos;s slower process. After I explained that the app queries stores, groups products, and filters irrelevant items, users appreciated the transparency and suggested improving the speed in the future.
            </li>
          </ol>
        </div>
        <div className="pt-16 mb-8">
          <h2 className="text-3xl mt-5 font-bold">Second Iteration of the Solution</h2>
          <p className="text-xl my-5">
            Based on the insights, I made the following UX improvements:
          </p>
          <ol className="mx-2 text-xl list-decimal pl-8 mb-4">
            <li className="mb-2">
              <strong>Editable store list before starting a search:</strong>
              <ul className="text-xl list-disc pl-5 mt-2">
                <li>Displayed the total number of stores included in the search.</li>
                <li>Highlighted excluded stores with the option to re-enable them.</li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>Interactive explanation of the search process:</strong>
              <ul className="text-xl list-disc pl-5 mt-2">
                <li>Educated users about the steps involved, clarifying why the search took longer than they expected.</li>
              </ul>
            </li>
          </ol>
        </div>
        <img
          src={
            currentTheme === "light" 
            ? "/img/project-6/6-4w.png" 
            : "/img/project-6/6-4.png"
          }
          className="w-full mb-8"
          width="100%" 
          height="100%"
          alt="Testing"
        />
        <div className="pt-16 mb-8">
          <h2 className="text-3xl mt-5 font-bold">Results</h2>
          <p className="text-xl my-5">
            After launching the updated app version, the key metrics improved significantly:
          </p>
          <ul className="mx-2 text-xl list-disc pl-5 mb-4">
            <li className="mb-2">
              <strong>Click-Through Rate (CTR):</strong> increased by 10%, as users felt more confident in the completeness and accuracy of the search results.
            </li>
            <li className="mb-2">
              <strong>Retention:</strong> improved by 12% because users no longer forgot about excluded stores and continued relying on the app for finding the best prices.
            </li>
          </ul>
        </div>
        <div className="pt-16 mb-8">
          <h2 className="text-xl my-5">Below is a video showcasing how the app works on iOS:</h2>
        </div>
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
                src="https://player.vimeo.com/video/1035515110?transparent=0&autoplay=1&loop=1&muted=0&portrait=0&byline=0&h=2697d04fbb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
        </div>
        <h2 className="mt-40 text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">You May also like</h2>
        <div className="mt-5 grid grid-cols-1 tablet:grid-cols-3 gap-4">
            {[
              data.projects[10], // Project with id 11
              data.projects[3], // Project with id 3
              data.projects[4], // Project with id 5
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
