// Health Monitors - Notificaciones
var http = require('http');
var fs = require('fs');
var path = require('path');

function checkNotifications() {
    var url = 'https://api.github.com/repos/ABBASABBUD100/Notificaciones254/issues';
    
    http.get(url, function(res) {
        var data = '';
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on('end', function() {
            try {
                var issues = JSON.parse(data);
                if (issues.length > 0) {
                    console.log('Notificaciones: ' + issues.length);
                }
            } catch(e) {
                console.log('Error parsing notifications');
            }
        });
    }).on('error', function(e) {
        console.log('Error fetching notifications: ' + e.message);
    });
}

checkNotifications();
