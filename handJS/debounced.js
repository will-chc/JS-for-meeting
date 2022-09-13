function debounce(fn,delay){
    let flag = false;
    let timer =null;
     timer = setTimeout(()=>{
        flag = ture;
        if(flag){
            fn()
        }
    },delay)
}