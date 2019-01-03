-- JUST IN CASE YOU NEED TO RESTART
drop table if exists clockit;

-- INITIAL TABLE CREATION
create table clockit (
    id serial primary key,
    kind varchar(3),
    date date,
    day text,
    time time
);

-- DUMMY DATA
insert into clockit (kind, date, day, time) values 
    ('in', '11/2/18', 'Friday', '9:01:00'), 
    ('in', '11/5/18', 'Monday', '8:59:00'),
    ('out', '11/2/18', 'Friday', '17:01:00'), 
    ('out', '11/5/18', 'Monday', '17:00:00'),
    ('in', '11/6/18', 'Tuesday', '9:00:00');
