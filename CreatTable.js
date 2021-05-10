let create_table = function(TableName, contPrice, prevClosePrice, chgRate, chgAmt){
    if(contPrice>prevClosePrice){
        var sign = "+";
        var tablecolor = "table-danger"
    }else if(contPrice<prevClosePrice){
        var sign = "-";  
        var tablecolor = "table-info"  
    }else if(contPrice==prevClosePrice){
        var sign = "";
        var tablecolor = "table-light"
    }
 
    return      `
                <table class="table table-hover col-md-4 col-xs-12">
                    <tbody>
                        <tr class="${tablecolor}"  onClick="location.href='#'">
                            <th scope="row">${TableName}</th>
                            <td>${contPrice}(${sign}${chgAmt})</td>
                            <td>${sign}${chgRate}</td>
                        <tr>
                    </tbody>
                </table>
                `
                
}

module.exports = create_table();