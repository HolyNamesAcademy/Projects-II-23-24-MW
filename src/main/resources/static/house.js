var config = {
    scale: {
            mode: Phaser.Scale.FIT,
             // ...
            },
    //width: 1200,
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
}

function create ()
{
    this.scale.displaySize.setAspectRatio( 16/8.8);
    this.scale.refresh();
}

function update ()
{
}