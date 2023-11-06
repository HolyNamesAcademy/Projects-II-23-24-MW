var config = {
        type: Phaser.AUTO,
        width: 1000,
        height: 800,

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

    fucntion preload(){


    }