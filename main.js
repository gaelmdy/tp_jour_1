document.addEventListener("DOMContentLoaded", function () {

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

        
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const label = this.parentElement; 
                updateTaskStyle(this, label);
            });

           
            const label = checkbox.parentElement;
            updateTaskStyle(checkbox, label);
        });
    }

    function addTask(title, priority) {
        tasks.push({ title, priority });
        displayTasks(); 
    }

  
    function updateTaskStyle(checkbox, label) {
        if (checkbox.checked) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    }
    function deleteCompletedTasks() {
        const completedTasks = tasks.filter(task => {
            const checkbox = document.querySelector(`input[type="checkbox"][value="${task.title}"]`);
            return checkbox !== null && checkbox.checked;
        });
    
        completedTasks.forEach(task => {
            const index = tasks.indexOf(task);
            tasks.splice(index, 1);
        });
    
        displayTasks();
    
        const notification = document.createElement('div');
        notification.textContent = `${completedTasks.length} tâche(s) terminée(s) supprimée(s).`;
        document.querySelector('h1').insertAdjacentElement('afterend', notification);
    
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    

    displayTasks();

 
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

 
        const title = document.getElementById('title').value;
        const priority = document.getElementById('priority').value;

        addTask(title, parseInt(priority));
      
        form.reset();
    });
    const deleteCompletedTasksBtn = document.getElementById('deleteCompletedTasksBtn');
    deleteCompletedTasksBtn.addEventListener('click', deleteCompletedTasks);
});