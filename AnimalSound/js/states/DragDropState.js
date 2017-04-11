var GameState = {
	create: function(){
		//Admob Load
		if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
		    document.addEventListener('deviceready', initApp, false);
		} else {
		    initApp();
		}

		/*Add background*/
		this.background = this.game.add.sprite(0, 0,'background');

		this.bgSound.volume = 0.5;

		// Add Help Icon
		this.help = this.game.add.image(this.game.world.width - 40, 50, 'help');
		this.help.anchor.setTo(0.5);
		this.help.scale.setTo(0.5, 0.5);
		this.help.inputEnabled = true;
		this.help.events.onInputDown.add(this.helpDown, this);
		this.help.events.onInputUp.add(this.helpUp, this);

		// Text
		var styleHelp = {
			font: 'bold 18pt Arial',
			fill: '#333333',
			align: 'left'
		};
		var textHelp = "Click on animals to hear their sound.";
		this.textHelp = this.game.add.text(20, 50, textHelp, styleHelp);
		this.textHelp.anchor.setTo(0, 0.5);
		this.textHelp.visible = false;

		/*Create array of animals*/
		var animalData = [
			{key: 'lion', text: 'LION', audio: 'lionSound'},
			{key: 'monkey', text: 'MONKEY', audio: 'monkeySound'},
			{key: 'dog', text: 'DOG', audio: 'dogSound'},
			{key: 'cat', text: 'CAT', audio: 'catSound'},
			{key: 'duck', text: 'DUCK', audio: 'duckSound'},
			{key: 'cow', text: 'COW', audio: 'cowSound'},
			{key: 'sheep', text: 'SHEEP', audio: 'sheepSound'},
			{key: 'rooster', text: 'ROOSTER', audio: 'roosterSound'},
			{key: 'wolf', text: 'WOLF', audio: 'wolfSound'},
			{key: 'horse', text: 'HORSE', audio: 'horseSound'},
		];

		/*Add group animal*/
		this.animalGroup = this.game.add.group();

		var self = this;
		var animal;
		animalData.forEach(function(element) {
			animal = self.animalGroup.create(-1000, self.game.world.centerY, element.key, 0);
			animal.customParams = {text: element.text, sound: self.game.add.audio(element.audio)};
			animal.anchor.setTo(0.5);
			animal.scale.setTo(0.5, 0.5);
			//animal.animations.add('animate', [0, 1, 2, 3, 4], 5, true);
			animal.inputEnabled = true;
			animal.input.pixelPerfectClick = true;
			animal.events.onInputDown.add(self.animateAnimal, self);
		});

		this.currentAnimal = this.animalGroup.next();
		this.currentAnimal.position.set(this.game.world.centerX, this.game.world.centerY);
		this.showText(this.currentAnimal);

		//Left Arrow
		this.leftArrow = this.game.add.sprite(40, this.game.world.centerY, 'arrow');
		this.leftArrow.anchor.setTo(0.5);
		this.leftArrow.scale.setTo(0.1, 0.1);
		this.leftArrow.customParams = {direction: -1};

		//left arrow allow user input click
		this.leftArrow.inputEnabled = true;
		this.leftArrow.input.pixelPerfectClick = true;
		this.leftArrow.events.onInputDown.add(this.switchAnimal, this);
		this.leftArrow.events.onInputUp.add(this.hoverEffect, this);

		//Right Arrow
		this.rightArrow = this.game.add.sprite(600, this.game.world.centerY, 'arrow');
		this.rightArrow.anchor.setTo(0.5);
		this.rightArrow.scale.setTo(-0.1, 0.1);
		this.rightArrow.customParams = {direction: 1};

		//Right Arrow user input click
		this.rightArrow.inputEnabled = true;
		this.rightArrow.input.pixelPerfectClick = true;
		this.rightArrow.events.onInputDown.add(this.switchAnimal, this);
		this.rightArrow.events.onInputUp.add(this.hoverEffect, this);
	},

	update: function(){

	},

	switchAnimal : function(sprite, event){
		sprite.alpha = 0.4;

		var newAnimal, endX;
		if(this.isMoving)
		{
			return false;
		}
		this.isMoving = true;
		this.animalText.visible = false;

		if(sprite.customParams.direction > 0)
		{
			newAnimal = this.animalGroup.next();
			newAnimal.x = -newAnimal.width/2;
			endX = 640 + this.currentAnimal.width/2;
		}
		else 
		{
			newAnimal = this.animalGroup.previous();
			newAnimal.x = 640 + newAnimal.width/2;
			endX = -this.currentAnimal.width/2;
		}

		//Tao tween cho newAnimal
		var newAnimalMovement = this.game.add.tween(newAnimal);
		newAnimalMovement.to({x: this.game.world.centerX}, 500);
		newAnimalMovement.onComplete.add(function(){
			this.isMoving = false;
			this.showText(newAnimal);
		}, this);
		newAnimalMovement.start();

		//Tao tween cho currentAnimal
		var newCurrentAnimalMovement = this.game.add.tween(this.currentAnimal);
		newCurrentAnimalMovement.to({x: endX}, 500);
		newCurrentAnimalMovement.start();
		// this.currentAnimal.x = endX;
		// newAnimal.x = this.game.world.centerX;
		this.currentAnimal = newAnimal;

		//1. Get the direction of arrow

		//2. Get next animal

		//3. get final destination of animal

		//4. move current animal to final destination

		//5. set the next animal as the new current animal
	},

	animateAnimal: function(sprite, event){
		//sprite.play('animate');
		sprite.customParams.sound.play();
	},

	showText: function(animal){
		if(!this.animalText){
			var style = {
				font: 'bold 30pt Arial',
				fill: '#FF0000',
				align: 'center'
			};
			this.animalText = this.game.add.text(this.game.width/2, this.game.height*0.85, '', style);
			this.animalText.anchor.setTo(0.5);
		}
		this.animalText.setText(animal.customParams.text);
		this.animalText.visible = true;
	},

	hoverEffect: function(sprite, event){
		sprite.alpha = 1;
	},

	helpDown: function(sprite, event){
		sprite.alpha = 0.4;	
		this.textHelp.visible = true;
	},

	helpUp: function(sprite, event){
		sprite.alpha = 1;
		this.textHelp.visible = false;
	}

};