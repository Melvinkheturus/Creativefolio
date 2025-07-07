import { motion } from "framer-motion";
import { Palette, Cpu, Code, MessageCircle, Wrench } from "lucide-react";
import { useState, useRef } from "react";

export default function WhatIDoCard() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  const skillCategories = [
    {
      icon: <Palette size={18} />,
      title: "Design Tools",
      skills: ["Figma", "Canva", "Illustrator", "Photoshop"],
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: <Cpu size={18} />,
      title: "AI / No-Code",
      skills: ["Cursor AI", "Framer AI", "Galileo", "Uizard", "FlutterFlow"],
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Code size={18} />,
      title: "Frontend",
      skills: ["HTML", "CSS", "Tailwind", "React (Learning)"],
      gradient: "from-orange-500 to-amber-400"
    },
    {
      icon: <MessageCircle size={18} />,
      title: "Soft Skills",
      skills: ["Communication", "Leadership", "Problem Solving"],
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: <Wrench size={18} />,
      title: "Tools I Use Often",
      skills: ["Supabase", "Notion", "GitHub", "SQLite", "CapCut", "Python"],
      gradient: "from-violet-500 to-purple-400"
    },
  ];
  
  // Handle mouse movement for position-based glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };
  
  // Reset mouse position when mouse leaves
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <motion.div 
      ref={cardRef}
      className="bg-[#0a0912]/60 backdrop-blur-xl border border-white/5 rounded-2xl shadow-lg h-full relative -mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ scale: 1.01 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--x": `${mousePosition.x}px`,
        "--y": `${mousePosition.y}px`,
      } as React.CSSProperties}
    >
      {/* Mouse position-based glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),_rgba(147,51,234,0.08),_transparent_40%)] rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300"
        style={{ 
          opacity: mousePosition.x > 0 ? 1 : 0,
        }}
      />
      
      <div className="relative w-full h-full overflow-hidden p-5">
        <h3 className="text-lg font-semibold mb-4 z-10 relative">
          <span className="text-white">WHAT I </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b38aff] via-[#cfa0ff] to-[#ffffff]">DO</span>
        </h3>
        
        <div className="grid grid-cols-2 gap-3 h-[calc(100%-60px)] z-10 relative">
          {skillCategories.slice(0, 4).map((category, index) => (
            <motion.div 
              key={category.title} 
              className="relative overflow-hidden rounded-lg bg-[#1D1D2D]/60 backdrop-blur-sm border border-white/5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.3 + (index * 0.1),
                duration: 0.5
              }}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => setHoveredCard(category.title)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                boxShadow: hoveredCard === category.title ? '0 0 15px rgba(147,51,234,0.2)' : 'none',
                transition: 'box-shadow 0.3s ease'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-10 rounded-lg ${category.gradient}`} />
              
              <div className="relative p-3 h-full flex flex-col">
                <div className="flex items-center mb-2 gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-br ${category.gradient}`}>
                    <span className="text-white">{category.icon}</span>
                  </div>
                  <h4 className="text-white text-sm font-semibold">{category.title}</h4>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-1.5 py-0.5 text-xs text-gray-300 bg-[#161625]/70 backdrop-blur-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Last item spans full width */}
          <motion.div 
            key={skillCategories[4].title} 
            className="relative overflow-hidden rounded-lg col-span-2 bg-[#1D1D2D]/60 backdrop-blur-sm border border-white/5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.7,
              duration: 0.5
            }}
            whileHover={{ scale: 1.02 }}
            onMouseEnter={() => setHoveredCard(skillCategories[4].title)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              boxShadow: hoveredCard === skillCategories[4].title ? '0 0 15px rgba(147,51,234,0.2)' : 'none',
              transition: 'box-shadow 0.3s ease'
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br opacity-10 rounded-lg ${skillCategories[4].gradient}`} />
            
            <div className="relative p-3 h-full flex flex-col">
              <div className="flex items-center mb-2 gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-br ${skillCategories[4].gradient}`}>
                  <span className="text-white">{skillCategories[4].icon}</span>
                </div>
                <h4 className="text-white text-sm font-semibold">{skillCategories[4].title}</h4>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {skillCategories[4].skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-1.5 py-0.5 text-xs text-gray-300 bg-[#161625]/70 backdrop-blur-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 