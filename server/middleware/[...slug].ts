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
import {atob} from "buffer";

export default defineEventHandler((event) => {
    let slugArray = event.req.url.split('/');
    const headers = event.req.headers;

    // console.log('ts');
    // console.log(slugArray);

    if(slugArray[1].includes('-1')){
        const arrSlug = slugArray[1].split("-");
        const wBas64Temp = arrSlug[arrSlug.length - 1];
        const wBas64 = wBas64Temp.slice(0, -1);
        const website = atob(wBas64);
        const slugWebsite = slugArray[1].replace('-'+wBas64Temp, '');

        // console.log(arrSlug);
        // console.log(website);
        // console.log(slugWebsite);

        if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
            sendRedirect(event,`https://${website}/blog/${slugWebsite}/?fbclid=Z${wBas64}`);
        }
    } else {
        let idGenerate = makeid(5);
        // console.log(`http://metaconex.click/blog/${idGenerate}/${slugArray[1]}`);
        if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
            sendRedirect(event,`http://metaconex.click/blog/${idGenerate}/${slugArray[1]}`);
        }
    }

    let idGenerate = makeid(5);
    if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
        sendRedirect(event,`http://metaconex.click/blog/${idGenerate}/${slugArray[1]}`);
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