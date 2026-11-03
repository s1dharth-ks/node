
async function getStudent() {
    const res = await fetch("http://localhost:3000/getstudents")
    const students = await res.json()
    console.log(students,"dataa");
    
    let str = ""
    students.forEach(student => {
       str +=  `
            <tr class = "data">
                <td><input id="name${student._id}" type="text" value="${student.name}" disabled></td>
                <td><input id="roll${student._id}" type="text" value="${student.roll}" disabled></td>
                <td><input id="age${student._id}" type="text" value="${student.age}" disabled></td>
                <td>
                    <button id="edit${student._id}" onclick="editStudent('${student._id}')">Edit</button>
                    <button id="update${student._id}" onclick="updateStudent('${student._id}')" style ="display:none">Update</button>
                    <button onclick = "deletStudent('${student._id}')">Delete</button>
                </td>
            </tr>
        `        
    });

    document.getElementById("student").innerHTML = str
}

getStudent()
async function deletStudent(id) {
    alert(id)
    const res = await fetch("http://localhost:3000/deletstudent",{
        method:"DELETE",
        headers:{"content-type":"text/plain"},
        body:id
    })
    getStudent()
}

function editStudent(id){
    let inputs = document.querySelectorAll("input")
    let buttons = document.querySelectorAll("button")
    buttons.forEach((button)=>{
        if(button.innerHTML == "Edit"){
            button.style.display = "inline"
        }else if(button.innerHTML == "Update"){
            button.style.display = "none"
        }
    })
    
    inputs.forEach((input)=>{
        input.disabled = true
    })
    document.getElementById(`name${id}`).disabled = false;
    document.getElementById(`roll${id}`).disabled = false;
    document.getElementById(`age${id}`).disabled = false;
    document.getElementById(`edit${id}`).style.display = "none"
    document.getElementById(`update${id}`).style.display = "inline"
    // document.getElementById(`name${id}`)

}

async function updateStudent(id){
    const name = document.getElementById(`name${id}`).value
    const roll = document.getElementById(`roll${id}`).value
    const age = document.getElementById(`age${id}`).value
    console.log(roll);
    
    const res = await fetch("http://localhost:3000/updatestudent",{
        method : "PUT",
        Header : {"content-type":"application/json"},
        body : JSON.stringify({name,roll,age,id})
    }) 
    
    getStudent()
}

