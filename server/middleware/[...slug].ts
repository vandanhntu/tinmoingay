/* export default  (req, res, next) => {
    console.log(req.url);
    const headers = req.headers;
    res.redirect("https://news.bongda1.net"+req.url);
    if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
        res.redirect("https://news.bongda1.net"+req.url);
    } else {
        next();
    }
};
 */

import {appendHeader} from "h3";

export default defineEventHandler((event) => {
    let slugArray = event.req.url.split('/');
    const headers = event.req.headers;

    // console.log('ts');
    // console.log(slugArray);
    let idGenerate = makeid(5);

    if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
        sendRedirect(event,`http://${slugArray[1]}/blog/${idGenerate}/${slugArray[2]}`);
    }
})

function makeid(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
