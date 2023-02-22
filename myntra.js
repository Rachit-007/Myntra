let open=0;
function fun(){
    let image=document.getElementById("image");
    if(open==0){
        image.style.width="400px";
        open=1;
    }
    else{
        image.style.width="0px";
        open=0;
    }
}
