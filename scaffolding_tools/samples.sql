SELECT *
FROM   positions
       JOIN persons
         ON positions.persons_id = persons.persons_id
       JOIN position_notes
         ON position_notes.positions_id = positions.positions_id
ORDER  BY positions.positions_start DESC;

SELECT s.skills_name,
       p.persons_firstname,
       p.persons_lastname
FROM   skills s
       JOIN skills_to_persons stp
         ON s.skills_id = stp.skills_id
       JOIN persons p
         ON stp.persons_id = p.persons_id
ORDER  BY s.skills_name ASC;

SELECT *
FROM   accolades a
       JOIN accolade_types at
         ON a.accolade_types_id = at.accolade_types_id;

SELECT Count(*) AS skillcount,
       p.persons_firstname,
       p.persons_middlename,
       p.persons_lastname
FROM   skills_to_persons stp
       JOIN persons p
         ON stp.persons_id = p.persons_id
GROUP  BY stp.persons_id;

SELECT Count(*) AS accolade_count,
       ats.accolade_types_name
FROM   accolades a
       JOIN accolades_to_persons atp
         ON a.accolades_id = atp.accolades_id
       JOIN accolade_types ats
         ON ats.accolade_types_id = a.accolade_types_id
WHERE  persons_id = 1
GROUP  BY ats.accolade_types_id; 