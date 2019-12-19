module.exports = {
	name: 'roll',
	description: 'roll any dice',
	execute(message, args) {
		let str = args.toString();
		let rolling = str.split('d');
		let error = message.channel.send('please use the format [number of dice to roll]d[number of faces on the die]!');
		let numToRoll = parseInt(rolling[0]);
		let diceNum = rolling[1];
		let total = 0;
		let rolls = '';

		if (numToRoll == undefined || diceNum === undefined){ 
			return error;
		}
		if (numToRoll <= 0 || diceNum <=0){
			return error;
		}

		if (isNaN(numToRoll)) {numToRoll = 1;}

		for (let i = 0; i < numToRoll; i++){
			var thisRoll = (Math.floor(Math.random() * diceNum)) + 1;
			total += thisRoll;
			var tempCheck = (numToRoll - 1);
			if(i === tempCheck){
				rolls += thisRoll;
			}
			 else
			{
				rolls+= thisRoll + ' + ';
			}
		}

		message.channel.send(rolls + ' = ' + total);
		
	},
}; 