INSERT INTO
  domains (name, description, rank, hashtag)
VALUES
  (
    'Physical Health',
    'Eating, sleeping, not being chased by a bear...',
    1,
    '#physical'
  );

INSERT INTO
  habits (name, description, initiation_date, domain_id)
VALUES
  (
    'Shop healthily',
    'You are what you eat, so do not eat pizza every day',
    date_trunc('day', now()) :: timestamptz,
    1
  );

UPDATE
  habits
SET
  initiation_date = (date_trunc('day',now()) - '1 day' :: interval);

-- insert enough habit nodes to create a small heirarchy under the seed domain ('Physical').
INSERT INTO
  habit_nodes
VALUES
  (1, null, 1, 2);
  -- (2, 1, 2, 7),
  -- (3, 2, 3, 4),
  -- (4, 2, 5, 6),
  -- (5, 1, 8, 13),
  -- (6, 5, 9, 10),
  -- (7, 5, 11, 12);

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
        (initiation_date + '2 days' :: interval)
      FROM
        last_date_entry
    ),
    (now() +
    ('1 year' :: interval)
  )::timestamptz;
  
-- TODO:
-- convert d3fc generated data into boolean values to be inserted into node_date for each LEAF NODE (id's 3,4,6,7), for each date


