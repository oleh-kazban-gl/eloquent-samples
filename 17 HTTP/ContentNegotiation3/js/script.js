var btn = document.getElementById('btn1');

btn.onclick = send;

function send() {
    var headers = [
        'text/plain',
        'text/html',
        'application/json',
        'application/rainbows+unicorns'
    ];

    var headerType = 'Accept';

    function requestSite(type, data) {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://eloquentjavascript.net/author', false);
        request.setRequestHeader(type, data);

        request.send(null);

        var response = {
            status: request.status,
            statusText: request.statusText,
            request: request,
            headerType: type,
            header: data
        };

        return response;
    }

    headers.forEach(function (data) {
        try {
            console.log(requestSite(headerType, data))
        } catch(error) {
            console.log('Error: ' + error);
        }
    })
}

