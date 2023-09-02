function validation() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var dob = document.getElementById("dob").value;
    var number = document.getElementById("number").value;

    if (name == "") {
        alert("Name is required");
        return false;
    }
    if (age == "") {
        alert("Age is required");
        return false;
    }
    if (dob == "") {
        alert("D.O.B is required");
        return false;
    }
    if (number =="") {
        alert("Number is required");
        return false;
    }
    return true;
}
function showData() {
    var peopleList;
    if (localStorage.getItem("PeopleList") == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("PeopleList"));
    }

    var html = "";
    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.dob + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.number + "</td>";
        html += '<td class="btn-td"> <button onclick="deleteData(' + index + ')" class="btn-delete">Delete</button><button onclick = "editData(' + index + ')" class="btn-edit">Edit</button> </td >';
        html += "</tr>";
    });
    document.querySelector("#overAll tbody").innerHTML = html;
}

document.onload = showData();


// ----------------submit button function------------

function submitFunction() {
    if (validation() == true) {
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var dob = document.getElementById("dob").value;
        var number = document.getElementById("number").value;
        var peopleList;
        if (localStorage.getItem("PeopleList") == null) {
            peopleList = [];
        }
        else {
            peopleList = JSON.parse(localStorage.getItem("PeopleList"));
        }
        peopleList.push({
            name: name,
            age: age,
            dob: dob,
            number: number,
        });
        localStorage.setItem("PeopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("dob").value = "";
        document.getElementById("number").value = "";
    }
    document.getElementById("card").style.opacity = "0"
    document.getElementById("card").style.pointerEvents = "none"
}


// ----------------delete button function---------

function deleteData(index) {
    var peopleList;
    if (localStorage.getItem("PeopleList") == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("PeopleList"));
    }
    peopleList.splice(index, 1);
    localStorage.setItem("PeopleList", JSON.stringify(peopleList));
    showData();
}


//-----------------Edit button function--------------

function editData(index) {

    document.getElementById('card').style.opacity = "1";
    document.getElementById('card').style.pointerEvents = "auto";
    document.getElementById('btn-submit').style.display = "none";
    document.getElementById('btn-update').style.display = "block";

    var peopleList;
    if (localStorage.getItem("PeopleList") == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("PeopleList"));
    }
    console.log("people list retrieved")
    console.log(peopleList[index].name)
    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("dob").value = peopleList[index].dob;
    document.getElementById("age").value = peopleList[index].age;
    document.getElementById("number").value = peopleList[index].number;

    console.log(peopleList[index].name);
    console.log(peopleList[index].dob);
    console.log(peopleList[index].age);
    console.log(peopleList[index].number);

    document.querySelector("#btn-update").onclick = function () {
        if (validation() == true) {
            peopleList[index].name = document.getElementById('name').value;
            peopleList[index].age = document.getElementById('age').value;
            peopleList[index].dob = document.getElementById('dob').value;
            peopleList[index].number = document.getElementById('number').value;

            localStorage.setItem("PeopleList", JSON.stringify(peopleList));
            showData();

            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("dob").value = "";
            document.getElementById("number").value = "";
        }
    }
}


//---------------Add button function------------

function addFunction() {
    document.getElementById('card').style.opacity = "1";
    document.getElementById('card').style.pointerEvents = "auto";
    console.log("clicked")
}
