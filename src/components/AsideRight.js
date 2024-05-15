import React from 'react';
import avatarOne from '../img/avatarOne.jpg';
import avatarTwo from '../img/avatarTwo.jpg';
import avatarThree from '../img/avatarThree.jpg'

const AsideRight = () => {
    return (
      <div className="testimonials">
          <div className="container-fluid">
              <div className="row">
                <h4>Opiniones</h4>
                <hr/>
                  <div className="col-md-12 mt-1">
                      <img src={avatarOne} className="card-img-top"  alt="Foto del testimonio" />
                      <div className="card-body">
                          <h5 className="card-title">María</h5>
                          <p>Residente en Medellín</p>
                          <p className="card-text" > <small>"¡Qué gran herramienta! Gracias a este sitio web, puedo ver los niveles de contaminación en mi área y tomar medidas para proteger la salud de mi familia. La visualización de datos es clara y fácil de entender."</small></p>
                        </div>
                    </div>  
                    <hr/>
                  <div className="col-md-12 mt-1">
                      <img src={avatarTwo} className="card-img-top" alt="Foto del testimonio" />
                        <div className="card-body">
                          <h5 className="card-title">Carlos</h5>
                          <p>Urbanista</p>
                          <p className="card-text"><small>"Como urbanista, necesito acceso a datos precisos sobre el uso del suelo y la deforestación para diseñar proyectos sostenibles en el Valle de Aburrá. Este sitio web me proporciona la información que necesito de manera rápida y eficiente."</small></p>
                        </div>
                    </div>  
                    <hr/>
                  <div className="col-md-12 mt-1">
                      <img src={avatarThree} className="card-img-top" alt="Foto del testimonio" />
                        <div className="card-body">
                          <h5 className="card-title">Luisa</h5>
                          <p>Estudiante de Biología</p>
                          <p className="card-text"><small>"Estoy estudiando biología y me interesa mucho la conservación de la biodiversidad en nuestra región. Puedo acceder a datos actualizados sobre la distribución de especies y los cambios en los ecosistemas, lo que me permite realizar análisis detallados y contribuir al conocimiento científico sobre nuestro entorno."</small></p>
                        </div>
                    </div>
                    <hr/>
                    <div className='form'>
                      <h5>Cuéntanos tu opinión</h5>
                      <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Haz clic aquí</button>
                      <div class="modal fade" id="exampleModal" tabindex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel">Tu opinión nos importa</h5>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                              <div class="modal-body">
                                  <form>
                                      <div class="mb-3">
                                        <label for="recipient-name" class="col-form-label">¿Cómo te llamas?</label>
                                        <input type="text" class="form-control" id="recipient-name"/>
                                      </div>
                                      <div class="mb-3">
                                        <label for="recipient-profession" class="col-form-label">¿Cuál es tu profesión?</label>
                                        <input type="text" class="form-control" id="recipient-profession"/>
                                      </div>
                                      <div class="mb-3">
                                        <label for="message-text" class="col-form-label">¿Qué tal te parece nuestro sitio web?</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                      </div>
                                  </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="button" class="btn btn-primary">Enviar mensaje</button>
                                </div>
                              </div>
                        </div>
                      </div>
                    </div>
              </div>
          </div>
      </div>
    );
  };
  
  export default AsideRight;
  