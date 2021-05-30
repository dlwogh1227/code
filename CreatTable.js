let update_table = function(code, trade_price, signed_change_price, change, signed_change_rate){
    var tableName = BTCname.find(
        function(element){
            if(element.market === code){
                return true;
            }
        }
    );

    if(change == "RISE"){
        var tablecolor = "table-info";
        $('#'+code).attr("class",tablecolor);
        var text = "";
        text += trade_price;
        text += "(+";
        text += signed_change_price;
        text += ")";
        $('#'+code).find('.price').text(text);
        var signed_change_percent = signed_change_rate*100;
        $('#'+code).find('.rate').text('+'+signed_change_percent.toFixed(2)+'%');
    }else if(change == "FALL"){  
        var tablecolor = "table-danger";
        $('#'+code).attr("class",tablecolor);
        var text = "";
        text += trade_price;
        text += "(";
        text += signed_change_price;
        text += ")";
        $('#'+code).find('.price').text(text);
        var signed_change_percent = signed_change_rate*100;
        $('#'+code).find('.rate').text(signed_change_percent.toFixed(2)+'%');
    }else if(change == "EVEN"){
        var tablecolor = "table-light";
        $('#'+code).attr("class",tablecolor);
        var text = "";
        text += trade_price;
        text += "(";
        text += signed_change_price;
        text += ")";
        $('#'+code).find('.price').text(text);
        var signed_change_percent = signed_change_rate*100;
        $('#'+code).find('.rate').text(signed_change_percent.toFixed(2)+'%');
    }

    // $('#'+code).find('tr').attr("class",tablecolor);
    // $('#'+code).find('th').text(tableName.korean_name);
    // var text = "";
    // text += trade_price;
    // text += "(";
    // text += signed_change_price;
    // text += ")";
    // $('#'+code).find('#price').text(text);
    // $('#'+code).find('#rate').text(signed_change_rate);

    // `
    // <table class="table table-hover col-md-4 col-xs-12">
    //     <tbody>
    //         <tr class="${tablecolor}"  onClick="location.href='#'">
    //             <th scope="row">${tableName.korean_name}</th>
    //             <td id="price">${trade_price}(${signed_change_price})</td>
    //             <td id="rate">${signed_change_rate}</td>
    //         <tr>
    //     </tbody>
    // </table>
    // `
                
}

let create_table = function(tableName, market){
    return      `
                <tr id=${market} onClick="location.href='#'">
                    <th scope="row">${tableName}</th>
                    <td class="price"></td>
                    <td class="rate"></td>
                <tr>               
                `
}

