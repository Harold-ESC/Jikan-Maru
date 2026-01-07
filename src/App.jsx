import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Plus, Edit2, ChevronLeft, Bell, Sun, Moon } from 'lucide-react';

const ScheduleWheelApp = () => {
  const [currentDay, setCurrentDay] = useState('Lunes');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [view, setView] = useState('main');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [themeMode, setThemeMode] = useState('auto'); // 'auto', 'light', 'dark'
  const [schedules, setSchedules] = useState({
    Lunes: [
      { activity: '睡眠', color: '#4ade80', start: 0, end: 7, description: 'Descanso nocturno' },
      { activity: '食事', color: '#fb923c', start: 7, end: 8, description: 'Desayuno' },
      { activity: '勉強', color: '#3b82f6', start: 8, end: 12, description: 'Clases universitarias' },
      { activity: '食事', color: '#fb923c', start: 12, end: 13, description: 'Almuerzo' },
      { activity: '勉強', color: '#60a5fa', start: 13, end: 18, description: 'Estudio y programación' },
      { activity: '食事', color: '#fb923c', start: 18, end: 19, description: 'Cena' },
      { activity: '勉強', color: '#3b82f6', start: 19, end: 22, description: 'Proyectos personales' },
      { activity: '睡眠', color: '#4ade80', start: 22, end: 24, description: 'Prepararse para dormir' }
    ],
    Martes: [
      { activity: '睡眠', color: '#4ade80', start: 0, end: 7, description: 'Descanso nocturno' },
      { activity: '食事', color: '#fb923c', start: 7, end: 8, description: 'Desayuno' },
      { activity: '勉強', color: '#3b82f6', start: 8, end: 13, description: 'Clases universitarias' },
      { activity: '食事', color: '#fb923c', start: 13, end: 14, description: 'Almuerzo' },
      { activity: '勉強', color: '#60a5fa', start: 14, end: 19, description: 'Laboratorio' },
      { activity: '食事', color: '#fb923c', start: 19, end: 20, description: 'Cena' },
      { activity: '勉強', color: '#3b82f6', start: 20, end: 23, description: 'Estudio' },
      { activity: '睡眠', color: '#4ade80', start: 23, end: 24, description: 'Dormir' }
    ]
  });
  const [reminders, setReminders] = useState([
    { id: 1, text: 'Revisar proyecto de programación', time: '20:00' },
    { id: 2, text: 'Preparar material para clase', time: '07:30' }
  ]);

  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getCurrentActivity = () => {
    const hours = currentTime.getHours();
    const schedule = schedules[currentDay] || [];
    return schedule.find(item => hours >= item.start && hours < item.end);
  };

  const isNightTime = () => {
    const hours = currentTime.getHours();
    return hours >= 20 || hours < 6;
  };

  const isDarkMode = () => {
    if (themeMode === 'dark') return true;
    if (themeMode === 'light') return false;
    return isNightTime(); // modo auto
  };

  const toggleTheme = () => {
    if (themeMode === 'auto') {
      setThemeMode('light');
    } else if (themeMode === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('auto');
    }
  };

  const getThemeIcon = () => {
    if (themeMode === 'auto') return;
    if (themeMode === 'light') return;
    return;
  };

  const createPieChart = () => {
    const schedule = schedules[currentDay] || [];
    let currentAngle = -90;
    
    return schedule.map((item, index) => {
      const duration = item.end - item.start;
      const angle = (duration / 24) * 360;
      const endAngle = currentAngle + angle;
      
      const largeArcFlag = angle > 180 ? 1 : 0;
      const x1 = 200 + 180 * Math.cos((currentAngle * Math.PI) / 180);
      const y1 = 200 + 180 * Math.sin((currentAngle * Math.PI) / 180);
      const x2 = 200 + 180 * Math.cos((endAngle * Math.PI) / 180);
      const y2 = 200 + 180 * Math.sin((endAngle * Math.PI) / 180);
      
      const path = `M 200 200 L ${x1} ${y1} A 180 180 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
      
      const labelAngle = currentAngle + angle / 2;
      const labelRadius = 120;
      const labelX = 200 + labelRadius * Math.cos((labelAngle * Math.PI) / 180);
      const labelY = 200 + labelRadius * Math.sin((labelAngle * Math.PI) / 180);
      
      currentAngle = endAngle;
      
      return (
        <g key={index} onClick={() => {
          setSelectedActivity(item);
          setView('detail');
        }} style={{ cursor: 'pointer' }}>
          <path d={path} fill={item.color} stroke="white" strokeWidth="2" opacity="0.9" />
          <text x={labelX} y={labelY} textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">
            {item.activity}
          </text>
          <text x={labelX} y={labelY + 20} textAnchor="middle" fill="white" fontSize="14">
            {item.start}-{item.end}h
          </text>
        </g>
      );
    });
  };

  const currentActivity = getCurrentActivity();
  const bgColor = isDarkMode() ? 'from-indigo-900 via-purple-900 to-pink-900' : 'from-blue-400 via-cyan-400 to-teal-400';

  if (view === 'detail' && selectedActivity) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${bgColor} p-6 transition-all duration-1000`}>
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={() => setView('main')}
              className="flex items-center gap-2 text-white bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
            >
              <ChevronLeft size={20} />
              Volver
            </button>
            
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-white bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
              title={`Modo: ${themeMode === 'auto' ? 'Automático' : themeMode === 'light' ? 'Claro' : 'Oscuro'}`}
            >
              <span className="text-xl">{getThemeIcon()}</span>
              <span className="text-sm capitalize">{themeMode}</span>
            </button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white">
            <div className="text-center mb-6">
              <div 
                className="w-24 h-24 rounded-full mx-auto mb-4"
                style={{ backgroundColor: selectedActivity.color }}
              />
              <h2 className="text-4xl font-bold mb-2">{selectedActivity.activity}</h2>
              <p className="text-xl opacity-90">{selectedActivity.start}:00 - {selectedActivity.end}:00</p>
            </div>
            
            <div className="space-y-4 mt-8">
              <div className="bg-white/10 rounded-xl p-4">
                <h3 className="text-lg font-semibold mb-2">Descripción</h3>
                <p className="text-lg">{selectedActivity.description}</p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4">
                <h3 className="text-lg font-semibold mb-2">⏱Duración</h3>
                <p className="text-lg">{selectedActivity.end - selectedActivity.start} horas</p>
              </div>
              
              <div className="bg-white/10 rounded-xl p-4">
                <h3 className="text-lg font-semibold mb-2">Notas</h3>
                <textarea 
                  className="w-full bg-white/10 rounded-lg p-3 text-white placeholder-white/50 border border-white/20"
                  rows="4"
                  placeholder="Añade notas personales sobre esta actividad..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgColor} p-6 transition-all duration-1000`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 text-white">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1"></div>
            <h1 className="text-4xl font-bold flex-1">Mi Horario Circular</h1>
            <div className="flex-1 flex justify-end">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition backdrop-blur-sm"
                title={`Modo: ${themeMode === 'auto' ? 'Automático' : themeMode === 'light' ? 'Claro' : 'Oscuro'}`}
              >
                <span className="text-xl">{getThemeIcon()}</span>
                <span className="text-sm capitalize">{themeMode}</span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-lg">
            <Clock size={24} />
            <span>{currentTime.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>

        {/* Day selector */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 justify-center">
          {days.map(day => (
            <button
              key={day}
              onClick={() => setCurrentDay(day)}
              className={`px-4 py-2 rounded-lg font-medium transition whitespace-nowrap ${
                currentDay === day 
                  ? 'bg-white text-indigo-900' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Wheel */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
              <svg viewBox="0 0 400 400" className="w-full max-w-lg mx-auto">
                {createPieChart()}
                <circle cx="200" cy="200" r="60" fill="white" opacity="0.9" />
                <text x="200" y="200" textAnchor="middle" dominantBaseline="middle" fontSize="16" fontWeight="bold" fill="#1e293b">
                  {currentDay}
                </text>
              </svg>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Current activity */}
            {currentActivity && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
                <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <Calendar size={18} />
                  ACTIVIDAD ACTUAL
                </h3>
                <div 
                  className="w-16 h-16 rounded-full mb-3"
                  style={{ backgroundColor: currentActivity.color }}
                />
                <h2 className="text-2xl font-bold mb-2">{currentActivity.activity}</h2>
                <p className="opacity-90 mb-3">{currentActivity.description}</p>
                <p className="text-sm opacity-75">
                  {currentActivity.start}:00 - {currentActivity.end}:00
                </p>
              </div>
            )}

            {/* Reminders */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <Bell size={18} />
                RECORDATORIOS
              </h3>
              <div className="space-y-2">
                {reminders.map(reminder => (
                  <div key={reminder.id} className="bg-white/10 rounded-lg p-3">
                    <p className="text-sm font-medium">{reminder.text}</p>
                    <p className="text-xs opacity-75 mt-1">{reminder.time}</p>
                  </div>
                ))}
              </div>
              <button className="mt-3 w-full bg-white/20 hover:bg-white/30 rounded-lg p-2 text-sm font-medium transition flex items-center justify-center gap-2">
                <Plus size={16} />
                Añadir recordatorio
              </button>
            </div>

            {/* Quick stats */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
              <h3 className="text-sm font-semibold mb-3">ESTADÍSTICAS DEL DÍA</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Estudio</span>
                  <span className="font-bold">8h</span>
                </div>
                <div className="flex justify-between">
                  <span>Descanso</span>
                  <span className="font-bold">7h</span>
                </div>
                <div className="flex justify-between">
                  <span>Comidas</span>
                  <span className="font-bold">3h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleWheelApp;