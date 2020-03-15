var TodayDate = new Date();

Date = TodayDate.getFullYear() + "년 " + (TodayDate.getMonth() + 1) + "월 " + TodayDate.getDate() + "일";

document.getElementById("Today").innerHTML = Date;

var newTodo = document.getElementById('todo');
if (newTodo.onkeydown === 13) {
    var input = document.querySelecto("input[type = 'text']");
    var ul = document.querySelector("ul");

    var li = document.createElement("li");
    ul.appendchild(li).append(newTodo);
}
