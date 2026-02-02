'use client';

import Self2024 from './attachments/Self2024.jpeg';
import ProjectCard from './card';
import ContactDropdown from "./dropdown";
import React, { useRef } from "react";

export default function Portfolio() {
  // 👇 create the ref
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      const top = projectsRef.current.offsetTop;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };
  

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <nav className="flex flex-col md:flex-row justify-between items-center p-6 text-center md:text-left">
        <div>
          <h1 className="font-bold text-lg">
            <span className="text-blue-600">SHREHAR AKASH BHAN</span> /
            <span className="text-black"> SOFTWARE ENGINEER</span>
          </h1>
        </div>

        <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-600 font-semibold">
          <a href="#" className="text-blue-600">ABOUT ME</a>
          <a
            href="/Shrehar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            RESUME
          </a>
          <ContactDropdown />
        </div>
      </nav>

      <hr className="w-full border-t border-black md:hidden mt-4" />

      <div className="w-full border-b-2 border-black"></div>

      <div className="flex flex-col md:flex-row flex-1 mt-3 text-center md:text-left">
        <aside className="bg-orange-200 p-15 flex items-center justify-center w-full md:w-1/3">
          <div className="bg-white shadow-lg p-15 md:p-30 rounded-lg text-center">
            <img
              src={Self2024.src}
              alt="Shrehar Akash"
              className="w-40 h-40 sm:w-40 sm:h-70 object-cover rounded-full mx-auto"
            />
            <h2 className="font-bold text-xl mt-4 text-black">SHREHAR AKASH</h2>
            <div className="w-full border-b-2 border-black mt-2"></div>
            <p className="text-gray-500 p-1">Software Engineer</p>
            <p className="text-gray-500  mt-5">I Love making end-to-end projects!</p>
          </div>
        </aside>

        <main className="flex-1 p-6 md:p-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black text-center md:text-left">
            Hello! I’m Shrehar
          </h1>
          <p className="text-gray-500 text-lg mt-2 text-center md:text-left">
            A Computer Science Student with a Passion for Technology and Problem-Solving
          </p>

          {/* 👇 Button that scrolls */}
          <div className="flex flex-col items-center md:items-start p-6">
            <button
              className="bg-black text-white px-6 py-3 rounded-md font-semibold text-lg md:text-base cursor-pointer"
              onClick={scrollToProjects}
            >
              My Projects
            </button>
            <span className="text-black text-2xl mt-3 pl-10">↓↓↓</span>
          </div>

          <div className="w-full border-b-2 border-black mt-2"></div>

          {/* 👇 Attach the ref here */}
          <div
            ref={projectsRef}
            className="p-6 flex flex-wrap justify-center md:justify-start gap-6"
          >
            <ProjectCard
              title="Safebite"
              description="An allergy App made for individuals to dine safer"
              tags={[
                "React",
                "Next.js",
                "Firebase",
                "Google Cloud Platform",
                "Flutter",
                "Flask",
              ]}
            />
            <ProjectCard
              title="Boost Connect Sdn Bhd Payment Gateway"
              description="A secure payment gateway solution enabling seamless transactions between merchants and acquirers"
              timeline="May 2025 - July 2025"
              tags={["Svelte", "Bitbucket", "ArgoCD", "Jenkins", "Java", "PostgreSQL"]}
              buttonText="View Project"
              onButtonClick={() => window.open("https://merchant.boostconnect.biz")}
            />
            <ProjectCard
              title="Full Stack Developer at Boost Connect Sdn Bhd Sparkle Team"
              description="Contributed to building a merchant website that enables merchants to monitor expenses and earnings from Boost payments, integrates Seedflex services, and supports selling Boost’s products"
              timeline="August 2025 - December 2025"
              tags={["React", "Node.js", "ArgoCD", "Jenkins", "Bitbucket", "PostgreSQL"]}
              buttonText="View Project"
              onButtonClick={() =>
                window.open("https://merchant.boostbusiness.my/auth/login")
              }
            />

            <ProjectCard
              title="Software Engineer at Boost Connect Sdn Bhd Payment Gateway Team"
              description="Confuguring the merchant portal and Payment UI page that allows payments such as E-wallets, debit/credit cards and online banks. "
              timeline="January 2026 - Current"
              tags={["Svelte", "Node.js", "ArgoCD", "Jenkins", "Bitbucket", "PostgreSQL", "Hashicorp Vault", "Java", "Spring Boot", "Docker"]}
              buttonText="View Project"
              onButtonClick={() => window.open("https://merchant.boostconnect.biz")}
            />
          </div>
        </main>
      </div>

      <footer className="text-center text-gray-600 p-6 border-t">
        <p>© 2025 Shrehar Akash Bhan</p>
      </footer>
    </div>
  );
}
