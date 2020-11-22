let sSlider, pSlider, hSlider;
let crSlider, cgSlider, cbSlider;

var button1, button2, button3;
var buttoncaps, bottonLower;


var buttoncolorw ,buttoncolorb;
let input, buttongo;

var buttonbrexit;

let inputimg;
let img;

var p;


function setup() {

   createCanvas(window.innerWidth, window.innerHeight);
    
  textSize(15);
  noStroke();
    
    
    //background
    //fill(100);
    //rect(0,0,100,100);
    
    
    //input=createInput('');
    //input.position(20,100);
    //input.changed(drawWord);
    //buttongo = createButton("go");
    //buttongo.position(160, 100);
    //buttongo.mousePressed(drawWord);
    
    

    

  // create sliders type
  sSlider = createSlider(10,40, 16);
  sSlider.position(20, 250);
    
        sSlider.input(updateSize);
    
  pSlider = createSlider(1,2, 16/10);
  pSlider.position(20, 280);
    
        pSlider.input(updateLine);
    
    hSlider = createSlider(1,150, 20);
  hSlider.position(20, 310);
    
    hSlider.input(updateMargin);
    
    
    
    
    //button
    
    //buttoncaps=createButton("upper");
    //buttoncaps.mousePressed(changeCaps)
    //buttoncaps.position(20,335);
    
    //buttonLower=createButton("lower");
    //buttonLower.mousePressed(changeLower)
    //buttonLower.position(70,335);
    
    button1=createButton("Helvetica");
    button1.mousePressed(changeTypeserif)
    button1.position(20,100);
    
    button2=createButton("San Francisco");
    button2.mousePressed(changeTypesans)
    button2.position(100,100);
    
    button3=createButton("Times New Roman");
    button3.mousePressed(changeTypeblack)
    button3.position(20,130);
    
     
    //buttoncolorw=createButton("white");
    //buttoncolorw.mousePressed(changewhite)
    //buttoncolorw.position(20,390);
   
    
    //buttoncolorb=createButton("black");
    //buttoncolorb.mousePressed(changeblack)
    //buttoncolorb.position(70,390);
    
    
    
 
 //crSlider = createSlider(0, 255, 100);
//crSlider.position(20, 440);
 //cgSlider = createSlider(0, 255, 0);
  //cgSlider.position(20, 470);
  //cbSlider = createSlider(0, 255, 255);
  //cbSlider.position(20, 500);
    
    
   
    

    
    
   
    
    
    //buttonbrexit=createButton("img 01");
    //buttonbrexit.mousePressed(changebrexit)
    //buttonbrexit.position(20,450);
    
    
    //p = createP('change');
    
   //var p = input.value(); 
    

   
   
     //p = createP(input.value());
       p = createP('It is not a secret that the average person considers their electronic devices, either the computer, mobile phone, or tablet, indispensable items in their lives. It serves as an extension of our bodies, one that allows us to keep a constant connection with the world. For better or worse, that connection reshaped the way we retain information. Access to overloads of content, in addition to the usage of short text-blurbs, when writing emails and text messages, transformed us into lazy readers. By now, we are only familiar with concise, easy to follow information, so when in the presence of an extensive written piece, our brain is not capable of internalising everything at once, preferring to skim through. As Nicholas Carr put it, "Once I was a scuba diver in the sea of words. Now I zip along the surface like a guy on a Jet Ski."(Carr, 2020) In this context, there is great value in understanding which typefaces are the most legible and which ones favor a faster reading experience since those factors could determine whether a reader will dare skim through the text or not. Every minute counts when appealing to busy readers, especially when there are technologies such as "Time to Read" by Amazon, which estimates the reading time of a book or text. Therefore, I intend to use this piece of writing to determine what makes a typeface legible, what are the ideals of legibility for the screen, and if those technics have an impact on a faster reading experience.<br> In this context, there is great value in understanding which typefaces are the most legible and which ones favor a faster reading experience since those factors could determine whether a reader will dare skim through the text or not. Every minute counts when appealing to busy readers, especially when there are technologies such as "Time to Read" by Amazon, which estimates the reading time of a book or text. Therefore, I intend to use this piece of writing to determine what makes a typeface legible, what are the ideals of legibility for the screen, and if those technics have an impact on a faster reading experience. <br>First, we will start by determining what legibility is. For Allan Haley, Director of Words & Letters at Monotype Imaging, It could refer to "an informal measure of how easy it is to distinguish one letter from another in a particular typeface." (Haley, 2020) A known typographic ideal says that the most legible typefaces are "transparent to the reader." (Haley, 2020) Similarly, in an essay titled The Crystal Goblet, Beatrice Warde, an American typographic expert who was the publicity manager for the Monotype Corporation and editor of the Monotype Recorder and Newsletter, compares typography and its content to a song in an unknown language. She writes that, while listening to foreign music, the brain disconnects from the search of meaning and focus solely on the pleasure of the melody. In an equal exercise, "Type well used is invisible as type," so it becomes an "unnoticed vehicle for the transmission of words." (Warde, 1930) <br> In this case, an example of a legible typeface would be Helvetica. Created in the 1950s, right after the second world war, it represented rationality and the "need to make things more democratic."(Helvetica, 2007) Its construction follows strict rules that ensure neutrality and allows the characters to resemble each other. The most striking characteristics are the characters tall x-heights, making them easier to read from afar, and the tight spacing between the letters. It is the "default typeface on most computers," possibly, making Helvetica "the most used typeface in the world." (Son and Tankard, 2001)<br>On the other hand, some argue that it is not the best typeface for reading. Charles Nix, the director of Monotype, the current holder of Helveticas licensing rights, argues "the letters scrunch together" (Nix, 2019) at smaller sizes and the kerning is not even. Since most streaming platforms that offer mobile devices apps use the default system typeface, Apple users would end up reading subtitles and close captions in Helvetica. However, back in 2014, Apple substituted Helvetica with San Francisco, a typeface inspired by its precedent. Comparing the two, instead of having round characters like Helvetica, San Francisco opted for vertical lines, ideal at creating space between letters, increasing its legibility in smaller devices like the Apple Watch.');
    
   
 
    p.parent("#rectangle");  
    
}





function draw() {  
  
 push();   

//const r = crSlider.value();
//const g = cgSlider.value();
//const b = cbSlider.value();
    
//fill(r,g,b);
//rect(width/5,0,width,height);  

//document.getElementById('rectangle').style('background-color', r, g, b);

    
  pop(); 
    

//text('r', crSlider.x * 2 + crSlider.width, 450, 20);
//text('g', cgSlider.x * 2 + cgSlider.width, 480);
//text('b', cbSlider.x * 2 + cbSlider.width, 515);
    
//p.style('font-size' ,sSlider.value()+'px');
//p.style('text-align', 'center');
//p.position(pSlider.value(),hSlider.value());

   
    textSize(14); 
    
    text('font size', sSlider.x * 2 + sSlider.width, 265);
    text('spacing', pSlider.x * 2 + pSlider.width, 295);
    text('width', hSlider.x * 2 + hSlider.width, 325); 
    
    
  
   
    
    
    
}
  

 function updateSize(){
    p.style('font-size' ,sSlider.value()+'px');
 }

function updateLine(){
    p.style('line-height', pSlider.value());
}

function updateMargin(){
    p.style('padding-left',hSlider.value());
    p.style('padding-right',hSlider.value() + 'px' )
    
}




function changeTypeserif(){
   p.style('font-family', 'Helvetica');
}

function changeTypesans(){
    p.style('font-family', 'San Francisco'); 
}

function changeTypeblack(){
    p.style('font-family', 'Times New Roman');
    
}

//function changeCaps(){
    //p.style('text-transform', 'uppercase');   

//}

//function changeLower(){
    //p.style('text-transform', 'lowercase');
//}

//function changewhite(){
    
   //p.style('color', 'red');
    
//}

//function changeblack(){
    
   //p.style('color', 'black');
    
//}



function drawWord (){
   
   p = createP(input.value());
      
    for(var i=0; i < 30; i++) {
    text(p);
   
       
    }
  
}



function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}

