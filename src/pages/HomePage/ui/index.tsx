import { useEffect, useRef, useState } from 'react'
import styles from './HomePage.module.scss'



export const HomePage = () => {
    const [position, setPosition] = useState<{x:number, y:number} | null>(null)
    const ball = useRef<HTMLDivElement>(null)

     function handlePosition(e: MouseEvent) {
            setPosition({x: e.clientX, y: e.clientY})
        }

    const handleAddListener = ()=> {
        window.addEventListener('mousemove', handlePosition);
        window.addEventListener('mouseup', handleRemoveListener);
    }

    const handleRemoveListener = ()=> {
        window.removeEventListener('mousemove', handlePosition);
        window.removeEventListener('mouseup', handleRemoveListener);
    }

    useEffect(()=> {

        if(ball.current && position) {
            ball.current.style.left = `${position.x}px`
            ball.current.style.top =  `${position.y}px`
        }


    }, [position])

  console.log(position)

  return (
     <main className={styles.root} >
        <div className={styles.field} >
            <div ref={ball} onMouseDown={handleAddListener} className={styles.ball} ></div>
        </div>
     </main>
  )
}
