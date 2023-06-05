var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1c7bd825-402b-4ade-b6c0-e48ee9e52b3f","ea09bfe8-968e-46b1-bf43-3abbeff5379b","adb854ff-a5bc-4b5b-b348-7b9016c0d836","f3ce0996-9bca-4eac-97a6-ba18412a2a42"],"propsByKey":{"1c7bd825-402b-4ade-b6c0-e48ee9e52b3f":{"name":"arvore1.png_1","sourceUrl":"assets/v3/animations/WyYjdZU9Tliepz1a39qnqyLP8XyICEyi6kNK-s5tE1U/1c7bd825-402b-4ade-b6c0-e48ee9e52b3f.png","frameSize":{"x":80,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"qR8IipMazhk.ylqXDR3TnJ5eP0kuf3Vi","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":400},"rootRelativePath":"assets/v3/animations/WyYjdZU9Tliepz1a39qnqyLP8XyICEyi6kNK-s5tE1U/1c7bd825-402b-4ade-b6c0-e48ee9e52b3f.png"},"ea09bfe8-968e-46b1-bf43-3abbeff5379b":{"name":"arvore2.png_1","sourceUrl":"assets/v3/animations/WyYjdZU9Tliepz1a39qnqyLP8XyICEyi6kNK-s5tE1U/ea09bfe8-968e-46b1-bf43-3abbeff5379b.png","frameSize":{"x":80,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"1rjfdmtkqpLr5g4_meszLZK3ch6UnPe2","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":400},"rootRelativePath":"assets/v3/animations/WyYjdZU9Tliepz1a39qnqyLP8XyICEyi6kNK-s5tE1U/ea09bfe8-968e-46b1-bf43-3abbeff5379b.png"},"adb854ff-a5bc-4b5b-b348-7b9016c0d836":{"name":"grass3.png","sourceUrl":"assets/v3/animations/WyYjdZU9Tliepz1a39qnqyLP8XyICEyi6kNK-s5tE1U/adb854ff-a5bc-4b5b-b348-7b9016c0d836.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"go7SQS0NMbqq3Zegf3CALLMLrXZeXlWD","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/WyYjdZU9Tliepz1a39qnqyLP8XyICEyi6kNK-s5tE1U/adb854ff-a5bc-4b5b-b348-7b9016c0d836.png"},"f3ce0996-9bca-4eac-97a6-ba18412a2a42":{"name":"stone.png_1","sourceUrl":"assets/v3/animations/WyYjdZU9Tliepz1a39qnqyLP8XyICEyi6kNK-s5tE1U/f3ce0996-9bca-4eac-97a6-ba18412a2a42.png","frameSize":{"x":125,"y":40},"frameCount":1,"looping":true,"frameDelay":4,"version":"xkuQO_8HVtkyj9F8XWuxnet8.VPD.Cvf","loadedFromSource":true,"saved":true,"sourceSize":{"x":125,"y":40},"rootRelativePath":"assets/v3/animations/WyYjdZU9Tliepz1a39qnqyLP8XyICEyi6kNK-s5tE1U/f3ce0996-9bca-4eac-97a6-ba18412a2a42.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var start = 6;
var gamestate = start;
var tiro = 3;
var end = 0;
var win = 5;
var vida = 5;
var score = 0;

var bolha = createGroup();
var bolha2 = createGroup();
var gun = createGroup();

var grass = createSprite (200,200,400,400);
grass.setAnimation("grass3.png");

var obstacle1 = createSprite (200, 90, 20, 20);
bolha.add(obstacle1);
obstacle1.debug = true;
obstacle1.setCollider("circle", 0, 0, 15);

var obstacle2 = createSprite (200, 160, 20, 20);
bolha.add(obstacle2);
obstacle2.debug = true;
obstacle2.setCollider("circle", 0, 0, 15);

var obstacle3 = createSprite (200, 230, 20, 20);
bolha.add(obstacle3);
obstacle3.debug = true;
obstacle3.setCollider("circle", 0, 0, 15);

var obstacle4 = createSprite (200, 300, 20, 20);
bolha.add(obstacle4);
obstacle4.debug = true;
obstacle4.setCollider("circle", 0, 0, 15);

obstacle1.velocityX = random(-5,10);
obstacle3.velocityX = random(-5,10);
obstacle2.velocityX = random(-5,10);
obstacle4.velocityX = random(-5,10);

//=====================================================================

var obstacle5 = createSprite (100,200,20,20);
bolha2.add(obstacle5);
obstacle5.debug = true;
obstacle5.setCollider("circle", 0, 0, 15);
obstacle5.velocityX = 4;
obstacle5.velocityY = 3;

var obstacle6 = createSprite (150,200,20,20);
bolha2.add(obstacle6);
obstacle6.debug = true;
obstacle6.setCollider("circle", 0, 0, 15);
obstacle6.velocityX = 5;
obstacle6.velocityY = 3;

var obstacle7 = createSprite (200,200,20,20);
bolha2.add(obstacle7);
obstacle7.debug = true;
obstacle7.setCollider("circle", 0, 0, 15);
obstacle7.velocityX = 3;
obstacle7.velocityY = 4;

var obstacle8 = createSprite (200, 250, 20, 20);
bolha2.add(obstacle8);
obstacle8.debug = true;
obstacle8.setCollider("circle", 0, 0, 15);
obstacle8.velocityX = 4;
obstacle8.velocityY = 3;

var stone = createSprite (150,320,115,40);
stone.setAnimation("stone.png_1");

//=====================================================================

var area = createSprite (200, 25, 400, 50);

var vava = createSprite(200, 370, 20, 20);

var arvore1 = createSprite (40, 200, 80, 400);
arvore1.setAnimation("arvore1.png_1");
var arvore2 = createSprite (360, 200, 80, 400);
arvore2.setAnimation("arvore2.png_1");

var fundo = createSprite(200,200,400,400);
fundo.shapeColor = "black";

function draw() {
  
   if (gamestate === 6){
  textSize(22);
  textFont("Courier New");
  fill("white");
  stroke("black");
  strokeWeight(3);
    text ("Utilize as teclas W-A-S-D para se mover", 30, 200);
  if (keyDown("space")){
      gamestate = 1;

    }
  }
  
  background("white");
  createEdgeSprites();
  bolha.bounceOff(edges);
  bolha2.bounceOff(edges);
  vava.collide(edges);
  area.visible = false;
  bolha2.bounceOff(stone);
  bolha2.bounceOff(vava);
  
  if (vida <= 0){
      gamestate = end;
    }
    
    if (score >= 5){
      gamestate = win;
    }
  
  if (bolha.isTouching(vava)){
    vida = vida - 1;
  }
  
  if (vava.isTouching(area)){
    vava.x = 200;
    vava.y = 380;
    gamestate = 3;
    score = score + 1;
  }
  
  
  
  
  if (gamestate === 1){
    background("white");
    fundo.visible = false;
    bolha2.setVisibleEach(false);
    stone.visible = false;
    
    move();
    
    bolha.bounceOff(vava);
    vava.collide(arvore1);
    vava.collide(arvore2);
    
  }
    
  if (gamestate === 2){
    fundo.visible = true;
    bolha.destroyEach();
    arvore1.destroy();
    arvore2.destroy();
    grass.destroy();
  }
  
  if (gamestate === tiro){
    area.destroy();
    bolha.destroyEach();
    arvore1.visible = false;
    arvore2.visible = false;
    fundo.visible = false;
    bolha2.setVisibleEach(true);
    stone.visible = true;
    if (bolha2.isTouching(vava)){
      vida = vida - 1;
    }
    
    move2();
    shot();
    
    gun.bounceOff(stone);
    
    if (gun.isTouching(obstacle5)){
      obstacle5.destroy();
      gun.destroyEach();
      score = score + 1;
    }
    
    if (gun.isTouching(obstacle6)){
      obstacle6.destroy();
      gun.destroyEach();
      score = score + 1;
    }
    
    if (gun.isTouching(obstacle7)){
      obstacle7.destroy();
      gun.destroyEach();
      score = score + 1;
    }
    
    if (gun.isTouching(obstacle8)){
      obstacle8.destroy();
      gun.destroyEach();
      score = score + 1;
    }
    
    if (gamestate === 4){
  textSize(42);
  textFont("Courier New");
  fill("white");
  stroke("black");
  strokeWeight(3);
  text ("Fim de jogo", 200,200);
  }
    
  }
  
  drawSprites();
  
  textSize(22);
  textFont("Courier New");
  fill("white");
  stroke("black");
  strokeWeight(3);
  text("Vidas:" + vida, 20, 30);
  
  textSize(22);
  textFont("Courier New");
  fill("white");
  stroke("black");
  strokeWeight(3);
  text("Pontos:" + score, 20, 50);
  
  if (gamestate === win){
    textSize(32);
  textFont("Courier New");
  fill("white");
  stroke("black");
  strokeWeight(3);
    text ("Você ganhou!", 95,200);
  }
  
  if (gamestate === end){
     
  textSize(32);
  textFont("Courier New");
  fill("white");
  stroke("black");
  strokeWeight(3);
    text ("Fim de jogo!", 95,200);
  }
  
}

function move(){
  if (keyDown("w")){
    vava.y = vava.y - 5;
  }
  if (keyDown("a")){
    vava.x = vava.x - 5;
  }
  if (keyDown("s")){
    vava.y = vava.y + 5;
  }
  if (keyDown("d")){
    vava.x = vava.x + 5;
  }
}

function move2 (){
    if (keyDown("a")){
    vava.x = vava.x - 5;
    }
    if (keyDown("d")){
    vava.x = vava.x + 5;
  }
}

function shot(){
  if (keyWentDown("e")){
    var s = createSprite (vava.x, vava.y, 5, 5);
    
    s.velocityY = - 20;
    s.lifetime = 35;
    gun.add(s);
    
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
