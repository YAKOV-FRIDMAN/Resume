var bb = false;
var picece =[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
function myFunction(e) {
   
    
    var b = document.getElementById(e.target.id)
    var str = b.id;
    
    if(b != null){

       var strxo;
        if(bb == true && b.innerText == ""){
            
            b.innerText = "O";
            var num;
            strxo ="O";
             
            bb = false;
        }
        else if(bb == false && b.innerText == ""){
            b.innerText ="X";
            strxo = "X";
            bb = true;
        }

        if(str.charAt(0)  == "a"){
            console.log(str.charAt(1));
            picece[0][Number(str.charAt(1)) -1 ] = strxo;
        }
        if(str.charAt(0)  == "b"){
            console.log(str.charAt(1));
            picece[1][Number(str.charAt(1)) -1] = strxo;
        }
        if(str.charAt(0)  == "c"){
            console.log(str.charAt(1));
            picece[2][Number(str.charAt(1)) -1] = strxo;
        }
        console.log( xoo(picece));
        if(xoo(picece)!= null){
            alert("The winner of the game is:" +  xoo(picece))
        }

    }
    
  //  console.log(e.target.id);
    
  //var aa = document.getElementsByClassName("xo");
  
 // console.log(el);
    var aa = document.getElementsByTagName("button");
    for (let index = 0; index < aa.length; index++) {
        const element = aa[index];
        const en = element.textContent;
        if(element.id != ""){
            if(en !=""){
                
                
                // for (let index = 0; index < picece.length; index++) {
                //     const element1 = picece[index];
                //     console.log(element1);
                    
                // }
            //   var nn =   fpicece(picece);
            //    console.log(nn);
            // console.log( xoo(picece));

            }

           
        }
         
     
    }
    
    


 
}

function fpicece(params) {
    var factor =1;
    var sum = 0;
    for (let i = 0; i < params.length; i++) {
        for (let j = 0; j < params.length; j++) {
            var v = 0;
            if(params[i][j] == "X"){
                v =1;
            }
            else if (params[i][j] == "O"){
                v = 2;
            }
            sum += v * factor;
            factor *=3;
            
        }
        
    }
    return sum;
}

function w(parms){
    for (let i = 0; i < parms.length; i++) {
         if(parms[i][0] != null &&  parms[i][0] == parms[i][1]
            && parms[i][0] == parms[i][2]){
                return parms[i][0];
            }
         
        
    }

}

function xoo(params) {
    if(params[0][0] == params[0][1] && params[0][1] == params[0][2] && params[0][0] != null){
       return params[0][0];
    }
    else if(params[1][0] == params[1][1] && params[1][1] == params[1][2] && params[1][0] != null){
       return params[1][0];
    }
    else if(params[2][0] == params[2][1] && params[2][1] == params[2][2] && params[2][0] != null){
        return params[2][0];
    }

    else if(params[0][0] == params[1][0] && params[1][0] == params[2][0] && params[0][0] != null){
        return params[0][0];
    }

    else if(params[0][1] == params[1][1] && params[1][1] == params[2][1] && params[0][1] != null){
        return params[0][1];
    }

    else  if(params[0][2] == params[1][2] && params[1][2] == params[2][2] && params[0][2] != null){
        return params[0][2];
    }
    


    else{
        return null;
    }


    
}

