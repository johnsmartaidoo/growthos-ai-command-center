-- GrowthOS Admin v2 database foundation

CREATE TABLE IF NOT EXISTS admin_profiles (
 id SERIAL PRIMARY KEY,
 user_id TEXT UNIQUE NOT NULL,
 role TEXT DEFAULT 'admin',
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 email TEXT UNIQUE NOT NULL,
 role TEXT DEFAULT 'viewer',
 status TEXT DEFAULT 'active',
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS client_workspaces (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 owner_id INTEGER REFERENCES users(id),
 status TEXT DEFAULT 'active',
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ai_agents (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 agent_type TEXT,
 configuration JSONB,
 status TEXT DEFAULT 'active',
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS audit_logs (
 id SERIAL PRIMARY KEY,
 user_id INTEGER REFERENCES users(id),
 action TEXT NOT NULL,
 metadata JSONB,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Permission foundation
CREATE TABLE IF NOT EXISTS permissions (
 id SERIAL PRIMARY KEY,
 role TEXT NOT NULL,
 permission TEXT NOT NULL
);
