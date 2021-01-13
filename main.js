var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname=url.parse(_url,true).pathname;
    
    if(pathname === '/'){
      if(queryData.id === undefined){
        fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
          var title='Welcome';
          var description='Hello Node.js';
          var template=`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                    
                </head>
                
                <body>
                    
                    <h1><a href="/">WEB</a></h1>
                    
    
                    <div id="grid">
                        <ul>
                            <li><a href="/?id=html">HTML</a></li>
                            <li><a href="/?id=css">CSS</a></li>
                            <li><a href="/?id=javascript">JavaScript</a></li>
                        </ul> 
                
                        <div id="article">
                          <h2>${title}</h2>
                          <p>${description}</p>
                            
                        </div>
                    </div>
    
    
                </body>
            </html>
            `;
            response.writeHead(200);
            response.end(template);
          });
      }else{
        fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
          var title=queryData.id;
          var template=`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                    
                </head>
                
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
              
                <body>
                    
                    <h1><a href="/">WEB</a></h1>
    
                    <div id="grid">
                        <ul>
                            <li><a href="/?id=html">HTML</a></li>
                            <li><a href="/?id=css">CSS</a></li>
                            <li><a href="/?id=javascript">JavaScript</a></li>
                        </ul> 
                
                        <div id="article">
                            <h2>${title}</h2>
                          <p>${description}</p>
                            
                        </div>
                    </div>
    
    
                </body>
            </html>
            `;
            response.writeHead(200);
            response.end(template);
          });
      }
    }else{
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);