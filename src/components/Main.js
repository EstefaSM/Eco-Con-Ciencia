import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Services from './Services';
import AsideRight from './AsideRight';
import Dashboard from '../pages/Dashboard';
import imgOne from '../img/imgOne.png';
import imgTwo from '../img/imgTwo.png';
import imgThree from '../img/imgThree.png';
import imgFour from '../img/imgFour.png';
import imgFive from '../img/imgFive.png';
import imgSix from '../img/imgSix.png';
import imgSeven from '../img/imgSeven.png';
import imgEight from '../img/imgNine.png';
import '../css/main.css'
import Aside from './Aside';
import Section from './Section';

const Main = () => {
return (
    <div className="container-fluid">
        <div className='firtsBanner'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgOne} className="d-block w-100 img-fluid" alt="Medellín" />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img src={imgTwo} className="d-block w-100 img-fluid" alt="Medellín" />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img src={imgThree} className="d-block w-100 img-fluid" alt="Medellín" />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img src={imgFour} className="d-block w-100 img-fluid" alt="Medellín" />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </div>
        <hr/>
        <div className='purpose'>
                <h3>NUESTRO PROPÓSITO</h3>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Concienciación y educación pública
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        La visualización de datos puede ayudar a educar a la población sobre los problemas ambientales específicos que enfrenta la región, así como las posibles soluciones. La transparencia en los datos puede empoderar a los ciudadanos para tomar decisiones informadas sobre su estilo de vida y comportamiento ambiental.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Identificación de problemas emergentes
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        La recopilación y visualización de datos en tiempo real o periódicos pueden ayudar a identificar tendencias emergentes o problemas ambientales antes de que se conviertan en crisis. Por ejemplo, un aumento repentino en los niveles de contaminación del aire puede indicar un problema concreto que requiere atención inmediata.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Monitoreo y evaluación de proyectos ambientales
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        La visualización de datos puede ayudar en el seguimiento y la evaluación de proyectos ambientales en curso. Esto permite a las autoridades y las organizaciones responsables evaluar la eficacia de las medidas implementadas y realizar ajustes según sea necesario.
                        </div>
                        </div>
                    </div>
            </div>
        </div>
        <hr />
        <div className='mainContent'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <Services />
                    </div>
                    <div className="col-md-3">
                        <AsideRight />
                    </div>
                </div>
            </div>            
        </div>
        <hr/>
        <div className='secondBanner'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imgFive} className="d-block w-100 img-fluid" alt="Medellín" />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img src={imgSix} className="d-block w-100 img-fluid" alt="Medellín" />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img src={imgSeven} className="d-block w-100 img-fluid" alt="Medellín" />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img src={imgEight} className="d-block w-100 img-fluid" alt="Medellín" />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="false"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="false"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </div>
        <hr/>
        <div className='secondContent'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <Aside />
                    </div>
                    <div className="col-md-8">
                        <Section />
                    </div>
                </div>
            </div>            
        </div>


    </div>      
    );
};

export default Main;
