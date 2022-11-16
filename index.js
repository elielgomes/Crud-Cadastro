const ulElement = document.getElementById('list')

async function getPeople(){

    let response = await fetch('http://localhost:3000/person');
    let data = await response.json()
    return data
}

getPeople().then((data)=>{
    

    data.map((person)=>{

        let liElement = document.createElement('li');
        liElement.innerText = `Nome: ${person.name} - Salario: ${person.salary}`
        ulElement.appendChild(liElement)

    })

})