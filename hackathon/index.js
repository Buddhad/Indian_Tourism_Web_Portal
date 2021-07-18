var i=0;
    
        function change()
        {
            var arr=new Array();
            arr[0]="https://source.unsplash.com/2480x1080/?india,monuments";
            arr[1]="https://source.unsplash.com/2480x1080/?india,tourism";
            arr[2]="https://source.unsplash.com/2480x1080/?india,kerela";
            
            if(i==arr.length)
            {
                i=0;
                f1.image1.src=arr[i];
                i++;
            }
            else
            {
                f1.image1.src=arr[i];
                i++;
            }
            setTimeout("change()",2000);
        }
        window.onload=change;

let readmore = document.getElementById('readmore')
let para = document.getElementById('para')
readmore.addEventListener('click',()=>{
    if(para.classList.contains("parachanged")){
        readmore.innerHTML="Read More"
        para.classList.remove("parachanged")
    }
    else{
        para.classList.add("parachanged")
        readmore.innerHTML="Read Less"
    }
})


function search(){
    let mainitems=document.querySelector(".mainitems")
    let search=document.querySelector(".search")
    let head=document.querySelector(".head")
    let foot=document.querySelector(".foot")
    head.classList.add("hide")
    foot.classList.add("hide")
    mainitems.classList.add("hide")
    search.classList.remove("hide")

}

function searchClose(){
    let mainitems=document.querySelector(".mainitems")
    let search=document.querySelector(".search")
    let head=document.querySelector(".head")
    let foot=document.querySelector(".foot")
    head.classList.remove("hide")
    foot.classList.remove("hide")
    mainitems.classList.remove("hide")
    search.classList.add("hide")
}