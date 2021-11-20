const getGoods = function(){
    const links = document.querySelectorAll('.navigation-link');


    const getData = () => {
            fetch('./db/db.json')
        .then(res => res.json())
        .then((data)=>{console.log(data);
            const el = data;
        });
    };
    links.forEach((link) =>{
        link.addEventListener('click', (e)=>{
            e.preventDefault();
           localStorage.setItem('goods', JSON.stringify( getData()));
        });
    });
};
getGoods();