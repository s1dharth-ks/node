async function getStudent() {
    const res = await fetch("http://localhost:3000/getstudents")
    const students = await res.json()
    console.log(students,"dataa");
    
    let str = ""
    students.forEach(student => {
       str +=  `
            <tr>
                <td>${student.name}</td>
                <td>${student.Roll}</td>
                <td>${student.age}</td>
            </tr>
        `        
    });

    document.getElementById("student").innerHTML = str
}

getStudent()