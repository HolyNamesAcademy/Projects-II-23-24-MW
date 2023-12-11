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
                //gravity: { y: 300 },
                debug: false
            }
       },

};
var game = new Phaser.Game(config);
function preload ()
{
    this.load.image('sky', 'sky.png');
    this.load.image('ground', 'platform.png')
    this.load.spritesheet('dude', 'dude.png',{ frameWidth: 32, frameHeight: 48 });
    this.load.image('house background', 'house background.png');

}

var platforms;

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

    //player
    player = this.physics.add.sprite(100, 450, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
}

function update (){
    cursors = this.input.keyboard.createCursorKeys();
    if (cursors.left.isDown){
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown){
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else{
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    if (cursors.up.isDown){
        player.setVelocityY(-160);
    }
    else if (cursors.down.isDown){
        player.setVelocityY(160);
    }
    else{
        //player.setVelocityX(0);
        player.setVelocityY(0);
        //player.anims.play('turn');
    }

    /* old jump - not needed anymore
    if (cursors.up.isDown){
        player.setVelocityY(-330);
    }
    */
}