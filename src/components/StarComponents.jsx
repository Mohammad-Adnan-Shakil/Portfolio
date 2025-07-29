import { Divide } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const StarComponents = () => {
    const [stars,setStars] = useState([]);
    const [meteor,setMeteor] = useState([]);
     useEffect(() => {
        generateStars();
        generateMeteor();

        const handleResize = () => {
            generateStars();
        }
        window.addEventListener('resize',handleResize)
        return () => window.removeEventListener('resize',handleResize)
    }, [])

    function generateStars(){
        const numberOfStars = Math.floor(
            (window.innerHeight*window.innerWidth)/10000
        )


    const newStars = []
    for(let i = 0;i <numberOfStars;i++){
        newStars.push({
            id:i,
            size: Math.random() * 3 + 1,
            x: Math.random()*100,
            y:Math.random()*100,
            opacity : Math.random() * 0.5 + 0.5,
            animationDuration : Math.random()* 4 + 2,

        })
    }
    setStars(newStars);
}

 function generateMeteor(){
        const numberOfMeteor = 5


    const newMeteor = []
    for(let i = 0;i <numberOfMeteor;i++){
        newMeteor.push({
            id:i,
            size: Math.random() * 2 + 1,
            x: Math.random()*100,
            y:Math.random()*100,
            delay : Math.random() * 15,
            animationDuration : Math.random()* 3 + 3,

        })
    }
    setMeteor(newMeteor);
}



  return (
    <div className='fixed  inset-0 overflow-hidden pointer-events-none z-0'>
        {stars.map((star) => (
         <div key={star.id}
         className='star animate-pulse-subtle' style = {{
         width: star.size + "px",
         height: star.size + "px",
         top: star.x + "%",
         left: star.y + "%",
         opacity: star.opacity,
         animationDuration: star.animationDuration + "s",
         }}
         />

        ))}
         {meteor.map((meteor) => (
         <div key={meteor.id}
         className='meteor animate-meteor' style = {{
         width: meteor.size *40 + "px",
         height: meteor.size + "px",
         top: meteor.x + "%",
         left: meteor.y + "%",
         animationDelay: meteor.delya,
         animationDuration: meteor.animationDuration + "s",
         }}
         />

        ))}
    </div>
  )
}

export default StarComponents
