var http = require('http');
var server = http.createServer();
var port = 80;

const childProcess = require('child_process');
var list1 = childProcess.execSync('node ./zum/zum.js').toString();
var list2 = childProcess.execSync('node ./nate/nate.js').toString();

server.listen(port, function(){
	console.log('Server Start, Port : ' + port);
});

server.on('request', function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write("<head>");
  res.write('<meta charset="UTF-8">');
  res.write("<title>실시간 검색어 모아보기</title>");
  res.write("<style>")
  res.write("div {width: 100%;text-align: center;border: 1px solid #003458;} div.left {width: 50%;float: left;box-sizing: border-box;text-align: center;} div.right {width: 50%;float: right;box-sizing: border-box;text-align: center;}")
  res.write("</style>")
  res.write("</head>");
  res.write("<body>");
  res.write("<div>")
  res.write("<h1>실시간 검색어 모아보기</h1>");
  res.write(new Date() + "<br/>");
  res.write("<br/>");
  res.write('<div class="left">')
  res.write("<h3>" + list1.split(',')[0].substring(5, list1.split(',')[0].length - 1) + "</h3>");
  res.write(list1.split(',')[1].substring(4, list1.split(',')[1].length - 1) + "<br/>");
  var i = 2;
  while(i < list1.split(',').length - 1) {
    var str1 = list1.split(',')[i];
    res.write("<b>" + str1.substring(4, str1.length - 1) + "</b>" + "<br/>");
    res.write('<a href="https://www.google.com/search?q=' + str1.substring(7, str1.length - 1) + '">Google</a>&ensp;');
    res.write('<a href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=' + str1.substring(7, str1.length - 1) + '">Naver</a>&ensp;');
    res.write('<a href="https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=' + str1.substring(7, str1.length - 1) + '">Daum</a>&ensp;');
    res.write('<a href="https://search.daum.net/nate?thr=sbma&w=tot&q=' + str1.substring(7, str1.length - 1) + '">Nate</a>&ensp;');
    res.write('<a href="https://search.zum.com/search.zum?method=uni&option=accu&qm=f_typing&rd=1&query=' + str1.substring(7, str1.length - 1) + '">Zum</a><br/>');
    i++;
  };
  res.write("<b>" + list1.split(',')[i].substring(4, list1.split(',')[i].length - 4) + "</b>" + "<br/>");
  res.write('<a href="https://www.google.com/search?q=' + list1.split(',')[i].substring(7, list1.split(',')[i].length - 4) + '">Google</a>&ensp;');
  res.write('<a href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=' + list1.split(',')[i].substring(7, list1.split(',')[i].length - 4) + '">Naver</a>&ensp;');
  res.write('<a href="https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=' + list1.split(',')[i].substring(7, list1.split(',')[i].length - 4) + '">Daum</a>&ensp;');
  res.write('<a href="https://search.daum.net/nate?thr=sbma&w=tot&q=' + list1.split(',')[i].substring(7, list1.split(',')[i].length - 4) + '">Nate</a>&ensp;');
  res.write('<a href="https://search.zum.com/search.zum?method=uni&option=accu&qm=f_typing&rd=1&query=' + list1.split(',')[i].substring(7, list1.split(',')[i].length - 4) + '">Zum</a><br/>');
  res.write("<br/>");
  res.write("</div>")

  res.write('<div class="right">')
  res.write("<h3>" + list2.split(',')[0].substring(6, list2.split(',')[0].length - 1) + "</h3>");
  res.write("<br/>");
  var j = 1;
  while(j < list2.split(',').length - 1) {
    var str2 = list2.split(',')[j];
    res.write("<b>" + str2.substring(4, str2.length - 1) + "</b>" + "<br/>");
    res.write('<a href="https://www.google.com/search?q=' + str2.substring(7, str2.length - 1) + '">Google</a>&ensp;');
    res.write('<a href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=' + str2.substring(7, str2.length - 1) + '">Naver</a>&ensp;');
    res.write('<a href="https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=' + str2.substring(7, str2.length - 1) + '">Daum</a>&ensp;');
    res.write('<a href="https://search.daum.net/nate?thr=sbma&w=tot&q=' + str2.substring(7, str2.length - 1) + '">Nate</a>&ensp;');
    res.write('<a href="https://search.zum.com/search.zum?method=uni&option=accu&qm=f_typing&rd=1&query=' + str2.substring(7, str2.length - 1) + '">Zum</a><br/>');
    j++;
  };
  res.write("<b>" + list2.split(',')[j].substring(4, list2.split(',')[j].length - 4) + "</b>" + "<br/>");
  res.write('<a href="https://www.google.com/search?q=' + list2.split(',')[j].substring(7, list2.split(',')[j].length - 4) + '">Google</a>&ensp;');
  res.write('<a href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=' + list2.split(',')[j].substring(7, list2.split(',')[j].length - 4) + '">Naver</a>&ensp;');
  res.write('<a href="https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=' + list2.split(',')[j].substring(7, list2.split(',')[j].length - 4) + '">Daum</a>&ensp;');
  res.write('<a href="https://search.daum.net/nate?thr=sbma&w=tot&q=' + list2.split(',')[j].substring(7, list2.split(',')[j].length - 4) + '">Nate</a>&ensp;');
  res.write('<a href="https://search.zum.com/search.zum?method=uni&option=accu&qm=f_typing&rd=1&query=' + list2.split(',')[j].substring(7, list2.split(',')[j].length - 4) + '">Zum</a><br/>');
  res.write("<br/>");
  res.write("</div>")
  res.write("</div>")
  res.write("</body>");
  res.write("</html>");	
  res.end();
});
