var game = new Phaser.Game(480, 320, Phaser.AUTO, '', {
  preload: function(){
    this.scale.pageAlignHorizontally = true;
    this.game.load.spritesheet('vol','vol.png', 192, 168);
    this.load.audio('bgSound', ['newtoy.mp3']);
  },
  create: function(){
    this.bgSound = this.game.add.audio('bgSound');
    this.bgSound.loop = true;
    this.bgSound.play();

    this.volume = game.add.sprite(0, 0, 'vol');
    this.volume.inputEnabled = true;
    this.volume.input.pixelPerfectClick = true;
    this.volume.events.onInputDown.add(this.changeStatus, this);
  },
  changeStatus(sprite, event)
  {
    if(sprite.frame == 0)
    {
      sprite.frame = 1;
      this.bgSound.volume = 0;
    }
    else
    {
      sprite.frame = 0;
      this.bgSound.volume = 1;
    }
  }
});