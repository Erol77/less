const seartch = function(){
    const input= document.querySelector('.search-block > input');
    const btnSer= document.querySelector('.search-block > button');
    
    btnSer.addEventListener('click',(e) => {
        // input.addEventListener('input',(e)=>{
        console.log(input.value);
    });
};
seartch();