import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Languages & Technologies</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>PHP</Chip>
            <Chip>Java</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>Python</Chip>
            <Chip>BASH Scripting</Chip>
            <Chip>Linux</Chip>
            <Chip>Ubuntu</Chip>
            <Chip>TailwindCSS</Chip>
            <Chip>React</Chip>
            <Chip>NPM</Chip>
            <Chip>SQL</Chip>
            <Chip>MVC</Chip>
            <Chip>MySQL</Chip>
            <Chip>GitHub</Chip>
            <Chip>AWS</Chip>
            <Chip>Laravel Cloud</Chip>
            <Chip>GitHub Copilot</Chip>
            <Chip>RESTFUL APIs</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Experimented with..</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>SpringBoot</Chip>
            <Chip>Hover.dev</Chip>
            <Chip>Shadcn/ui</Chip>
            <Chip>MUI</Chip>
            <Chip>Magic UI</Chip>
            <Chip>React Bits</Chip>
            <Chip>Hover.css</Chip>
            <Chip>bladewindUI</Chip>
            <Chip>Chakra UI</Chip>
            <Chip>Ant Design</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
