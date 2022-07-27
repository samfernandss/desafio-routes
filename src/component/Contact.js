import React from 'react';
import styles from './Contact.module.css';
import photo from '../img/Contact+Img.jpg';
import Head from './Head';

const Contact = () => {
  return (
    <section className={`${styles.contact} animeLeft`}>
      <Head title="Ranek | Contact" description="Keep in touch" />
      <img src={photo} alt="envelope" />
      <h1>Contact</h1>
      <ul className={styles.data}>
        <li>contact@help.com</li>
        <li>99999-9999</li>
        <li>Street 7th</li>
      </ul>
    </section>
  )
}

export default Contact;