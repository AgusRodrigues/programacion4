/*
interface Task {
    title: string;
    prioridad: 'High' | 'Medium' | 'Low';
    completada: boolean;
    persona: string;
    deadline: Date;
}

const tareas = [
  { title: 'Tarea 1', prioridad: 'High', completada: false, persona: 'Alice', deadline: new Date('2023-03-25') },
  { title: 'Tarea 2', prioridad: 'Medium', completada: true, persona: 'Bob', deadline: new Date('2023-03-20') },
  { title: 'Tarea 3', prioridad: 'Low', completada: false, persona: 'Alice', deadline: new Date('2023-03-22') },
  { title: 'Tarea 4', prioridad: 'High', completada: false, persona: 'Charlie', deadline: new Date('2023-03-27') },
  { title: 'Tarea 5', prioridad: 'Medium', completada: true, persona: 'Bob', deadline: new Date('2023-03-23') },
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
    const filteredTasks = tasksList.filter((task) => task.person === persona);

    console.log(`Tareas assigned to ${persona}:`);

    filteredTasks
      .filter((task) => !task.completada)
      .sort((a, b) => {
        if (a.prioridad < b.prioridad) return -1;
        if (a.prioridad > b.prioridad) return 1;

        // If priorities are equal, sort by deadline
        if (a.deadline < b.deadline) return -1;
        if (a.deadline > b.deadline) return 1;

        return 0;
      })
      .forEach((task) => console.log(`- ${task.title} (prioridad: ${task.prioridad}, vencimiento: ${task.deadline.toLocaleDateString()})`));

  } catch (error) {
    console.error(error);
  }
}



*/