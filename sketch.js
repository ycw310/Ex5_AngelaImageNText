// ****It doesn’t matter what it is, it only matters how you interpret it. 
// Regardless it is ignorant or naive, I believe there is no right or wrong. I believe you have to be happy and wish others the same. 

//Idea
//words appear on the right botton, work, create, fun…blah balh balsh, image appears, fade/flips
//self portrait, 

/////Change image triggers by moving mouseX and mouseY, 
//use println to check “”here prints out____image"
////positon the change when mouse over the historical monuments
//// add filters to change skin color
//change face color and rotate image by image, (with historical monuments changing in the background in major cities)
//portait will dissolve in pixels to an abstract colored picture

////text mosaic
///text width, change color at certain location to deduce a hidden message. 
//words get bigger and bigger and eventually occupied the screen with “F” and “P” free people, fuck people, flank people, funky people.


var img, img2;
var s;


function preload() {

  img = loadImage("./Assets/profilehg.jpg");
  img2 = loadImage("./Assets/liveWorkCreate.jpg");
  //img = loadImage("./Assets/profile.jpg");
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  noSmooth();
  image(img, 850, 90, img.width / 4, img.height/4);//load img, at right side of the screen
  image(img2, 850, 600, 150, 200);//live work create 
}
  


function draw() {
  var R, B = 150;
//profile
  if (mouseX < 700) {
    cursor(HAND);
    frameRate(100);
    tint(0, random(R, 255, B, 150)); // Tint gradually, rondomly
    image(img, 850, 90, img.width / 4, img.height / 4);
  } else {
    cursor(CROSS);
  

  }

//text being read, liveworkcreate dissolves
image(img2, 850, 600, 150, 200)
var pixel = color(255, 102, 204);
loadPixels();
var d = pixelDensity();
for (var i = 0; i < img2; i+=4) {
  pixels[i] = red(pixel);
  pixels[i+1] = green(pixel);
  pixels[i+2] = blue(pixel);
  pixels[i+3] = alpha(pixel);
}
updatePixels();

  //Rainbow in the Dark lyrics by Das Racist
  s = "Rainbow in the Dark Das Racist I'm at the White Castle (I don't see you here, dog) Tiny-ass hamburgers, tiny-ass cheeseburgers Tiny-ass chicken sandwiches It's outlandish, kid Ma trying to speak to the kid In Spanish, kid Like ?Que tu quieres? I'm like where is the bathroom? I hella gotta piss, where's the bathroom? Ask whom the bell tolls for Hey, yo, where you get this place from, the hellhole store? I'm in the building Building will Belding Ask for whom the bell rings (DR) Something like a neo-rap Zach attack Finna spark an L and have myself a Big Mac attack Known to rock the flyest shit and eat the best pizza Charge that shit to Mastercard, already owe Visa Catch me drinkin lean in Italy like I was Pisa We could eat the flyest cave-aged cheese for sheez, ma Yeah, we could eat Gruyere As if we care We could eat Roquefort Or we could just kick it like Rockports In the periphery of Little Sicily little did she know I'm tickling boo she so giggly Catch me solving mysteries like Wikipedia Brown It's the future get down We make a sound even if nobody's around Like a tree or the tears of a clown Yo, I'm afraid of clowns, I'm afraid of small towns Positive energy is something like I'm afraid of all frowns Catch me at the crib getting light to Jeff Mangum It's fun to do bad things like rhyme about handguns If any problem pop off I'll Joe Pesci any fool while drinking that Popov That's cause I'm a Goodfella Stay up out the hood hella much now But punch clowns if they touch down While I'm eating lunch now While I'm eating a burger Metaphysical spiritual lyrical murder The ill '96 manifestible third eye Abstract vegan backpack skateboard et cetera Rap hella much in a busted ass Jetta with Coretta Scott King.Rap bridge On a duet with T-Pain and Stephen Hawking I'm not joking, stop jocking, stop talking Shut up, hush up Please, shut the fuck up Shut up, dude, shut up Das Racist is the new Kool G Rap Peep us at the Grammys We'd like to thank G-chat We'd like to thank weed rap The best rapper's B Real Jokes, it's us, come on, be real Second Latin rapper to like the Beatles But on the real they swear I'm blacker than Cheadle Like Don King playing Donkey Kong Country at his cousin's house You don't even know what it's about This is panic attack rap Eating four flapjacks Trap raps, let em free, they always come back to me The Internet told me that that's called love I'm on the Internet cause I'm an Internet thug Himanshu, yes I'm in control man Pos Vibe Emanator Yes I got my soul tan Soul shine, soul glow, so so Po-Mo Catch me on the South Side Kicking it with Shlomo Kicking it with Gary Soto All the cholos saying Mira el joto  Just because I rock the secondhand Versace Wash me, watch me The second hand couldn't even clock me You couldn't see me like a Cuban playing hockey Cracker in the chocolate, that's human Pocky Papa look stocky, Mama look chalky Me I look a little something like a young Shock G Words come through me like I was a walkie talkie All I do is open up my mouth and just rock, see You, you are not me Me I am possibly everything plus everything that is not me Jokes, that is not T-R-U-E Are you understanding everything, do you got me? Catch me in the trees where it's shady like Lockheed Martin Sparking in the shade of the trees in the park, B Hark the angels stay singing in the dark Like the rainbow in the Ronnie James Dio joint Hit it from the back court Like it was a three point I don't give a fuck, I'm a duck to a decoy No trustem white-face man like Geronimo Tried to go to Amsterdam they threw us in Guantanamo.";


  //textFont("SanSeif");
  // textFont("Helvetica");
  textFont("Georgia");
  textSize(15);
  fill(0, 0, 10, 40);
  frameRate(10);
  text(s, 130, 90, 700, 700);


}