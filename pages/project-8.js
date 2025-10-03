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
  const project = data.projects.find((p) => p.id === "12");
  
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
          <a href="https://apps.apple.com/us/app/currency-com-buy-btc-crypto/id6740480425" target="_blank" rel="noopener noreferrer">
            <img src="/img/project-4/download_appstore.png" alt="Download on the App Store" style={{ width: '120px', marginBottom: '1em' }} />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.currency.application.android&pli=1" target="_blank" rel="noopener noreferrer">
            <img src="/img/project-4/download_googleplay.png" alt="Get it on Google Play" style={{ width: '120px', marginBottom: '1em' }} />
          </a>
        </div>
        <div className="pt-16 mb-8">
          <h2 className="text-3xl mt-5 font-bold">About Currency.com</h2>
          <p className="text-xl my-5">
            Currency.com is a global digital finance platform operating in 100+ countries and licensed in the US, EU, and the Middle East. It offers a wide range of assets, combining the flexibility of traditional finance with the innovation of digital assets, and provides access through a responsive web platform as well as iOS and Android apps. As a Product Designer, I was responsible for improving the exchange user flow across web and mobile.
          </p>
        </div>
        <div className="pt-16 mb-8">
          <h2 className="text-3xl mt-5 font-bold">Overview</h2>
          <p className="text-xl my-5">
            The exchange originally supported only Buy and Sell. While crypto-to-crypto trades were possible, the process was confusing and error-prone. Users often saw mismatched records (e.g., “sold ETH” but the system logged “bought BTC”), which reduced trust and generated support tickets.
          </p>
          <p className="text-xl my-5">
            To address this, I designed and launched a dedicated <strong>Convert flow</strong> across both web and mobile platforms.
          </p>
        </div>
        <div className="pt-16 mb-8">
          <h2 className="text-3xl my-5 font-bold">Problem</h2>
          <ul className="mx-2 text-xl list-disc pl-5">
            <li className="mb-2">
              <strong>Confusion</strong>: unclear whether to start with Buy or Sell for crypto-to-crypto trades
            </li>
            <li className="mb-2">
              <strong>Errors</strong>: transaction history didn&apos;t align with user expectations
            </li>
            <li className="mb-2">
              <strong>Support load</strong>: many tickets from users asking how to convert assets correctly
            </li>
          </ul>
        </div>
          <img
            src={
              currentTheme === "light" 
              ? "/img/project-8/8-1w.png" 
              : "/img/project-8/8-1.png"
            }
            className="w-full"
            alt="One of the top food retail chains"
          />
        <div className="pt-16 mb-8">
          <h2 className="text-3xl my-5 font-bold">Solution</h2>
          <ul className="mx-2 text-xl list-disc pl-5">
            <li className="mb-2">
              <strong>Convert tab</strong>: added next to Buy/Sell for a clear mental model
            </li>
            <li className="mb-2">
              <strong>Mobile action bar</strong>: Convert introduced as a first-class action alongside Buy, Deposit, and Withdraw
            </li>
            <li className="mb-2">
              <strong>Simple flow</strong>: users select the asset to spend and the asset to receive, with real-time rate preview
            </li>
            <li className="mb-2">
              <strong>Wallet integration </strong>: Convert also accessible directly from the Wallet screen
            </li>
          </ul>
        </div>
        <div className="pt-16 mb-8">
          <h2 className="text-3xl my-5 font-bold">Process</h2>
          <ol className="mx-2 text-xl list-decimal pl-8 mb-4">
            <li className="mb-2"><strong>Benchmark analysis</strong>: researched industry standards for exchange flows</li>
            <li className="mb-2"><strong>Problem validation</strong>: studied support tickets and transaction logs to confirm pain points</li>
            <li className="mb-2"><strong>Cross-platform design</strong>: created consistent experiences for web and mobile</li>
            <li className="mb-2"><strong>Usability testing</strong>: validated with internal users, refining copy and the preview step for clarity</li>
          </ol>
        </div>
        <img
          src={
            currentTheme === "light" 
            ? "/img/project-8/8-2w.png" 
            : "/img/project-8/8-2.png"
          }
          className="w-full mb-8"
          alt="Discover and Empathize"
        />
        <div className="pt-16 mb-8">
          <h2 className="text-3xl my-5 font-bold">Results</h2>
          <ul className="mx-2 text-xl list-disc pl-5 mb-4">
            <li className="mb-2"><strong>+27% increase</strong> in crypto-to-crypto transactions within 3 months</li>
            <li className="mb-2"><strong>40% fewer support tickets</strong> related to exchange flow confusion and errors</li>
          </ul>
        </div>
        <div className="pt-16 mb-8">
          <h2 className="text-3xl my-5 font-bold">Learnings</h2>
          <ul className="mx-2 text-xl list-disc pl-5 mb-4">
            <li className="mb-2">Users need flows that match their <strong>intent</strong> — “Convert” removes ambiguity</li>
            <li className="mb-2"><strong>Clear UX reduces support costs</strong> while increasing adoption</li>
            <li className="mb-2">Designing <strong>web and mobile together</strong> ensures a seamless, consistent experience, even though the platforms have different entry points and interface patterns</li>
          </ul>
        </div>
        <div className="pt-16 mb-8">
          <p className="text-xl my-5">
            This project demonstrates how introducing a Convert flow simplified crypto-to-crypto exchanges, reduced errors, and improved both user experience and operational efficiency.
          </p>
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
              data.projects[9], // Project with id 10
              data.projects[10], // Project with id 11
              data.projects[3], // Project with id 3
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
