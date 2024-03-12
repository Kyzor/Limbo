let config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: {
        preload: preload,
        create: create,
    },
};

let game = new Phaser.Game(config);

function preload() {
    this.load.image('menuBackground', '../assets/bg.jpg');
    this.load.image('playButton', '../assets/play_button.png');
}

function createBackground() {
    console.log('create function called');
    this.add.image(
        this.sys.game.config.width / 2,
        this.sys.game.config.height / 2,
        'menuBackground'
    );
}

function create() {
    console.log('create function called');
    this.add.image(
        this.sys.game.config.width / 2,
        this.sys.game.config.height / 2,
        'menuBackground'
    );
    createMenuButton.call(this);
}

function createMenuButton() {
    let button = this.add
        .image(
            this.sys.game.config.width / 2,
            this.sys.game.config.height / 2,
            'playButton'
        )
        .setInteractive();
    button.on('pointerdown', function () {
        asdasd;
    });
}
