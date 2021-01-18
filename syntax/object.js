var member = ['egoing', 'hoya'];

var i=0;
while(i<member.length){
    console.log('array loop',member[i]);
    i=i+1;
}

var roles = {
    'programmer':'egoing',
    'designer':'k8805',
    'manager':'hoya'
}

console.log(roles.designer);    

for(var name in roles){
    console.log('object=>',name,'value=>',roles[name]);
}