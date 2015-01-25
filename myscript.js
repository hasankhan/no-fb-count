function resetCount() {
	// change color of globe
	var jewel = document.getElementById('fbNotificationsJewel');
	jewel.className = jewel.className.replace(/hasNew/, '');

	// remove count from globe
	jewlCount = document.getElementById('notificationsCountValue');
	jewlCount.className += ' hidden_elem';

	// remove count from somewhere else
	var jewlCount = document.querySelector('.jewelCount span');
	jewlCount.className += ' hidden_elem';

	// remove count from window title
	document.title = document.title.replace(/\(\d+\) /, '')
}

for (var i=0; i<5; i++) {
	setTimeout(resetCount, 1000*i);
}