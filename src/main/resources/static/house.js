var config = {
    scale: {
        mode: Phaser.Scale.FIT,
    },
    width: 800,
    height: 400,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
       },
};
var game = new Phaser.Game(config);
function preload ()
{
    this.load.image('sky', 'sky.png');
    this.load.image('ground', 'platform.png');
    this.load.image('house background', 'house background.png');
    this.load.image('placeholder character' 'dude.png');

}

var platforms;
var player;

function create ()
{
    this.scale.displaySize.setAspectRatio(16/8);
    this.scale.refresh();
    //this.add.image(400, 200, 'sky');

    var bg = this.add.image(400, 250, 'house background');
    bg.setDisplaySize(800, 650);

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    player = this.create.add.sprite(100, 450, 'placeholder character');

}

function update ()
{
}