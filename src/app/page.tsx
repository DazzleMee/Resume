'use client';

import Self2024 from './attachments/Self2024.jpeg';
import ProjectCard from './card';
import ContactDropdown from "./dropdown";

export default function Portfolio() {
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
        <a href="/Shrehar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
          RESUME
        </a>
        <ContactDropdown />
      </div>
    </nav>

  
    <hr className="w-full border-t border-black md:hidden mt-4" />

    
      <div className="w-full border-b-2 border-black"></div>

    
      <div className="flex flex-col md:flex-row flex-1 mt-3 text-center md:text-left">
        <aside className="bg-orange-200 p-10 flex items-center justify-center w-full md:w-1/3">
          <div className="bg-white shadow-lg p-10 md:p-20 rounded-lg text-center">
            <img 
              src={Self2024.src} 
              alt="Shrehar Akash" 
              className="w-40 h-40 sm:w-24 sm:h-24 object-cover rounded-full mx-auto"
            />
            <h2 className="font-bold text-xl mt-4 text-black">SHREHAR AKASH</h2>
            <div className="w-full border-b-2 border-black mt-2"></div>
            <p className="text-gray-500 p-1">Software Developer</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </aside>

        
        <main className="flex-1 p-6 md:p-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black text-center md:text-left">Hello! I'm Shrehar</h1>
          <p className="text-gray-500 text-lg mt-2 text-center md:text-left">
            A Computer Science Student with a Passion for Technology and Problem-Solving
          </p>

          
          <div className="flex justify-center md:justify-start p-6">
            <button className="bg-black text-white px-6 py-3 rounded-md font-semibold text-lg md:text-base">
              My Projects 
            </button>
          </div>

          
          <div className="w-full border-b-2 border-black mt-2"></div>

         
          <div className="p-6 flex flex-wrap justify-center md:justify-start gap-6">
            <ProjectCard
              title="Safebite"
              description="An allergy App Made For Final Year Project"
              tags={["React", "Next.js", "Firebase", "Google Cloud Platform", "Flutter", "Flask"]}
              buttonText="View Project"
              onButtonClick={() => alert("Navigating to project...")}
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
