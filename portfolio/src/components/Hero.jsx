// const Hero = () => {
//   return (
//     <section id="hero" className="hero">
//       <div className="hero-content">
//         <p className="hero-tag">B.Tech CSE (AIML) • 3rd Year • Galgotias University</p>

//         <h1>
//           Hi, I’m <span>Lakshya Srivastav</span>
//         </h1>

//         <h2>Full Stack Developer</h2>

//         <p className="hero-description">
//           I’m a 3rd year B.Tech CSE (AIML) student at Galgotias University with
//           skills in Java, Python, HTML, CSS, JavaScript, React, Node.js, and
//           Express. I’m stronger in frontend development and also have working
//           knowledge of backend development to build complete web projects.
//         </p>

//         <div className="hero-buttons">
//           <a href="#projects" className="btn primary-btn">
//             View Projects
//           </a>
//           <a href="#contact" className="btn secondary-btn">
//             Contact Me
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
```jsx
import React, { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import Lakshya from "./Lakshya.png";

const Hero = () => {
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const roles = [
    "AI Developer",
    "Full Stack Learner",
    "ML Enthusiast",
    "Problem Solver",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: "Projects Completed",
      value: 25,
      suffix: "+",
    },
    {
      label: "Technologies Learned",
      value: 15,
      suffix: "+",
    },
    {
      label: "Problem Solving Hours",
      value: 1000,
      suffix: "+",
    },
  ];

  const Counter = ({ end, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startCount) return;

      let start = 0;
      const duration = 1800;
      const incrementTime = 20;
      const step = end / (duration / incrementTime);

      const timer = setInterval(() => {
        start += step;

        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }, [end]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 lg:px-16 py-24 bg-[#050816]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10rem] left-[-8rem] w-[28rem] h-[28rem] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />

        <div className="absolute bottom-[-10rem] right-[-8rem] w-[28rem] h-[28rem] bg-pink-500/20 blur-[120px] rounded-full animate-pulse" />

        <div className="absolute top-[35%] left-[45%] w-[20rem] h-[20rem] bg-purple-500/20 blur-[100px] rounded-full animate-pulse" />
      </div>

      {/* Grid */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-6 w-fit px-5 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl shadow-lg text-sm text-cyan-300 font-medium"
          >
            🚀 Building Future with AI & Code
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 via-pink-500 to-orange-400 bg-[length:300%_300%] animate-gradient-x bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.35)]">
              Lakshya
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-300 via-pink-500 to-cyan-400 bg-[length:300%_300%] animate-gradient-x bg-clip-text text-transparent">
              Srivastav
            </span>
          </h1>

          {/* Animated Role */}
          <div className="h-14 mb-6">
            <motion.h2
              key={roleIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-white"
            >
              <span className="text-cyan-400">
                {roles[roleIndex]}
              </span>
            </motion.h2>
          </div>

          {/* Bio */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
            Passionate about building intelligent systems, scalable web
            applications, and next-generation digital experiences through AI,
            development, and innovation.
          </p>

          {/* Availability */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-ping" />
            <span className="text-green-300 font-medium">
              Available for Internships & Opportunities
            </span>
          </div>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-4 mb-10">
            {["React", "Node.js", "AI/ML", "Java", "Python"].map(
              (tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.08,
                    y: -4,
                  }}
                  className="px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                >
                  {tech}
                </motion.div>
              )
            )}
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl p-5 shadow-[0_0_40px_rgba(0,255,255,0.08)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-2">
                    <Counter
                      end={item.value}
                      suffix={item.suffix}
                    />
                  </h3>

                  <p className="text-sm text-gray-300">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5 mb-10">
            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              href="#projects"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl overflow-hidden font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 shadow-[0_0_35px_rgba(0,255,255,0.35)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </span>
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl text-white font-semibold shadow-[0_0_30px_rgba(255,255,255,0.08)] hover:bg-white/20 transition-all duration-300"
            >
              Download Resume
              <Download
                size={20}
                className="group-hover:translate-y-[2px] transition"
              />
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {[
              {
                icon: <Github size={22} />,
                link: "https://github.com/",
              },
              {
                icon: <Linkedin size={22} />,
                link: "https://linkedin.com/",
              },
              {
                icon: <Mail size={22} />,
                link: "mailto:example@gmail.com",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -6,
                  scale: 1.12,
                }}
                className="w-14 h-14 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:shadow-[0_0_35px_rgba(0,255,255,0.25)] transition-all duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* Glow */}
          <div className="absolute w-[22rem] h-[22rem] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-[90px] opacity-30 animate-pulse" />

          {/* Floating Blobs */}
          <motion.div
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute top-10 left-5 w-20 h-20 rounded-full bg-cyan-400/20 blur-2xl"
          />

          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute bottom-10 right-5 w-24 h-24 rounded-full bg-pink-400/20 blur-2xl"
          />

          {/* Image Card */}
          <motion.div
            whileHover={{
              scale: 1.03,
              rotate: 1,
            }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative p-[3px] rounded-[2.5rem] bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_70px_rgba(168,85,247,0.35)]"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/10">
              <img
                src={Lakshya}
                alt="Lakshya Srivastav"
                className="w-full max-w-md h-auto object-cover rounded-[2.5rem]"
              />

              {/* Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-pink-500/10 pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Tailwind Extra Animation */}
      <style>
        {`
          @keyframes gradient-x {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .animate-gradient-x {
            animation: gradient-x 8s ease infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
```
