var Crawler = require("crawler");
 
var c = new Crawler({
    maxConnections : 10,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        } else{
            var $ = res.$;
            console.log('nate 실시간 이슈 키워드');
            
            const $bodyList = $("ol.rankList").children("li.rl");

            console.log('');
            $bodyList.each(function(i, elem) {
                console.log((i + 1) + ". " + $(this).find('span.kw').text().slice((i+1)/10 + 1));
            });
        }
        done();
    }
});
 
c.queue('https://m.nate.com/');
