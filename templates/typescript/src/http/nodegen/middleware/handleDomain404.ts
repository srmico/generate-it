import http404 from '../errors/404';

import NodegenRequest from '../models/NodegenRequest.model';
import express = require('express');

/**
 * Required for if an unauthorised response should be thrown from a domain or controller
 * @returns {Function}
 */
export default () => {
  return (err: any, req: NodegenRequest, res: express.Response, next: express.NextFunction) => {
    if (err instanceof http404) {
      res.status(404);

      // respond with json
      if (req.accepts('json')) {
        return res.send({error: 'Not found'});
      }
      // default to plain-text. send()
      return res.type('txt').send('Not found');
    } else {
      next(err);
    }
  };
}
