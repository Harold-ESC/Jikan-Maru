/**
 * DaySelector Component
 * 
 * Selector de días de la semana con navegación horizontal.
 * 
 * @component
 * @param {Object} props - Props del componente
 * @param {Array} props.days - Array de nombres de días
 * @param {string} props.currentDay - Día seleccionado actualmente
 * @param {Function} props.onSelectDay - Callback al seleccionar día
 * @returns {JSX.Element} Botones de navegación de días
 */

const DaySelector = ({ days, currentDay, onSelectDay }) => {
  return (
    <div className="w-full">
      {/* Versión móvil */}
      <div className="block sm:hidden">
        <div className="grid grid-cols-7 gap-1.5 mb-1.5 px-3">
          {days.map(day => {
            const isActive = currentDay === day;
            
            return (
              <div key={day} className="relative pb-3">
                <button
                  onClick={() => onSelectDay(day)}
                  className={`
                    w-full aspect-square rounded-xl font-medium transition-all
                    flex items-center justify-center text-base relative z-10
                    ${isActive 
                      ? 'bg-gradient-to-br from-white to-gray-100 text-indigo-900 font-bold shadow-lg' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                    }
                  `}
                >
                  {day.toLowerCase().includes('martes') ? 'M' : 
                   day.toLowerCase().includes('miércoles') ? 'X' : 
                   day.charAt(0)}
                </button>
                
                {/* Indicador activo: SOLO EN MÓVIL */}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-1 bg-white rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="text-center text-white/90 font-semibold text-sm px-4 mb-2 tracking-wider uppercase">
          {currentDay}
        </div>
      </div>
      
      {/* Versión Escritorio */}
      <div className="hidden sm:block">
        <div className="grid sm:grid-cols-7 gap-3 mb-4 px-4 max-w-5xl mx-auto">
          {days.map(day => {
            const isActive = currentDay === day;
            
            return (
              <div key={day} className="relative group">
                <button
                  onClick={() => onSelectDay(day)}
                  className={`
                    w-full py-3 rounded-xl font-medium transition-all duration-200
                    text-center relative z-10
                    ${isActive 
                      ? 'bg-gradient-to-b from-white to-gray-50 text-indigo-900 font-bold shadow-xl scale-105' 
                      : 'bg-white/10 text-white hover:bg-white/20 hover:shadow-md'
                    }
                  `}
                >
                  <span className={isActive ? 'text-indigo-900' : 'text-white'}>
                    {day}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DaySelector;