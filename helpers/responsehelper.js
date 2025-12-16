const successResponse = (res, message, data = null) => {
  res.status(200).json({
    success: true,
    message,
    data
  });
};

const errorResponse = (res, message, error = null, status = 500) => {
  res.status(status).json({
    success: false,
    message,
    error
  });
};

module.exports = { successResponse, errorResponse };