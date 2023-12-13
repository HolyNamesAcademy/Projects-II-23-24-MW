
class Introduction extends Phaser.Scene{

constructor ()
    {
        super({ key: 'introduction' });
    }

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
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('greenBackground', 'green.png');
}

function create ()
{

   this.scale.displaySize.setAspectRatio( 2/1);
   this.scale.refresh();
   var bg= this.add.image(400, 200, 'greenBackground');
    bg.setDisplaySize(800,400);
   var score = 0;
   var scoreText;
   scoreText = this.add.text(10, 16, '\n  Welcome to a world where dogs reign...\n               Doglandia \n     But as you explore this cabin \n         in the woods, be alert, \n  for something is amiss in the forest.', { fontSize: '32px', fill: '#000' });
}

function update ()
{
    cursors = this.input.keyboard.createCursorKeys();
}

 create ()

 this.input.once('pointerdown', function ()
        {
  this.add.sprite(400, 300, 'face').setAlpha(0.2);

            console.log('From SceneA to SceneB');

            this.scene.start('House');

        }, this);
}

class Sky extends Phaser.scene{

    create ()
    {


    constructor ()
        {
            super({ key: 'sky' });
        }

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
        }
    };

    var game = new Phaser.Game(config);

    function preload ()
    {
        this.load.image('example', 'sky.png');
    }

    function create ()
    {

       this.scale.displaySize.setAspectRatio( 2/1);
       this.scale.refresh();
       var bg= this.add.image(400, 200, 'example');
        bg.setDisplaySize(800,400);



        this.arrow = this.add.sprite(400, 300, 'arrow').setOrigin(0, 0.5);

        this.input.once('pointerdown', function (event)
        {

            console.log('From Introduction to SkyScene');

            this.scene.start('sky');

        }, this);
    }
}
}
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 400,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ Introduction, Sky]
};

const game = new Phaser.Game(config);