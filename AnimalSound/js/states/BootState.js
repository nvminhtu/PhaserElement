var BootState = {
	init: function(){
		/*Responsive Screen*/
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
	},
	preload: function(){
		this.load.image('logo','assets/img/logo.png');
		this.load.image('bar','assets/img/bar.png');
	},
	create: function(){
		this.game.stage.backgroundColor = '#fff';

		this.state.start('PreloadState');
	}
};