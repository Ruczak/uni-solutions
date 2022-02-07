CREATE TABLE ProjectCategories
(
	Id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
	Name VARCHAR(20) NOT NULL
);

CREATE TABLE Projects
(
	Id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
	Name VARCHAR(30) NOT NULL,
	Description VARCHAR(max) NOT NULL,
	IdCategory INT,
	CreationDate DATE NOT NULL DEFAULT GETDATE(),
	CONSTRAINT fbk1_Projects FOREIGN KEY (IdCategory) REFERENCES ProjectCategories(Id)
);

