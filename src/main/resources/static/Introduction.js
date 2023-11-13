    /*var config = {
        type: Phaser.AUTO,
        width: 1920,
        height: 1080,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {y: 30},
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update

    }
    };

var game = new Phaser.Game(config);
function preload(){

}*/
//trying to set up intro and canvas did not work

//maddy's version: now this just makes a white screen
/*var config = {
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
}*/
//this was copied from the PhaserTutorial code
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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
}

function update ()
{
}