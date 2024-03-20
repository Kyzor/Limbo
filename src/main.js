let mainMenu = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function mainMenu() {
        Phaser.Scene.call(this, { key: 'mainMenu' });
    },
    create: function () {
        this.scene.start('menuScreen');
    },
});

let levelSelection = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function levelSelection() {
        Phaser.Scene.call(this, { key: 'levelselection' });
    },
    create: function () {
        this.add.image(100, 50, 'levelButton').setInteractive();

        this.input.on(
            'pointerdown',
            function (pointer, gameObject) {
                this.scene.start('beginnerMap');
            },
            this
        );
    },
});

let config = {
    type: Phaser.AUTO,
    width: 600,
    height: 400,
    scene: {
        preload: preload,
        create: create,
    },
    scene: [mainMenu, levelSelection], //other levels when needed
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
        .sprite(
            this.sys.game.config.width / 2,
            this.sys.game.config.height / 2,
            'playButton'
        )
        .setInteractive();

    button.on('pointerdown', function () {
        this.setTint(0x808080);
        this.scene.start('levelSelection');
    });

    button.on('pointerup', function () {
        this.clearTint();
    });

    //note for my dumbass, remember to use whenButtonClicked({xButton}); whenever i want to use a button
    whenButtonClicked(playButton);
}
