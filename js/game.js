var config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    backgroundColor: "black",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 }
        }
    },
    scene:[
        SceneMainMenu,
        SceneMain,
        SceneGameOver
    ],
    pixelArt: true,
    roundPixels: true

};

var playerScore;
var score = 0;

var game = new Phaser.Game(config)