/**
 * RemindersSection Component
 * 
 * Sección de recordatorios con lista y opción para añadir nuevos.
 * 
 * @component
 * @param {Object} props - Props del componente
 * @param {Array} props.reminders - Array de recordatorios
 * @param {Function} props.onAddReminder - Callback para añadir recordatorio
 * @returns {JSX.Element} Sección de recordatorios
 */

import { Bell, Plus } from 'lucide-react';

const RemindersSection = ({ reminders, onAddReminder }) => {
  return (
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
      <button
        onClick={onAddReminder}
        className="mt-3 w-full bg-white/20 hover:bg-white/30 rounded-lg p-2 text-sm font-medium transition flex items-center justify-center gap-2"
        aria-label="Añadir nuevo recordatorio"
      >
        <Plus size={16} />
        Añadir recordatorio
      </button>
    </div>
  );
};

export default RemindersSection;