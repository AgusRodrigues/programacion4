

interface Task4 {
    title: string;
    prioridad: 'Alta' | 'Media' | 'Baja';
    completada: boolean;
    persona: string;
  }

const tareas1: Task4[] = [
  { title: 'Tarea 1', prioridad: 'Alta', completada: false, persona: 'Alice' },
  { title: 'Tarea 2', prioridad: 'Media', completada: true, persona: 'Bob' },
  { title: 'Tarea 3', prioridad: 'Baja', completada: false, persona: 'Alice' },
  { title: 'Tarea 4', prioridad: 'Alta', completada: false, persona: 'Charlie' },
  { title: 'Tarea 5', prioridad: 'Media', completada: true, persona: 'Bob' },
];

function isValidName4(name: string): boolean {
  // Regular expression to check if the name is valid
  const nameRegex = /^[a-zA-ZÀ-ÿ]+([ '-][a-zA-ZÀ-ÿ]+)?$/;

  // Test the name against the regular expression
  return nameRegex.test(name);
}

function getTasks4(tareas1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tareas1);
    }, 3000);
  });
}

async function displayTasks4(persona) {
  try {
    const tasksList = await getTasks4();
    const filteredTasks = tasksList.filter((tareas1) => tareas1.persona === persona);

    console.log(`Tareas assigned to ${persona}:`);

    filteredTasks
      .filter((tareas1) => !tareas1.completada)
      .sort((a, b) => {
        if (a.prioridad < b.prioridad) return -1;
        if (a.prioridad > b.prioridad) return 1;
        return 0;
      })
      .forEach((tareas1) => console.log(`- ${tareas1.title} (prioridad: ${tareas1.prioridad})`));

  } catch (error) {
    console.error(error);
  }
}

displayTasks4('Alice');



