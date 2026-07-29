// GrowthOS Admin v2 API error handling foundation

function handleError(error, res) {
  const status = error.message === 'Unauthorized' ? 401 :
    error.message === 'Forbidden' ? 403 : 500;

  res.status(status).json({
    error: error.message || 'Internal server error'
  });
}

module.exports = { handleError };
