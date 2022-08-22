const pianokeys= document.querySelectorAll('.key')

function playSound(newurl) {
    console.log(newurl)
    new Audio(newurl).play()
}


 pianokeys.forEach((pianokey, i) => {
    const newurl = '24-piano-keys\key' + number +'.mp3'
    const number = i<9? '0' +( i+ 1) : (i+1)
    pianokey.addEventListener('click',() => playSound(newurl) )
 })   
