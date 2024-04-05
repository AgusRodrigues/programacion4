interface Task3 {
    title: string;
    prioridad: 'Alta' | 'Media' | 'Baja';
    completada: boolean;
    persona: string;
  }

const tareas: Task3[] = [
  { title: 'Tarea 1', prioridad: 'Alta', completada: false, persona: 'Alice' },
  { title: 'Tarea 2', prioridad: 'Media', completada: true, persona: 'Bob' },
  { title: 'Tarea 3', prioridad: 'Baja', completada: false, persona: 'Alice' },
  { title: 'Tarea 4', prioridad: 'Alta', completada: false, persona: 'Charlie' },
  { title: 'Tarea 5', prioridad: 'Media', completada: true, persona: 'Bob' },
];

function getTasks3(tareas) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tareas);
    }, 3000);
  });
}

async function displayTasks2(persona) {
  try {
    const tasksList = await getTasks3();
    const filteredTasks = tasksList.filter((tareas) => tareas.persona === persona);

    console.log(`Tareas assigned to ${persona}:`);

    filteredTasks
      .filter((tareas:string) => !tareas.completada)
      .sort((a, b) => {
        if (a.prioridad < b.prioridad) return -1;
        if (a.prioridad > b.prioridad) return 1;
        return 0;
      })
      .forEach((tareas) => console.log(`- ${tareas.title} (prioridad: ${tareas.prioridad})`));

  } catch (error) {
    console.error(error);
  }
}

displayTasks2('Alice');
