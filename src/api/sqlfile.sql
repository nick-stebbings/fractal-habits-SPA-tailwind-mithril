--
-- PostgreSQL database dump
--

-- Dumped from database version 11.14 (Debian 11.14-1.pgdg90+1)
-- Dumped by pg_dump version 11.14 (Debian 11.14-1.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: dates; Type: TABLE; Schema: public; Owner: sinatra
--

CREATE TABLE public.dates (
    id integer NOT NULL,
    h_date timestamp with time zone NOT NULL
);


ALTER TABLE public.dates OWNER TO sinatra;

--
-- Name: dates_id_seq; Type: SEQUENCE; Schema: public; Owner: sinatra
--

ALTER TABLE public.dates ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.dates_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: domains; Type: TABLE; Schema: public; Owner: sinatra
--

CREATE TABLE public.domains (
    id integer NOT NULL,
    name character varying(50),
    description character varying(80),
    rank integer,
    hashtag text
);


ALTER TABLE public.domains OWNER TO sinatra;

--
-- Name: domains_id_seq; Type: SEQUENCE; Schema: public; Owner: sinatra
--

ALTER TABLE public.domains ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.domains_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: habit_dates; Type: TABLE; Schema: public; Owner: sinatra
--

CREATE TABLE public.habit_dates (
    habit_id integer NOT NULL,
    date_id integer NOT NULL,
    completed_status boolean
);


ALTER TABLE public.habit_dates OWNER TO sinatra;

--
-- Name: habit_nodes; Type: TABLE; Schema: public; Owner: sinatra
--

CREATE TABLE public.habit_nodes (
    id integer NOT NULL,
    parent_id integer,
    lft integer NOT NULL,
    rgt integer NOT NULL
);


ALTER TABLE public.habit_nodes OWNER TO sinatra;

--
-- Name: habit_nodes_id_seq; Type: SEQUENCE; Schema: public; Owner: sinatra
--

ALTER TABLE public.habit_nodes ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.habit_nodes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: habits; Type: TABLE; Schema: public; Owner: sinatra
--

CREATE TABLE public.habits (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(80),
    initiation_date timestamp with time zone NOT NULL,
    domain_id integer,
    habit_node_id integer
);


ALTER TABLE public.habits OWNER TO sinatra;

--
-- Name: habits_id_seq; Type: SEQUENCE; Schema: public; Owner: sinatra
--

ALTER TABLE public.habits ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.habits_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: sinatra
--

CREATE TABLE public.schema_migrations (
    filename text NOT NULL
);


ALTER TABLE public.schema_migrations OWNER TO sinatra;

--
-- Data for Name: dates; Type: TABLE DATA; Schema: public; Owner: sinatra
--

COPY public.dates (id, h_date) FROM stdin;
2	2021-12-04 00:00:00+13
1	2021-12-03 00:00:00+13
\.


--
-- Data for Name: domains; Type: TABLE DATA; Schema: public; Owner: sinatra
--

COPY public.domains (id, name, description, rank, hashtag) FROM stdin;
1	Physical Health	Eating, sleeping, not being chased by a bear...	1	#physical
\.


--
-- Data for Name: habit_dates; Type: TABLE DATA; Schema: public; Owner: sinatra
--

COPY public.habit_dates (habit_id, date_id, completed_status) FROM stdin;
1	1	t
\.


--
-- Data for Name: habit_nodes; Type: TABLE DATA; Schema: public; Owner: sinatra
--

COPY public.habit_nodes (id, parent_id, lft, rgt) FROM stdin;
1	\N	1	2
\.


--
-- Data for Name: habits; Type: TABLE DATA; Schema: public; Owner: sinatra
--

COPY public.habits (id, name, description, initiation_date, domain_id, habit_node_id) FROM stdin;
1	Shop healthily	You are what you eat, so do not eat pizza every day	2021-12-03 00:00:00+13	1	1
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: sinatra
--

COPY public.schema_migrations (filename) FROM stdin;
20201218204822_create_domains.rb
20201218204831_create_habit_nodes.rb
20201218204834_create_habits.rb
20201218204901_create_dates.rb
20201218204918_create_habit_dates.rb
\.


--
-- Name: dates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sinatra
--

SELECT pg_catalog.setval('public.dates_id_seq', 2, true);


--
-- Name: domains_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sinatra
--

SELECT pg_catalog.setval('public.domains_id_seq', 1, true);


--
-- Name: habit_nodes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sinatra
--

SELECT pg_catalog.setval('public.habit_nodes_id_seq', 1, true);


--
-- Name: habits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sinatra
--

SELECT pg_catalog.setval('public.habits_id_seq', 1, true);


--
-- Name: dates dates_pkey; Type: CONSTRAINT; Schema: public; Owner: sinatra
--

ALTER TABLE ONLY public.dates
    ADD CONSTRAINT dates_pkey PRIMARY KEY (id);


--
-- Name: domains domains_pkey; Type: CONSTRAINT; Schema: public; Owner: sinatra
--

ALTER TABLE ONLY public.domains
    ADD CONSTRAINT domains_pkey PRIMARY KEY (id);


--
-- Name: habit_nodes habit_nodes_pkey; Type: CONSTRAINT; Schema: public; Owner: sinatra
--

ALTER TABLE ONLY public.habit_nodes
    ADD CONSTRAINT habit_nodes_pkey PRIMARY KEY (id);


--
-- Name: habits habits_pkey; Type: CONSTRAINT; Schema: public; Owner: sinatra
--

ALTER TABLE ONLY public.habits
    ADD CONSTRAINT habits_pkey PRIMARY KEY (id);


--
-- Name: habit_dates pk_habit_date; Type: CONSTRAINT; Schema: public; Owner: sinatra
--

ALTER TABLE ONLY public.habit_dates
    ADD CONSTRAINT pk_habit_date PRIMARY KEY (habit_id, date_id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: sinatra
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (filename);


--
-- Name: habits fk_domain_habit; Type: FK CONSTRAINT; Schema: public; Owner: sinatra
--

ALTER TABLE ONLY public.habits
    ADD CONSTRAINT fk_domain_habit FOREIGN KEY (domain_id) REFERENCES public.domains(id) ON DELETE CASCADE;


--
-- Name: habit_dates fk_habit_date_date; Type: FK CONSTRAINT; Schema: public; Owner: sinatra
--

ALTER TABLE ONLY public.habit_dates
    ADD CONSTRAINT fk_habit_date_date FOREIGN KEY (date_id) REFERENCES public.dates(id);


--
-- Name: habit_dates fk_habit_date_habit; Type: FK CONSTRAINT; Schema: public; Owner: sinatra
--

ALTER TABLE ONLY public.habit_dates
    ADD CONSTRAINT fk_habit_date_habit FOREIGN KEY (habit_id) REFERENCES public.habits(id) ON DELETE CASCADE;


--
-- Name: habits fk_habit_habit_node; Type: FK CONSTRAINT; Schema: public; Owner: sinatra
--

ALTER TABLE ONLY public.habits
    ADD CONSTRAINT fk_habit_habit_node FOREIGN KEY (habit_node_id) REFERENCES public.habit_nodes(id) ON DELETE CASCADE;


--
-- Name: habit_nodes fk_parent_child_linkage; Type: FK CONSTRAINT; Schema: public; Owner: sinatra
--

ALTER TABLE ONLY public.habit_nodes
    ADD CONSTRAINT fk_parent_child_linkage FOREIGN KEY (parent_id) REFERENCES public.habit_nodes(id);


--
-- PostgreSQL database dump complete
--

