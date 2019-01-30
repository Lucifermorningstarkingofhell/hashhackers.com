if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
	navigator.serviceWorker.register(hashhackers_sw.url)
	.then(function(registration) { console.log('BhadooSW Registered Successfully'); registration.update(); })
	.catch(function(error) { console.log('Registration failed with ' + error); });
  });
}
