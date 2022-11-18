const STATUS = {
	TODO: "To Do",
	DONE: "Done",
};

const PRIORITY = {
	HIGH: "high",
	LOW: "low",
};



let list = [];



let btn = document.querySelector('.todo__plus');
btn.addEventListener('click', function (event) {
	event.preventDefault();
	addTaskArray(document.querySelector('.todo__add').value, PRIORITY.HIGH);
	render();
});

let btn2 = document.querySelector('.todo__plus2');
btn2.addEventListener('click', function (event) {
	event.preventDefault();
	addTaskArray(document.querySelector('.todo__add2').value, PRIORITY.LOW);
	render();
});


function addTaskArray(nameNewTask, priorityTask) {
	list.push({
		name: nameNewTask,
		status: STATUS.TODO,
		priority: priorityTask
	});
}
function ShowTaskInHtml(inputValue, whereShow) {

	let item = document.createElement('div');
	item.className = 'item';

	let checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.class = "checkbox";
	checkbox.addEventListener('click', function () {
		if (checkbox.checked) {
			changeStatus(inputValue);
			item.style.background = "#8EC5FC";
		}
		else {
			changeStatus(inputValue);
			item.style.background = "#FFFFFF";
		}
	});

	let label = document.createElement('div');
	label.className = 'label';
	label.textContent = inputValue;

	let cross = document.createElement('button');
	cross.className = 'cross';
	cross.textContent = '-';

	cross.addEventListener('click', function () {
		deleteTaskArray(label.textContent);
	});

	item.append(checkbox);
	item.append(label);
	item.append(cross);

	whereShow.append(item);
}


function render() {
	let items = document.querySelectorAll(".item");
	for (let item of items) {
		item.remove();
	}
	list.forEach((elem) => {
		if (elem.priority === PRIORITY.HIGH) {
			ShowTaskInHtml(elem.name, document.querySelector(".todo__list"));
		}
		else {
			ShowTaskInHtml(elem.name, document.querySelector(".todo__listLow"));
		}
	});
}



function changeStatus(nameOfTask) {
	let pos = list.findIndex(task => task.name === nameOfTask);
	if (pos !== -1) {
		if (list[pos].status === STATUS.TODO) {
			list[pos].status = STATUS.DONE;
		}
		else {
			list[pos].status = STATUS.TODO;
		}
		return list[pos];
	}
}

function deleteTaskArray(nameOfTask) {
	list = list.filter(task => task.name !== nameOfTask);
	render();
};









































/* 

function newTask(event) {
	event.preventDefault()
	let input = document.querySelector('.todo__add')
	let name = input.value;
	let newTask = newTaskHTML(name);

	let currentPriority = input.closest(".todo__addTask").nextElementSibling.className; // className
	console.log(currentPriority)
	addTask(name, currentPriority);

	console.log(newTask)
}


function newTask2(event) {
	event.preventDefault()
	let input = document.querySelector('.todo__add2')
	let name = input.value;
	let newTask = newTaskHTML2(name);
	console.log(newTask)
}




function addTask(name, priority) {
	list.push({ name, status: STATUS.TODO, priority });
}


function newTaskHTML(name) {

	let checkbox = document.createElement('input');
	checkbox.className = "checkbox"
	checkbox.type = "checkbox";

	let label = document.createElement('label')
	label.before(checkbox);
	label.className = 'label'
	label.textContent = name

	let cross = document.createElement('button')
	cross.classList = "cross"
	cross.textContent = '×'

	cross.addEventListener('click', function () {
		deleteTaskDOM(label.textContent);
	});

	let close = document.createElement('div')
	close.className = "checkbox__close"
	close.append(cross);

	let div = document.createElement('div');
	div.className = "task";
	label.prepend(checkbox);
	div.append(label);
	div.append(close);
	let high = document.querySelector('.high');
	high.querySelector('.todo__list').append(div);


	return div
}

function addTaskArray(nameNewTask, priorityTask) {
	let pos = list.findIndex(task => task.name == nameNewTask);
	if (pos == -1) {
		list.push({
			name: nameNewTask,
			status: STATUS.TODO,
			priority: priorityTask
		});
		console.log(`Задача: «${nameNewTask}» успешна добавлена в ваш ToDo.`);
		return list;
	}
	alert(`Задача: «${nameNewTask}» уже существует в ToDo`);
}


function deleteTaskDOM(nameOfTask) {
	list = list.filter(task => task.name !== nameOfTask);
	render();
};



function ShowTaskInHtml(inputValue, whereShow) {

	let item = document.createElement('div');
	item.className = 'item';

	let checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.addEventListener('click', function () {
		if (checkbox.checked) {
			changeStatus(inputValue);
			item.style.background = "#8EC5FC";
		}
		else {
			changeStatus(inputValue);
			item.style.background = "#FFFFFF";
		}
	});

	let taskName = document.createElement('div');
	taskName.className = 'task';
	taskName.textContent = inputValue;

	let button = document.createElement('button');
	button.className = 'delete-task';
	button.textContent = '-';

	button.addEventListener('click', function () {
		deleteTaskArray(taskName.textContent);
	});

	item.append(checkbox);
	item.append(taskName);
	item.append(button);

	whereShow.append(item);
}



function render() {
	let items = document.querySelectorAll(".item"); //div
	for (let item of items) {
		item.remove();
	}
	list.forEach((elem) => {
		if (elem.priority === PRIORITY.HIGH) {
			ShowTaskInHtml(elem.name, document.querySelector(".todo__list"));
		}
		else {
			ShowTaskInHtml(elem.name, document.querySelector(".todo__listLow"));
		}
	});
}



document.querySelector('.todo__addTask').addEventListener('submit', function (e) {
	addTaskArray(document.querySelector('.todo__add').value, PRIORITY.HIGH);
	render();
	e.preventDefault();
});

document.querySelector('.todo__addTask').addEventListener('submit', function (e) { //.todo__addTask-low
	addTaskArray(document.querySelector('.todo__add2').value, PRIORITY.LOW);
	render();
	e.preventDefault();
});

























function newTaskHTML2(name) {

	let checkbox = document.createElement('input');
	checkbox.className = "checkbox"
	checkbox.type = "checkbox";

	let label = document.createElement('label')
	label.before(checkbox);
	label.className = 'label'
	label.textContent = name

	let cross = document.createElement('button')
	cross.classList = "cross"
	cross.textContent = '×'

	let close = document.createElement('div')
	close.className = "checkbox__close"
	close.append(cross);

	let div = document.createElement('div');
	div.className = "task";
	label.prepend(checkbox);

	div.append(label);
	div.append(close);

	let low = document.querySelector('.low');
	low.querySelector('.todo__listLow').append(div);
	return div
}
 */





/* let count = 0;

let btn1 = document.querySelector('.todo__plus1');
btn1.addEventListener('click', addNewTask);
let btn2 = document.querySelector('.todo__plus2');
btn2.addEventListener('click', addNewTask2);




function addNewTask(event) {
	event.preventDefault();
	let input = document.querySelector('.todo__add')
	let name = input.value;

	let task = createTaskHtml(name);





	const list = document.querySelector('.todo__list');
	let needList = list.closest('.todo__list')
	needList.prepend(task)

}
function addNewTask2(event) {
	event.preventDefault();
	let input = document.querySelector('.todo__add')
	let name = input.value;

	let task = createTaskHtml(name);





	const list = document.querySelector('.todo__list');
	let needList = list.closest('.todo__list')
	needList.prepend(task)

}







function createTaskHtml(name) {
	let task = document.createElement('div');
	task.className = 'todo__task'

	let todoCheckbox = document.createElement('input');
	todoCheckbox.className = 'todo__checkbox'
	todoCheckbox.id = `task_${count}`;
	todoCheckbox.type = 'checkbox'


	console.log(todoCheckbox)

	let todoLabel = document.createElement('label');
	todoLabel.className = "todo__label";
	todoLabel.textContent = name;
	todoLabel.setAttribute("for", `task_${count++}`);


	let todoPlus = document.createElement('div');
	todoPlus.className = "todo__plus todo__plus_rotate";

	task.prepend(todoPlus);
	task.prepend(todoLabel);
	task.prepend(todoCheckbox);
	return task
}
 */