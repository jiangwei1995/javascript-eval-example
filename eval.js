var str ='{"a":"b"}';
console.log(eval('(' + str + ')'));
console.log(JSON.parse(str));
eval("console.log('hahahahah');");