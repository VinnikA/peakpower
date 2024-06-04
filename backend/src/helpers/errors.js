const httpErrorMessages = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  409: 'Conflict',
};

class HttpError extends Error {
  constructor(status, message = httpErrorMessages[status]) {
    super(message);
    this.status = status;
  }
}

const errors = {
  HttpError,
};

module.exports = errors;
