var mysql = require('mysql');
var inquirer = require('inquirer')


var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'crocodile3',
	database: 'bamazon'


});

connection.connect(function (err){
	if (err) {
		throw err;
	}
	begin();
});


function begin() {
	inquirer.prompt(
        {
            name: "name",
            type: "input",
            message: "Enter Username"
        }
    ).then(function(res) {
        console.log('Welcome '+res.name);
        options();
    })
}

var options = function() {
    inquirer.prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?\n" ,
        	choices: [
        		'View products for sale',
        		'View low inventory',
        		'Add inventory',
        		'Add new product'
        	]
    }).then(function(answer) {
 		switch(answer) {
            case 'View products for sale':
            	console.log('works?');

            break;

            case 'View low inventory':
                lowinv();
            break;

            case 'Add inventory':
                addinv();
            break;

            case 'Add new product':
                addprod();
            break;
    	}
	})
}

var forsale = function(){
	console.log('workds?')
	 connection.query("SELECT * FROM Products", function(err, results) {
        if (err) throw err;
        for (var i = 0; i < results.length; i++) {
            console.log("#"+results[i].ItemID + "\nProduct: " + results[i].ProductName + "\nPrice: $" + results[i].Price + "\nQuantity in stock: "+ results[i].StockQuantity);
            console.log("|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|");
        }
	});
}


var lowinv = function(){
	console.log('asdsa')
}

var addinv = function(){
	console.log('asdsa')
}

var addprod = function(){
	console.log('asdsa')
}
// function lowinv(res){
// 	connection.query("SELECT * FROM Products WHERE ItemID = ?", [res.item], function(err, res) {
//             total = (res[0].Price * res.amount).toFixed();
//             if (res.amount > res[0].StockQuantity) {
//                 console.log("Insufficient quantity");
//                 discon();
//             } else {
//                 connection.query("UPDATE Products SET StockQuantity = StockQuantity - ? WHERE ItemID = ?", [res.amount, res.item], function(err, res) {

//                         console.log("Total cost: $" + total);
//                         discon();
//                     });
// }