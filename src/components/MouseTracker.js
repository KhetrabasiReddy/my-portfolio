import { useEffect, useState } from "react";


export default function MouseTracker(){
    const [position, setPosition] = useState({x:0, y:0,});

    useEffect(()=>{
        function handleChange(e){
            setPosition({
                x:e.clientX,
                y:e.clientY,
            })
        }

        window.addEventListener('mousemove', handleChange);

        return () => {
            window.removeEventListener('mousemove',handleChange);
        }
    },[]);


    const styles = {
        // transform:`translateX(${position.x}px) translateY(${position.y}px)`
        left:`${position.x}px`,
        top:`${position.y}px`,
    };

    return (
        <div className="highlight-div" style={styles}></div>
    );
}