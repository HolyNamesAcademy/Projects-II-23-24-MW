    var config = {
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

}
//trying to set up intro and canvas did not work