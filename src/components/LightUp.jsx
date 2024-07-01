import {About, Experience, Works,Contact} from './index'

const LightUp = ()=>{

  function handleMouse(event){
    const {currentTarget: target } = event
    const rect = target.getBoundingClientRect(),
      x = event.clientX - rect.left,
      y = event.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

    return(
    <div onMouseMove={handleMouse} className='text-light'>
        <div className='ml-32 flex flex-col gap-56'>
            <About ></About>
            <Experience/>
            <Works/>
            <div className="relative z-0">
                <Contact/>
            </div>  
        </div>
    </div>
    )
}

export default LightUp