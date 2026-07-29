// GrowthOS Admin v2 request validation helpers

function requireFields(payload, fields) {
  const missing = fields.filter((field) => !payload || !payload[field]);

  if (missing.length) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }

  return true;
}

module.exports = { requireFields };
