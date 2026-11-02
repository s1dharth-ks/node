
async function getStudent() {
    const res = await fetch("http://localhost:3000/getstudents")
    const students = await res.json()
    console.log(students,"dataa");
    
    let str = ""
    students.forEach(student => {
       str +=  `
            <tr>
                <td><input id="name${student._id}" type="text" value="${student.name}" disabled></td>
                <td><input type="text" value="${student.Roll}" disabled></td>
                <td><input type="text" value="${student.age}" disabled></td>
                <td>
                    <button id="edit${student._id}" onclick="editStudent('${student._id}')">Edit</button>
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
    document.getElementById(`edit${id}`).textContent = "Update"
    document.getElementById(`name${id}`).disabled = false;
    // document.getElementById(`name${id}`)

}

