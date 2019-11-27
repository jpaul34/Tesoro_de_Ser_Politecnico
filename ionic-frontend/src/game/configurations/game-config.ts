
export const gameConfig = {
    backgroundColor: '#2E4053',
    parent: 'phaser_game',
    type: Phaser.AUTO,
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    
    width: window.innerWidth * window.devicePixelRatio,
    height: (window.innerHeight - 11) * window.devicePixelRatio,
    render: {
        pixelArt: false,
        antialias: true
    },
    physics: {
        default: 'arcade',
    },
    scene:[]
}
