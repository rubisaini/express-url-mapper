// Require querystring module to stringify query parms in given url
var querystring = require('querystring');

var urlMapper = function (app, data, done) {
    var urlMapList = data;

    // Throw error if data is not present
    if (!urlMapList) {
        done('Data is not present');
        return;
    }

    // Iterate url list to define dynamic routing from old url to new url
    urlMapList.forEach(function (mapUrl) {

        // Define routing only when old url and new url are different
        if (mapUrl.oldUrl && mapUrl.newUrl && mapUrl.oldUrl.trim() !== mapUrl.newUrl.trim()) {
            app.route(mapUrl.oldUrl).get(function (req, res) {

                // Extract query parms from old url and append these with new url
                var queryObj = req.query, optionalOp = '';
                if (Object.keys(queryObj).length) {
                    optionalOp = '?';
                }

                // redirect to new url corresponding to old url
                // Redirect with given status code if code is not present then redirect with 301 code i.e permanent redirection

                res.redirect(mapUrl.redirectionType || 301, mapUrl.newUrl + optionalOp + querystring.stringify(queryObj));
            });
        }
    });
    done(null, 'Routing defined successfully');
};

// export urlMapper
module.exports = {urlMapper: urlMapper};