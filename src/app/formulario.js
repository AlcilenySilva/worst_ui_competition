"use client";
import React, { useState } from 'react';
import styles from './formulario.module.css'; 

const Formulario = () => {
  const [notaBrasil, setNotaBrasil] = useState('');
  const [notaJapao, setNotaJapao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem('notaBrasil', notaBrasil);
    localStorage.setItem('notaJapao', notaJapao);
    
    console.log('Nota para o Brasil:', notaBrasil);
    console.log('Nota para o Japão:', notaJapao);

    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Pontuações  da prova Olimpíca</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="notaBrasil" className={styles.label}>Nota para o Brasil:</label>
        <input
          type="number"
          id="notaBrasil"
          value={notaBrasil}
          onChange={(e) => setNotaBrasil(e.target.value)}
          className={styles.input}
          required
          min="0"
          max="10"
        />
        <label htmlFor="notaJapao" className={styles.label}>Nota para o Japão:</label>
        <input
          type="number"
          id="notaJapao"
          value={notaJapao}
          onChange={(e) => setNotaJapao(e.target.value)}
          className={styles.input}
          required
          min="0"
          max="10"
        />
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;









