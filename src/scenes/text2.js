class Text2 extends Phaser.Scene {

    constructor() {
        super("text2Scene");
    }

    create() {
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        this.add.text(screenCenterX, screenCenterY + 100, "... your way of life was taken from you.\nYou were spared by the efforts of your parents' last breaths.\nAs a boy you hated wolves, but now as a man you hunt them.", {
                font: "18px monospace",
                fill: "#000000",
                padding: { x: 20, y: 10 },
                backgroundColor: "#ffffff",
                // fixedWidth: 125,
                align: 'center',
            })
            .setOrigin(0.5);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("story2Scene");
        }
    }
}