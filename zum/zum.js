var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        } else{
            var $ = res.$;

            let List = [];
            List[0] = 'zum NOW 이슈 검색어';
            
            const $bodyList1 = $("div.realtime_wrap").children("div.inner_box");
            const $bodyList2 = $("ul.slide_words_list li").children("div.cont");

            List[1] =('< ' + $bodyList1.find('span.time_data').text() + ' >');
            $bodyList2.each(function(i, elem) {
                List[i + 2] = ((i + 1) + ". " + $(this).find('span.word').text());
            });
            console.log(List);
        }
        done();
    }
});

c.queue('https://issue.zum.com/');
