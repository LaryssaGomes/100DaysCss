document.querySelector('.menu-icon').onclick = ()=>{
   if(document.querySelector('.animation')){
    document.querySelector('.animation').classList.remove("animation")
    document.querySelector('.menu-icon').classList.add("rev-animation")
   }else{
    document.querySelector('.menu-icon').classList.add("animation")
    document.querySelector('.rev-animation')?.classList.remove("rev-animation")
   }

};

