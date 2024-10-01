import { useState, useEffect, useRef } from 'react';
import {motion} from 'framer-motion'
import "./Styles.css";

import img1 from "../Carrossel/imgCarrossel/img1.jpg"
import img2 from "../Carrossel/imgCarrossel/img2.jpg"
import img3 from "../Carrossel/imgCarrossel/img3.jpg"
import img4 from "../Carrossel/imgCarrossel/img4.jpg"
import img5 from "../Carrossel/imgCarrossel/img5.jpg"
import img6 from "../Carrossel/imgCarrossel/img6.jpg"
import img7 from "../Carrossel/imgCarrossel/img7.jpg"
import img8 from "../Carrossel/imgCarrossel/img8.jpg"
import img9 from "../Carrossel/imgCarrossel/img9.jpg"
import img10 from "../Carrossel/imgCarrossel/img10.jpg"




const imagens = [img1, img2, img3, img4, img5]

export default function Carrossel () {

    const carrossel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    })


    return (
        <div className='container-carrossel'>
            <div className='container-filho-carrossel'>



                <motion.div ref={carrossel} className='carrossel' whileTap={{cursor: "grabbing"}}>
                    <motion.div
                    className='inner'
                    drag="x"
                    dragConstraints={{right: 0, left: -width}}
                    initial={{ x: 100}}
                    animate={{ x: 0}}
                    transition={{duration: 0.8}}
                    >

                    {imagens.map(image => (
                        <motion.div className='item' key={image}>
                            <img src={image} />
                        </motion.div>

                    ))}

                    </motion.div>
                </motion.div>




            </div>
        </div>
    )
}