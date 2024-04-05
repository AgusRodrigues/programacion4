var tasks = [
    { title: "Task 1", prioridad: "Alta", completada: false },
    { title: "Task 2", prioridad: "Media", completada: true },
    { title: "Task 3", prioridad: "Baja", completada: false },
    { title: "Task 4", prioridad: "Alta", completada: false },
];
function getTasks() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(tasks);
        }, 3000);
    });
}
getTasks().then(function (tasks) {
    console.log("Pending tasks:");
    tasks
        .filter(function (task) { return !task.completada; })
        .sort(function (a, b) {
        if (a.prioridad < b.prioridad)
            return -1;
        if (a.prioridad > b.prioridad)
            return 1;
        return 0;
    })
        .forEach(function (task) {
        return console.log("- ".concat(task.title, " (priority: ").concat(task.prioridad, ")"));
    });
});
