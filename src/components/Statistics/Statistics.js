import React from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const color = ["red", "blue", "teal", "green", "pink"];
const Statistics = ({ title, stats }) => {
   return (
             <section className={style.statistics}>
           <h2 className={style.title}>{title}</h2>

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
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  };





export default Statistics