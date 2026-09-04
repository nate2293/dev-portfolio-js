import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
    {
  title: "Ulster University",

  position: "Systems Engineer Intern",

  time: "Sep 2024 - Nov 2024",

  location: "Derry, Northern Ireland",

  description:
    "Contributed to the development of a university recruitment platform, building and maintaining web application functionality using Laravel, PHP and Blade. Improved responsive interfaces, tested and debugged functionality, and collaborated with the development team using Git and GitHub within an Agile environment.",

  tech: [
    "Laravel",
    "PHP",
    "Blade",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ],
},

{
  title: "O'Kanes Liquor Stores",

  position: "Manager",

  time: "Oct 2021 - Present",

  location: "Derry, Northern Ireland",

  description:
    "Manage day-to-day store operations while leading and supporting staff in a customer-focused retail environment. Responsible for coordinating the team, resolving customer issues and ensuring the efficient running of daily operations.",

  tech: [
    "Leadership",
    "Team Management",
    "Communication",
    "Problem Solving",
    "Customer Service",
  ],
},

{
  title: "Specsavers",

  position: "Optical Assistant",

  time: "Sep 2018 - Sep 2021",

  location: "Derry, Northern Ireland",

  description:
    "Supported customers throughout their optical care journey, communicating technical information clearly and helping identify individual requirements. Worked collaboratively within a busy team while maintaining a strong focus on customer service and attention to detail.",

  tech: [
    "Communication",
    "Teamwork",
    "Customer Service",
    "Problem Solving",
  ],
},
];
