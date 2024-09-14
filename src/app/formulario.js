"use client";
import React, { useState } from 'react';
import styles from './formulario.module.css'; 

const Formulario = () => {
  const [notaBrasil, setNotaBrasil] = useState('');
  const [notaJapao, setNotaJapao] = useState('');
  const [mensagemEnviada, setMensagemEnviada] = useState(false); 
  const [desbloqueado, setDesbloqueado] = useState(false); 
  const [respostaDesafio, setRespostaDesafio] = useState(''); 

  // Função para verificar a resposta do desafio
  const verificarResposta = (e) => {
    e.preventDefault();
    if (respostaDesafio === '42') {
      setDesbloqueado(true); 
    } else {
      alert('Resposta incorreta! Tente novamente.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    localStorage.setItem('notaBrasil', notaBrasil);
    localStorage.setItem('notaJapao', notaJapao);
    
    
    setMensagemEnviada(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Pontuações da Prova Olímpica</h1>

      {!desbloqueado ? (
        <div className={styles.desafio}>
          <h2>Desbloqueie o formulário respondendo à pergunta:</h2>
          <p>Qual é a resposta para a vida, o universo e tudo mais?</p>
          <p className={styles.dica}>Dica: <strong>42</strong></p>
          <form onSubmit={verificarResposta} className={styles.form}>
            <input
              type="text"
              value={respostaDesafio}
              onChange={(e) => setRespostaDesafio(e.target.value)}
              className={styles.input}
              placeholder="Digite sua resposta aqui"
              required
            />
            <button type="submit" className={styles.button}>Desbloquear</button>
          </form>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="notaBrasil" className={styles.label}>Nota para o Brasil:</label>
          <input
            type="range"
            id="notaBrasil"
            value={notaBrasil}
            onChange={(e) => setNotaBrasil(e.target.value)}
            className={styles.input}
            min="0"
            max="10"
          />
          <label htmlFor="notaJapao" className={styles.label}>Nota para o Japão:</label>
          <input
            type="range"
            id="notaJapao"
            value={notaJapao}
            onChange={(e) => setNotaJapao(e.target.value)}
            className={styles.input}
            min="0"
            max="10"
          />
          <button type="submit" className={styles.button}>Enviar</button>
        </form>
      )}

      {/* Mensagem sempre exibida após o envio */}
      {mensagemEnviada && (
        <div className={styles.mensagem}>
          <h2>Brasil Campeão! 🇧🇷🏆</h2>
        </div>
      )}
    </div>
  );
};

export default Formulario;

