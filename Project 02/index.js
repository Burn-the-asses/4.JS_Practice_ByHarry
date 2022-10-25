add = document.getElementById("add");

//Event Listener function 
add.addEventListener("click", getAndUpdate);
update();

//Get and Update function
function getAndUpdate(){
    console.log("updating List.....");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    
    // if storage is null add items , if not , show items in it
    if (localStorage.getItem('itemsJson') == null) {
       itemJsonArray = [];
       itemJsonArray.push([tit, desc]);
       localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    update();
}

//Update fuction
function update(){

    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
     }
    else{
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        
    }


    //when data is received and updated we need to populate the table with data
    //Populate the table with data
    let tableBody  = document.getElementById('tableBody');
    let str = "";

    itemJsonArray.forEach((element,index) => {
        str += 
       `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm  btn-primary" onclick="deleted(${index})">Delete</button></td>
      </tr>`       
    });
    document.getElementById('tableBody').innerHTML = str;
}
function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);
    //Delete ItemIndex element fro the array
    itemJsonArray.splice(itemIndex,1)
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();  
}
function clearStr(){
    if (confirm("Do you want to really remove all the lists from the storage..")){

    console.log("Clearning the storage.");
    localStorage.clear();
    update();

}
}