import React from 'react'
import style from './Home.module.css';
import Spline from '@splinetool/react-spline';

export const Home = () => {
  return (
  
    <div className={style.container}>
      <div className={style.containerLeft}>
        <h1 className={style.descripcion}>¡Holaa Gordaa!!</h1>
      </div>
      <div className={style.containerRights}>
        <Spline scene="https://prod.spline.design/8iKjCE0YD07P20w6/scene.splinecode" className={style.spline} />
      </div>

    </div>
  )
}
