"use client"
import './page.css';
import { useState } from 'react';
import BoredAPI from '../../components/ApiRequester/BoredAPI';
import PageHeader from '../../components/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';

export default function Page() {
  const [Data, setData] = useState([]);

  return (
    <div>
      <PageHeader title="Get Random Activities" />
      <BoredAPI Data={Data} setData={setData} />

      <div className="activity-container">

      <AnimatePresence initial={false}>
            {Data.map((data) => (
              <motion.div
                className="activity"
                key={data.key}
                id={data.key}
                positionTransition
                initial={{ opacity: 0, y: -100, scale: 1 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{  y : 1000 , opacity: 0, transition: { duration: 1 } }}
              >
                    <div>
                        <h3>{data.activity}</h3>
                    </div>
                    <div className="activity-details">
                        <p>Type: {data.type}</p>
                        <p>Participants: {data.participants}</p>
                        <p>Accessibility: {data.accessibility}</p>
                        <p>Price: {data.price}</p>
                        <p
                            className="close"
                            onClick={() => {
                            setData(Data.filter((item) => item.key !== data.key));
                            }}
                        >
                            X
                        </p>
                    </div>
              </motion.div>
            ))}
          </AnimatePresence>
        
      </div>
    </div>
  );
}
