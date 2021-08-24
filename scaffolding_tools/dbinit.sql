USE kr;
CREATE TABLE persons (
	persons_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    persons_firstname VARCHAR(100) NOT NULL,
    persons_middlename VARCHAR(100),
    persons_lastname VARCHAR(100) NOT NULL,
    persons_phone VARCHAR(30) UNIQUE
    -- I think the longest you can make a phone number is 22 characters and then extensions are a godless wasteland, besides, it's not gonna be a robocall system
    -- todo: create a trigger before insert to strip characters that aren't a number or an "x" as in extension notation
);
CREATE TABLE companies (
	companies_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    companies_name VARCHAR(255) NOT NULL
);
CREATE TABLE skills (
	skills_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    skills_name VARCHAR(255) NOT NULL
);
CREATE TABLE skills_to_persons ( -- there is a many to many relationship between skills and people, Steve and Ken both know python, for instance
	skills_to_persons_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    skills_id INT NOT NULL,
    FOREIGN KEY (skills_id) REFERENCES skills(skills_id),
    persons_id INT NOT NULL,
    FOREIGN KEY (persons_id) REFERENCES persons(persons_id)
);
CREATE TABLE positions ( -- a position is for a company and held by a person
	positions_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    positions_title VARCHAR(255) NOT NULL,
    positions_start DATE NOT NULL,
    positions_end DATE NOT NULL,
    companies_id INT NOT NULL, -- but are all positions for a company, really?
    FOREIGN KEY (companies_id) REFERENCES companies(companies_id),
    persons_id INT NOT NULL,
    FOREIGN KEY (persons_id) REFERENCES persons(persons_id)
);
CREATE TABLE position_notes ( -- positions can have many notes
	position_notes_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    position_notes_text TEXT NOT NULL,
    positions_id INT NOT NULL,
    FOREIGN KEY (positions_id) REFERENCES positions(positions_id)
);
CREATE TABLE accolade_types (
	accolade_types_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    accolade_types_name VARCHAR(100) NOT NULL
);
CREATE TABLE accolades (
	accolades_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    accolades_name VARCHAR(100) NOT NULL,
    accolade_types_id INT NOT NULL,
    FOREIGN KEY (accolade_types_id) REFERENCES accolade_types(accolade_types_id)
);
CREATE TABLE accolades_to_persons ( -- many people can have many accolades
	accolades_to_people_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    accolades_id INT NOT NULL,
    FOREIGN KEY (accolades_id) REFERENCES accolades(accolades_id),
    persons_id INT NOT NULL,
    FOREIGN KEY (persons_id) REFERENCES persons(persons_id)
);