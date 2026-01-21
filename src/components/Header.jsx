/**
 * Header Component
 * 
 * Encabezado de la aplicación con título, hora actual y control de tema.
 * 
 */

import { Clock } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = ({ currentTime, themeMode, onToggleTheme }) => {
  const timeString = currentTime.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="text-center mb-8 text-white">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1" />
        <h1 className="text-4xl font-bold flex-1">Jikan Maru</h1>
        <div className="flex-1 flex justify-end">
          <ThemeToggle
            themeMode={themeMode}
            onToggle={onToggleTheme}
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 text-lg">
        <Clock size={24} />
        <span>{timeString}</span>
      </div>
    </div>
  );
};

export default Header;