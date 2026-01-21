/**
 * DetailView Component
 * 
 * Vista detallada de una actividad seleccionada con información
 * completa, descripción y notas personales.
 * 
 */

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const DetailView = ({
  activity,
  day,
  bgColor,
  themeMode,
  onBack,
  onToggleTheme
}) => {
  const [notes, setNotes] = React.useState('');

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgColor} p-6 transition-all duration-1000`}>
      <div className="max-w-2xl mx-auto">
        {/* Barra de herramientas */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
            aria-label="Volver a vista principal"
          >
            <ChevronLeft size={20} />
            Volver
          </button>

          <ThemeToggle
            themeMode={themeMode}
            onToggle={onToggleTheme}
          />
        </div>

        {/* Contenido principal */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white">
          {/* Encabezado con información de la actividad */}
          <div className="text-center mb-6">
            <div
              className="w-24 h-24 rounded-full mx-auto mb-4"
              style={{ backgroundColor: activity.color }}
            />
            <h2 className="text-4xl font-bold mb-2">{activity.activity}</h2>
            <p className="text-xl opacity-90">
              {activity.start}: 00 - {activity.end}:00
            </p>
          </div>

          {/* Secciones de información */}
          <div className="space-y-4 mt-8">
            {/* Descripción */}
            <div className="bg-white/10 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-2">Descripción</h3>
              <p className="text-lg">{activity.description}</p>
            </div>

            {/* Duración */}
            <div className="bg-white/10 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-2">Duración</h3>
              <p className="text-lg">{activity.end - activity.start} horas</p>
            </div>

            {/* Notas personales */}
            <div className="bg-white/10 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-2">Notas</h3>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-white/10 rounded-lg p-3 text-white placeholder-white/50 border border-white/20 focus:border-white/50 transition"
                rows="4"
                placeholder="Añade notas personales sobre esta actividad..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;