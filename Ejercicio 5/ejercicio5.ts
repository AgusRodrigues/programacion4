/*
interface Task {
    title: string;
    prioridad: 'Alta' | 'Media' | 'Baja';
    completada: boolean;
    persona: string;
    deadline: Date;
}

const tareas = [
  { title: 'Tarea 1', prioridad: 'Alta', completada: false, persona: 'Alice', deadline: new Date('2023-03-25') },
  { title: 'Tarea 2', prioridad: 'Media', completada: true, persona: 'Bob', deadline: new Date('2023-03-20') },
  { title: 'Tarea 3', prioridad: 'Baja', completada: false, persona: 'Alice', deadline: new Date('2023-03-22') },
  { title: 'Tarea 4', prioridad: 'Alta', completada: false, persona: 'Charlie', deadline: new Date('2023-03-27') },
  { title: 'Tarea 5', prioridad: 'Media', completada: true, persona: 'Bob', deadline: new Date('2023-03-23') },
];

function isValidName(name: string): boolean {
  // Regular expression to check if the name is valid
  const nameRegex = /^[a-zA-ZÀ-ÿ\s-]+([ '-][a-zA-ZÀ-ÿ\s-]+)*$/;

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
    const filteredTasks = tasksList.filter((task: string) => task.persona === persona);

    console.log(\- ${task.title} (prioridad: ${task.prioridad}, vencimiento: ${task.deadline.toLocaleDateString()})`);

    filteredTasks
      .filter((task) => !task.completada)
      .sort((a, b) => {
        if (a.prioridad < b.prioridad) return -1;
        if (a.prioridad > b.prioridad) return 1;

        if (a.deadline < b.deadline) return -1;
        if (a.deadline > b.deadline) return 1;

        return 0;
      })
      .forEach((task) => console.log(`- ${task.title} (prioridad: ${task.prioridad}, vencimiento: ${task.deadline.toLocaleDateString()})`));

  } catch (error) {
    console.error(error.message);
  }
}



*/