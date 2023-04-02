# ER DIAGRAM


![Screenshot 2023-04-01 at 9.21.34 PM.png](..%2F..%2FDocuments%2FScreenshot%202023-04-01%20at%209.21.34%20PM.png)



## CREATION OF TABLES


-- Create the participants table
CREATE TABLE participants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    date_of_birth DATE NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    mode_of_participation VARCHAR(20) NOT NULL
);



-- Create the categories table
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);



-- Create the events table
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    category_id INTEGER NOT NULL,
    date DATE NOT NULL,
    location VARCHAR(255) NOT NULL,
    details TEXT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);



-- Create the scores table
CREATE TABLE scores (
    id SERIAL PRIMARY KEY,
    participant_event_id INTEGER NOT NULL,
    score TIME NOT NULL,
    FOREIGN KEY (participant_event_id) REFERENCES participants_events(id)
);



-- Create the age_groups table
CREATE TABLE age_groups (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);



-- Create the participants_age_groups join table
CREATE TABLE participants_age_groups (
    participant_id INTEGER NOT NULL,
    age_group_id INTEGER NOT NULL,
    PRIMARY KEY (participant_id, age_group_id),
    FOREIGN KEY (participant_id) REFERENCES participants(id),
    FOREIGN KEY (age_group_id) REFERENCES age_groups(id)
);



-- Create the participants_categories join table
CREATE TABLE participants_categories (
    participant_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    PRIMARY KEY (participant_id, category_id),
    FOREIGN KEY (participant_id) REFERENCES participants(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);



-- Create the participants_events join table
CREATE TABLE participants_events (
    id SERIAL PRIMARY KEY,
    participant_id INTEGER NOT NULL,
    event_id INTEGER NOT NULL,
    FOREIGN KEY (participant_id) REFERENCES participants(id),
    FOREIGN KEY (event_id) REFERENCES events(id)
);



## GIVEN QUERIES
1)
SELECT *
FROM participants p
JOIN participants_age_groups ag ON p.id = ag.participant_id
JOIN age_groups ags ON ag.age_group_id = ags.id
WHERE ags.name = '10-12';

2)
SELECT *
FROM participants p
JOIN participants_categories pc ON p.id = pc.participant_id
JOIN categories c ON pc.category_id = c.id
WHERE c.name = '3x3';

3)
SELECT *
FROM participants
WHERE name LIKE '%John%' OR phone LIKE '%555-1234%';

4)
SELECT p.name, s.score
FROM participants p
JOIN participants_age_groups ag ON p.id = ag.participant_id
JOIN age_groups ags ON ag.age_group_id = ags.id
JOIN participants_events pe ON p.id = pe.participant_id
JOIN events e ON pe.event_id = e.id
JOIN scores s ON pe.id = s.participant_event_id
WHERE ags.name = '12-' AND e.category_id = 2 AND e.date = '2023-05-01';

5)
SELECT p.name, SUM(s.score) as total_score
FROM participants p
JOIN participants_age_groups ag ON p.id = ag.participant_id
JOIN age_groups ags ON ag.age_group_id = ags.id
JOIN participants_events pe ON p.id = pe.participant_id
JOIN scores s ON pe.id = s.participant_event_id
WHERE ags.name = '10-12'
GROUP BY p.name
ORDER BY total_score ASC
LIMIT 1;

6)
SELECT ags.name, p.name, s.score
FROM participants p
JOIN participants_age_groups ag ON p.id = ag.participant_id
JOIN age_groups ags ON ag.age_group_id = ags.id
JOIN participants_events pe ON p.id = pe.participant_id
