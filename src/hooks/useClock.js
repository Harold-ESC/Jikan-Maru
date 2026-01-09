/**
 * Hook useClock
 * 
 * Gestiona la actualización de la hora actual cada minuto.
 * 
 * @returns {Date} Hora actual
 */

import { useState, useEffect } from 'react';

export const useClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  return currentTime;
};