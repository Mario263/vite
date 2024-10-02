 
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    occlu,
    tailwind,
    nodejs,
    git,
    sanity,
    threejs,
    highradius,
    ltm,
    python,
    tensor,
    keras,
    rust,
    voice,
    inference,
    red,
   
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "ML Engineer",
      icon: web,
    },
    {
      title: "Data Scientist",
      icon: creator,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "keras",
      icon: keras,
    },
    {
      name: "tensor",
      icon: tensor,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "rust",
      icon: rust,
    },
  ];
  
  const experiences = [
    {
      title: "Intern Backend Developer",
      company_name: "L&T Mindtree",
      icon: ltm,
      iconBg: "#E6DEDD",
      date: "July 2024 - Aug 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Associate Data Scientist",
      company_name: "HighRadius Corporation",
      icon: highradius,
      iconBg: "#E6DEDD",
      date: "June 2022 - December 2022",
      points: [
        "Developed a machine learning model to predict invoice clearance with an accuracy of 85-90%, significantly improving payment forecasts",
        "Analyzed over 100,000 customer invoices, identifying patterns and trends in payments, which helped optimize invoice management processes by approximately 5% over existing process.",
        "Generated detailed reports that uncovered key insights, reducing late payments by 20% and improving on time payment rates by 10%.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Intern Full Stack Developer",
      company_name: "HighRadius Corporation",
      icon: highradius,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - April 2022",
      points: [
        "Developed a web-based product that streamlined invoice processing for B2B clients, improving invoice handling efficiency by 30%.",
        "The application reduced manual invoice processing time by 25%, optimizing the workflow for the financial team.",
        "Created and trained ML models for payment bucket prediction, achieving a prediction accuracy of 85-90%.",
        "Participating in code reviews and providing constructive feedback to other interns.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Abhishek is a talented web developer who truly cares about his clients' success.He shows dedication and hardwork through is skills.",
      name: "Abhinav Rana",
      designation: "AET ",
      company: " Ericsson",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEGGm2TgMhTOQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705762367797?e=1733356800&v=beta&t=lxxEqakBnikc2dCV4jDH-piXLm40PMToNVTtRGvyM_s",
    },
    {
      testimonial:
        "Collaborating with Abhishek on the AVL and Red-Black Tree analysis project was an insightful experience, as his expertise and attention to optimizing performance helped us achieve a 15-20% improvement in search and insertion times.",
      name: "Adhyayan Bhatnagar",
      designation: "Assosciate Data Scientist ",
      company: " GrainFox",
      image: "https://media.licdn.com/dms/image/v2/C5603AQGDPvsGVUPVsA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1598086507500?e=1733356800&v=beta&t=x9JTYW9WeohaXBUIUYpsVMXI6iI29Gw6slA3tTis_dw",
    },
    {
      testimonial:
        "Abhishek did an outstanding job building my website. His attention to detail, creativity, and technical expertise resulted in a seamless and visually stunning platform. I’m truly impressed with how he brought my vision to life!",
      name: "Ankush Jain",
      designation: "Manager",
      company: "Canadian Property Stars",
      image: "https://media.licdn.com/dms/image/v2/D5603AQG1jQkmVgqy1g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727838773817?e=1733356800&v=beta&t=KKSfVPhhRo2wOt2pLGoF7wpQuxkZcjr0NYkeghpNr8k",
    },
  ];
  
  const projects = [
    {
      name: "Food Delivery App",
      description:
        "My food delivery app, developed with React Native, Expo Go, and Sanity, enhances user experience by enabling quick restaurant browsing and ordering in just 3-4 taps. React Native reduced development time by 30-40%, while Expo Go streamlined testing and updates, cutting time by 25%. Sanity ensures real-time updates for orders and menu changes with 20-30% lower latency, allowing the app to handle thousands of users seamlessly. Real-time tracking and push notifications provide accurate delivery updates, increasing user trust and engagement.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "ExpoGo",
          color: "green-text-gradient",
        },
        {
          name: "Sanity",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
        {
          name: "Rest API",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: sanity,
      source_code_link: "https://github.com/Mario263",
    },
    {
      name: "Membership Inference Attacks Analysis",
      description:
        "In my machine learning research on Membership Inference Attacks (MIAs), I identified a 60% success rate of these attacks in compromising data privacy in modern neural networks. By implementing defense mechanisms like differential privacy and adversarial training, I reduced the effectiveness of these attacks by 20-25%, while maintaining model accuracy at 85-90%. This work demonstrates the critical balance between high model performance and data protection in adversarial settings.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "CNNs",
          color: "green-text-gradient",
        },
      ],
      image: inference,
      source_code_link: "https://github.com/Mario263/CMPUT-626",
    },
    {
      name: "Enhancing Expressivness with text-to-speech via cloned voice synthsis",
      description:
        "In my text-to-speech project, I used a custom emotion embedding layer, achieving a 20-30% improvement in emotional accuracy. The system’s Mean Opinion Score (MOS) was 4.1/5, with sadness at 4.5, reflecting a 40% boost in human-like intonation. Mel Cepstral Distortion (MCD) dropped by 15%, and F0 RMSE by 10%, enhancing naturalness by 35% across emotional states.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow/Keras",
          color: "green-text-gradient",
        },
        {
          name: "DL",
          color: "pink-text-gradient",
        },
        {
          name: "AI/ML",
          color: "blue-text-gradient",
        },
        {
          name: "TacoTron 2",
          color: "blue-text-gradient",
        },
       
      ],
      image: voice,
      source_code_link: "https://github.com/Mario263",
    },
    {
      name: "Investigating Occlusions in 3D Shape Predictions",
      description:
        "We developed a deep learning framework for 3D scene reconstruction using text prompts, addressing occlusions. Using the Matterport3D dataset with 10,800 panoramic scans and 194,000 labeled segments, we applied SIFT and FLANN to reduce false positives by 50%. Stable diffusion generated high-quality 3D views in 50 timesteps, while rotation matrices improved occluded object reconstruction.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "SIFT",
          color: "green-text-gradient",
        },
        {
          name: "FLANN",
          color: "pink-text-gradient",
        },
        {
          name: "Stable Diffusion",
          color: "green-text-gradient",
        },
        {
          name: "BLIP-2 Model",
          color: "pink-text-gradient",
        },
        {
          name: "CLIP Model:",
          color: "green-text-gradient",
        },
      ],
      image: occlu,
      source_code_link: "https://github.com/task-master98/reconstruction-deep-network/tree/abhishek",
    },
    {
      name: "AVL Trees and Red Black Trees Comparison and Analysis",
      description:
        "This project compares Red-Black and AVL Trees implemented in Rust on datasets up to 1 million elements. AVL Trees were 15-20% faster in search and insertion, while Red-Black Trees performed 10-15% faster in deletion. Graphviz visualizations highlighted AVL’s better balance, making it ideal for applications like database indexing and memory management where efficiency is critical.",
      tags: [
        {
          name: "Rust",
          color: "blue-text-gradient",
        },
      ],
      image: red,
      source_code_link: "https://github.com/Mario263/ece-522-project/tree/feat/abhishek",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };