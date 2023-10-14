"use client"

import './Card.css'
import Link from 'next/link'
import { motion } from 'framer-motion';

export default function Card({title , link , Description}) {
  return (

    <motion.div
      initial={{ opacity: 0 , scale: 0.2 }}
      animate={{ opacity: 1 , scale: 1   }}
    >
     <Link href={link}>
        <div className='Card' >
            <h1>{title}</h1>
            <p>{Description}</p>
        </div>
      </Link>
    </motion.div>
      
  )
}
