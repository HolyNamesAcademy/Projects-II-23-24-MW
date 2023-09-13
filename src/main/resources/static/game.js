var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var scoreText;
var highScore = parseInt(localStorage.getItem('highScore')) || 0;
var highScoreText;
var gameOver = false;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'sky.png');
    this.load.image('ground', 'platform.png');
    this.load.image('star', 'star.png');
    this.load.image('bomb', 'bomb.png');
    this.load.spritesheet('dude',
        'dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

function create ()
{
    // Create the background first, so everything else shows up in front of it
    this.add.image(400, 300, 'sky');


    createPlatforms.call(this);
    createPlayer.call(this);
    createStars.call(this);

    bombs = this.physics.add.group();

    // The score
    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
    highScoreText = this.add.text(500, 16, `High Score: ${highScore}`, { fontSize: '32px', fill: '#000' });

    // Add colliders to detect collisions and prevent things from
    // falling off the screen
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);

    this.physics.add.collider(player, bombs, hitBomb, null, this);

    // Check for an overlap between the player and any star in the stars
    // Group. If found then they are passed to the 'collectStar' function
    this.physics.add.overlap(player, stars, collectStar, null, this);

    // Input events.
    // Populates the cursors object with four properties:
    // up, down, left, right, that are all instances of Key objects
    cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
    // Poll which keys are being held down and move the player

    // Check for moving left, right, or stopped ('turn' forward)
    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    // Jump: check that the player is on the ground so they can't jump
    // again while in the air
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
}

var createPlatforms = function () {
    // Create the platforms as a group of static objects. Make them a group so
    // you can control them all together. The platforms group contains the ground
    // and the 3 ledges we can jump on
    platforms = this.physics.add.staticGroup();

    // Scale it to fit the width of the game (the original sprite is 400x32 in size)
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    // Create the ledges
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
}

var createPlayer = function () {
    // Create the player as a dynamic object with its settings
    player = this.physics.add.sprite(100, 450, 'dude');

    // Add some physics properties to the player - give them a slight bounce
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    // Create player animations using some of the frames from the dude spritesheet.
    // Turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        // loop the animation
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
        // loop the animation
        repeat: -1
    });
}

var createStars = function () {
    // Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    // Add physics to each star in group
    stars.children.iterate(function (child) {
        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });
}

function collectStar (player, star)
{
    // Disable the star's physics body and make its parent Game Object
    // inactive and invisible, which removes it from display
    star.disableBody(true, true);

    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);

    // If there are no more active stars, then the player has collected them all,
    // so we use the iterate function to re-enable all of the stars and reset
    // their y position to zero. This will make all of the stars drop from the
    // top of the screen again.
    if (stars.countActive(true) === 0)
    {
        //  A new batch of stars to collect
        stars.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true);
        });

        // Pick a random x coordinate for our new bomb, always on the opposite side
        // of the screen to the player to give them a chance.
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        // Create a bomb and set properties
        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;
    }
}

// Stop the game and turn the player red
function hitBomb (player, bomb)
{
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    endGame.call(this);
}

var endGame = function () {
    if (score > highScore) {
        highScore = score;
//        highScoreText.setText('High Score: ' + highScore);
        localStorage.setItem('highScore', highScore);
        this.add.text(150, 300, `New High Score: ${highScore}`, { fontSize: '48px', fill: '#000' });
    }
    this.add.text(225, 250, `GAME OVER`, { fontSize: '64px', fill: '#000' });
    gameOver = true;
}