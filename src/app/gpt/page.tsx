'use client';

import './style.css';
import { useEffect } from 'react';

const GPTPage = () => {
  useEffect(() => {
    document.querySelectorAll('nav a').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector(link!.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });

        // const href = link.getAttribute('href');
        // const offsetTop = document.querySelector(href).offsetTop;

        // scroll({
        //   top: offsetTop,
        //   behavior: 'smooth',
        // });
      });
    });
  }, []);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href='#home'>Accueil</a>
            </li>
            <li>
              <a href='#about'>À propos</a>
            </li>
            <li>
              <a href='#projects'>Projets</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id='home' className='content-section'>
          <div className='text sticky'>
            <p>Texte à gauche qui se colle en haut de la page en défilement</p>
          </div>
          <div className='gallery'>
            <img src='image1.jpg' alt='Image 1' />
            <img src='image2.jpg' alt='Image 2' />
            <img src='image3.jpg' alt='Image 3' />
          </div>
        </section>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <section id='about' className='content-section'>
          <div className='gallery'>
            <img src='image4.jpg' alt='Image 4' />
            <img src='image5.jpg' alt='Image 5' />
            <img src='image6.jpg' alt='Image 6' />
          </div>
          <div className='text sticky'>
            <p>Texte à droite qui se colle en haut de la page en défilement</p>
          </div>
        </section>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <section id='projects' className='content-section'>
          <div className='text sticky'>
            <p>Texte à gauche qui se colle en haut de la page en défilement</p>
          </div>
          <div className='gallery'>
            <img src='image1.jpg' alt='Image 1' />
            <img src='image2.jpg' alt='Image 2' />
            <img src='image3.jpg' alt='Image 3' />
          </div>
        </section>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <section id='contact' className='content-section'>
          <div className='gallery'>
            <img src='image4.jpg' alt='Image 4' />
            <img src='image5.jpg' alt='Image 5' />
            <img src='image6.jpg' alt='Image 6' />
          </div>
          <div className='text sticky'>
            <p>Texte à droite qui se colle en haut de la page en défilement</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default GPTPage;
