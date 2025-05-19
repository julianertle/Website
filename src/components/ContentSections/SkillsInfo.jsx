import React, { useState, useRef, useEffect, useCallback } from "react";

const skillsData = [
    {
      name: "Java",
      info: "Primary language used for backend development.",
      githubProjects: [
        '<a href="https://github.com/julianertle/PawSwipeBackend" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">PawSwipeBackend</a>'
      ],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      name: "Spring Boot",
      info: "Used to build and structure RESTful APIs.",
      githubProjects: [
        '<a href="https://github.com/julianertle/PawSwipeBackend" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">PawSwipeBackend</a>'
      ],
      color: "bg-green-100 text-green-800"
    },
    {
      name: "Spring Security",
      info: "Used to restrict access and secure endpoints.",
      githubProjects: [
        '<a href="https://github.com/julianertle/PawSwipeBackend" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">PawSwipeBackend</a>'
      ],
      color: "bg-red-100 text-red-800"
    },
    {
      name: "JWT",
      info: "Implemented for token-based authentication.",
      githubProjects: [
        '<a href="https://github.com/julianertle/PawSwipeBackend" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">PawSwipeBackend</a>'
      ],
      color: "bg-purple-100 text-purple-800"
    },
    {
      name: "MariaDB",
      info: "Relational database with custom schema.",
      githubProjects: [
        '<a href="https://github.com/julianertle/PawSwipeBackend" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">PawSwipeBackend</a>'
      ],
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "JPA (Hibernate)",
      info: "Used for ORM and DB persistence.",
      githubProjects: [
        '<a href="https://github.com/julianertle/PawSwipeBackend" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">PawSwipeBackend</a>'
      ],
      color: "bg-pink-100 text-pink-800"
    },
    {
      name: "Gradle",
      info: "Used to build and manage dependencies.",
      githubProjects: [
        '<a href="https://github.com/julianertle/PawSwipeBackend" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">PawSwipeBackend</a>'
      ],
      color: "bg-orange-100 text-orange-800"
    },
    {
      name: "Git",
      info: "Version control system used throughout development.",
      githubProjects: [
        '<a href="https://github.com/julianertle" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/julianertle</a>'
      ],
      color: "bg-gray-200 text-gray-800"
    },
    {
      name: "GitHub",
      info: "Platform for code hosting and collaboration.",
      githubProjects: [
        '<a href="https://github.com/julianertle" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/julianertle</a>'
      ],
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      name: "Linux (Debian)",
      info: "Used as the deployment environment for the backend.",
      githubProjects: [
        '<a href="https://github.com/julianertle/PawSwipeBackend" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">PawSwipeBackend</a>'
      ],
      color: "bg-teal-100 text-teal-800"
    },
    {
      name: "RESTful APIs",
      info: "Designed for interaction between client and backend.",
      githubProjects: [
        '<a href="https://github.com/julianertle/PawSwipeBackend" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">PawSwipeBackend</a>'
      ],
      color: "bg-lime-100 text-lime-800"
    }
  ];
  


export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const tooltipRefs = useRef({});
  const buttonRefs = useRef({});
  const hideTimeoutRef = useRef(null);

  const toggleSkill = (name) => {
    if (activeSkill === name && tooltipVisible) {
      setTooltipVisible(false);
      setActiveSkill(null);
    } else {
      setActiveSkill(name);
      setTooltipVisible(true);
    }
  };

  const handleMouseEnter = (name) => {
    clearTimeout(hideTimeoutRef.current);
    setActiveSkill(name);
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setTooltipVisible(false);
      setActiveSkill(null);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const currentTooltip = tooltipRefs.current[activeSkill];
      const currentButton = buttonRefs.current[activeSkill];

      if (
        tooltipVisible &&
        currentTooltip &&
        currentButton &&
        !currentTooltip.contains(event.target) &&
        !currentButton.contains(event.target)
      ) {
        setTooltipVisible(false);
        setActiveSkill(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [tooltipVisible, activeSkill]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Skills & Technologies</h2>
      <div className="flex flex-wrap gap-4">
        {skillsData.map((skill) => (
          <div key={skill.name} className="relative">
            <div
              ref={(el) => (buttonRefs.current[skill.name] = el)}
              onClick={() => toggleSkill(skill.name)}
              onMouseEnter={() => handleMouseEnter(skill.name)}
              onMouseLeave={handleMouseLeave}
              className={`cursor-pointer px-4 py-2 rounded ${activeSkill === skill.name ? "ring-2 ring-offset-2 ring-gray-400" : ""} ${skill.color}`}
            >
              {skill.name}
            </div>

            {/* Tooltip */}
            {activeSkill === skill.name && tooltipVisible && (
              <div
                ref={(el) => (tooltipRefs.current[skill.name] = el)}
                onMouseEnter={() => clearTimeout(hideTimeoutRef.current)}
                onMouseLeave={handleMouseLeave}
                className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-white text-black p-4 rounded-lg shadow-lg z-50"
              >
                <h4 className="font-bold mb-2">References:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {skill.githubProjects.length > 0 ? (
                    skill.githubProjects.map((project, index) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: project }} />
                    ))
                  ) : (
                    <li>No references listed</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}