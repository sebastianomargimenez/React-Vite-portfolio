import { useRef } from "react"
import "./services.scss"
import {animate, motion, useInView} from "framer-motion"


const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x: 0,
        y: 0,
        opacity:1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    }
}

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, {margin:"-100px"})

  return (
    <motion.div className="services" variants={variants} initial="initial" /*animate="animate"*/ /*whileInView="animate"*/ ref={ref} animate={isInView && "animate"}>
        <motion.div className="textContainer" variants={variants}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
             Sapiente ratione quod inventore quae possimus aliquam.</p>
             <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt=""/>
                <h1><motion.b whileHover={{color:"orange"}}>Lorem ipsum</motion.b> dolor sit amet.</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>Lorem ipsum</motion.b> dolor sit amet.</h1>
                <button>CLICK</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Lorem, ipsum.</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur illum, odit unde enim at minima suscipit praesentium maiores aliquam sed.</p>
                <button>Lorem.</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Lorem, ipsum.</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur illum, odit unde enim at minima suscipit praesentium maiores aliquam sed.</p>
                <button>Lorem.</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Lorem, ipsum.</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur illum, odit unde enim at minima suscipit praesentium maiores aliquam sed.</p>
                <button>Lorem.</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Lorem, ipsum.</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur illum, odit unde enim at minima suscipit praesentium maiores aliquam sed.</p>
                <button>Lorem.</button>
            </motion.div>
        </motion.div>      
    </motion.div>
  )
}

export default Services
