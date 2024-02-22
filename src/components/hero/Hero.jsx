import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <div className="textcontainer">
                <h2>Sebastián Giménez</h2>
                <h1>Web Developer</h1>
                <div className="buttons">
                    <button>boton1</button>
                    <button>boton2</button>        
                </div>
                <img src="/scroll.png" alt="" />      
            </div>
        </div>
      <div className="imgcontainer">
            {/* <img src="/hero.png" alt="hero" /> */}
      </div>
    </div>
  )
}

export default Hero
