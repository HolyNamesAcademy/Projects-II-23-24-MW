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
    this.scale.displaySize.setAspectRatio( 2/1);
    this.scale.refresh();
   this.add.image(400, 300, 'sky');//the Origin part controls where the image is placed
   var score = 0;
   var scoreText;
   scoreText = this.add.text(16, 16, 'Welcome to a world where dogs reign...Doglandia \n But as you explore this cabin in the woods, be alert, \n for something is amiss in the dark forest.', { fontSize: '32px', fill: '#000' });
}

function update ()
{
}