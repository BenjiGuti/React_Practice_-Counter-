import { useEffect, useState } from "react";
import { motion } from "framer-motion"; 
import "./Contador.css";

function Contador({ nombre, inicio = 0, incremento = 1 }) {
  const [contador, setContador] = useState(inicio);

  const aumentarContador = () => {
    setContador(contador + incremento);
  };

  const restarContador = () => {
    setContador(contador - incremento);
  };

  const resetearContador = () => {
    setContador(0);
  };

  useEffect(() => {

    localStorage.setItem("contador", contador);

    
    console.log("El contador ha cambiado a: ", contador);
  }, [contador]);

  return (
    <div className="contador-container">
     
      {contador < 0 && <p style={{ color: 'red' }}>¡Cuidado! Número negativo</p>}

      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {contador >= 0 ? "Todo bien!" : "Ups, número negativo!"}
      </motion.p>

      <h1>{nombre}</h1>

      
      <motion.h2
        key={contador}  
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {contador}
      </motion.h2>

      <button onClick={aumentarContador}>Aumentar + {incremento}</button>
      <button onClick={restarContador}>Restar - {incremento}</button>
      <button onClick={resetearContador}>Resetear</button>
    </div>
  );
}

export default Contador;
