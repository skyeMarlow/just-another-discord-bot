module.exports = {
	name: 'roll',
	description: 'roll any dice',
	execute(message, args) {
		let str = args.toString();
		let rolling = str.split('d');

		let numToRoll = parseInt(rolling[0]);
		let diceNum = rolling[1];
		let total = 0;
		let rolls = '';

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