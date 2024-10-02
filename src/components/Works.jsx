/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unexpected-multiline */
/* eslint-disable react/prop-types */
 
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"


 
const ProjectCard = ({index, name, description, tags, image, source_code_link}) =>{
  return (
    <motion.div variants={fadeIn("up","spring", index*0.5, 0.75)}>
      <Tilt options ={{
        max : 45,
        scale: 1,
        speed: 450
      }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div 
                onClick={() => window.open
                  (source_code_link,"_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                    <img 
                      src={github}
                      alt="github"
                      className="w-1/2 h-1/2 object-contain"/>

              </div>
            </div>
          </div>
          <div className="mt-6 flex-col h-full justify-between">
            <h3 className="text-white font-bold text-[20px]">
              {name}
            </h3>
          </div>
            <p className="mt-6 text-secondary text-[14px]">{description}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>

            ))}
          
        </div>

        </Tilt>
      
    </motion.div>
  )

}

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My first project
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("","",0.1,1)}
        className="mt-5 text-secondary text-[20px] max-w-10xl leading-[40px]">
          Following projects showcase my skills and experience in Machine learning, Data Science,and Web development. Each project is briefly described with links to code repositories.
          Some of my projects are based upon the research papers I wrote and based on them. It reflects my
          ability to solve complex problems, work with different technologies and manage projects effectively.
          I am always open to new ideas and projects, so feel free to contact me if you have any project in mind.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index)=>(
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}
          />
        ))}
      </div>
    
    </>
  )
}

export default SectionWrapper(Works,"")