var bb = false;
function myFunction(e) {
   
    
    var b = document.getElementById(e.target.id)
    if(bb == true && b.innerText == ""){

        b.innerText = "O";
        bb = false;
    }
    else if(bb == false && b.innerText == ""){
        b.innerText ="X";
        bb = true;
    }
    
    console.log(e.target.id);
    
    
    var aa = document.getElementsByTagName("button");
    for (let index = 0; index < aa.length; index++) {
        const element = aa[index];
        // element.style.backgroundColor = "red";
        console.log(element.id);
    }
    
    



    // var x, i;
    // x = document.querySelectorAll("#tablex");
    // for (i = 0; i < x.length; i++) {
    //     x[i].style.backgroundColor = "red";
    //     console.log("d");
    // }
}


