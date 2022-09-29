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

export default defineEventHandler((event) => {
    const headers = event.req.headers;
    
    if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
        sendRedirect(event,"https://news.bongda1.net"+event.req.url);
    }
})