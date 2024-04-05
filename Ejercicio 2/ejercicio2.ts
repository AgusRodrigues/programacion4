interface Task2 {
  title: string;
  prioridad: "Alta" | "Media" | "Baja";
  completada: boolean;
}

const tasks: Task2[] = [
  { title: "Task 1", prioridad: "Alta", completada: false },
  { title: "Task 2", prioridad: "Media", completada: true },
  { title: "Task 3", prioridad: "Baja", completada: false },
  { title: "Task 4", prioridad: "Alta", completada: false },
];

function getTasks(): Promise<Task2[]> {
  return new Promise<Task2[]>((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 3000);
  });
}

getTasks().then((tasks) => {
  console.log("Pending tasks:");

  tasks
    .filter((task) => !task.completada)
    .sort((a, b) => {
      if (a.prioridad < b.prioridad) return -1;
      if (a.prioridad > b.prioridad) return 1;
      return 0;
    })
    .forEach((task) =>
      console.log(`- ${task.title} (priority: ${task.prioridad})`)
    );
});
