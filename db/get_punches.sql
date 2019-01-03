select id, kind, to_char("date", 'MM/DD/YYYY') as date, day, to_char("time", 'HH12:MI am') as time_formatted from clockit
order by date asc, time asc;