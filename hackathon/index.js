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