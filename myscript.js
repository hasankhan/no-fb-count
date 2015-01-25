var jewel = document.getElementById('fbNotificationsJewel');
var jewelCount1 = document.getElementById('notificationsCountValue');
var jewelCount2 = document.querySelector('.jewelCount span');

function resetCount() {
	// change color of globe
	if (jewel.className.indexOf('hasNew') > -1) {
		jewel.className = jewel.className.replace(/hasNew/, '');
	}

	// remove count from globe
	if (jewelCount1.className.indexOf('hidden_elem') == -1) {
		jewelCount1.className += ' hidden_elem';
	}

	// remove count from somewhere else
	if (jewelCount2.className.indexOf('hidden_elem') == -1) {
		jewelCount2.className += ' hidden_elem';
	}

	// remove count from window title
	document.title = document.title.replace(/\(\d+\) /, '');
}

setInterval(resetCount, 1000);