-- GrowthOS admin data foundation
CREATE TABLE IF NOT EXISTS admin_profiles (
 id SERIAL PRIMARY KEY,
 user_id TEXT UNIQUE NOT NULL,
 role TEXT DEFAULT 'admin',
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
