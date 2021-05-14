let create_table = function(code, trade_price, signed_change_price, change, signed_change_rate){
    if(change = "RISE"){
        var tablecolor = "table-danger";
    }else if(change = "FALL"){  
        var tablecolor = "table-info";
    }else if(change = "EVEN"){
        var tablecolor = "table-light";
    }

    var tableName = BTCname.find(
        function(element){
            if(element.market === code){
                return true;
            }
        }
    );
 
    return      `
                <table class="table table-hover col-md-4 col-xs-12">
                    <tbody>
                        <tr class="${tablecolor}"  onClick="location.href='#'">
                            <th scope="row">${tableName.korean_name}</th>
                            <td>${trade_price}(${signed_change_price})</td>
                            <td>${signed_change_rate}</td>
                        <tr>
                    </tbody>
                </table>
                `
                
}

