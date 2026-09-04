import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I&apos;m Nathan, if you haven&apos;t already gathered that by
              now. I&apos;m a former artist turned software developer. 
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Before focusing fully on software, I developed strong communication, 
              leadership and problem-solving skills through customer-facing and management roles. 
              That experience has shaped how I approach development, as I try to think about the person using the system, 
              not just the code behind it.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I enjoy building structured, practical applications that solve real problems, 
              and I'm now looking for opportunities where I can keep learning, contribute to real projects 
              and grow as a developer within a supportive team.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I'm currently looking for opportunities to start my career in software development, 
              contribute to meaningful projects and continue learning within a supportive team. 
              If my background sounds like a good fit, let's connect.
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
