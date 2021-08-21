import React from 'react';
import style from './Statistics.module.css'

const color = ["red", "blue", "teal", "green", "pink"];
const Statistics = ({ title, stats }) => {
   return (
             <section className={style.statistics}>
           <h2 className={style.title}>Upload stats</h2>

           <ul className={style.statList}>
               {stats.map((stat, index) => 
                    (
                   <li className={style.item} key={stat.id} style={{ backgroundColor: color[index] }}>
                           <span className={style.label}>{stat.label}</span>
                           <span className={style.percentage}>{stat.percentage}%</span>
                       </li>
                   )
               )}
            </ul>
        </section>
    )
}
export default Statistics