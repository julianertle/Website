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
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const tooltipRef = useRef(null);
  const buttonRefs = useRef({});
  const hideTimeoutRef = useRef(null);

  const updateTooltipPosition = useCallback((skillName) => {
    if (!tooltipRef.current || !buttonRefs.current[skillName]) return;

    const buttonRect = buttonRefs.current[skillName].getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    let newPosition = {
      top: buttonRect.top - tooltipRect.height - 8,
      left: buttonRect.left + buttonRect.width / 2 - tooltipRect.width / 2,
    };

    if (newPosition.left + tooltipRect.width > viewportWidth - 8) {
      newPosition.left = viewportWidth - tooltipRect.width - 8;
    }
    if (newPosition.left < 8) {
      newPosition.left = 8;
    }

    setTooltipPosition(newPosition);
  }, []);

  const toggleSkill = (name, event) => {
    if (activeSkill === name) {
      setActiveSkill(null);
      setTooltipVisible(false);
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
    if (tooltipVisible && activeSkill) {
      requestAnimationFrame(() => {
        updateTooltipPosition(activeSkill);
      });
    }
  }, [activeSkill, tooltipVisible, updateTooltipPosition]);

  useEffect(() => {
    const handleResizeOrScroll = () => {
      if (tooltipVisible && activeSkill) {
        updateTooltipPosition(activeSkill);
      }
    };

    window.addEventListener("resize", handleResizeOrScroll);
    window.addEventListener("scroll", handleResizeOrScroll);

    return () => {
      window.removeEventListener("resize", handleResizeOrScroll);
      window.removeEventListener("scroll", handleResizeOrScroll);
    };
  }, [tooltipVisible, activeSkill, updateTooltipPosition]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const tooltipEl = tooltipRef.current;
      const clickedButtonEl = activeSkill ? buttonRefs.current[activeSkill] : null;

      if (
        tooltipEl &&
        !tooltipEl.contains(event.target) &&
        clickedButtonEl &&
        !clickedButtonEl.contains(event.target)
      ) {
        setTooltipVisible(false);
        setActiveSkill(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeSkill]);

  return (
    <div className="skills-container max-w-4xl mx-auto relative">
      <style>
        {`
          .github-tooltip {
            position: absolute;
            background: white;
            padding: 0.75rem;
            border-radius: 0.5rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            z-index: 50;
            min-width: 150px;
            text-align: left;
            transition: opacity 0.2s ease-in-out;
          }
          .github-tooltip::after {
            content: none;
          }
        `}
      </style>
      <h2 className="text-3xl font-bold">Skills & Technologies</h2>
      <div className="flex flex-wrap gap-4">
        {skillsData.map((skill) => (
          <div key={skill.name} className="relative">
            <div
              ref={(el) => (buttonRefs.current[skill.name] = el)}
              onClick={(e) => toggleSkill(skill.name, e)}
              onMouseEnter={() => handleMouseEnter(skill.name)}
              onMouseLeave={handleMouseLeave}
              className={`skill-button cursor-pointer px-4 py-2 rounded ${activeSkill === skill.name ? "ring-2 ring-offset-2 ring-gray-400" : ""} ${skill.color}`}
            >
              {skill.name}
            </div>

            {activeSkill === skill.name && tooltipVisible && (
              <div
                ref={tooltipRef}
                className="github-tooltip"
                style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
                onMouseEnter={() => clearTimeout(hideTimeoutRef.current)}
                onMouseLeave={handleMouseLeave}
              >
                <h4 className="font-bold">References:</h4>
                <ul className="list-disc pl-5">
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