import React from "react";
import ProfileCard from "./ProfileCard";
import GradientText from "./React-bits-Components/GradientText";
import Background from "./background";
import StarBorder from "./React-bits-Components/StarBorder";

function Heropage() {
  return (
    <>
    <Background />
      <section
        id="home"
        className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 pt-15"
      >
      
          
       
        <div className="order-2 max-w-2xl space-y-6 md:order-1">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#7c7b7d]">
            Web Developer
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              Ankit Parihar
            </GradientText>
          </h1>

          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            I build modern, responsive websites and web apps focused on clean UI
            and smooth user experience.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="rounded-xl bg-[#5227FF] px-6 py-3 font-semibold text-white transition hover:bg-[#6A46FF]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-[#5227FF] px-6 py-3 font-semibold text-[#B19EEF] transition hover:bg-[#5227FF] hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end ">
          <img src="./ankit.png" alt="" className="w-[90%]" />
        </div>

        {/* <div className="order-1 flex justify-center md:order-2 md:justify-end">
        <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/60 p-3 shadow-2xl shadow-cyan-500/10">
          <ProfileCard
            name="Javi A. Torres"
            title="Software Engineer"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="https://images.unsplash.com/photo-1599566150163-29194dcaad36?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
            showIcon
            showBehindGlow
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            customInnerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
        </div>
      </div> */}
      </section>
    </>
  );
}

export default Heropage;
