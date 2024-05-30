const httpErrorMessages = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  409: 'Conflict',
};

class HttpErrors extends Error {
  constructor(status, message = httpErrorMessages[status]) {
    super(message);
    this.status = status;
  }
}

const errors = {
  HttpErrors,
};

module.exports = errors;
