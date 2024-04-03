interface Task {
    title: string;
    prioridad: 'Alta' | 'Media' | 'Baja';
    completada: boolean;
  }
  
  const tarea: Task[] = [
    { title: 'Tarea 1', prioridad: 'Alta', completada: false },
    { title: 'Tarea 2', prioridad: 'Media', completada: true },
    { title: 'Tarea 3', prioridad: 'Baja', completada: false },
    { title: 'Tarea 4', prioridad: 'Alta', completada: false }
  ];
  
  console.log('Pending tasks:');
  
  tasks
    .filter(tarea => !tarea.completada)
    .sort((a, b) => {
      if (a.prioridad < b.prioridad) return -1;
      if (a.prioridad > b.prioridad) return 1;
      return 0;
    })
    .forEach(tarea => console.log(`- ${tarea.title} (priority: ${tarea.prioridad})`));
  