//javascript choose your own adventure game//

var adventure = function() {
	var user = prompt("You quickly enter into a dream where you are playing \
football. The quarterback says 'hike' and shoves the ball in your \
direction.  Do you GRAB the ball, turn and RUN away, or STAND still?").toLowerCase();

	switch(user) {
		case 'grab':
			var grab = prompt("You run toward the ball and grab it, tucking it under your arm as tight as possible.  Do you run LEFT or RIGHT?").toLowerCase();
			if (grab === 'left') {
            alert("You run left, but Hammerhead Johnson, the other team's bruising linebacker meets you at the scrimmage line and nearly takes off your head.  You wake up with a sore neck!");
			}
			else if (grab === 'right') {
				alert("You run right, and are nearly tackled by the defensive end, but you were able to spin our of his way.  You run hard.  You run far.  You make it into the endzone for the winning touchdown!!! You wake up pumped and ready to start the day.");
			}
			else {
				alert("You wake up.  That was weird");
			}
			break;
		case 'run':
			var run = prompt("You turn around in the opposite way and run as fast as you can to where you think the nearest exit would be. You go through the gate that leads to the locker rooms.  You come to a crossroad of hallways.  Do you go LEFT, RIGHT, or STRAIGHT?").toLowerCase();
			if (run === 'left') {
				alert("You come to a dead end and wake up feeling confused and frightened.");
			}
			else if (run === 'right') {
				alert("You come to a dead end and wake up feeling confused and frightened...");
			}
			else if (run === 'straight') {
				var doorOpen = prompt("You go straight and come to a door, do you open the door?").toLowerCase();
				var ready = prompt("Are you ready to leave?").toLowerCase();
					if (doorOpen === 'yes' && ready === 'yes') {
						alert("You get out of there.  You wake up feeling a little confused, but glad you were able to escape.");
					}
					else if (doorOpen == 'no' || ready === 'no') {
						alert("You hesitate....You feel this tingling in your stomach.  You pass out.  You wake up sick, wondering what just happened.");
					}
			}
			else {
				alert("You wake up.  That was weird.");
			}
            
			break;
		case 'stand':
			alert("You stand there, frozen.  You're not sure what to do, but you know you don't want to run toward the big men standing in your way.  Hammerhead Johnson, the large linebacker tears into the quarterback, making a dent in the ground with the quarterback's helmet.  You wake up feeling like you've dissapointed everyone.");
			break;
		default:
			alert ("You wake up from the dream.  That was weird");
			break;
	}
};
