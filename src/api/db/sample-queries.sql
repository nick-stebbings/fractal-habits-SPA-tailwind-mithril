-- domain seed
INSERT INTO
  domains (name, description, rank, hashtag)
VALUES
  (
    'Physical Health',
    'Eating, sleeping, not being chased by a bear...',
    1,
    '#physical'
  );

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

-- TODO:
-- convert d3fc generated data into boolean values to be inserted into node_date for each LEAF NODE (id's 3,4,6,7), for each date


