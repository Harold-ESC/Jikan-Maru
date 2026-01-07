# Horario Circular Interactivo

Aplicación web para visualizar y gestionar tu horario diario con una interfaz circular, perfecta para estudiantes y personas que buscan organizar su tiempo de forma visual y atractiva en su versión más visual y dinámica.

![Preview](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan)

## Características

- **Visualización circular del horario** - Estilo "pie chart"
- **Horarios personalizables** - Diferentes para cada día de la semana
- **Tema dinámico día/noche** - Selecciona tu opción prefefrida: Auto → Light → Dark → Auto
- **Sistema de recordatorios** - No olvides tus tareas importantes
- **Actividad actual destacada** - Siempre sabes qué deberías estar haciendo
- **Diseño responsive** - Funciona en móvil, tablet y desktop
- **Interfaz rápida y fluida** - Navegación instantánea entre días

## Demo

<img width="358" height="937" alt="image" src="https://github.com/user-attachments/assets/55426fdc-92ea-44b8-bb24-4ea7088adf76" />

<img width="331" height="739" alt="image" src="https://github.com/user-attachments/assets/8d4150a2-1c4d-45a3-8b9a-65d2af834db6" />


## Instalación

### Prerequisitos
- Node.js 18+ y npm

### Pasos
```bash
# 1. Clonar el repositorio
git clone https://github.com/Harold-ESC/Jikan-Maru.git

# 2. Entrar al directorio
cd Jikan-Maru

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Scripts disponibles
```bash
npm run dev      # Inicia el servidor de desarrollo con HMR
npm run build    # Crea la versión optimizada para producción
npm run preview  # Vista previa de la versión de producción
```

## Personalización

### Modificar horarios

Edita el objeto `schedules` en `src/App.jsx`:
```javascript
schedules: {
  Lunes: [
    { 
      activity: '睡眠',           // Nombre de la actividad
      color: '#4ade80',          // Color en hexadecimal
      start: 0,                  // Hora de inicio (formato 24h)
      end: 7,                    // Hora de fin
      description: 'Descanso'    // Descripción detallada
    },
    // ... más actividades
  ]
}
```

## Tecnologías

Este proyecto usa las siguientes tecnologías:

- **React 18** - Biblioteca de UI
- **Vite 5** - Build tool con HMR (Hot Module Replacement)
- **Tailwind CSS 3** - Framework de CSS utility-first
- **Lucide React** - Iconos modernos y ligeros

### Configuración de Vite

Este template usa `@vitejs/plugin-react` con Babel para Fast Refresh. Para más información sobre configuración avanzada, consulta la [documentación oficial de Vite](https://vitejs.dev/).

## Roadmap

- [ ] Editor visual de horarios
- [ ] Implementacion de ambos estilos maru y sei bajan una misma app
- [ ] Persistencia de datos con localStorage
- [ ] Notificaciones del navegador
- [ ] Estadísticas semanales
- [ ] Exportar/importar configuraciones
- [ ] Modo PWA (Progressive Web App)

## Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para mejorar la aplicación:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## Autor

**Harold-ESC**
- Estudiante de Ciencias de la Computación en la Universidad Nacional de Colombia (Unal)
- GitHub: [@tu-usuario](https://github.com/Harold-ESC)

---

Si te gusta este proyecto, ¡dale una estrella en GitHub!
