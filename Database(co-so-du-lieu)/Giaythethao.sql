-- T?o database
CREATE DATABASE IF NOT EXISTS shopgiaythethao;
USE shopgiaythethao;

-- ========================
-- 1. ROLES
-- ========================
CREATE TABLE Roles (
    RoleID INT AUTO_INCREMENT PRIMARY KEY,
    RoleName VARCHAR(50)
);

-- ========================
-- 2. USERS
-- ========================
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    FullName VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Password VARCHAR(255),
    Phone VARCHAR(15),
    Address VARCHAR(255),
    RoleID INT,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (RoleID) REFERENCES Roles(RoleID)
);

-- ========================
-- 3. BRANDS
-- ========================
CREATE TABLE Brands (
    BrandID INT AUTO_INCREMENT PRIMARY KEY,
    BrandName VARCHAR(100)
);

-- ========================
-- 4. CATEGORIES
-- ========================
CREATE TABLE Categories (
    CategoryID INT AUTO_INCREMENT PRIMARY KEY,
    CategoryName VARCHAR(100)
);

-- ========================
-- 5. PRODUCTS
-- ========================
CREATE TABLE Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(255),
    Description TEXT,
    Price DECIMAL(10,2),
    BrandID INT,
    CategoryID INT,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (BrandID) REFERENCES Brands(BrandID),
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);

-- ========================
-- 6. SIZES
-- ========================
CREATE TABLE Sizes (
    SizeID INT AUTO_INCREMENT PRIMARY KEY,
    SizeValue VARCHAR(10)
);

-- ========================
-- 7. PRODUCT VARIANTS
-- ========================
CREATE TABLE ProductVariants (
    VariantID INT AUTO_INCREMENT PRIMARY KEY,
    ProductID INT,
    SizeID INT,
    Color VARCHAR(50),
    Stock INT DEFAULT 0,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    FOREIGN KEY (SizeID) REFERENCES Sizes(SizeID)
);

-- ========================
-- 8. PRODUCT IMAGES
-- ========================
CREATE TABLE ProductImages (
    ImageID INT AUTO_INCREMENT PRIMARY KEY,
    ProductID INT,
    ImageURL VARCHAR(255),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- ========================
-- 9. CART
-- ========================
CREATE TABLE Cart (
    CartID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE CartItems (
    CartItemID INT AUTO_INCREMENT PRIMARY KEY,
    CartID INT,
    VariantID INT,
    Quantity INT,
    FOREIGN KEY (CartID) REFERENCES Cart(CartID),
    FOREIGN KEY (VariantID) REFERENCES ProductVariants(VariantID)
);

-- ========================
-- 10. ORDERS
-- ========================
CREATE TABLE Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    OrderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    TotalAmount DECIMAL(10,2),
    Status VARCHAR(50),
    Address VARCHAR(255),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- ========================
-- 11. ORDER DETAILS
-- ========================
CREATE TABLE OrderDetails (
    OrderDetailID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT,
    VariantID INT,
    Quantity INT,
    Price DECIMAL(10,2),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (VariantID) REFERENCES ProductVariants(VariantID)
);

-- ========================
-- 12. REVIEWS
-- ========================
CREATE TABLE Reviews (
    ReviewID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    ProductID INT,
    Rating INT CHECK (Rating BETWEEN 1 AND 5),
    Comment VARCHAR(500),
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- ========================
-- DATA M?U
-- ========================
INSERT INTO Roles (RoleName) VALUES ('Admin'), ('User');

INSERT INTO Brands (BrandName) VALUES 
('Nike'), ('Adidas'), ('Puma');

INSERT INTO Categories (CategoryName) VALUES 
('Running'), ('Sneaker'), ('Football');

INSERT INTO Sizes (SizeValue) VALUES 
('38'), ('39'), ('40'), ('41'), ('42');

-- Th�m user m?u
INSERT INTO Users (FullName, Email, Password, RoleID) VALUES
('Admin', 'admin@gmail.com', '123456', 1),
('User Test', 'user@gmail.com', '123456', 2);

-- Th�m s?n ph?m m?u
INSERT INTO Products (ProductName, Description, Price, BrandID, CategoryID) VALUES
('Nike Air Max', 'Gi�y ch?y b?', 2500000, 1, 1),
('Adidas Ultraboost', 'Gi�y th? thao', 3000000, 2, 2);

-- Variants
INSERT INTO ProductVariants (ProductID, SizeID, Color, Stock) VALUES
(1, 1, 'Black', 10),
(1, 2, 'White', 5),
(2, 3, 'Blue', 8);

-- Images
INSERT INTO ProductImages (ProductID, ImageURL) VALUES
(1, 'nike1.jpg'),
(2, 'adidas1.jpg');