function addTask() {
  $("#empty-task").css({ display: "none" });
  const newtask = document.createElement("li");
  newtask.innerText = task.value;

  $(newtask).on("swiperight", function () {
    const text = $(this).context.innerText;
    const taskDone = document.createElement("li");
    taskDone.innerText = text;

    $(taskDone).on("swipeleft", function () {
      $(this).hide("slow", function () {
        $(this).remove();
        checkEmpty("list-task-done", "empty-task-done");
      });
    });

    const listTask = document.getElementById("list-task-done");
    listTask.appendChild(taskDone);
    $(listTask).listview("refresh");

    $("#empty-task-done").css({ display: "none" });

    $(this).hide("slow", function () {
      $(this).remove();
      checkEmpty("list-task", "empty-task");
    });
  });

  const listTask = document.getElementById("list-task");
  listTask.appendChild(newtask);

  $(listTask).listview("refresh");

  task.value = "";
  $("#task").focus();
}
function reinitialize() {
  const listTask = document.getElementById("list-task");
  listTask.innerHTML = "";

  const emptytask = document.createElement("li");
  emptytask.setAttribute("id", "empty-task");
  emptytask.innerText = "Pas de tâches pour l'instant";
  $("#empty-task").css({ display: "block" });
  listTask.appendChild(emptytask);

  $(listTask).listview("refresh");
  $("#task").focus();
}

function checkEmpty(nameList, idName) {
  const listTask = document.getElementById(nameList);
  if (listTask.lastElementChild.getAttribute("id") === idName) {
    $("#" + idName).css({ display: "block" });
  }
}
