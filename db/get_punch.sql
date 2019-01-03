select id, kind, to_char("date", 'YYYY-MM-DD') as date, day, time from clockit
where id = ${id};