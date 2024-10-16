self.addEventListener('install', function(event) {
    console.log('Service worker installed.');
});

self.addEventListener('activate', function(event) {
    console.log('Service worker activated.');
});

self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'Time to check your savings goal!',
        icon: '00.jpg',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Goal Savr Reminder', options)
    );
});