var jewel = document.getElementById('fbNotificationsJewel');
var jewelButton = document.querySelector('#fbNotificationsJewel .jewelButton');
var jewelCount = document.getElementById('notificationsCountValue');
var notificationsFlyout = document.getElementById('fbNotificationsFlyout');


function resetCount() {
	// remove the flyout
	notificationsFlyout.remove();

	// change color of globe
	if (jewel.className.indexOf('hasNew') > -1) {
		jewel.className = jewel.className.replace(/hasNew/, '');
	}

	// remove count from globe
	if (jewelCount.className.indexOf('hidden_elem') == -1) {
		jewelCount.innerHTML = 'ツ';
	}

	// remove count from window title
	document.title = document.title.replace(/\(\d+\) /, '');
}

setInterval(resetCount, 1000);
