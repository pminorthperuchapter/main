"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <a href="https://www.instagram.com/pminorteperu?igsh=MWw1OGU1dWgxcHV2bw==" className="social" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/share/1CfCowCGzB/" className="social" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.linkedin.com/company/pmi-norte-peru-chapter/" className="social" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="topbar-right">
          <span className="email">informes@pminorteperu.org</span>
          <span className="separator">|</span>
          <Link href="#contacto" className="contact-link">Contáctanos</Link>
          <span className="separator">|</span>
          <Link href="/admin/login" className="contact-link">Login Administración</Link>
        </div>
      </div>

      <header className="navbar">
        <div className="nav-container">
          <Link href="/" className="a-img-nav">
            <img src="/img/logo/logo_PMI.png" alt="Logo PMI Norte Perú" className="logo" />
          </Link>
          
          <input 
            type="checkbox" 
            id="menu-toggle" 
            className="menu-toggle" 
            checked={isMenuOpen}
            onChange={() => setIsMenuOpen(!isMenuOpen)}
          />
          <label htmlFor="menu-toggle" className="menu-icon"><i className="fas fa-bars"></i></label>

          <nav id="navmenu">
            <ul className="menu">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/#eventos">Eventos</Link></li>
              
              <li className="dropdown-beneficios">
                <Link href="/beneficios" className="dropdown-toggle">Membresía <span className="arrow">▼</span></Link>
                <ul className="submenu-membresia">
                  <li><Link href="/beneficios">Beneficios</Link></li>
                  <li><Link href="/tiposMembresia">Tipos de Mebresía</Link></li>                        
                  <li><Link href="/preguntas">Preguntas</Link></li>
                </ul> 
              </li>
              
              <li className="dropdown-certificacion">
                <Link href="/certificaciones" className="dropdown-toggle">Certificación <span className="arrow">▼</span></Link>
                <ul className="submenu-certificacion">
                  <li><Link href="/certificaciones">Principales</Link></li>
                  <li><Link href="/certificaciones#especializadas">Especializadas</Link></li>
                  <li><Link href="/certificaciones#recursos">Recursos</Link></li>
                  <li><Link href="/preguntas#faq-certificaciones">Preguntas Frecuentes</Link></li>
                </ul> 
              </li>

              <li className="dropdown-comunidades">
                <Link href="#" className="dropdown-toggle">Comunidades <span className="arrow">▼</span></Link>
                <ul className="submenu-comunidades">
                  <li><Link href="#cajamarca">Cajamarca</Link></li>
                  <li><Link href="#trujillo">Trujillo</Link></li>
                  <li><Link href="#piura">Piura</Link></li>
                  <li><Link href="#estudiantil">Estudiantil</Link></li>
                  <li><a href="https://comunidadunc.pminorteperu.org/" target="_blank" rel="noopener noreferrer">Student Club UNC</a></li>
                </ul>
              </li>

              <a href="https://www.pmi.org/shop/p-/chapter-membership/norte-per%C3%BA-chapter/101293" className="btn-hazte" target="_blank" rel="noopener noreferrer">Hazte miembro</a>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}