select * from 
	positions join persons on positions.persons_id = persons.persons_id
    join position_notes on position_notes.positions_id = positions.positions_id
    WHERE positions.positions_id = 1
    order by positions.positions_start desc;
select s.skills_name, p.persons_firstname, p.persons_lastname from skills s join skills_to_persons stp on s.skills_id = stp.skills_id join persons p on stp.persons_id = p.persons_id;
select * from accolades a join accolade_types at on a.accolade_types_id = at.accolade_types_id