# 11055 Assessment 3
## u3253279

## Instructions
There are no complex instructions in order to use this site. Scrolling down the page allows you to view the animals in their descending depth which a depth guage on the left hand side to guage where you are. 
If you require more information about the animals themselves, you may hover over their names. This will display a tooltip-esque box with information. These instructions are also on the side bar of the page. Additionally the mute button in the bottom left corner may be used to toggle between muted and unmuted audio.

## Topic
This topic was chosen as part of the assessment due to the intrigue it possessed over the other options. The deep sea is often thought of as mysterious and unknown, therefore making a perfect case for a one-page site that you can scroll through to explore. 
Furthermore, the idea immediately sparked ideas on how to implement javascript, from a depth guage to parallax scrolling with different content at differnt z coordinates. Inspiration was drawn from sites that allow you to explore spaces at scale, for example other deep sea sites, or solar system sites that take you on a journey through scrolling a scaled distance.

## Techniques
### Overview
Techniques used, specifically with relation to javascript, are noted in each main section. These are the depth guage, moving images, parallax scrolling, tooltips and the audio button.

### Depth Gauge
The depth gauge uses techniques of query selection to target the counter, runs a function responding to a scroll event that gets the current scroll percentage and converts it to a meter integer out of 1000m. It also uses conditional statements for if you reach the bottom of the page the innertext will update to display you've reached the midnight zone.

### Moving Images
The moving images use a combination of arrays, defining and storing the direction, (x) positions, (y) bobbing effect, and sine status. A function is run, called every refresh of the screen with requestAnimationFrame() for a smooth effect, and loops over each image updating their horiontal movement and sine wave status. Additionally it checks if it has reached the edge of the container in which the direction will flip. This is all the while css transformations are happening to the images through translate (x/y) and scaleX flipping.

### Parallax
Listening to the scrolling events of the user, the background bubble image is targeted and assigned a speed different to that of the foreground content. The current scroll position is used to translateY transform the background image along the y axis at the determined speed.

### Tooltips
The tooltips (for lack of a better word), become visible through transition when a user hovers over the name of the animal. The javascript loops over each of these h2 elements and creates a span element to store the content so it may be styled, adding the tooltip class and making span a child of h2.

### Audio Button
Lastly, the audio button (muted by default) allows the user to experience the ambiance of the deep sea with a background track. If the user clicks to unmute the button, the javascript listens for the click and checks if the audio is muted, if so it will unmute it, removing and adding the appropriate classes whilst updating the innerhtml with a matching symbol for the current state, else it aill do the inverse.

## Reflection
### What Worked
The core functionality of every feature was executed to an extent where it was well within a usable and aesthetic nature. The interactions of hovering, clicking, and scrolling all work and all call the necessary functions in the javascript, and are executed correctly. As examples, the moving images are all oriented correctly and move in the correct pattern, the mute button is default muted and changes styling after a click event, the tooltips display properly when hovered, the parallax scrolling background moves at a different rate to the rest of the content, and the depth counter increases linearily as you scroll down thepage where the top is 0m and the bottom is 1000m.

### What Didn't Work
None of the features implemented were of a non-operational or unusable status, however it is possible to improve on some of them. The depth gauge may be improved by adding hard limits to the counter in order to not scroll past 1000m if the page is scrolled further than the bottom. On the contrary it is providing an accurate  status of where you are in relation to depth so it is not incorrect, and if the site were to be expanded beyond 1000m then the hard limit would be required to be removed or changed. 
The aesthetics and usability of the site may be improved with the aid of user testing, providing feedback on the functionality of the actions, how to access them, their feedback, and the overall styling of the site. It's possible that some may prefer indications telling them to hover over the titles for the 'tooltips', instead of the brief introduction and instructions in the sidebar.
Finally, the responsiveness and scalability of the site could use the most improvement, as now it is only properly viewable on a computer with a reasonable sized screen. It is not compatible with mobile or small windows.

## Resource links
### Audio
https://pixabay.com/music/ambient-ambient-pad-background-music-for-space-or-underwater-adventure-3323/
### Info for each animal:
https://en.wikipedia.org/wiki/Sea_angel
https://en.wikipedia.org/wiki/Anglerfish
https://en.wikipedia.org/wiki/Baird%27s_beaked_whale
https://en.wikipedia.org/wiki/Polar_bear
https://en.wikipedia.org/wiki/Beluga_whale
https://en.wikipedia.org/wiki/Atlantic_cod
https://en.wikipedia.org/wiki/Firefly_squid
https://en.wikipedia.org/wiki/Giant_Pacific_octopus
https://en.wikipedia.org/wiki/Great_white_shark
https://en.wikipedia.org/wiki/Sea_lion
https://en.wikipedia.org/wiki/Atlantic_salmon
https://en.wikipedia.org/wiki/Deep_diving
https://en.wikipedia.org/wiki/Sperm_whale
https://en.wikipedia.org/wiki/Japanese_spider_crab
https://en.wikipedia.org/wiki/Swordfish
https://en.wikipedia.org/wiki/Green_sea_turtle
https://en.wikipedia.org/wiki/Wolf_eel
### Animal Images 
https://neal.fun/deep-sea/
### Bubbles Image 
https://au.pinterest.com/pin/824651381741003039/


