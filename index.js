//counter
counter = document.querySelector('.counter'); //selects the counter class
function update(){ //update function for the counter
    const top=window.scrollY; //amt pixels scrolled
    const scrollHeight=document.documentElement.scrollHeight-window.innerHeight; //total heght-height of viewport
    const current=Math.round((top/scrollHeight)*1000); //scroll percentage times by 1000 for the amt of metres in the page (to nearest int)
    counter.innerText=`${current} Metres Deep`;
    if (current>=1000){ //if you reach the bottom then display some extra text
        counter.innerText=`${current} Metres Deep. You have reached the 'Midnight Zone'.`
    }
}
window.addEventListener('scroll',update); //updates as scrolled

//mutebutton
document.addEventListener('DOMContentLoaded',function(){ //only execute after the dom loads
    const button=document.getElementById('mutebutton'); //mute button 
    const audio=document.getElementById('backgroundSound') //mp3 file

    button.addEventListener('click',function(){ //on click
        if (audio.muted){ //see if currently muted
            audio.muted=false; //unmmutes
            button.classList.remove('muted');
            button.classList.add('unmuted'); //updates classes
            button.innerHTML='&#128266;'; //updates text (speaker symbol)
        }
        else{
            audio.muted=true; //mutes audio
            button.classList.remove('unmuted');
            button.classList.add('muted'); //updates classes
            button.innerHTML='&#128263;'; //updates text with muted speaker
        }
    })
});

//parallax bubbles
document.addEventListener('scroll',function(){ //while scrolling
    const bubbles=document.querySelector('#bubbles'); //gets bubbles image
    const speed=-.1; //speed for parallax 

    const scrollTop=window.scrollY || this.documentElement.scrollTop; //current scroll pos
    bubbles.style.transform=`translateY(${scrollTop*speed}px)`; //css transform to go along y axis at speed
});

//moving pictures
const imgs=document.querySelectorAll('img'); //gets all images
const direction=Array(imgs.length).fill(1); //direction array (otherwise they will all be treated as the same object in a sense) with 1
const positions=Array(imgs.length).fill(0); //positions in an array for the same reason (once one 'hits' the wall they would all) at 0
const bobbing=Array(imgs.length).fill(0); //vertical axis
const sin=Array(imgs.length).fill(0); //for current stage in teh sine wave

function move(){ //move for images
    const container=document.querySelector('.col'); //selects the columns which is the container
    const containerWidth=container.offsetWidth; //gets the width
    imgs.forEach((img,index)=>{ //loops over each img
        const imgWidth=img.offsetWidth;
        positions[index]+=0.5*direction[index]; //updates horizontal movemennt (0.5 in drection)
        sin[index]+=0.01; //goes along the sine wave a little bit to have the bobbing effect
        if (positions[index]+imgWidth>=containerWidth||positions[index]<=0){ //checks if it reaches an edge
            direction[index] *= -1; //if so, it flips it
        }
        bobbing[index]=20*Math.sin(sin[index]); //sine wave with amp 20
        img.style.transform=`translate(${positions[index]}px,${bobbing[index]}px) scaleX(${direction[index]})`; //makes transformations x and y through bositions and bobbing, and flips the direction when the index is -1
    });
    requestAnimationFrame(move); //calls move at the screen refresh rate
};
move(); //calls

//tooltip-esque things
document.querySelectorAll('h2').forEach(h2=>{ //for each h2
    const tooltip=document.createElement('span'); //creates a span element (content)
    tooltip.className='tooltipinfo'; //assigns the tooltip info in the html to the span so it can be styled
    tooltip.textContent=h2.getAttribute('info'); //^
    h2.classList.add('tooltip'); //adds the class
    h2.appendChild(tooltip); //span becomes child of h2
});

