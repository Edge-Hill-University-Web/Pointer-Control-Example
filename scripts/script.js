class KeyboardExample extends Phaser.Scene {
    
    constructor(){
        super();
        this.player;
        this.cursors;
        this.canvas;
    }
    
    preload() {
        this.load.image('ship', 'assets/rocket.png');
        this.load.image('background', 'assets/background.png');
        this.load.image('star', 'assets/star.png');
    }

    create ()
    {
        this.text = this.add.text(10, 10, 'HELLO!', { fill: '#00ff00' });
        game.canvas.style.cursor = 'none';
        this.cursors = this.input.keyboard.createCursorKeys();
        this.player = this.physics.add.image(400, 300, 'ship');
        this.player.setScale(0.2);      
        this.player.setCollideWorldBounds(true);
        
        const customCursor = this.add.image(0, 0, 'star');

        customCursor.setScale(0.5);

        this.input.on('pointermove', (pointer) => {
            customCursor.setPosition(pointer.x, pointer.y);
        });
    }

    update ()
    {
        //active pointer manager
        const pointer = this.input.activePointer;

        // Update the sprite's position to follow the mouse pointer
        this.player.x = pointer.x;
        this.player.y = pointer.y;
    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    transparent: true,
    width: 800,
    height: 600,
    disableContextMenu: false,
    scene: KeyboardExample, 
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
};


const game = new Phaser.Game(config);