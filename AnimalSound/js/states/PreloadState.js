var PreloadState = {
	preload : function(){
		//Add the logo to screen
		this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		this.logo.anchor.setTo(0.5);

		//Add the bar to screen
		this.bar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 80, 'bar');
		this.bar.anchor.setTo(0.5);
		this.load.setPreloadSprite(this.bar);

		/*Load background*/
		this.load.image('background','assets/img/bg.png');
		this.load.image('touch', 'assets/img/touch.png');

		/*Load animals image*/
		this.load.image('lion', 'assets/img/lion.png');
		this.load.image('monkey', 'assets/img/monkey.png');
		this.load.image('dog', 'assets/img/dog.png');
		this.load.image('cat', 'assets/img/cat.png');
		this.load.image('duck', 'assets/img/duck.png');
		this.load.image('cow', 'assets/img/cow.png');
		this.load.image('sheep', 'assets/img/sheep.png');
		this.load.image('rooster', 'assets/img/rooster.png');
		this.load.image('wolf', 'assets/img/wolf.png');
		this.load.image('horse', 'assets/img/horse.png');
		this.load.image('help', 'assets/img/help.png');
		this.load.image('titleGame', 'assets/img/title.png');
		// this.load.spritesheet('vol', 'assets/img/vol.png', 192, 168, 2);

		/*Load animals sound*/
		this.load.audio('bgSound', ['assets/aud/kids.ogg', 'assets/aud/kids.mp3'])
		this.load.audio('lionSound', ['assets/aud/lion.ogg', 'assets/aud/lion.mp3']);
		this.load.audio('monkeySound', ['assets/aud/monkey.ogg', 'assets/aud/monkey.mp3']);
		this.load.audio('dogSound', ['assets/aud/dog.ogg', 'assets/aud/dog.mp3']);
		this.load.audio('catSound', ['assets/aud/cat.ogg', 'assets/aud/cat.mp3']);
		this.load.audio('duckSound', ['assets/aud/duck.ogg', 'assets/aud/duck.mp3']);
		this.load.audio('cowSound', ['assets/aud/cow.ogg', 'assets/aud/cow.mp3']);
		this.load.audio('sheepSound', ['assets/aud/sheep.ogg', 'assets/aud/sheep.mp3']);
		this.load.audio('roosterSound', ['assets/aud/rooster.ogg', 'assets/aud/rooster.mp3']);
		this.load.audio('wolfSound', ['assets/aud/wolf.ogg', 'assets/aud/wolf.mp3']);
		this.load.audio('horseSound', ['assets/aud/horse.ogg', 'assets/aud/horse.mp3']);


		/*Load arrow*/
		this.load.image('arrow', 'assets/img/arrow.png');
	},
	create: function(){
		this.state.start('HomeState');
	}
};