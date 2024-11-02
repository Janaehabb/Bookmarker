var sitename = document.getElementById('sitename');
var siteurl = document.getElementById('siteurl');
var submitbtn = document.getElementById('subbtn');
var tablebody = document.getElementById('tablebody');
var siteArr=[]

if(localStorage.getItem('sites') != null){
    siteArr= JSON.parse(localStorage.getItem('sites'));
    display(siteArr);
}

submitbtn.onclick = function(){
    addsite();
    display(siteArr);
    clearForm();
}




function addsite(){
    if(validateUrl()==true){
    
        var sites = {
            name: sitename.value,
            link: siteurl.value,
        }
        siteArr.push(sites)
        localStorage.setItem('sites',JSON.stringify(siteArr))
    }
    else{
        alert("invalid")
    }
    
}

function display(arr){
    var box='';
    for(var i=0;i<arr.length;i++){
        box += `<tr>
            <td>${i+1}</td>
            <td>${arr[i].name}</td>
            <td><a href="${arr[i].link}" target="_blank"><button class="btn btn-success"><i class="fa-solid fa-eye"></i>Visit</button></a></td>
            <td><button onclick="deleteSite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i>Delete</button></td>
        </tr>`;
    }
    tablebody.innerHTML=box

}

function clearForm(){
    sitename.value="";
    siteurl.value="";
}

function validateUrl(){
    var regex= /^(https?:\/\/www\.)[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+(\/[^\s]*)?$/
    return regex.test(siteurl.value);
}

function deleteSite(index){
    siteArr.splice(index,1);
    localStorage.setItem('sites',JSON.stringify(siteArr));
    display(siteArr)

}