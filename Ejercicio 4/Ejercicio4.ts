/* 

interface Task {
    title: string;
    prioridad: 'Alta' | 'Media' | 'Baja';
    completada: boolean;
    persona: string;
  }

const tareas = [
  { title: 'Tarea 1', prioridad: 'Alta', completada: false, persona: 'Alice' },
  { title: 'Tarea 2', prioridad: 'Media', completada: true, persona: 'Bob' },
  { title: 'Tarea 3', prioridad: 'Baja', completada: false, persona: 'Alice' },
  { title: 'Tarea 4', prioridad: 'Alta', completada: false, persona: 'Charlie' },
  { title: 'Tarea 5', prioridad: 'Media', completada: true, persona: 'Bob' },
];

function isValidName(name: string): boolean {
  // Regular expression to check if the name is valid
  const nameRegex = /^[a-zA-ZÀ-ÿ]+([ '-][a-zA-ZÀ-ÿ]+)?$/;

  // Test the name against the regular expression
  return nameRegex.test(name);
}

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
