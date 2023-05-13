
// var firstname = document.getElementById('firstName').value
// var firstname = document.getElementById('firstName').value


function handleSubmit(){
    event.preventDefault()
    
 let firstName=   document.getElementById('firstName').value
 let lastName =   document.getElementById('lastName').value
 let email =   document.getElementById('email').value
 let number =   document.getElementById('number').value
    // console.log(firstName,lastName,email,number)

    // if(!firstName){
    //     alert('please enter First Name')
    //     return
    // }
    // if(!lastName){
    //     alert('please enter last Name')
    //     return

    // }
    // if(!email){
    //     alert('please enter last Name')
    //     return

    // }
    // if(!number){
    //     alert('please enter last Name')
    //     return

    // }\



    let dataStructure = {firstName,lastName,email,number}

    let array =[]


    array.push(dataStructure)
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        // console.log()
        let formData=  document.getElementById('output').innerHTML = `<h1>${dataStructure.firstName} ${dataStructure.lastName}<h1/><br/><h6>${dataStructure.email}</h6><br/><span> ${dataStructure.number}</span>`
        document.getElementById('output').innerHTML += element
        
    }
     
}