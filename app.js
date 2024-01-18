const btn = document.querySelector('.talk')
const listen = document.querySelector('.listen')

const speak =(text)=>{

    const text_speak = new SpeechSynthesisUtterance(text)

    text_speak.rate = 2;
    text_speak.pitch =1;
    text_speak.volume=1;

    window.speechSynthesis.speak(text_speak)

}

const wish=()=>{
    const date = new Date()
    const hour = date.getHours();

    if(hour>=0 && hour<12){
        speak('...Good morning Boss')
    }else if(hour>12 && hour<17){
        speak('...good afternoon boss')
    }else{
        speak('...good evening ,boss')
    }
}

const random = ()=>{
    speak('such a nice day isnt it?')
}

const topic =()=>{
    speak('do you have any plans today...? if there is anything... please...let me know... i can assist you.')
}


btn.addEventListener('click', () => {
  
    wish()
 
    setTimeout(()=>{
        topic()
    },2500)
    
    
})

listen.addEventListener('click',()=>{
    let recognization = new webkitSpeechRecognition();
    recognization.onstart =()=>{
        document.getElementById('output').innerHTML = 'Listening...'
    }
    recognization.onresult = (e)=>{
            var transcript = e.results[0][0].transcript
            document.getElementById('output').innerHTML= transcript
            output.classList.remove("hide")

            const searchQuery = transcript.replace(/\s/g, '+');
            const searchURL = `https://www.google.com/search?q=${searchQuery}`;
    
       
            window.open(searchURL, '_blank');
    }
    recognization.start()
})