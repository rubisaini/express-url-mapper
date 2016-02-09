var querystring = require('querystring');

module.export = function (app, data, done) {
    var urlMapList = data;
    if (!urlMapList) {
        done('Data is not present');
        return;
    }
    urlMapList.forEach(function (mapUrl) {
        if (mapUrl.oldUrl && mapUrl.newUrl && mapUrl.oldUrl.trim() !== mapUrl.newUrl.trim()) {
            app.route(mapUrl.oldUrl).get(function (req, res) {
                var queryObj = req.query, optionalOp = '';
                if (Object.keys(queryObj).length) {
                    optionalOp = '?';
                }
                res.redirect(mapUrl.redirectionType || 301, mapUrl.newUrl + optionalOp + querystring.stringify(queryObj));
            });
        }
    });
    done(null, 'Routing defined successfully');
};