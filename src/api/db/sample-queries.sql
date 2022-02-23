-- domain seed
INSERT INTO domains (name, description, rank, hashtag) VALUES ( 'Physical Health', 'Eating, sleeping, not being chased by a bear...', 1, '#physical' );

-- habit seed
INSERT INTO
  habits (name, description, initiation_date, domain_id)
VALUES
  (
    'Shop healthily',
    'You are what you eat, so do not eat pizza every day',
    date_trunc('day', now()) :: timestamptz,
    1
  );

-- update habit to historical date
UPDATE
  habits
SET
  initiation_date = date_trunc('day', (now() - '1 month' :: interval));

-- insert enough habit nodes to create a small heirarchy under the seed domain ('Physical').
INSERT INTO
  habit_nodes
VALUES
  (1, null, 1, 2);

update habits set habit_node_id = 1;

-- insert interim days into date
WITH last_date_entry AS (
  SELECT
    DISTINCT initiation_date
  FROM
    habits
)
INSERT INTO
  dates (h_date)
SELECT
  generate_series
FROM
  generate_series(
    (
      select
        (initiation_date + '1 day' :: interval) -- remove 1 day interval if initiation date to be included
      FROM
        last_date_entry
    ),
    now() + '1 year' :: interval,
    '1 day' :: interval
  );

insert into habit_dates values (1,1,true);

CREATE OR REPLACE FUNCTION get_dom_nodes (integer) 
    RETURNS TABLE ( id INT, parent_id INT,
        lft INT,
        rgt INT
) 
AS $$
BEGIN
    RETURN QUERY SELECT
        hn.id, hn.parent_id, hn.lft, hn.rgt from habits as h inner join habit_nodes as hn on h.habit_node_id = hn.id where h.domain_id = $1;
END; $$ 
LANGUAGE 'plpgsql';

create view habit_node_depths_1 as (WITH dn as (select * from get_dom_nodes(1)) SELECT hn.id, (COUNT(parent.id) - 1) AS depth
FROM dn AS hn
CROSS JOIN dn AS parent
WHERE hn.lft BETWEEN parent.lft AND parent.rgt
GROUP BY hn.id ORDER BY hn.id);

create view habit_node_depths_2 as (WITH dn as (select * from get_dom_nodes(2)) SELECT hn.id, (COUNT(parent.id) - 1) AS depth
FROM dn AS hn
CROSS JOIN dn AS parent
WHERE hn.lft BETWEEN parent.lft AND parent.rgt
GROUP BY hn.id ORDER BY hn.id);

-- TODO:
-- convert d3fc generated data into boolean values to be inserted into node_date for each LEAF NODE (id's 3,4,6,7), for each date


-- update habit_nodes set rgt = 2;
-- insert into domains values (2, 'Career', 'Get the job you deserve', 2,'');
-- insert into habit_nodes values (2,null,1,2);
-- insert into habits values (2, 'Get your dream job', 'Do not settle for less', '2022-01-01 00:00:00+13'::timestamptz, 2, 2);
-- update habit_nodes set rgt = 2;
