var HomeState = {
	create: function(){
		var bgSound = this.game.add.audio('bgSound');
		bgSound.loop = true;
		bgSound.play();
		var background = this.game.add.sprite(0,0,'background');
		var titleGame = this.game.add.image(this.game.world.centerX, 50, 'titleGame');
		titleGame.anchor.setTo(0.5);
		var touch = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'touch');
		touch.anchor.setTo(0.5);
		touch.inputEnabled = true;

		touch.events.onInputDown.add(this.startGameState, this);
		this.game.state.states['GameState'].bgSound = bgSound;
	},
	startGameState: function()
	{
		this.state.start('GameState');
	}
};