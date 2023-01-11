async function shorten (){
    const og_url = document.getElementById('url').value;

    // const response =  await fetch('/', {
    //     method:'POST',
    //     headers:{
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ og_url }),

    // }).then(res => {
    //     return res.json()
    // })
    // .then(data => console.log(data))
    fetch('/', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
        }),
        
    })
    .then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(erro => console.log('ERROR'))
    console.log('hello')
    
}