
// // get the joke section container
// // const jokeContainer = document.getElementById("joke");
// // get the generate joke button
// // const btn = document.getElementById("btn");

// `// const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";
// `,
// `
// // let getjoke = () =>{`
// //     fetch(url)
// //     .then(data => data.json())
// //     .then( item =>{
// //     jokeContainer.textContent = `${item.joke}`;
// //     });
// // }  

// `
// /,/ btn.addEventListener("click",getjoke);`
// // getjoke();
// //  console.log(item.joke)

// `
// /,/ --------------------------------------------------------------`

// `
// `,
// `// // const jokeContainer = document.getElementById("joke");
// // // const btn = document.getElementById("btn");`

// `// let jokes =
// // []`,


// // a.forEach(x => {
// //     let x = Math.floor((Math.random() * 10) + 1);
// //     console.log(x)
// // });


// // const btn = document.getElementById("btn");

// // btn.addEventListener("click", () => {
// //     let x = Math.floor(Math.random() * jokes.length);
// //     document.getElementById("joke").innerHTML = jokes[x];
// // })


// ----------------------------------------------------


let jokes_btn = document.getElementById("jokes_btn")
let joke = document.getElementById("joke")
let jokes=
[

    `Why did an, old man fall in a well?
     Because he couldn’t see that well!`,
    
     `Why did the actor fall through the floorboards?
      They were going through a stage!`,
    
     `Why did a scarecrow win a Nobel prize?
     He was outstanding in his field!`,
    
     `Why are peppers the best at archery?
     Because they habanero!`,
    
    `What did the duck say after she bought chapstick?
     Put it on my bill!`,
    
     `What do you call a fake noodle?
     An impasta!`,
    
    `What did the three-legged dog say when he walked into a saloon?
    “I’m looking for the man who shot my paw!”`,
    
     `How do you tell the difference between a bull and a cow?
     It is either one or the udder!`,
    
    `What’s red and smells like blue paint?
     Red paint!`,
    
     `What’s the difference between a hippo and a Zippo?
     One is very heavy, the other is a little lighter!`,

    
`1. What do you call a boomerang that won’t come back?
A stick.`,

`2. What does a cloud wear under his raincoat?
Thunderwear.`,

`3. Two pickles fell out of a jar onto the floor. What did one say to the other?
Dill with it.`,

`4. What time is it when the clock strikes 13?
Time to get a new clock.`,

`5. How does a cucumber become a pickle?
It goes through a jarring experience.`,

`6. What did one toilet say to the other?
You look a bit flushed.`,

`7. What do you think of that new diner on the moon?
Food was good, but there really wasn’t much atmosphe,re.`,

`8. Why did the dinosaur cross the road?
Because the chicken wasn’t born yet.`,

`9. Why can’t Elsa from Frozen have a balloon?
Because she will "let it go, let it go."`,

`10. What musical instrument is found in the bathroom?
A tuba toothpaste.`,


`11. Why did the kid bring a ladder to school?
Because she wanted to go to high school.`,

`12. What do you call a dog magician?
A labracadabrador.`,

`13. Where would you find an elephant?
The same place you lost her.`,

`14. How do you get a squirrel to like you?
Act like a nut.`,

`15. What do you call two birds in love?
Tweethearts`,

`17. How are false teeth like stars?
They come out at night.`,

`18. What building in your town has the most stories?
The public library.`,

`19. What’s worse than finding a worm in your apple?
Finding half a worm.`,


`21. What did one volcano say to the other?
I lava you.`,

`22. How do we know that the ocean is friendly?
It waves.`,

`23. What is a tornado’s favorite game to play?
Twister.`,


`25. How do you talk to a giant?
Use big words.`,



`26. What animal is always at a baseball game?
A bat.`,

`27. What falls in winter but never gets hurt?
Snow.`,

`28. What did the Dalmatian say after lunch?
That hit the spot.`,



`30. What do you call a droid that takes the long way around?
R2 detour.`,

`31. Why did the cookie go to the hospital?
Because he felt crummy.`,

`32. Why was the baby strawberry crying?
Because her mom and dad were in a jam.`,


`34. How do you make a lemon drop?
Just let it fall.`,

`35. What did the limestone say to the geologist?
Don’t take me for granite.`,

`36. Why does a seagull fly over the sea?
Because if it flew over the bay, it would, be a baygull.`,

`37. What kind of water can’t freeze?
Hot water.`,

`38. What kind of tree fits in your hand?
A palm tree.`,

`39. What do you call a dinosaur that is sleeping?
A dino-snore.`,

`40. What is fast, loud and crunchy?
A rocket chip.`,

`41. Why did the teddy bear say no to dessert?
Because she was stuffed.`,

`42. What has ears but cannot hear?
A cornfield.`,

`43. What did the left eye say to the right eye?
Between us, something smells.`,

`44. What did one plate say to the other plate?
Dinner is on me.`,

`45. Why did the student eat his homework?
Because the teacher told him it was a piece of cake.`,

`46. When you look for something, why is it always in the last place you look?
Because when you find it, you stop looking.`,

`47. What is brown, hairy and wears sunglasses?
A coconut on vacation.`,

`48. What do you say to a rabbit on its birthday?
Hoppy Birthday.`,

`49. What’s the one thing will you get every year on your birthday, guaranteed?
A year older.`,

`50. Why do candles always go on the top of cakes?
Because it's hard to light them from the bottom.`,

`51. What do cakes and baseball teams have in common?
They both need a good batter.`,

`52. What goes up but never comes down?
Your age.`,

`53. What does every birthday end with?
The letter Y.`,

`54. What did the tiger say to her cub on his birthday?
It's roar birthday.`,

`55. Why did the girl put her cake in the freezer?
She wanted to ice it.`,

`56. Does a green candle burn longer than a pink one?
No, they both burn shorter.`,

`57. Why did the little girl hit her birthday cake with a hammer?
It was a pound cake.`,

`64. Why didn't the quarter roll down the hill with the nickel?
Because it had more cents.`,

`65. Why is the obtuse triangle always so frustrated?
Because it’s never right.`,

`66. Why is six afraid of seven?
Because seven eight nine.`,


`69. How do you stay warm in any room?
Go to the corner—it’s always 90 degree,s.`,

`70. Why was the fraction nervous about marrying the decimal?
Because he would have to convert.`,

`71. Are monsters good at math?
Not unless you count Dracula.`,

`72. Why was the math book sad?
Because it had too many problems.`,

`73. Why does nobody talk to circles?
Because there’s no point.`,


`75. What was the first animal in space?
The cow that jumped over the moon.`,

`76. Why don’t elephants chew gum?
They do, just not in public.`,

`77. What did the banana say to the dog?
Bananas can’t talk.`,



`79. What do you call a sleeping bull?
A bull-dozer.`,

`80. How do you fit more pigs on a farm?
Build a sty-scraper.`,

`81. What did the farmer call the cow that had no milk?
An udder failure.`,

`83. Why do fish live in salt water?
Because pepper makes them sneeze.`,

`84. What do you get from a pampered cow?
Spoiled milk.`,

`85. Where do polar bears vote?
The North Poll`,


`87. Why did the snake cross the road?
To get to the other ssside.`,

`88. Why are fish so smart?
Because they live in school,s.`,


`90. Why don’t pirates shower before they walk the plank?
Because they’ll just wash up on shore later.`,

`91. What happened when Bluebeard fell overboard in the Red Sea?
He got marooned.`,

`92. How did the pirate get his flag so cheaply?
He bought it on sail.`,

`93. What has 8 legs, 8 arms, and 8 eyes?
8 pirates.`,

`94. How much does it cost a pirate to get his ears pierced?
About a buck an ear.`,

`95. Why is pirating so addictive?
They say once ye lose yer first ha,nd, ye get hooked.`,

`96. How do pirates know that they are pirates?
They think, therefore they arrr.`,


`98. What song does a cat like best?
Three Blind Mice.`,

`99. Where did the school kittens go for their field trip?
To the mew-seum.`,

`100. What kind of kitten works for the Red Cross?
A first-aid kit.`,

`101. Why are cats good at video games?
Because they have nine lives.`,

`102. What did the cat say when he fell off the table?
"Me-ow."`,

`103. What is the difference between a cat that got photocopied and a cat that follows you?
One is a cat copy; the other is a copy cat.`,

`104. What do you get when you cross a ball and a cat?
A fur ball.`,

`105. What's a cat's favorite magazine?
A cat-alogue.`,

`106. What cat likes living in water?
An octo-puss.`,

`145. What key won't open any door?
A turkey.`,

`146. Why did the turkey cross the road?
It was the chicken's day off.`,

`147. Why did the chewing gum cross the road?
It was stuck on the turkey's foot.`,

`148. Why did the turkey cross the road twice?
To show he wasn't a chicken.`,

`149. What do you get when a turkey lays an egg on top of a barn?
An eggroll.`,

`150. Why was the turkey the drummer in the band?
Because he had drumsticks.`,

`151. What’s the best thing to put into pumpkin pie?
Your teeth.`,

`152. What’s the best dance to do on Thanksgiving?
The turkey trot.`,

`153. Why did the Pilgrims sail from England to America?
Because they missed their plane.`,

`154. When the Pilgrims landed, where did they stand?
On their feet.`,

`155. Why did the police arrest the turkey?
They suspected it of fowl play.`,

`156. What should you wear to Thanksgiving dinner?
A har-vest.`,

`157. If the Pilgrims were alive today, what would they be most famous for?
Their age.`,

`158. Where do you find a turkey with no legs?
Where you left it.`,

`159. What do you call it when it rains turkeys?
Foul weather.`,

`160. Why did the turkey sit on the tomahawk?
To hatch-et.`,

`161. What kind of music did Pilgrims listen to?
Plymouth Rock.`,

`162. What smells the best at a Thanksgiving dinner?
Your nose.`,

`163. Why do turkeys always say, “gobble, gobble”?
Because they never learned good table manners.`,

`164. What do elves learn in school?
The elf-abet.`,


`165. How does a snowman lose weight?
He waits for the weather to get warmer.`,

`166. What did one snowman say to the other snowman?
Do you smell carrots?`,

`167. What do you call a reindeer with bad manners?
Rude-olph.`,

`168. Why does Santa work at the North Pole?
Because the penguins kicked him out of the S,outh Pole.`,

`169. What falls at the North Pole and never gets hurt?
Snow.`,

`170. How does a sheep say Merry Christmas?
Fleece Navidad.`,

`171. Why did the Christmas tree go to the barber?
It needed to be trimmed.`,

`172. What is an elf’s favorite kind of music?
Wrap music.`,

`173. What kind of photos do elves take?
Elfies.`,

`174. What do road crews use at the North Pole?
Snow cones.`,

`175. Why did Rudolph get a bad grade on his report card?
Because he went down in history.`,

`176. What wears a red suit and goes, “Oh, oh, oh”?
Santa walking backwards.`,

`177. Where does a snowman keep his money?
In a snow bank.`,

`178. What do you get when you combine a Christmas tree with a computer?
A pine-apple.`,

`179. In what year does New Year’s Day come before Christmas?
Every year.`,

`180. What do snowmen eat for breakfast?
Frosted Flakes.`,

`181. What kind of motorcycle does Santa like to ride?
A Holly Davidson.`,

`182. Why are Christmas trees bad at sewing?
Because they always drop their needles.`,

`183. What do you get when Santa becomes a detective?
Santa clues.`,

`184. Why was the Easter Bunny so upset?
He was having a bad hare day.`,

`185. How did the soggy Easter Bunny dry himself?
With a hare dryer.`,

`186. How does the Easter bunny stay in shape?
Lots of eggs-ercise.`,

`187. Why can’t a rabbit’s nose be 12 inches long?
Because then it would be a foot.`,

`188. How can you tell which rabbits are the oldest in a group?
Just look for the gray hares.`,

`189. What do you call a bunny who isn’t smart?
A hare brain.`,

`190. What’s the best way to catch a unique rabbit?
Unique up on him.`,

`191. What happened when the Easter Bunny met the rabbit of his dreams?
They lived hoppily ever after.`,

`192. What do you call a line of rabbits walking backwards?
A receding hareline.`,

`193. Why shouldn’t you tell an Easter egg a good joke?
It might crack up.`,

`194. What did one colored egg say to the other?
Heard any good yolks lately?`,

`195. What do you call a rabbit who tells jokes?
A funny bunny.`,

`196. What is a rabbit’s favorite dance?
The Bunny Hop.`,

`197. What kind of jewelry do rabbits wear?
14 carrot gold.`,

`198. How many chocolate bunnies can you put into an empty Easter basket?
Only one because after that, it’s not empty.`,

`199. What do you call a rabbit with fleas?
Bugs Bunny.`,

`200. Why did the Easter egg hide?
He was a little chicken.`
]
jokes_btn.addEventListener("click", myFunction);
function myFunction(){
    let random =Math.floor((Math.random()*144)+1)
    joke.innerHTML = jokes[random];
}

