import "./hero.scss"
import {motion} from "framer-motion"

const textVariants = {
  initial:{
    x: -500,
    opacity: 0,
  },
  animate:{
    x: 0,
    opacity: 1,
    transition:{
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y: 10,
    transition:{
      duration: 2,
      repeat:Infinity,
    },
  },
}

const sliderVariants = {
  initial:{
    x: 0,    
  },
  animate:{
    x: "-220%",
    transition:{
      repeat:Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
}


const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textcontainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>Sebastián Giménez</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>boton1</motion.button>
                    <motion.button variants={textVariants}>boton2</motion.button>        
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />      
            </motion.div>
        </div>
        <motion.div className="slidingtextcontainer" variants={sliderVariants} initial="initial" animate="animate">
          Desarrollador Web - Front-End - Back-End
        </motion.div>  
      <div className="imgcontainer">
            {/* <img src="/hero.png" alt="hero" /> */}
      </div>
    </div>
  )
}

export default Hero
