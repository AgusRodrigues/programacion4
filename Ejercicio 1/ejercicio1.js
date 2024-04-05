var tarea = [
    { title: "Tarea 1", prioridad: "Alta", completada: false },
    { title: "Tarea 2", prioridad: "Media", completada: true },
    { title: "Tarea 3", prioridad: "Baja", completada: false },
    { title: "Tarea 4", prioridad: "Alta", completada: false },
];
console.log("Pending tasks:");
tarea
    .filter(function (tarea) { return !tarea.completada; })
    .sort(function (a, b) {
    if (a.prioridad < b.prioridad)
        return -1;
    if (a.prioridad > b.prioridad)
        return 1;
    return 0;
})
    .forEach(function (tarea) {
    return console.log("- ".concat(tarea.title, " (priority: ").concat(tarea.prioridad, ")"));
});
