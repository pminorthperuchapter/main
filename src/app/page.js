import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Principal */}
      <section id="hero" className="hero" aria-label="Sección principal">
        <div className="hero-bg" aria-hidden="true">
          {/* En React, los atributos de video cambian un poco la mayúscula: autoPlay, playsInline */}
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata">
            <source src="/video/hero2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">PMI Norte Perú Chapter</p>
            <h1>
              ¡Maximizando el éxito de los<span className="txt-gradient"> proyectos para elevar nuestro mundo!</span>
            </h1>
            <p className="lead">
              Transformamos ideas en <strong>valor real</strong> para Cajamarca, Piura y Trujillo
              mediante dirección de proyectos.
            </p>
            <div className="hero-actions">
              <Link href="#eventos" className="btn btn--primary">Ver eventos</Link>
              <Link href="#nosotros" className="btn btn--secondary">Conocer el capítulo</Link>
            </div>
          </div>
          {/* Le añadimos la clase 'is-visible' temporalmente para que no se quede oculto por tus animaciones CSS */}
          <aside className="hero-card glass reveal is-visible">
            <figure>
              <img 
                src="/img/portada/cajamarca_portada.png" 
                alt="Norte del Perú - Trujillo, Piura y Cajamarca"
                loading="lazy" 
              />
            </figure>
            <div className="hero-card-body">
              <h3>Student Club PMI UNC</h3>
              <p className="muted">10 - 15 de Noviembre · Semana Formativa</p>
            </div>
            <div className="hero-card-actions">
              <a href="https://comunidadunc.pminorteperu.org/" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">Descubre más</a>
              <a href="https://wa.me/51955769734" target="_blank" rel="noopener noreferrer" className="btn btn--primary">Inscribirme</a>
            </div>
          </aside>
        </div>
      </section>
      
      {/* QUIÉNES SOMOS */}
      <section id="nosotros" className="quienes-somos">
        <div className="container">
          <h2>Quiénes somos</h2>
          <p className="descripcion">
            PMI Norte Perú Chapter es una comunidad profesional afiliada al Project Management Institute (PMI) que
            impulsa la excelencia en la dirección de proyectos en las regiones de Cajamarca, Trujillo y Piura.
            Promovemos el desarrollo del talento local mediante formación, certificaciones, eventos y espacios de
            colaboración que fortalecen la gestión profesional de proyectos y contribuyen al crecimiento sostenible
            del norte del país.
          </p>
          <div className="cards">
            <div className="card">
              <img src="/img/valores/logo_misión.png" alt="Misión" className="icono-img" />
              <h3>Misión</h3>
              <p>Fortalecer las competencias en dirección de proyectos de los profesionales del norte del Perú,
                promoviendo el liderazgo, la ética y la creación de valor a través de la aplicación de
                estándares y buenas prácticas del PMI.</p>
            </div>
            <div className="card">
              <img src="/img/valores/logo_visión.png" alt="Visión" className="icono-img" />
              <h3>Visión</h3>
              <p>Ser el capítulo referente del norte del Perú en gestión de proyectos, reconocido por su impacto
                positivo en la comunidad y por fomentar una cultura de excelencia, innovación y colaboración.
              </p>
            </div>
            <div className="card">
              <img src="/img/valores/logo_valores.png" alt="Valores" className="icono-img" />
              <h3>Valores</h3>
              <p><strong>Excelencia:</strong> compromiso con la calidad y la mejora continua.</p>
              <p><strong>Integridad:</strong> actuar con ética y transparencia.</p>
              <p><strong>Colaboración:</strong> trabajo conjunto y aprendizaje compartido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LLAMADO A LA ACCIÓN (CTA) */}
      <section id="cta" className="cta">
        <div className="cta-fondo"></div>
        <div className="cta-content">
          <h2>¿Listo para el siguiente proyecto?</h2>
          <p>Únete al PMI Norte Perú Chapter y forma parte de una comunidad que impulsa el crecimiento profesional, la
            innovación y el liderazgo en la gestión de proyectos. Juntos, hacemos que las ideas se conviertan en
            resultados que transforman nuestra región.</p>
          <div className="cta-buttons">
            <a href="https://www.pmi.org/shop/p-/chapter-membership/norte-per%C3%BA-chapter/101293"
              target="_blank" rel="noopener noreferrer" className="btn-cta btn-primary">Hazte miembro</a>
            <Link href="#contacto" className="btn-cta btn-secondary">Habla con nosotros</Link>
          </div>
        </div>
      </section>

      {/* JUNTA DIRECTIVA */}
      <section id="junta-directiva" className="seccion-junta">
        <div className="container container-noticias">
          <div className="titulo-noticias">
            <h2>Junta<br /><span>Directiva</span></h2>
            <p>La Junta Directiva del PMI Norte Perú Chapter está conformada por profesionales comprometidos con
              promover la excelencia en la gestión de proyectos y fortalecer la presencia del PMI en la región
              norte del país. Cada miembro aporta su experiencia, liderazgo y visión estratégica para impulsar
              iniciativas clave para el desarrollo dentro de nuestra comunidad.</p>
          </div>
        </div>
        <div className="carousel-wrapper">
          {/* Los botones del carrusel los animaremos más adelante con React */}
          <button className="carousel-btn prev-btn" aria-label="Anterior"><i className="fas fa-chevron-left"></i></button>
          
          <div className="carousel-container">
            <div className="carousel-track">
              {/* Miembro 1 */}
              <div className="card-miembro">
                <div className="foto-miembro">
                  <img src="/img/junta/OscarZocon.png" alt="Presidente" />
                </div>
                <span className="cargo-badge">Presidente</span>
                <h3>Oscar Zocón</h3>
                <div className="redes-miembro">
                  <a href="https://www.linkedin.com/in/oscarzocon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              
              {/* Miembro 2 */}
              <div className="card-miembro">
                <div className="foto-miembro">
                  <img src="/img/junta/CarlosBriceno.png" alt="Presidente Electo" />
                </div>
                <span className="cargo-badge">Presidente Electo</span>
                <h3>Carlos Briceño</h3>
                <div className="redes-miembro">
                  <a href="https://www.linkedin.com/in/carlos-daniel-briceno-burgos/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>

              {/* Miembro 3 */}
              <div className="card-miembro">
                <div className="foto-miembro">
                  <img src="/img/junta/HeynerNinaquispe.jpg" alt="Past President" />
                </div>
                <span className="cargo-badge">Past President</span>
                <h3>Heyner Ninaquispe</h3>
                <div className="redes-miembro">
                  <a href="https://www.linkedin.com/in/heynerninaquispe/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>

              {/* Miembro 4 */}
              <div className="card-miembro">
                <div className="foto-miembro">
                  <img src="/img/junta/TaniaAngeles.jpg" alt="Vicepresidente de Membresía" />
                </div>
                <span className="cargo-badge">Vicepresidente de Membresía</span>
                <h3>Tania Ángeles</h3>
                <div className="redes-miembro">
                  <a href="https://www.linkedin.com/in/taniaangelesmoncada/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          
          <button className="carousel-btn next-btn" aria-label="Siguiente"><i className="fas fa-chevron-right"></i></button>
        </div>
      </section>

      {/* VOLUNTARIADO */}
      <section id="voluntariado" className="voluntariado">
        <div className="cta-fondo"></div>
        <div className="voluntariado-content">
          <h2>Sé voluntario y deja huella!</h2>
          <p>Forma parte activa del PMI Norte Perú Chapter como voluntario y contribuye al desarrollo de la comunidad
            profesional de gestión de proyectos. Participar como voluntario te permite aprender, liderar y conectar
            con otros profesionales, fortaleciendo tus habilidades mientras generas un impacto positivo en tu
            región.</p>
          <div className="voluntariado-buttons">
            <a href="#registro" className="btn-vol btn-azul">Sé voluntario</a>
            <Link href="#contacto" className="btn-vol btn-blanco">Habla con nosotros</Link>
          </div>
        </div>
      </section>

      {/* CONTÁCTANOS */}
      <section id="contacto" className="contacto">
        <h2 className="titulo-contacto">Contáctanos</h2>
        <div className="container-contacto">
          <div className="columna-formulario">
            <form className="form-contacto">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="name" required aria-required="true" autoComplete="name" />

              <label htmlFor="correo">Correo</label>
              <input type="email" id="correo" name="email" required aria-required="true" autoComplete="email" />

              <label htmlFor="interes">Interés</label>
              {/* En React, la opción por defecto se maneja con defaultValue */}
              <select id="interes" name="topic" required aria-required="true" defaultValue="">
                <option value="" disabled>Selecciona</option>
                <option value="membresia">Membresía</option>
                <option value="certificacion">Certificación</option>
                <option value="alianzas">Alianzas</option>
                <option value="voluntariado">Voluntariado</option>
              </select>

              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="message" rows="4" required></textarea>

              <div className="check-group">
                <label className="lbl-tc">
                  <input type="checkbox" required aria-required="true" name="privacidad" />
                  Acepto la política de privacidad
                </label>
              </div>

              <button type="submit" className="btn-enviar">Enviar</button>
            </form>
          </div>
          <div className="columna-imagen">
            <img src="/img/recursos/form.jpg" alt="Equipo PMI Norte Perú" />
          </div>
        </div>
      </section>
      {/* FOOTER TEMPORAL (luego lo pasaremos a un componente general) */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} PMI Norte Perú</p>
      </footer>
    </>
  );
}
