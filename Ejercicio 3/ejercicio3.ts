/*interface Task {
    title: string;
    prioridad: 'Alta' | 'Media' | 'Baja';
    completada: boolean;
    persona: string;
  }

const tareas = [
  { title: 'Tarea 1', prioridad: 'High', completada: false, persona: 'Alice' },
  { title: 'Tarea 2', prioridad: 'Medium', completada: true, persona: 'Bob' },
  { title: 'Tarea 3', prioridad: 'Low', completada: false, persona: 'Alice' },
  { title: 'Tarea 4', prioridad: 'High', completada: false, persona: 'Charlie' },
  { title: 'Tarea 5', prioridad: 'Medium', completada: true, persona: 'Bob' },
];

function getTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tareas);
    }, 3000);
  });
}

async function displayTasks(persona) {
  try {
    const tasksList = await getTasks();
    const filteredTasks = tasksList.filter((tareas) => tarea.persona === persona);

    console.log(`Tareas assigned to ${persona}:`);

    filteredTasks
      .filter((tareas) => !tareas.completed)
      .sort((a, b) => {
        if (a.prioridad < b.prioridad) return -1;
        if (a.prioridad > b.prioridad) return 1;
        return 0;
      })
      .forEach((tarea) => console.log(`- ${tarea.title} (prioridad: ${tarea.prioridad})`));

  } catch (error) {
    console.error(error);
  }
}

displayTasks('Alice');

*/