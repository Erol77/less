const getGoods = function(){
    const getData = () => {
            fetch('./db/db.json')
        .then(res => res.json())
        .then((data)=>{console.log(data);
        });
    };
};
getGoods();