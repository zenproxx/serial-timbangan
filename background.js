chrome.app.runtime.onLaunched.addListener(function () {

    chrome.app.window.create('index.html', {
        'outerBounds': {
            'width': 1366,
            'height': 768
        },
        'resizable': true,
    });

});
