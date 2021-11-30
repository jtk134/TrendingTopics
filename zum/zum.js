var Crawler = require("crawler");
 
var c = new Crawler({
    maxConnections : 10,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        } else{
            var $ = res.$;
            console.log('ZUM ' + $("title").text());
            
            const $bodyList1 = $("div.realtime_wrap").children("div.inner_box");
            const $bodyList2 = $("ul.slide_words_list li").children("div.cont");

            console.log('< ' + $bodyList1.find('span.time_data').text() + ' >');
            $bodyList2.each(function(i, elem) {
                console.log((i + 1) + ". " + $(this).find('span.word').text());
            });
        }
        done();
    }
});
 
c.queue('https://issue.zum.com/');
