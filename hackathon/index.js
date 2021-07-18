var i=0;
    
        function change()
        {
            var arr=new Array();
            arr[0]="https://source.unsplash.com/1920x1080/?india,monuments";
            arr[1]="https://source.unsplash.com/1920x1080/?india,tourism";
            arr[2]="https://source.unsplash.com/1920x1080/?india,kerela";
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