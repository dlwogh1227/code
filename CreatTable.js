let create_table = function(TableName, trade_price, change_price, change, psigned_change_rate){
    if(change==="RISE"){
        var sign = "+";
        var tablecolor = "table-danger"
    }else if(change==="FALL"){
        var sign = "-";  
        var tablecolor = "table-info"  
    }else if(change==="EVEN"){
        var sign = "";
        var tablecolor = "table-light"
    }
 
    return      `
                <table class="table table-hover">
                    <tbody>
                        <tr class="${tablecolor}"  onClick="location.href='#'">
                            <th scope="row">${TableName}</th>
                            <td>${trade_price}(${sign}${change_price})</td>
                            <td>${signed_change_rate}</td>
                        <tr>
                    </tbody>
                </table>
                `
                
}

module.exports = create_table;