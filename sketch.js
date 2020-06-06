var backgroundImage, canvas;

var gameState = 0;
var playerCount;
var database;
var form, player, game;
var allPlayers;
var plyrsHeight, plyrsDistance, plyrsY, plyrsHurds;

var trackImg, car1_Img, car2_Img, car3_Img, car4_Img
var cars, car1, car2, car3, car4;

var car1Hurd1, car1Hurd2, car1Hurd3, car1Hurd4, car1Hurd5, car1Hurd6, car1Hurd7, car1Hurd8;
var car2Hurd1, car2Hurd2, car2Hurd3, car2Hurd4, car2Hurd5, car2Hurd6, car2Hurd7, car2Hurd8;
var car3Hurd1, car3Hurd2, car3Hurd3, car3Hurd4, car3Hurd5, car3Hurd6, car3Hurd7, car3Hurd8;
var car4Hurd1, car4Hurd2, car4Hurd3, car4Hurd4, car4Hurd5, car4Hurd6, car4Hurd7, car4Hurd8;
var car1Hurds, car2Hurds, car3Hurds, car4Hurds;

var display;

function preload(){
    trackImg = loadImage("images/1.png");
    car1_Img = loadImage("images/man1.png");
    car2_Img = loadImage("images/man2.png");
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();

    display = displayWidth * 5;

    car1Hurd1 = createSprite(-display/10 * 1 + 800, 300, 50, 100);
    car1Hurd2 = createSprite(-display/10 * 2 + 800, 300, 50, 100);
    car1Hurd3 = createSprite(-display/10 * 3 + 800, 300, 50, 100);
    car1Hurd4 = createSprite(-display/10 * 4 + 800, 300, 50, 100);
    car1Hurd5 = createSprite(-display/10 * 5 + 800, 300, 50, 100);
    car1Hurd6 = createSprite(-display/10 * 6 + 800, 300, 50, 100);
    car1Hurd7 = createSprite(-display/10 * 7 + 800, 300, 50, 100);
    car1Hurd8 = createSprite(-display/10 * 8 + 800, 300, 50, 100);

    car2Hurd1 = createSprite(-display/10 * 1 + 1200, 560, 50, 100);
    car2Hurd2 = createSprite(-display/10 * 2 + 1200, 560, 50, 100);
    car2Hurd3 = createSprite(-display/10 * 3 + 1200, 560, 50, 100);
    car2Hurd4 = createSprite(-display/10 * 4 + 1200, 560, 50, 100);
    car2Hurd5 = createSprite(-display/10 * 5 + 1200, 560, 50, 100);
    car2Hurd6 = createSprite(-display/10 * 6 + 1200, 560, 50, 100);
    car2Hurd7 = createSprite(-display/10 * 7 + 1200, 560, 50, 100);
    car2Hurd8 = createSprite(-display/10 * 8 + 1200, 560, 50, 100);

    car3Hurd1 = createSprite(-display/10 * 1 + 1600, 820, 50, 100);
    car3Hurd2 = createSprite(-display/10 * 2 + 1600, 820, 50, 100);
    car3Hurd3 = createSprite(-display/10 * 3 + 1600, 820, 50, 100);
    car3Hurd4 = createSprite(-display/10 * 4 + 1600, 820, 50, 100);
    car3Hurd5 = createSprite(-display/10 * 5 + 1600, 820, 50, 100);
    car3Hurd6 = createSprite(-display/10 * 6 + 1600, 820, 50, 100);
    car3Hurd7 = createSprite(-display/10 * 7 + 1600, 820, 50, 100);
    car3Hurd8 = createSprite(-display/10 * 8 + 1600, 820, 50, 100);

    car4Hurd1 = createSprite(-display/10 * 1 + 2000, 1080, 50, 100);
    car4Hurd2 = createSprite(-display/10 * 2 + 2000, 1080, 50, 100);
    car4Hurd3 = createSprite(-display/10 * 3 + 2000, 1080, 50, 100);
    car4Hurd4 = createSprite(-display/10 * 4 + 2000, 1080, 50, 100);
    car4Hurd5 = createSprite(-display/10 * 5 + 2000, 1080, 50, 100);
    car4Hurd6 = createSprite(-display/10 * 6 + 2000, 1080, 50, 100);
    car4Hurd7 = createSprite(-display/10 * 7 + 2000, 1080, 50, 100);
    car4Hurd8 = createSprite(-display/10 * 8 + 2000, 1080, 50, 100);

    car1Hurds = createGroup();
    car2Hurds = createGroup();
    car3Hurds = createGroup();
    car4Hurds = createGroup();

    car1Hurds.add(car1Hurd1);
    car1Hurds.add(car1Hurd2);
    car1Hurds.add(car1Hurd3);
    car1Hurds.add(car1Hurd4);
    car1Hurds.add(car1Hurd5);
    car1Hurds.add(car1Hurd6);
    car1Hurds.add(car1Hurd7);
    car1Hurds.add(car1Hurd8);

    car2Hurds.add(car2Hurd1);
    car2Hurds.add(car2Hurd2);
    car2Hurds.add(car2Hurd3);
    car2Hurds.add(car2Hurd4);
    car2Hurds.add(car2Hurd5);
    car2Hurds.add(car2Hurd6);
    car2Hurds.add(car2Hurd7);
    car2Hurds.add(car2Hurd8);

    car3Hurds.add(car3Hurd1);
    car3Hurds.add(car3Hurd2);
    car3Hurds.add(car3Hurd3);
    car3Hurds.add(car3Hurd4);
    car3Hurds.add(car3Hurd5);
    car3Hurds.add(car3Hurd6);
    car3Hurds.add(car3Hurd7);
    car3Hurds.add(car3Hurd8);

    car4Hurds.add(car4Hurd1);
    car4Hurds.add(car4Hurd2);
    car4Hurds.add(car4Hurd3);
    car4Hurds.add(car4Hurd4);
    car4Hurds.add(car4Hurd5);
    car4Hurds.add(car4Hurd6);
    car4Hurds.add(car4Hurd7);
    car4Hurds.add(car4Hurd8);

}

function draw(){

    car1Hurd1.shapeColor = "green";
    car1Hurd2.shapeColor = "green";
    car1Hurd3.shapeColor = "green";
    car1Hurd4.shapeColor = "green";
    car1Hurd5.shapeColor = "green";
    car1Hurd6.shapeColor = "green";
    car1Hurd7.shapeColor = "green";
    car1Hurd8.shapeColor = "green";

    car2Hurd1.shapeColor = "green";
    car2Hurd2.shapeColor = "green";
    car2Hurd3.shapeColor = "green";
    car2Hurd4.shapeColor = "green";
    car2Hurd5.shapeColor = "green";
    car2Hurd6.shapeColor = "green";
    car2Hurd7.shapeColor = "green";
    car2Hurd8.shapeColor = "green";

    car3Hurd1.shapeColor = "green";
    car3Hurd2.shapeColor = "green";
    car3Hurd3.shapeColor = "green";
    car3Hurd4.shapeColor = "green";
    car3Hurd5.shapeColor = "green";
    car3Hurd6.shapeColor = "green";
    car3Hurd7.shapeColor = "green";
    car3Hurd8.shapeColor = "green";

    car4Hurd1.shapeColor = "green";
    car4Hurd2.shapeColor = "green";
    car4Hurd3.shapeColor = "green";
    car4Hurd4.shapeColor = "green";
    car4Hurd5.shapeColor = "green";
    car4Hurd6.shapeColor = "green";
    car4Hurd7.shapeColor = "green";
    car4Hurd8.shapeColor = "green";


    if (playerCount === 4){
        game.update(1); 
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if (gameState === 2){
        game.end();
    }

    //player.get()
}