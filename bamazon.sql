
CREATE DATABASE bamazon;


USE bamazon;

CREATE TABLE products (

	ItemID INTEGER(11) AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(30),
    DepartmentName VARCHAR(30) NOT NULL,
    Price INTEGER(10),
    StockQuantity INTEGER(10),

    PRIMARY KEY (ItemID)
);


INSERT INTO products (ItemID,ProductName,DepartmentName,Price,StockQuantity)
VALUES (1,'bread',"food",100,100);

INSERT INTO products (ItemID,ProductName,DepartmentName,Price,StockQuantity)
VALUES (2,'milk',"food",55,100);

INSERT INTO products (ItemID,ProductName,DepartmentName,Price,StockQuantity)
VALUES (3,'superbread',"food",1000,100);

INSERT INTO products (ItemID,ProductName,DepartmentName,Price,StockQuantity)
VALUES (4,'breade',"food",102,100);

INSERT INTO products (ItemID,ProductName,DepartmentName,Price,StockQuantity)
VALUES (5,'basketball',"balls",23,100);

INSERT INTO products (ItemID,ProductName,DepartmentName,Price,StockQuantity)
VALUES (6,'football',"balls",71,100);

INSERT INTO products (ItemID,ProductName,DepartmentName,Price,StockQuantity)
VALUES (7,'baseball',"balls",3,107);

INSERT INTO products (ItemID,ProductName,DepartmentName,Price,StockQuantity)
VALUES (8,'breadball',"balls",65,160);

INSERT INTO products (ItemID,ProductName,DepartmentName,Price,StockQuantity)
VALUES (9,'melon',"food",30,120);

INSERT INTO products (ItemID,ProductName,DepartmentName,Price,StockQuantity)
VALUES (10,'apple',"food",106,10);



SELECT * FROM products;
