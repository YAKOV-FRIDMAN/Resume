class BurgerBtn{
     
}

BurgerBtn.choose = function(_burger_btn = id_btn,nav = id_nav){
        this.show = false;
      //  id_nav.style.display = "none";
        _burger_btn.onclick = function(){
            if(!this.show){
                this.show = true;
                id_nav.style.display = "block";
            }
            else{
                this.show = false;
                id_nav.style.display = "none";
                //id_nav.style.display = "flex";
            }
        }
}

//created by monkeys.co.il and ofer shelly