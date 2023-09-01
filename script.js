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
    if (number == "") {
        alert("Number is required");
        return false;
    }
    return true;
}
function showData() {
    var peopleList;
    if (localStorage.getItem("PeopleList") ==null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peoplelist"));
    }

    var html = "";
    peopleList.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.dob + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.number + "</td>";
        html +='<td> <button onclick="deleteData(' + index + ')" class="btn-delete">Delete</button><button onclick = "editData(' + index + ')" class="btn-edit">Edit</button> </td >';
        html += "</tr>";
    });
    document.querySelector("#overAll tbody").innerHTML=html;
}
   //document.onload=showData();

function submitFunction() {
    if (validation() == true) {
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var dob = document.getElementById("dob").value;
        var number = document.getElementById("number").value;
        console.log(name)
        var peopleList;
        if (localStorage.getItem("PeopleList") == null) {
            peopleList = [];
        }
        else {
            peopleList = JSON.parse(localStorage.getItem("peoplelist"));
        }
        peopleList.push({
            name: name,
            age: age,
            dob: dob,
            number: number,
        });
        console.log(peopleList);
        localStorage.setItem("peopleList",JSON.stringify(peopleList));
        showData();
        document.getElementById("name").value="";
        document.getElementById("age").value="";
        document.getElementById("dob").value="";
        document.getElementById("number").value="";
    }
    document.getElementById("card").style.opacity="0"
    document.getElementById("card").style.pointerEvents="none"
}

//addbutton
function addFunction() {
    document.getElementById('card').style.opacity = "1";
    document.getElementById('card').style.pointerEvents = "auto";
    console.log("clicked")
}