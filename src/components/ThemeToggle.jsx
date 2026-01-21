/**
 * ThemeToggle Component
 * 
 * Botón para cambiar entre modos de tema (automático, claro, oscuro).
 * 
 */

import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ themeMode, onToggle }) => {
  const getThemeIcon = () => {
    switch (themeMode) {
      case 'light':
        return <Sun size={20} />;
      case 'dark':
        return <Moon size={20} />;
      case 'auto':
      default:
        return '🔄';
    }
  };

  const getThemeLabel = () => {
    return themeMode === 'auto' ? 'Automático' : themeMode === 'light' ?  'Claro' : 'Oscuro';
  };

  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 text-white bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition backdrop-blur-sm"
      title={`Modo:  ${getThemeLabel()}`}
      aria-label={`Cambiar tema.  Modo actual: ${getThemeLabel()}`}
    >
      <span className="text-xl">{getThemeIcon()}</span>
      <span className="text-sm capitalize hidden sm:inline">{themeMode}</span>
    </button>
  );
};

export default ThemeToggle;