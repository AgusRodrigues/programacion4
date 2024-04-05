
interface Task5 {
    title: string;
    prioridad: 'Alta' | 'Media' | 'Baja';
    completada: boolean;
    persona: string;
    deadline: Date;
}

const tareas2: Task5[] = [
  { title: 'Tarea 1', prioridad: 'Alta', completada: false, persona: 'Alice', deadline: new Date('2023-03-25') },
  { title: 'Tarea 2', prioridad: 'Media', completada: true, persona: 'Bob', deadline: new Date('2023-03-20') },
  { title: 'Tarea 3', prioridad: 'Baja', completada: false, persona: 'Alice', deadline: new Date('2023-03-22') },
  { title: 'Tarea 4', prioridad: 'Alta', completada: false, persona: 'Charlie', deadline: new Date('2023-03-27') },
  { title: 'Tarea 5', prioridad: 'Media', completada: true, persona: 'Bob', deadline: new Date('2023-03-23') },
];

function isValidName5(name: string): boolean {
  // Regular expression to check if the name is valid
  const nameRegex = /^[a-zA-ZÀ-ÿ\s-]+([ '-][a-zA-ZÀ-ÿ\s-]+)*$/;

  // Test the name against the regular expression
  return nameRegex.test(name);
}

function getTasks5(tareas2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tareas2);
    }, 3000);
  });
}

async function displayTasks5(persona: string) {
  try {
    const tasksList = await getTasks5();
    const filteredTasks = tasksList.filter((tareas2) => tareas2.persona === persona);

    console.log(` - ${tareas2.title}, ${tareas2.prioridad}, ${tareas2.deadline.toLocaleDateString}`);

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

