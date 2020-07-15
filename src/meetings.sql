create table meetings (
      id integer primary key,
      start_time varchar,
      end_time varchar
  );

   id | start_time | end_time
   ----+------------+-------------
    1  | 08:00      | 09:15
    2  | 13:20      | 15:20
    3  | 10:00      | 14:00
    4  | 13:55      | 16:25
    5  | 14:00      | 17:45
    6  | 14:05      | 17:45

 rooms
     -------
      4

 insert into meetings values (1, '08:00', '09:15');
insert into meetings values (2, '13:20', '15:20');
insert into meetings values (3, '10:00', '14:00');
insert into meetings values (4, '13:55', '16:25');
insert into meetings values (5, '14:00', '17:45');
insert into meetings values (6, '14:05', '17:45');

select * from meetings order by start_time;

SELECT max(rooms) FROM
(SELECT count(a.id) as rooms
FROM meetings a
LEFT JOIN meetings b on (a.start_time between b.start_time and b.end_time) 
GROUP BY a.id) as meetings_rooms
;