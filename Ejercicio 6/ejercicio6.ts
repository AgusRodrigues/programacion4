
interface Task6 {
    title: string;
    prioridad: 'Alta' | 'Media' | 'Baja';
    completada: boolean;
    persona: string;
    fecha: Date;
    descripcion?: string;
    filePath?: string; 
}

const tareas4: Task6[] = [
  { title: 'Tarea 1', prioridad: 'Alta', completada: false, persona: 'Alice', fecha: new Date('2023-03-25') },
  { title: 'Tarea 2', prioridad: 'Media', completada: true, persona: 'Bob', fecha: new Date('2023-03-20') },
  { title: 'Tarea 3', prioridad: 'Baja', completada: false, persona: 'Alice', fecha: new Date('2023-03-22') },
  { title: 'Tarea 4', prioridad: 'Alta', completada: false, persona: 'Charlie', fecha: new Date('2023-03-27') },
  { title: 'Tarea 5', prioridad: 'Media', completada: true, persona: 'Bob', fecha: new Date('2023-03-23') },
];

function isValidName6(name: string): boolean {
  // Regular expression to check if the name is valid
  const nameRegex = /^[a-zA-ZÀ-ÿ]+([ '-][a-zA-ZÀ-ÿ]+)?$/;

  // Test the name against the regular expression
  return nameRegex.test(name);
}

function getTasks6() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tareas4);
    }, 3000);
  });
}

async function displayTasks(persona) {
  try {
    const tasksList = await getTasks6();
    const filteredTasks = tasksList.filter((tareas4) => tareas4.persona === persona);

    console.log(`Tareas assigned to ${persona}:`);

    filteredTasks
      .filter((task) => !task.completada)
      .sort((a, b) => {
        if (a.prioridad < b.prioridad) return -1;
        if (a.prioridad > b.prioridad) return 1;
        if (a.deadline < b.deadline) return -1;
        if (a.deadline > b.deadline) return 1;
        return 0;
      })
      .forEach((task) => {
        let descripcionMessage = '';

        if (task.description) {
          descripcionMessage = `Descripción: ${task.descripcion}`;
        } else if (task.filePath) {
          descripcionMessage = `Archivo: ${task.filePath}`;
        }

        console.log(`- ${task.title} (prioridad: ${task.prioridad}, vencimiento: ${task.deadline.toLocaleDateString()})`);
        console.log(`  ${descripcionMessage}`);
      });

  } catch (error) {
    console.error(error);
  }
}

