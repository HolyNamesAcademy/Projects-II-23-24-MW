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
    this.load.spritesheet('dude', 'dude.png',{ frameWidth: 48, frameHeight: 42 });
    this.load.spritesheet('dog', 'dog sprite sheet final vr.png', {frameWidth: 52, frameHeight: 40});
    this.load.image('house background', 'house background.png');
    this.load.image('key', 'key 2.png');

}

var platforms;
var keyCoordX = 100;
var keyCoordY = 100;
var key;
var haveKey = JSON.parse(localStorage.getItem('haveKey')) || false;

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

    //if key is in inventory, dont display it
    if(haveKey == false){
        key = this.add.image(keyCoordX, keyCoordY, 'key');
        key.setDisplaySize(50, 50);
    }


    //player
    player = this.physics.add.sprite(100, 450, 'dog');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dog', { start: 4, end: 6 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dog', frame: 2 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dog', { start: 7, end: 9 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('dog', { start: 10, end: 11}),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('dog', { start: 2, end: 3}),
            frameRate: 10,
            repeat: -1
    });
    this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('dog', {start: 0, end: 1}),
        frameRate: 5,
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
        player.anims.play('idle', true);
    }

    if (cursors.up.isDown){
        player.setVelocityY(-160);
        player.anims.play('up', true);
    }
    else if (cursors.down.isDown){
        player.setVelocityY(160);
        player.anims.play('down', true);
    }
    else{
        //player.setVelocityX(0);
        player.setVelocityY(0);
        //player.anims.play('idle');
    }

    //key collection
    if((player.x < keyCoordX + 50 && player.x > keyCoordX - 20) && (player.y < keyCoordY + 30 && player.y > keyCoordY -10)){
       key.destroy();
       haveKey = true;
       localStorage.setItem('haveKey', haveKey);
    }

    if((player.x < 450 && player.x > 350) && (player.y < 450 && player.y > 370) && haveKey == true){
         player.destroy();
       }



    /* old jump - not needed anymore
    if (cursors.up.isDown){
        player.setVelocityY(-330);
    }
    */
}