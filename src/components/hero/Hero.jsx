import Reveal from "../util/Reveal";
import DotGrid from "./DotGrid";
import { OutlineButton } from "../buttons/OutlineButton";

const Hero = () => {
  return (
    <section className="text-slate-100 overflow-hidden py-24 md:py-32">
      <div className="relative">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-4xl sm:text-6xl font-black text-zinc-100 md:text-8xl">
              Hi, I'm Nathan <span className="text-indigo-500">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-zinc-300 md:my-4 md:text-4xl">
              I'm a{" "}
              <span className="font-semibold text-indigo-500">
                Aspiring Full Stack Developer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-zinc-300 md:text-base">
    <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-2 float-left text-2xl">
        H
    </span>
    ey! I&apos;m a recent Computer Science graduate from Ulster University Magee with a 2:1 overall grade and practical experience developing full-stack web applications using Laravel,
    PHP, Blade, MySQL and Tailwind CSS. Through my Systems Engineer Internship and Final Year Project, I gained experience working with MVC architecture,
    database-driven systems, testing, GitHub and cloud deployment.
    Alongside my technical experience, I have several years of customer-facing and management experience, developing strong communication, teamwork, leadership and problem-solving skills.
    I am now looking to begin my career in software development and continue building practical, user-focused solutions.
</p>
          </Reveal>
          <Reveal>
            <OutlineButton
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView();
              }}
              className="pointer-events-auto before:bg-indigo-700 hover:text-white hover:border-indigo-700 mt-4 bg-indigo-500 text-zinc-100 border-indigo-500 md:mt-6"
            >
              Contact Me
            </OutlineButton>
          </Reveal>
        </div>
        <DotGrid />
      </div>
    </section>
  );
};

export default Hero;
