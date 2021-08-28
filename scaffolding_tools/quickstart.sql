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
	accolades_to_persons_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    accolades_id INT NOT NULL,
    FOREIGN KEY (accolades_id) REFERENCES accolades(accolades_id),
    persons_id INT NOT NULL,
    FOREIGN KEY (persons_id) REFERENCES persons(persons_id)
);

INSERT INTO skills (skills_name) VALUES (".NET Framework");
INSERT INTO skills (skills_name) VALUES ("Agile");
INSERT INTO skills (skills_name) VALUES ("AJAX");
INSERT INTO skills (skills_name) VALUES ("Angular 4+");
INSERT INTO skills (skills_name) VALUES ("APIs");
INSERT INTO skills (skills_name) VALUES ("ASP.NET");
INSERT INTO skills (skills_name) VALUES ("Big data");
INSERT INTO skills (skills_name) VALUES ("Bootstrap");
INSERT INTO skills (skills_name) VALUES ("C");
INSERT INTO skills (skills_name) VALUES ("C#");
INSERT INTO skills (skills_name) VALUES ("C++");
INSERT INTO skills (skills_name) VALUES ("Cake3");
INSERT INTO skills (skills_name) VALUES ("Chrome");
INSERT INTO skills (skills_name) VALUES ("CI/CD");
INSERT INTO skills (skills_name) VALUES ("CSS");
INSERT INTO skills (skills_name) VALUES ("Cucumber");
INSERT INTO skills (skills_name) VALUES ("Docker");
INSERT INTO skills (skills_name) VALUES ("Decomposition");
INSERT INTO skills (skills_name) VALUES ("Eclipse");
INSERT INTO skills (skills_name) VALUES ("Edge");
INSERT INTO skills (skills_name) VALUES ("Firefox");
INSERT INTO skills (skills_name) VALUES ("Functional programming");
INSERT INTO skills (skills_name) VALUES ("Git");
INSERT INTO skills (skills_name) VALUES ("GitHub");
INSERT INTO skills (skills_name) VALUES ("HTML5");
INSERT INTO skills (skills_name) VALUES ("IntelliJ");
INSERT INTO skills (skills_name) VALUES ("Internet Explorer");
INSERT INTO skills (skills_name) VALUES ("Java");
INSERT INTO skills (skills_name) VALUES ("Javascript");
INSERT INTO skills (skills_name) VALUES ("Jenkins");
INSERT INTO skills (skills_name) VALUES ("Jira");
INSERT INTO skills (skills_name) VALUES ("jQuery");
INSERT INTO skills (skills_name) VALUES ("JSON");
INSERT INTO skills (skills_name) VALUES ("LAMP");
INSERT INTO skills (skills_name) VALUES ("Linux");
INSERT INTO skills (skills_name) VALUES ("Machine learning");
INSERT INTO skills (skills_name) VALUES ("Mariadb");
INSERT INTO skills (skills_name) VALUES ("MEAN");
INSERT INTO skills (skills_name) VALUES ("Microservices");
INSERT INTO skills (skills_name) VALUES ("Microsoft SQL Server");
INSERT INTO skills (skills_name) VALUES ("MongoDB");
INSERT INTO skills (skills_name) VALUES ("monorepo");
INSERT INTO skills (skills_name) VALUES ("MVC");
INSERT INTO skills (skills_name) VALUES ("MySQL");
INSERT INTO skills (skills_name) VALUES ("nltk");
INSERT INTO skills (skills_name) VALUES ("nodejs");
INSERT INTO skills (skills_name) VALUES ("nx");
INSERT INTO skills (skills_name) VALUES ("nxdev");
INSERT INTO skills (skills_name) VALUES ("Object-Oriented design");
INSERT INTO skills (skills_name) VALUES ("Pandas");
INSERT INTO skills (skills_name) VALUES ("PHP");
INSERT INTO skills (skills_name) VALUES ("Postman");
INSERT INTO skills (skills_name) VALUES ("Protractor");
INSERT INTO skills (skills_name) VALUES ("Python2.7+");
INSERT INTO skills (skills_name) VALUES ("Python3+");
INSERT INTO skills (skills_name) VALUES ("Rapid Prototyping");
INSERT INTO skills (skills_name) VALUES ("REST");
INSERT INTO skills (skills_name) VALUES ("scikit");
INSERT INTO skills (skills_name) VALUES ("Service Oriented Architecture");
INSERT INTO skills (skills_name) VALUES ("sklearn");
INSERT INTO skills (skills_name) VALUES ("SOAP");
INSERT INTO skills (skills_name) VALUES ("Software Development");
INSERT INTO skills (skills_name) VALUES ("SQL");
INSERT INTO skills (skills_name) VALUES ("SQLite");
INSERT INTO skills (skills_name) VALUES ("Technical Writing");
INSERT INTO skills (skills_name) VALUES ("Typescript");
INSERT INTO skills (skills_name) VALUES ("Ubuntu");
INSERT INTO skills (skills_name) VALUES ("Unit Testing");
INSERT INTO skills (skills_name) VALUES ("User Interface (UI)");
INSERT INTO skills (skills_name) VALUES ("Visual Studio");
INSERT INTO skills (skills_name) VALUES ("vscode");
INSERT INTO skills (skills_name) VALUES ("Waterfall");
INSERT INTO skills (skills_name) VALUES ("Web Services");
INSERT INTO skills (skills_name) VALUES ("Written Communication");
INSERT INTO skills (skills_name) VALUES ("XML");
INSERT INTO skills (skills_name) VALUES ("Modular Synthesis");
INSERT INTO persons (persons_firstname, persons_middlename, persons_lastname, persons_phone) VALUES ('Kenneth', 'Steven', 'Janes', '1-609-923-5266');
INSERT INTO companies (companies_name) VALUES ('radius180');
INSERT INTO companies (companies_name) VALUES ('Comcast');
INSERT INTO companies (companies_name) VALUES ('The National Science Foundation');
INSERT INTO companies (companies_name) VALUES ('Rowan University');
INSERT INTO positions (persons_id, positions_title, companies_id, positions_start, positions_end) VALUES (1, 'Software Engineer',1,'2018-01-29','2019-08-09');
INSERT INTO positions (persons_id, positions_title, companies_id, positions_start, positions_end) VALUES (1, 'Quality Assurance Engineer',2,'2014-09-01','2017-08-11');
INSERT INTO positions (persons_id, positions_title, companies_id, positions_start, positions_end) VALUES (1, 'Teaching Assistant',3,'2013-01-01','2014-05-11');
INSERT INTO positions (persons_id, positions_title, companies_id, positions_start, positions_end) VALUES (1, 'Peer Tutor',4,'2012-01-01','2013-05-11');
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Participate in a scrum/agile team",1);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Contribute to and maintain multiple projects across several tech stacks including LAMP, MEAN, and .NET",1);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Contribute to and maintain projects which span multiple tech stacks due to legacy",1);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Design and implement solutions ranging from internal applications to customer facing websites for clients",1);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Design, document, and implement front end tests/browser compatibility",1);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Manage development environment health",1);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Deploy code to development environments with Jenkins/Docker or manual for legacy projects",1);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Collaborate with clients to determine required specifications for custom software solutions",1);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Document application workflows for clients and technical teams, adapt documentation as necessary for particular audiences",1);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Mentor juniors on the Radius180 internal application development team",1);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Lead engineer and data migrations manager for wernerstore.com",1);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("File bugs/feature requests in JIRA",1);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Monitor production environment health/post-release",1);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Participate in a scrum/agile team",2);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Write and maintain testing tools for multiple SOA solutions",2);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Contribute to an integrations test framework written in Java/Spring/Hibernate",2);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Maintain several testing frameworks and quality of life tools driven by Python3, Splunk, and Jenkins for a manual quality assurance team including setup for several Jenkins pipelines",2);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Curate manual testing stories from previous sprints and implement automations for those tests",2);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Perform manual testing of sprint features",2);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Design, implement, and participate in smoke tests, functional tests, integration tests, manual tests",2);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Manually validate data in test and production environments",2);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Designed general, minimalist regression test framework with Python3, Splunk, RobotFramework",2);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Manage maven build scripts, repositories, artifacts",2);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Validate RESTful API responses in XML, JSON, HTML, Atom",2);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("File bugs in JIRA",2);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Design/implement teaching materials to be used at various colleges, including",3);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("example solutions to various approaches which tackle the traveling salesperson",3);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("problem and Sudoku",3);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Tutor peers in Computer Science courses, by appointment",4);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("Object-oriented programming, introductory programming courses, low level",4);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("architecture design, discrete mathematics",4);
INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("(peak activity: 7 students per week)",4);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (1,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (2,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (3,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (4,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (5,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (6,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (7,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (8,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (9,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (10,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (11,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (12,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (13,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (14,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (15,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (16,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (17,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (18,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (19,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (20,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (21,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (22,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (23,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (24,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (25,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (26,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (27,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (28,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (29,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (30,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (31,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (32,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (33,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (34,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (35,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (36,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (37,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (38,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (39,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (40,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (41,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (42,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (43,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (44,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (45,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (46,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (47,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (48,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (49,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (50,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (51,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (52,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (53,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (54,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (55,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (56,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (57,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (58,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (59,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (60,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (61,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (62,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (63,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (64,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (65,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (66,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (67,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (68,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (69,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (70,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (71,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (72,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (73,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (74,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (75,1);
INSERT INTO skills_to_persons (skills_id, persons_id) VALUES (76,1);
INSERT INTO accolade_types (accolade_types_name) VALUES ('Diploma');
INSERT INTO accolade_types (accolade_types_name) VALUES ('Degree');
INSERT INTO accolade_types (accolade_types_name) VALUES ('Award');
INSERT INTO accolade_types (accolade_types_name) VALUES ('Induction');
INSERT INTO accolade_types (accolade_types_name) VALUES ('Certification');
INSERT INTO accolades (accolades_name, accolade_types_id) VALUES ("Master of Science, Computer Science",2);
INSERT INTO accolades (accolades_name, accolade_types_id) VALUES ("Bachelor of Science, Computer Science",2);
INSERT INTO accolades (accolades_name, accolade_types_id) VALUES ("Upsilon Pi Epsilon Member",4);
INSERT INTO accolades (accolades_name, accolade_types_id) VALUES ("Dean's List",3);
INSERT INTO accolades_to_persons (accolades_id, persons_id) VALUES (1,1);
INSERT INTO accolades_to_persons (accolades_id, persons_id) VALUES (2,1);
INSERT INTO accolades_to_persons (accolades_id, persons_id) VALUES (3,1);
INSERT INTO accolades_to_persons (accolades_id, persons_id) VALUES (4,1);