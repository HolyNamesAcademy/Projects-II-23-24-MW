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
    }
};

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
}