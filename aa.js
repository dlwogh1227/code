var symbols = new Array();
for(i in BTCname){
    symbols.push(BTCname[i].market);
}
var parameter = {"type":"ticker", "symbols":symbols, "tickTypes":["24H"]};  
var ws = new WebSocket("wss://pubwss.bithumb.com/pub/ws");
ws.onopen = () => {
    ws.send(JSON.stringify(parameter));
    ws.onmessage = function(event){
        console.log(event.data);
    }
}  
