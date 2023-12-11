document.addEventListener("DOMContentLoaded", function() {
    
    const tasks = [
        { title: "Payer mes factures", priority: 1 },
        { title: "Faire la vaisselle", priority: 2 },
        { title: "Vider les poubelles", priority: 3 }
    ];

    function displayTasks() {
        const taskList = document.querySelector('ul');
        let html = '';

        tasks.forEach(task => {

            switch (task.priority) {
                case 1:
                    html += `<li style="color: red;"><label><input type="checkbox">${task.title}</label></li>`;
                    break;
                case 2:
                    html += `<li style="color: blue;"><label><input type="checkbox">${task.title}</label></li>`;
                    break;
                case 3:
                    html += `<li style="color: green;"><label><input type="checkbox">${task.title}</label></li>`;
                    break;
                default:
                    break;
            }
        });


        taskList.innerHTML = html;
    }

    displayTasks();
});
