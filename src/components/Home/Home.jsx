import React from 'react'
import style from './Home.module.css';
import Spline from '@splinetool/react-spline';

export const Home = () => {
  return (

    <div className={style.container}>
      <div className={style.containerLeft}>
          <div className={style.descripcion}>
            <h1>¡Holaa Gordaa!!</h1>
            <h3>Bienvenida a mi portafolio❤ </h3>
          </div>
      </div>
      <div className={style.containerRight}>
        <Spline scene="https://prod.spline.design/8iKjCE0YD07P20w6/scene.splinecode" className={style.spline} />
      </div>

    </div>
  )
}
