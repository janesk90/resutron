l=[".NET Framework",
"Agile",
"AJAX",
"Angular 4+",
"APIs",
"ASP.NET",
"Big data",
"Bootstrap",
"C",
"C#",
"C++",
"Cake3",
"Chrome",
"CI/CD",
"CSS",
"Cucumber",
"Docker",
"Decomposition",
"Eclipse",
"Edge",
"Firefox",
"Functional programming",
"Git",
"GitHub",
"HTML5",
"IntelliJ",
"Internet Explorer",
"Java",
"Javascript",
"Jenkins",
"Jira",
"jQuery",
"JSON",
"LAMP",
"Linux",
"Machine learning",
"Mariadb",
"MEAN",
"Microservices",
"Microsoft SQL Server",
"MongoDB",
"monorepo",
"MVC",
"MySQL",
"nltk",
"nodejs",
"nx",
"nxdev",
"Object-Oriented design",
"Pandas",
"PHP",
"Postman",
"Protractor",
"Python2.7+",
"Python3+",
"Rapid Prototyping",
"REST",
"scikit",
"Service Oriented Architecture",
"sklearn",
"SOAP",
"Software Development",
"SQL",
"SQLite",
"Technical Writing",
"Typescript",
"Ubuntu",
"Unit Testing",
"User Interface (UI)",
"Visual Studio",
"vscode",
"Waterfall",
"Web Services",
"Written Communication",
"XML"]
phrases = []
for i in l:
	phrases.append("""INSERT INTO skills (skills_name) VALUES ("{0}");""".format(i))
phrases.append("""INSERT INTO persons (persons_firstname, persons_middlename, persons_lastname, persons_phone) VALUES ('Kenneth', 'Steven', 'Janes', '1-609-923-5266');""")
# I want to take advantage of order in this population script because honestly I don't care that much about making this "pure"
companies = ['radius180', 'Comcast', 'The National Science Foundation', 'Rowan University']
for c in companies:
	phrases.append("""INSERT INTO companies (companies_name) VALUES ('{0}');""".format(c))
positions = [('Software Engineer', 1,'2018-01-29','2019-08-09'),('Quality Assurance Engineer', 2,'2014-09-01','2017-08-11'),('Teaching Assistant', 3,'2013-01-01','2014-05-11'),('Peer Tutor', 4,'2012-01-01','2013-05-11')]
for p,c,s,e in positions:
	phrases.append("""INSERT INTO positions (persons_id, positions_title, companies_id, positions_start, positions_end) VALUES (1, '{0}',{1},'{2}','{3}');""".format(p, c, s, e))
notes = [["""Participate in a scrum/agile team""",
"""Contribute to and maintain multiple projects across several tech stacks including LAMP, MEAN, and .NET""",
"""Contribute to and maintain projects which span multiple tech stacks due to legacy""",
"""Design and implement solutions ranging from internal applications to customer facing websites for clients""",
"""Design, document, and implement front end tests/browser compatibility""",
"""Manage development environment health""",
"""Deploy code to development environments with Jenkins/Docker or manual for legacy projects""",
"""Collaborate with clients to determine required specifications for custom software solutions""",
"""Document application workflows for clients and technical teams, adapt documentation as necessary for particular audiences""",
"""Mentor juniors on the Radius180 internal application development team""",
"""Lead engineer and data migrations manager for wernerstore.com""",
"""File bugs/feature requests in JIRA""",
"""Monitor production environment health/post-release"""],
["""Participate in a scrum/agile team""",
"""Write and maintain testing tools for multiple SOA solutions""",
"""Contribute to an integrations test framework written in Java/Spring/Hibernate""",
"""Maintain several testing frameworks and quality of life tools driven by Python3, Splunk, and Jenkins for a manual quality assurance team including setup for several Jenkins pipelines""",
"""Curate manual testing stories from previous sprints and implement automations for those tests""",
"""Perform manual testing of sprint features""",
"""Design, implement, and participate in smoke tests, functional tests, integration tests, manual tests""",
"""Manually validate data in test and production environments""",
"""Designed general, minimalist regression test framework with Python3, Splunk, RobotFramework""",
"""Manage maven build scripts, repositories, artifacts""",
"""Validate RESTful API responses in XML, JSON, HTML, Atom""",
"""File bugs in JIRA"""],
["""Design/implement teaching materials to be used at various colleges, including""",
"""example solutions to various approaches which tackle the traveling salesperson""",
"""problem and Sudoku"""],
["""Tutor peers in Computer Science courses, by appointment""",
"""Object-oriented programming, introductory programming courses, low level""",
"""architecture design, discrete mathematics""",
"""(peak activity: 7 students per week)"""]]
counter = 1
for i in notes:
	for j in i:
		phrases.append("""INSERT INTO position_notes (position_notes_text, positions_id) VALUES ("{0}",{1});""".format(j, counter))
	counter += 1;
counter = 1
for i in l:
	phrases.append("""INSERT INTO skills_to_persons (skills_id, persons_id) VALUES ({0},1);""".format(counter))
	counter += 1
for i in ['Diploma', 'Degree', 'Award', 'Induction', 'Certification']:
	phrases.append("""INSERT INTO accolade_types (accolade_types_name) VALUES ('{0}');""".format(i))
for i,j in [('Master of Science, Computer Science',2), ('Bachelor of Science, Computer Science',2), ('Upsilon Pi Epsilon Member',4), ("Dean's List",3)]:
	phrases.append("""INSERT INTO accolades (accolades_name, accolade_types_id) VALUES ("{0}",{1});""".format(i,j))


for p in phrases:
	print(p)