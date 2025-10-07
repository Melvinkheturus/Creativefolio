"use client";

import { motion } from "framer-motion";
import { PieChart, TrendingUp, Award, Clock } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, ReactNode } from "react";

type ResultType = {
  metric: string;
  value: string;
  description: string;
};

type ProjectResultsProps = {
  results: ResultType[];
};

type ResultMetricProps = {
  metric: string;
  value: string;
  description: string;
  delay: number;
  index: number;
};

export default function ProjectResults({ results }: ProjectResultsProps) {
  return (
    <motion.div
      className="relative p-6 rounded-2xl bg-[#040406] border-[#1c0333] overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      {/* Purple gradient corners */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      
      <h3 className="text-lg font-bold mb-6 relative z-10">
        <span className="text-white">RESULTS & </span>
        <span className="bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent">IMPACT</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {results?.map((result, index) => (
          <ResultMetric 
            key={index}
            metric={result.metric}
            value={result.value}
            description={result.description}
            delay={1 + (index * 0.1)}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

function ResultMetric({ metric, value, description, delay }: ResultMetricProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (inView && value) {
      // Extract numeric part from value (e.g., "85%" -> 85)
      const getNumericValue = () => {
        const matches = value.match(/\d+(\.\d+)?/);
        return matches ? parseFloat(matches[0]) : 0;
      };
      
      const numericValue = getNumericValue();
      let startValue = 0;
      const increment = numericValue / 30; // Animate in 30 steps
      const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= numericValue) {
          startValue = numericValue;
          clearInterval(timer);
        }
        
        // Format the value appropriately
        if (value.includes('%')) {
          setDisplayValue(`${Math.round(startValue)}%`);
        } else if (value.includes('/')) {
          const [, denom] = value.split('/');
          setDisplayValue(`${Math.round(startValue)}/${denom}`);
        } else {
          setDisplayValue(`${Math.round(startValue)}`);
        }
      }, 30);
      
      return () => clearInterval(timer);
    }
  }, [inView, value]);
  
  // Icons based on metric type
  const getIcon = (): ReactNode => {
    if (!metric) return <TrendingUp size={20} />;
    const lowerMetric = metric.toLowerCase();
    if (lowerMetric.includes('time')) return <Clock size={20} />;
    if (lowerMetric.includes('error')) return <PieChart size={20} />;
    if (lowerMetric.includes('satisfaction')) return <Award size={20} />;
    return <TrendingUp size={20} />;
  };
  
  return (
    <motion.div
      ref={ref}
      className="bg-[#1D1D1D] p-5 rounded-xl border border-[#333] hover:border-purple-500/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(165, 108, 255, 0.1)" }}
    >
      <div className="flex items-center mb-3">
        <span className="bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent mr-2">{getIcon()}</span>
        <h4 className="text-white text-sm font-medium">{metric || 'Metric'}</h4>
      </div>
      
      <div>
        <span className="text-2xl font-bold bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent">{inView ? displayValue : "0"}</span>
        <p className="text-gray-300 text-xs mt-2 leading-relaxed">{description || 'No description available'}</p>
      </div>
    </motion.div>
  );
}