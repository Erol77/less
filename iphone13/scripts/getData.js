const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => {
            if (response.ok){
               return response.json()
            } else {
                throw new Error('fig');
            }
        })
        .then(json => console.log(json))
        .catch((error)=>{
            console.error('false: ',error);
        })
        .finally(()=>{
            console.log('finally');
        });
};
getData();