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
        list();
    })
}

function list() {
    connection.query("SELECT * FROM Products", function(err, results) {
        if (err) throw err;
        for (var i = 0; i < results.length; i++) {
            console.log("#"+results[i].ItemID + "\nProduct: " + results[i].ProductName + "\nPrice: $" + results[i].Price + "\nQuantity in stock: "+ results[i].StockQuantity);
            console.log("|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|");
        }
        purchase();
    })
}
function purchase() {
    inquirer.prompt([
        {
            type: "input",
            name: "item",
            message: "Please enter the ID of the product you wish to purchase",
        },
        {
            type: "input",
            name: "amount",
            message: "Enter amount",
        }
    ]).then(function(res) {
        connection.query("SELECT * FROM Products WHERE ItemID = ?", [res.item], function(err, result) {
            total = (result[0].Price * res.amount).toFixed();
            if (res.amount > result[0].StockQuantity) {
                console.log("Insufficient quantity");
                discon();
            } else {
                connection.query("UPDATE Products SET StockQuantity = StockQuantity - ? WHERE ItemID = ?", [res.amount, res.item], function(err, result) {

                        console.log("Total cost: $" + total);
                        discon();
                    });
            }
        })
    })
}

function discon() {
    connection.end(function(err) {
        if (err) throw err;
    })
}