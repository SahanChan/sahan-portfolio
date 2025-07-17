
// import {NextLogoJs} from "@/components/HeroModels/NextLogoJs";
// import {Flutter} from "@/components/HeroModels/Flutter";
// import {Blender} from "@/components/HeroModels/Blender";
// import {ReactLogo} from "@/components/HeroModels/ReactLogo";
// import {Supabase} from "@/components/HeroModels/Supabase";
// import {TreeJs} from "@/components/HeroModels/TreeJs";

// Type definitions
export interface NavLink {
  name: string;
  link: string;
}

export interface Word {
  text: string;
  imgPath: string;
}

export interface CounterItem {
  value: number;
  suffix: string;
  label: string;
}

export interface LogoIcon {
  imgPath: string;
  name?: string;
}

export interface Ability {
  imgPath: string;
  title: string;
  desc: string;
}

export interface TechStackImg {
  name: string;
  imgPath: string;
}

export interface TechStackIcon {
  name: string;

  modelPath: string;
  scale: number;
  rotation: [number, number, number];
}

export interface ExpCard {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
}

export interface ExpLogo {
  name: string;
  imgPath: string;
}

export interface Testimonial {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
}

export interface SocialImg {
  name: string;
  url: string;
  imgPath: string;
}

// Data
const navLinks: NavLink[] = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words: Word[] = [
    {text: "Ideas", imgPath: "/images/ideas.svg"},
    {text: "Concepts", imgPath: "/images/concepts.svg"},
    {text: "Designs", imgPath: "/images/designs.svg"},
    {text: "Code", imgPath: "/images/code.svg"},
    {text: "Ideas", imgPath: "/images/ideas.svg"},
    {text: "Concepts", imgPath: "/images/concepts.svg"},
    {text: "Designs", imgPath: "/images/designs.svg"},
    {text: "Code", imgPath: "/images/code.svg"},
];

const counterItems: CounterItem[] = [
    {value: 2, suffix: "+", label: "Years of Industry Experience"},

    {value: 15, suffix: "+", label: "Completed Projects"},
    {value: 8, suffix: "+", label: "Coding Experience"},
    {value: 6, suffix: "+", label: "Technologies Mastered"},
];

const logoIconsList: LogoIcon[] = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities: Ability[] = [
    {
        imgPath: "/images/seo.png",
        title: "Detail-Oriented",
        desc: "I aim for great results by paying close attention to detail and focus craftsmanship on every task.",
    },
    {
        imgPath: "/images/adapt.png",
        title: "Adaptability",
        desc: "I adjust seamlessly to changing needs and challenges and tech stacks, ensuring solutions stay aligned with the goals.",
    },
    {
        imgPath: "/images/technical.png",
        title: "Technical Mastery",
        desc: "Using strong technical skills to build reliable, fast, and ready-for-the-future solutions.",
    },
    {
        imgPath: "/images/time.png",
        title: "Punctuality",
        desc: "I always meet deadlines and finish each task on time without losing quality or attention to detail.",
    }
];

const techStackImgs: TechStackImg[] = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons: TechStackIcon[] = [
    {
        name: "Next JS",

        modelPath: "/models/nextjs-transformed.glb",
        scale: 23,
        rotation: [0, 0, 0],
    },
    {
        name: "React JS",

        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Flutter Mobile",
        modelPath: "/models/flutter-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Supabase Backend",
        modelPath: "/models/supabase-transformed.glb",
        scale: 750,
        rotation: [0, 0, 0],
    },
    {
        name: "Interactive Three JS",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Blender 3D Multimedia",

        modelPath: "/models/blender-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
];

const expCards:ExpCard[]  = [
    {
        review:
            "As a 3D Animator, Mr. Sahan Chandrabahu has a solid understanding of 3D editing software, including industry standard tools such as Blender & Houdini. And he consistently demonstrates exceptional attention to detail in their work.",
        imgPath: "/images/faith2hope.png",
        logoPath: "/images/f2hLogo.png",
        title: "3D Multimedia Specialist",
        date: "July 2022 - August 2023 - Present(Working for Clients on Contract Basis)",
        responsibilities: [
            "Developed multiple stunning 3D Product Visuals for Clients and maintained consistency in style, motion, and design",
            "Applied strong attention to detail to ensure high-quality and visually accurate animations",
            "Collaborated with creative teams including video editors to bring concepts to life through engaging 3D content",
        ],
    },
    {
        review:
            "During his time at Infortronix (Pvt.) Ltd Now known as Flexiata (Pvt) Ltd,  Sahan was actively involved in mobile application development using Flutter. He consistently demonstrated dedication, loyalty, punctuality, and a strong sense of responsibility in all his work.",
        imgPath: "/images/infortronixLogo.png",
        logoPath: "/images/infort.png",
        title: "Flutter Mobile Developer",
        date: "July 2022 - August 2023",
        responsibilities: [
            "Developed a complete mobile application for a property management client based in Australia",
            "Utilized Flutter to build cross-platform apps with responsive UI and seamless performance with the backend",
            "Collaborated with the backend team to integrate APIs into the mobile app.",
        ],
    },
    {
        review:
            "Sahan worked as a volunteer Software Engineer during his studies to help our startup company develop its websites and mobile app for our clients. He was a great asset to us, known for his diligence, enthusiastic approach, and being a pleasure to work with. Highly recommend him",
        imgPath: "/images/exzitanT.png",
        logoPath: "/images/exzitan.png",
        title: "Junior Software Engineer",
        date: "October 2021 - July 2022",
        responsibilities: [
            "Built cross-platform mobile apps using React Native & Flutter.",
            "Built React and Next JS Saas Applications within a small timeframe",
            "Showcased excellent execution of his skills in coding ",
        ],
    },
];


const expLogos: ExpLogo[] = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

// const testimonials: Testimonial[] = [
//     {
//         name: "Esther Howard",
//         mentions: "@estherhoward",
//         review:
//             "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
//         imgPath: "/images/client1.png",
//     },
//     {
//         name: "Wade Warren",
//         mentions: "@wadewarren",
//         review:
//             "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
//         imgPath: "/images/client3.png",
//     },
//     {
//         name: "Guy Hawkins",
//         mentions: "@guyhawkins",
//         review:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         imgPath: "/images/client2.png",
//     },
//     {
//         name: "Marvin McKinney",
//         mentions: "@marvinmckinney",
//         review:
//             "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
//         imgPath: "/images/client5.png",
//     },
//     {
//         name: "Floyd Miles",
//         mentions: "@floydmiles",
//         review:
//             "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
//         imgPath: "/images/client4.png",
//     },
//     {
//         name: "Albert Flores",
//         mentions: "@albertflores",
//         review:
//             "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
//         imgPath: "/images/client6.png",
//     },
// ];

const socialImgs: SocialImg[] = [
    {
        name: "github",
        url: "https://github.com/SahanChan",
        imgPath: "/images/github.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/sahanchan/",
        imgPath: "/images/linkedin.png",
    },
    {
        name: "artstation",
        url: "https://www.artstation.com/sahanbrucelee",
        imgPath: "/images/artstation.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    // testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
