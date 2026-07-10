-- Create Players table
CREATE TABLE IF NOT EXISTS players (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  group_name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create Matches table
CREATE TABLE IF NOT EXISTS matches (
  id BIGSERIAL PRIMARY KEY,
  match_time TEXT NOT NULL,
  group_name TEXT NOT NULL,
  team_a TEXT NOT NULL,
  team_b TEXT NOT NULL,
  status TEXT DEFAULT 'scheduled',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create Scores table
CREATE TABLE IF NOT EXISTS scores (
  id BIGSERIAL PRIMARY KEY,
  match_id BIGINT REFERENCES matches(id) ON DELETE CASCADE,
  set1_team_a INTEGER,
  set1_team_b INTEGER,
  set2_team_a INTEGER,
  set2_team_b INTEGER,
  set3_team_a INTEGER,
  set3_team_b INTEGER,
  winner TEXT,
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create Standings table
CREATE TABLE IF NOT EXISTS standings (
  id BIGSERIAL PRIMARY KEY,
  group_name TEXT NOT NULL,
  player_name TEXT NOT NULL,
  points INTEGER DEFAULT 0,
  wins INTEGER DEFAULT 0,
  matches_played INTEGER DEFAULT 0,
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(group_name, player_name)
);

-- Enable Row Level Security
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE standings ENABLE ROW LEVEL SECURITY;
ALTER TABLE players ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to matches"
ON matches FOR SELECT
USING (true);

CREATE POLICY "Allow public read access to scores"
ON scores FOR SELECT
USING (true);

CREATE POLICY "Allow public read access to standings"
ON standings FOR SELECT
USING (true);

CREATE POLICY "Allow public read access to players"
ON players FOR SELECT
USING (true);

-- Create policies for public insert/update
CREATE POLICY "Allow public insert/update scores"
ON scores FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public update scores"
ON scores FOR UPDATE
USING (true);

CREATE POLICY "Allow public insert/update standings"
ON standings FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow public update standings"
ON standings FOR UPDATE
USING (true);
