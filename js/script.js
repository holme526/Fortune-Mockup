

$(document).ready(function() {

	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);

	$('#scene').parallax({
  		calibrateX: false,
  		calibrateY: false,
  		invertX: true,
  		invertY: true,
  		limitX: false,
  		limitY: false,
  		scalarX: 50,   // important
  		scalarY: 30,  // important
  		frictionX: 0.4,
  		frictionY: 0.2,
  		originX: 0.0,
  		originY: 1.0
	});

  var scene1 = document.getElementById('scene1');
  var parallax = new Parallax(scene1);

  $('#scene1').parallax({
      calibrateX: false,
      calibrateY: false,
      invertX: true,
      invertY: true,
      limitX: false,
      limitY: false,
      scalarX: 50,   // important
      scalarY: 30,  // important
      frictionX: 0.4,
      frictionY: 0.2,
      originX: 0.0,
      originY: 1.0
  });

  var scene2 = document.getElementById('scene2');
  var parallax = new Parallax(scene2);

  $('#scene2').parallax({
      calibrateX: false,
      calibrateY: false,
      invertX: true,
      invertY: true,
      limitX: false,
      limitY: false,
      scalarX: 10,   // important
      scalarY: 10,  // important
      frictionX: 0.4,
      frictionY: 0.2,
      originX: 0.0,
      originY: 1.0
  });

  var scene3 = document.getElementById('scene3');
  var parallax = new Parallax(scene3);

  $('#scene3').parallax({
      calibrateX: false,
      calibrateY: false,
      invertX: true,
      invertY: true,
      limitX: false,
      limitY: false,
      scalarX: 10,   // important
      scalarY: 10,  // important
      frictionX: 0.4,
      frictionY: 0.2,
      originX: 0.0,
      originY: 1.0
  });



$("#explanation").click(function() {
    $("#explanation").fadeToggle(500);
  });

$("#explanation").fadeIn("slow");


audio1 = document.createElement('audio');
  audio1.setAttribute('src','sounds/page-flip-4.wav');

$("#bg").click(function() {
  audio1.play();
});

$("#bg").click(function() {

  var sentence = 
  [
    "What would Charles Manson do?", 
    "Peace is for losers.", 
    "Say 'I'm stupid' five times fast and see what happens",
    "You smell.",
    "Just like your outer beauty, your inner beauty is missing.",
    "Your low-minded principles spell failure",
    "You need a new brand of toothpaste",
    "Beware of open books",
    "Do you have 50 cents I can borrow?",
    "No worries, that rash will go away soon.",
    "Start investing in Beanie Babies.",
    "Don't follow your dreams. It's overrated",
    "Remember: True love does not exist.",
    "A wise man once said: YOLO ",
    "Pretend everyday is Halloween.",
    "Listen to Don't Stop Believing 10 times",
    "Stay away from frying pans this next week.",
    "Stealing is actually quite invigorating",
    "Wait, why are you here?",
    "I see you being a loser in the future.",
    "You learn from your mistakes: I'd start making more.",
    "Buy some new socks.",
    "When all else fails, punch someone",
    "Your life will be filled with mediocre moments",
    "Clean out your fridge!",
    "Everything is serious, nothing is fun.",
    "Um, try again",
    "You have terrible taste in music.",
    "Your mom.",
    "Worry. Worrying helps everything.",
    "You are better than everyone. Make sure they know.",
    
  ]
  document.getElementById("saying").innerHTML = sentence[Math.floor(Math.random()*sentence.length)]

});

/* Good  Fortunes JS*/

$("#gg").click(function() {
  audio1.play();
});

$("#gg").click(function() {

  var sentence = 
  [
    "You are more connected than you think", 
    "Remember, peace is the key to happiness", 
    "Family and loved ones are good to be around this week",
    "Life goes on",
    "Stay positive and you will be surprised by the outcome.",
    "You believe in the goodness of man kind.",
    "Today it's up to you to create the peacefulness you long for.",
    "Change can hurt, but it leads a path to something better.",
    "People are naturally attracted to you.",
    "You cannot love life until you live the life you love.",
    "You are very talented in many ways",
    "Instead of worrying and agonizing, move ahead contructively.",
    "You will live long and enjoy life.",
    "Put your unhappiness aside. Life is beautiful, be happy.",
    "If you speak honestly, everyone will listen.",
    "People in your surroundings will be more cooperative than usual.",
    "A new business venture is on the horizon.",
    "You create enthusiasm around you.",
    "Love conquers all.",
    "Trust your intuition.",
    "Be a good friend and a fair enemy.",
    "Let your imagination wander.",
    "Worrying does nothing.",
    "Never cut what you can untie.",
    "Happiness is not the absence of conflict, but the ability to cope with it.",
    "Patience is key to joy.",
    "There are lessons to be learned by listening to others.",
    "If you want the rainbow, you have to tolerate the rain.",
    "What breaks in the moment may take years to mend.",
    "All comes in proper time to those who know how to wait.",
    "Plan your work and work your plan",
    "An angry man opens his mouth and shuts his eyes.",
  ]
  document.getElementById("gsaying").innerHTML = sentence[Math.floor(Math.random()*sentence.length)]

});

});