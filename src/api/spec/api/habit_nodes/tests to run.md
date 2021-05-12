<!-- tests to run.md -->

retrieve a habit_tree

- must be json
- if more than one node, must have parents linkages

<!-- Nodes -->

retrieve a node

- //must be json
- must have an id
- /must have a lft not null
- /must have a rgt not null
- /if not root node, must have parents linkages
- /if root node, must have nil parent
  /add a node
  /delete a node
  /update a node
  /put a node

<!-- Domains -->

/retrieve a domain
/ - must be json
/ - must have an id
/ - must have a description

- must have a rank
- hashtag
  add a domain
  delete a domain
  update a domain
  put a domain

<!-- Habit -->

retrieve a habit

- must be json
- must have an id
- must have a name
- must have a description
- must have an init date (REFERENCE DATES?)
- - fk_domain_habit
- - fk_habit_node_habit
    add a habit
    delete a habit
    update a habit
    put a habit

<!-- Dates -->

.retrieve a date

- must be json
  - must have an id
  - must have a date not null
  - must have a h_date not null
  - must have a completed status
    .add a date (the habit was completed)
  - must not be a duplicate (by concatenated id)
  - must not allow dates before the habits initiation

.delete a date (was not completed)
