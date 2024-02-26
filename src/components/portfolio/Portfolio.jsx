import { useRef } from "react"
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id: 1,
        title: "Wordpress Agency Website",
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste odio explicabo repudiandae est voluptatibus illo tenetur quas nobis totam!",
    },
    {
        id: 2,
        title: "JS Vainilla Bootstrap Agency",
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste odio explicabo repudiandae est voluptatibus illo tenetur quas nobis totam!",
    },
    {
        id: 3,
        title: "E-Commerce Hotel",
        image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iste odio explicabo repudiandae est voluptatibus illo tenetur quas nobis totam!",
    },
]

const Single = ({item}) => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress,[0,1],[-300,300])

    return (
       <section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <button>see demo</button>
                </motion.div>
            </div>
        </div>
       </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,

    })


  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Work</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio
