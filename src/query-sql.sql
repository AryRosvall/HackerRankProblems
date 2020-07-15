--PostgreSQL 9.6
--'\\' is a delimiter

create table test_groups (
      name varchar(40) not null,
      test_value integer not null,
      unique(name)
  );

  create table test_cases (
      id integer not null,
      group_name varchar(40) not null,
      status varchar(5) not null,
      unique(id)
  );


insert into test_groups values ('performance', 15);
insert into test_groups values ('corner cases', 10);
insert into test_groups values ('numerical stability', 20);
insert into test_groups values ('memory usage', 10);
insert into test_cases values (13, 'memory usage', 'OK');
insert into test_cases values (14, 'numerical stability', 'OK');
insert into test_cases values (15, 'memory usage', 'ERROR');
insert into test_cases values (16, 'numerical stability', 'OK');
insert into test_cases values (17, 'numerical stability', 'OK');
insert into test_cases values (18, 'performance', 'ERROR');
insert into test_cases values (19, 'performance', 'ERROR');
insert into test_cases values (20, 'memory usage', 'OK');
insert into test_cases values (21, 'numerical stability', 'OK');



SELECT tg.name, 
count(status) all_test_cases, 
SUM (CASE WHEN status = 'OK' THEN 1 ELSE 0 END) AS passed_test_cases,
sum(CASE WHEN tc.status = 'OK' THEN test_value ELSE 0 END) AS total_value 
FROM test_groups tg
LEFT JOIN test_cases tc ON (tg.name = tc.group_name)
GROUP BY tg.name
ORDER BY total_value DESC, name
