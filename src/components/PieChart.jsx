/**
 * PieChart Component
 * 
 * Renderiza un gráfico circular (rueda de horario) basado en 
 * las actividades programadas. 
 * 
 */

const PieChart = ({ schedule, currentDay, onActivitySelect }) => {
  // Genera los segmentos del gráfico circular
  const createPieChart = () => {
    let currentAngle = -90;

    return schedule.map((item, index) => {
      const duration = item.end - item.start;
      const angle = (duration / 24) * 360;
      const endAngle = currentAngle + angle;

      // Cálculos para el arco SVG
      const largeArcFlag = angle > 180 ? 1 : 0;
      const x1 = 200 + 180 * Math.cos((currentAngle * Math.PI) / 180);
      const y1 = 200 + 180 * Math.sin((currentAngle * Math.PI) / 180);
      const x2 = 200 + 180 * Math.cos((endAngle * Math.PI) / 180);
      const y2 = 200 + 180 * Math.sin((endAngle * Math.PI) / 180);

      const path = `M 200 200 L ${x1} ${y1} A 180 180 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

      // Posición de la etiqueta
      const labelAngle = currentAngle + angle / 2;
      const labelRadius = 120;
      const labelX = 200 + labelRadius * Math.cos((labelAngle * Math.PI) / 180);
      const labelY = 200 + labelRadius * Math.sin((labelAngle * Math.PI) / 180);

      currentAngle = endAngle;

      return (
        <g
          key={index}
          onClick={() => onActivitySelect(item)}
          style={{ cursor: 'pointer' }}
        >
          <path
            d={path}
            fill={item.color}
            stroke="white"
            strokeWidth="2"
            opacity="0.9"
            className="transition-opacity hover:opacity-100"
          />
          <text
            x={labelX}
            y={labelY}
            textAnchor="middle"
            fill="white"
            fontSize="20"
            fontWeight="bold"
          >
            {item.activity}
          </text>
          <text
            x={labelX}
            y={labelY + 20}
            textAnchor="middle"
            fill="white"
            fontSize="14"
          >
            {item.start}-{item.end}h
          </text>
        </g>
      );
    });
  };

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-lg mx-auto">
      {createPieChart()}
      <circle cx="200" cy="200" r="60" fill="white" opacity="0.9" />
      <text
        x="200"
        y="200"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="16"
        fontWeight="bold"
        fill="#1e293b"
      >
        {currentDay}
      </text>
    </svg>
  );
};

export default PieChart;