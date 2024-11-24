import React, { useEffect } from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import { exp } from "three/webgpu";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default function Works ({isopen}) {
  const [isShowAll, setIsShowAll] = React.useState(3);
  useEffect(() => {
    if(!isopen) {
    setIsShowAll(3);
  }else if(isopen) {
    setIsShowAll(projects.length);
  }
  projects.slice(0, 3).map((project, index) => (
    console.log(project)
  ));
  }, [isShowAll]);
  
  return (
    <>
    <div className='flex flex-col justify-between w-full items-center '>
      <motion.div variants={textVariant()} className="w-full flex justify-start">
        {!isopen && <p className={`${styles.sectionSubText}`}>Highligh Projects</p>}
        {isopen && <h2 className={`${styles.sectionHeadText}`} style={{fontSize:"25px", paddingTop: "20px"}}>Projects List.</h2>}
      </motion.div>

      <div className='w-full flex justify-end'>
        { !isopen ?
        <Link to="/all-projects" >
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          View all Projects →
        </motion.p>
        </Link>
        :
        <Link to="/" >
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          style={{fontSize:"15px", alignItems:"center"}}
        >
          Back →
        </motion.p>
        </Link>
        }
      </div>
    </div>

      <div className='mt-8 flex flex-wrap gap-7'>
        {projects.slice(0, isShowAll).map((project, index) => (
          <a href={project.link} key={index} target="_blank">
            <ProjectCard index={index} {...project} />
          </a>
        ))}
      </div>
    </>
  );
};

// export default SectionWrapper(Works, "");
