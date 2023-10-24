catchMessage()
document.querySelector('.generate').addEventListener('click' , catchMessage)

async function catchMessage(){

    let url = 'https://api.adviceslip.com/advice'
    let response = await fetch(url)
    let json = await response.json()
    
    
   if(response.status != 200){
    console.log('Está dando erro!')
   }else{
    generateMessage({
        id : json.slip.id,
        message : json.slip.advice
    })
   }
}


function generateMessage(json){
    document.querySelector('#advices-num span').innerHTML = `#${json.id}`
    document.querySelector('#advices').innerHTML = json.message
}



