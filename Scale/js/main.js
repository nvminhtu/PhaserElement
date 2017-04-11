var GameState = {
	preload : function(){

		//Them sprite
		this.load.image('background','assets/img/bg.jpg');
		this.load.image('dao', 'assets/img/dao.png');
		this.load.image('robot', 'assets/img/robot.png');
	},

	create: function(){
		//Add background
		this.background = this.game.add.sprite(0, 0,'background');
		this.background.scale.setTo(640, 360);


		// this.dao = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY,'dao');
		this.dao = this.game.add.sprite(500, 200,'dao');
		//this.dao.anchor.setTo(0.5);
		this.dao.scale.setTo(0.5, 0.5);

		this.robot = this.game.add.sprite(200, 100, 'robot');
		this.robot.angle = 0;
		//this.robot.scale.setTo(-1, 1);

		// Responsive Screen
		// this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		// this.scale.pageAlignHorizontally = true;
		// this.scale.pageAlignVertically = true;
		
	},

	update: function(){
		//this.dao.angle += 3;
		// scaleX = -scaleX;
		// this.robot.scale.setTo(scaleX, 1);
	},
};
var scaleX = 1;
var game = new Phaser.Game(640, 360, Phaser.AUTO,'');
game.state.add('GameState', GameState);
game.state.start('GameState');