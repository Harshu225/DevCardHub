import React from "react";
import Card from "./components/Card.jsx";
import Landing from "./components/Landing.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () => {
  const developers = [
    {
      name: "Aarav Sharma",
      role: "Frontend Developer",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/045/783/165/small/confident-indian-businessman-in-modern-office-environment-professional-profile-branding-corporate-headshot-photo.jpg",
      experience: "2 ",
      briefIntro: "Builds responsive and interactive user interfaces.",
      specialities: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      name: "Priya Patel",
      role: "Backend Developer",
      image:
        "https://media.istockphoto.com/id/1987655119/photo/smiling-young-businesswoman-standing-in-the-corridor-of-an-office.jpg?s=612x612&w=0&k=20&c=5N_IVGYsXoyj-H9vEiZUCLqbmmineaemQsKt2NTXGms=",
      experience: "3 ",
      briefIntro: "Develops server-side applications and APIs.",
      specialities: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Authentication",
      ],
    },
    {
      name: "Rohan Verma",
      role: "Full Stack Developer",
      image:
        "https://www.shutterstock.com/image-photo/portrait-confident-young-indian-business-260nw-2695542473.jpg",
      experience: "4 ",
      briefIntro:
        "Develops complete web applications from frontend to backend.",
      specialities: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git & GitHub",
      ],
    },
    {
      name: "Chelakshi Rahangdale",
      role: "UI/UX Designer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50GE0Ea30WTfy0RQ36SPNXyZ3yxGH64Ca-t_MxqoVf9hAunGjqzbCdlGW&s=10",
      experience: "2 ",
      briefIntro:
        "Designs intuitive and visually appealing digital experiences.",
      specialities: [
        "Figma",
        "Wireframing",
        "Prototyping",
        "User Research",
        "Responsive Design",
      ],
    },
    {
      name: "Vikram Singh",
      role: "Mobile App Developer",
      image:
        "https://img.magnific.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?semt=ais_hybrid&w=740&q=80",
      experience: "3 ",
      briefIntro: "Creates mobile applications for Android and iOS platforms.",
      specialities: ["React Native", "Flutter", "Java", "Dart", "Mobile UI"],
    },
    {
      name: "Devyani Rahangdale  ",
      role: "AI/ML Engineer",
      image:
        "https://img.magnific.com/free-photo/closeup-happy-pretty-indian-business-woman_1262-2258.jpg?semt=ais_hybrid&w=740&q=80",
      experience: "3",
      briefIntro: "Builds intelligent applications using machine learning.",
      specialities: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "TensorFlow",
        "Data Analysis",
      ],
    },
    {
      name: "Ricky Kapse ",
      role: "DevOps Engineer",
      image:
        "https://i.pinimg.com/736x/3a/d0/33/3ad0336a6cff02dd56f01cf270668f5c.jpg",
      experience: "5",
      briefIntro: "Automates deployment and manages cloud infrastructure.",
      specialities: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"],
    },
    {
      name: "Meera Kulkarni",
      role: "Cybersecurity Engineer",
      image:
        "https://media.istockphoto.com/id/2216052190/photo/successful-confident-businesswoman-at-workplace-inside-office-woman-with-crossed-arms-smiling.jpg?s=612x612&w=0&k=20&c=HpGOecei3RJVh-cHDwMiOgubKpKzJy_63RVy-DdLhcA=",
      experience: "4 ",
      briefIntro: "Protects applications and systems from security threats.",
      specialities: [
        "Network Security",
        "Ethical Hacking",
        "Penetration Testing",
        "OWASP",
        "Security Auditing",
      ],
    },
    {
      name: "Harshad Bisen",
      role: "Mern Stack developer ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KjxdyjIoOQzdgXctYNE6KtGJqSEMdYkmLslYSl59gw&s=10",

      experience: "2",
      briefIntro:
        " He is going to become the best developer , he has good skills in ReactJs ",
      specialities: ["ReactJS", "HTML", "JS", "NodeJs"],
    },
  ];
return (
    <>
      <NavBar />
      <Landing />
      <section id="directory" className="bg-slate-100 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
                Featured people
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Meet the network
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-500">
              A snapshot of the people shaping what comes next.
            </p>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {developers.map((person) => (
              <Card
                // key={index}
                img={person.image}
                name={person.name}
                role={person.role}
                briefIntro={person.briefIntro}
                experience={person.experience}
                specialities={person.specialities}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
