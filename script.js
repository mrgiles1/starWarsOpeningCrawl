//set the number of stars to display
const numStars = 100;

//for every star we want to display
for (let i = 0; i < numStars; i++){
	let star = document.createElement('div');
	star.className = 'star';
	var xy = getRandomPosition();
	star.style.top = xy[0] + 'px';
	star.style.left = xy[1] + 'px';
	document.body.append(star);
}

//gets random x, y values based on the size of he container
function getRandomPosition(){
	var y = window.innerWidth;
	var x = window.innerHeight;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX, randomY];
} 

//set the number of stars to display
	const numStars = 1000;
	// const sleep = ms => new Promise(r => setTimeout(r, ms));

	//for every star we want to display
		// for (let i = 0; i < numStars; i++) {
		//   let star = document.createElement("div");  
		//   star.className = "star";
		//   var xy = getRandomPosition();
		//   star.style.top = xy[0] + 'px';
		//   star.style.left = xy[1] + 'px';
		//   document.body.append(star);
		// }
	

	//gets random x, y values based on the size of he container
	// setTimeout(getRandomPosition(), 8000);
	function getRandomPosition() {
	  var y = window.innerWidth;
	  var x = window.innerHeight;
	  var randomX = Math.floor(Math.random()*x);
	  var randomY = Math.floor(Math.random()*y);
	  return [randomX,randomY];
	} 

	function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

	async function demo() {
    for (let i = 0; i < 6; i++) {
        console.log(`Waiting ${i} seconds...`);
        await sleep(i * 500);
    }
    for (let i = 0; i < numStars; i++) {
	  let star = document.createElement("div");  
	  star.className = "star";
	  var xy = getRandomPosition();
	  star.style.top = xy[0] + 'px';
	  star.style.left = xy[1] + 'px';
	  document.body.append(star);
      console.log('Done');

	}
}
demo();

// audio
	const theme = document.createElement('audio');
	theme.src = 'SWTheme.ogg';

    setTimeout(function(){
     theme.play();
    }, 6800)
