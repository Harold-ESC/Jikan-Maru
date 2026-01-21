/**
 * DailyStatsSection Component
 * 
 * Sección de estadísticas diarias del horario.
 * 
 */

import { BarChart3 } from 'lucide-react';

const DailyStatsSection = ({ schedule }) => {
  // Calcular estadísticas
  const totalHours = schedule.reduce((sum, item) => sum + (item.end - item.start), 0);
  const activityCount = schedule.length;
  const averageActivityDuration = activityCount > 0 ? Math.round(totalHours / activityCount * 10) / 10 : 0;

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
      <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
        <BarChart3 size={18} />
        ESTADÍSTICAS
      </h3>
      <div className="space-y-3">
        <div className="bg-white/10 rounded-lg p-3">
          <p className="text-xs opacity-75">Horas programadas</p>
          <p className="text-lg font-bold">{totalHours}h</p>
        </div>
        <div className="bg-white/10 rounded-lg p-3">
          <p className="text-xs opacity-75">Actividades</p>
          <p className="text-lg font-bold">{activityCount}</p>
        </div>
        <div className="bg-white/10 rounded-lg p-3">
          <p className="text-xs opacity-75">Promedio por actividad</p>
          <p className="text-lg font-bold">{averageActivityDuration}h</p>
        </div>
      </div>
    </div>
  );
};

export default DailyStatsSection;