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
    // console.log(slugArray);
    const headers = event.req.headers;

    // if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
        // sendRedirect(event,`https://${slugArray[1]}/blog/${slugArray[2]}`);
        appendHeader(event, 'LinkReferer', `facebook.com`);
        appendHeader(event, 'Location', `https://${slugArray[1]}/blog/${slugArray[2]}`);
        // appendHeader(event, 'Status Code', '302');
        // sendRedirect(event,`https://${slugArray[1]}/blog/${slugArray[2]}`);
    // }
})