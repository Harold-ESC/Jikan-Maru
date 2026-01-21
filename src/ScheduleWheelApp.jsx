/**
 * ScheduleWheelApp Component
 * 
 * Aplicación de horario circular que permite visualizar y gestionar
 * actividades diarias en un formato de rueda visual.
 * 
 */

import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Plus, ChevronLeft, Bell } from 'lucide-react';

// Componentes personalizados
import PieChart from './components/PieChart';
import DetailView from './components/DetailView';
import DaySelector from './components/DaySelector';
import CurrentActivityCard from './components/CurrentActivityCard';
import RemindersSection from './components/RemindersSection';
import DailyStatsSection from './components/DailyStatsSection';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';

// Utilidades
import { useClock } from './hooks/useClock';
import { useTheme } from './hooks/useTheme';
import { DAYS_OF_WEEK, INITIAL_SCHEDULES, INITIAL_REMINDERS } from './constants';

const ScheduleWheelApp = () => {
  // Estados principales
  const [currentDay, setCurrentDay] = useState('Lunes');
  const [view, setView] = useState('main'); // 'main' | 'detail'
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [schedules, setSchedules] = useState(INITIAL_SCHEDULES);
  const [reminders, setReminders] = useState(INITIAL_REMINDERS);

  // Hooks personalizados
  const currentTime = useClock();
  const { themeMode, toggleTheme, isDarkMode, bgColor } = useTheme();

  /**
   * Obtiene la actividad actual según la hora y el día seleccionado
   * @returns {Object|null} Objeto de actividad o null si no hay coincidencia
   */
  const getCurrentActivity = () => {
    const hours = currentTime.getHours();
    const schedule = schedules[currentDay] || [];
    return schedule.find(item => hours >= item.start && hours < item.end);
  };

  const currentActivity = getCurrentActivity();

  /**
   * Maneja la selección de una actividad para ver detalles
   */
  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
    setView('detail');
  };

  /**
   * Regresa a la vista principal
   */
  const handleBackToMain = () => {
    setView('main');
    setSelectedActivity(null);
  };

  // Vista de detalles
  if (view === 'detail' && selectedActivity) {
    return (
      <DetailView
        activity={selectedActivity}
        day={currentDay}
        bgColor={bgColor}
        themeMode={themeMode}
        onBack={handleBackToMain}
        onToggleTheme={toggleTheme}
      />
    );
  }

  // Vista principal
  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgColor} p-6 transition-all duration-1000`}>
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <Header 
          currentTime={currentTime}
          themeMode={themeMode}
          onToggleTheme={toggleTheme}
        />

        {/* Selector de días */}
        <DaySelector 
          days={DAYS_OF_WEEK}
          currentDay={currentDay}
          onSelectDay={setCurrentDay}
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Rueda de horario */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
              <PieChart
                schedule={schedules[currentDay] || []}
                currentDay={currentDay}
                onActivitySelect={handleActivitySelect}
              />
            </div>
          </div>

          {/* Panel lateral */}
          <div className="space-y-4">
            {/* Actividad actual */}
            {currentActivity && (
              <CurrentActivityCard activity={currentActivity} />
            )}

            {/* Recordatorios */}
            <RemindersSection 
              reminders={reminders}
              onAddReminder={() => {/* Implementar lógica */}}
            />

            {/* Estadísticas */}
            <DailyStatsSection schedule={schedules[currentDay] || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleWheelApp;