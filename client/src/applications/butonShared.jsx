import React from 'react';

const ShareButton = () => {
  const shareLink = async () => {
    try {
      await navigator.share({
        title: 'Título de tu enlace compartido',
        url: 'https://menu-r-46kq.vercel.app/', // Reemplaza con la URL de tu portafolio
      });
      console.log('Enlace compartido con éxito');
    } catch (error) {
      console.error('Error al compartir enlace:', error.message);
    }
  };

  return (
    <button onClick={shareLink}>
      Compartir enlace
    </button>
  );
};

export default ShareButton;
