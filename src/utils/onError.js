import status from "http-status";

function onError(error, req, res) {
  res.status(status.INTERNAL_SERVER_ERROR).json({
    message: error.message,
  });
}

export default onError;
