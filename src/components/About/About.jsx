import Style from "./About.module.css";

export const About = () => {

    return (
        <div className={Style.container}>
            <section className={Style.curriculum}>
                <div className={Style.contenidoSeccion}>
                    <h2>Curriculum</h2>
                    <div className={Style.fila}>
                        <div className={Style.col}>

                            <h3>Educación</h3>
                            <div className={Style.item}>
                                <h4 className={Style.escuela}>Tecnología en desarrollo de software</h4>
                                <span className={Style.casa}>Instituto Tecnológico Metropolitano</span>
                                <span className={Style.fecha}>2005 - 2008</span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                                <div className={Style.conectori}>
                                    <div className={Style.circuloi}></div>
                                </div>
                            </div>

                            <div className={Style.item} >
                                <h4 className={Style.escuela}>Full Stack web Developer</h4>
                                <span className={Style.casa}>Bootcamp Henry</span>
                                <span className={Style.fecha} >2022 - 2023</span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                                <div className={Style.conectori}>
                                    <div className={Style.circuloi}></div>
                                </div>
                            </div>

                            <div className={Style.item}>
                                <h4 className={Style.escuela}>Bachiller Técnico en sistemas</h4>
                                <span className={Style.casa}>Institución Educativa Gonzalo Restrepo Jaramillo</span>
                                <span className={Style.fecha}>2017 - 2019</span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                                <div className={Style.conectori}>
                                    <div className={Style.circuloi}></div>
                                </div>
                            </div>
                        </div>

                        {/* izquierda */}
                        <div className={Style.col}>
                            <h3>Experiencia de trabajo</h3>
                            <div className={Style.item}>
                                <h4 className={Style.escuela}>Auditoria y prueba</h4>
                                <span className={Style.casa}>NetW consulting</span>
                                <span className={Style.fecha}>2023 - 2024</span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                                <div className={Style.conectord}>
                                    <div className={Style.circulod}></div>
                                </div>
                            </div>
                            <div className={Style.item}>
                                <h4 className={Style.escuela}>App web Hoteles</h4>
                                <span className={Style.casa}>Your destiny</span>
                                <span className={Style.fecha}>2022 - 2023</span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                                <div className={Style.conectord}>
                                    <div className={Style.circulod}></div>
                                </div>
                            </div>

                            <div className={Style.item}>
                                <h4 className={Style.escuela}>App web Proyecto individual</h4>
                                <span className={Style.casa}>App web videoGames</span>
                                <span className={Style.fecha}>2022 - 2023</span>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?</p>
                                <div className={Style.conectord}>
                                    <div className={Style.circulod}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={Style.button}>Conocer más proyectos</button>
            </section>
            
        </div>
    )
}