import { useState, useEffect } from "react";

const ContactDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target) return;

      const targetElement = event.target as HTMLElement;

      if (!targetElement.closest(".dropdown")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block dropdown">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="font-semibold hover:text-blue-800"
      >
        CONTACT
      </button>

      {isOpen && (
        <div 
          className="absolute left-0 mt-2 w-23 bg-white border border-gray-300 shadow-md rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          <a 
            href="https://github.com/DazzleMee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block px-3 py-2 text-gray-700 hover:bg-gray-100 text-sm"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/shrehar-akash-bhan-52299b2aa/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block px-3 py-2 text-gray-700 hover:bg-gray-100 text-sm"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:shrehar3@gmail.com"  
            className="block px-3 py-2 text-gray-700 hover:bg-gray-100 text-sm"
          >
            Email
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactDropdown;
