var ws = new WebSocket("wss://api.upbit.com/websocket/v1");   // 업비트 코인 정보 가져오기
ws.binaryType = "arraybuffer";

var codeArr = "[";
for(i in BTCname){
    if(i==BTCname.length-1){
        codeArr += "\"";
        codeArr += BTCname[i].market;
        codeArr += "\"";
    }else{
        codeArr += "\"";
        codeArr += BTCname[i].market;
        codeArr += "\"";
        codeArr += ",";
    }
}
codeArr += "]"

ws.onopen = () => {
    ws.send(`[{"ticket":"test"},{"type":"ticker","codes":${codeArr}},{"format":"SIMPLE"}]`);
    ws.onmessage = function(event){
        var enc = new TextDecoder("utf-8");
        var arr =new Uint8Array(event.data);
        update_table(JSON.parse(enc.decode(arr)).cd, JSON.parse(enc.decode(arr)).tp, JSON.parse(enc.decode(arr)).scp, JSON.parse(enc.decode(arr)).c, JSON.parse(enc.decode(arr)).scr);
    }
}
