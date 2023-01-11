async function shorten (){
    let og_url = document.getElementById("og_url").value;
    let custom_url = document.getElementById("custom_url").value;


    //catch url valid and empty?
    // if(!url){
    //     alert('Please put your url!!')
    // }

    // let final_url = window.location.origin + '/' + custom_url;
    // final_element.innerHTML = '<a id="short-url" href="' + final_url + '">' + final_url + '</a>'
    //store and send data to serve-side
    try{
        const response =  await fetch('/', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ og_url:og_url, custom_url:custom_url })
            // body: JSON.stringify({ og_url, custom_url, final_url }),

        });
        console.log(JSON.stringify({ og_url, custom_url, final_url }))

        const data = await response.json();
        console.log(data);
    //----





    }catch(error){
        console.log(error)
    }
}