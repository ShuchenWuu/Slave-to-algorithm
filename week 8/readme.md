This week we went through paper/digital prototypes that peers made. It is enjoyable to see how's everyone going, and a bit of pressure form the process to push me further. It is always good to know what others' are working on so that some valuable conversations could happen.

## Library & works
Geomerative </br>
http://www.ricardmarxer.com/geomerative/
</br>
Potential of this library
![](https://github.com/ShuchenWuu/Slave-to-algorithm/blob/master/week%208/Screen%20Shot%202020-09-26%20at%2013.49.50.png)
![](https://github.com/ShuchenWuu/Slave-to-algorithm/blob/master/week%208/Screen%20Shot%202020-09-26%20at%2013.50.11.png)
</br>

Tutoriasl that I find (find me some time to play around with this fab effect)
</br>
https://www.youtube.com/watch?v=IthjKDGf7oQ
</br>
https://www.youtube.com/watch?v=JdzBx43aN68

P5.play
https://joanneamarisa.github.io/DataVis/GARDEN/
</br>
machine learning
https://ml5js.org/
</br>
3d in coding
https://threejs.org/
</br>

## Notable Works
Paul Chan

![](https://github.com/ShuchenWuu/Slave-to-algorithm/blob/master/week%208/Screen%20Shot%202020-09-26%20at%2013.57.15.png)
Paul Chan's "The Bather's Dilemma" 
</br>
Breathers
</br>
Breath = soul?
</br>
</br>
## Related research
</br>
"The oppressed" by Arthur Analts -created in response to black lives matter, the artwork visually and succinctly expresses the international civil rights movement's ongoing struggle.
</br>
![](https://github.com/ShuchenWuu/Slave-to-algorithm/blob/master/week%208/Screen%20Shot%202020-09-26%20at%2014.03.26.png)
</br>
![](https://github.com/ShuchenWuu/Slave-to-algorithm/blob/master/week%208/Screen%20Shot%202020-09-26%20at%2014.03.33.png)
</br>
This kinetic sculpture forms part of 'the breathing series' by Arthur Analts, which seeks to address serious issues artistically and colorfully. For this specific piece, the artist has enclosed 12 balloons inside a glass-topped box. all white apart from one, the balloons slowly inflate until there is no more space inside, leaving the single black balloon smaller in size, to become engulfed in white. 



## Live coding section

Interesting work shared with speech.p5 library
</br>
https://idmnyu.github.io/p5.js-speech/examples/04simplerecognition.html 
</br>

In this tutorial, I learn some potential/direction of this library can do. And solve my problem can not keep the speech going while it is on live, really helps!!! Thanks Karen (hug)

## Process
(does take more time than I expected to debug = drags me crazy sometimes)
I tried to keep the text that I said (e.g., get each line of speech into an array), then I found I need to quickly comment on the line of functioning "runningText" lol.

I tried to turn Character into charCode. It took me some time to debug because the result does not show on the canvas. This process made me better understand universal variables and local variables, where I declare it does matter! Sometimes I need to declare the variable in the local function and mention it before function setup as well.

To make the sketch less messy, I tried the function of turning Character into lines in another sketch. I learn that logical details are essential. When my variable is used 4 in one time, I have to estimate if the variable>0 & =4x. I found that if I bring Chinese characters in, the charCodes would be >2000 (while English characters are around(65-120)). In this case, it would be so complicated to dream with the numbers, so I decided only to use English (deleted the language navigator).
