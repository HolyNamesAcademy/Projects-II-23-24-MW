var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'sky.png');
}

function create ()
{
    this.scale.displaySize.setAspectRatio( 16/8.8);
    this.scale.refresh();
    this.add.image(400, 300, 'sky');
}

function update ()
{
}*/
var config = {
    scale: {
        mode: Phaser.Scale.FIT,
    },
    //width: 800,
    //height: 600,
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
    this.load.image('ground', 'platform.png')
}

var platforms;
function create ()
{
    this.scale.displaySize.setAspectRatio( 16/8.8);
    this.scale.refresh();
    this.add.image(400, 300, 'sky');


    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
}

function update ()
{
}