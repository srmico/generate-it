"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var SwaggerUtils_1 = tslib_1.__importDefault(require("../SwaggerUtils"));
var params = [{
        "in": 'body',
        name: 'v1UserPasswordPut',
        required: true,
        schema: {
            type: 'object',
            required: ['password', 'newPassword'],
            properties: {
                password: { type: 'string' },
                newPassword: { type: 'string' },
                newPasswordConfirm: { type: 'string' }
            }
        }
    }, {
        name: 'limit',
        "in": 'query',
        description: 'How many items to return at one time (max 100)',
        required: false,
        schema: {
            type: 'integer',
            format: 'int32'
        }
    }, {
        name: 'sort',
        "in": 'query',
        description: 'Sort direction, asc or desc',
        required: false,
        schema: {
            type: 'string',
            "enum": [
                'asc',
                'desc',
            ]
        }
    }, {
        name: 'sort',
        "in": 'query',
        description: 'Sort direction, asc or desc',
        required: false,
        type: 'string',
        "enum": [
            'asc',
            'desc',
        ]
    }, {
        "in": 'query',
        name: 'select',
        description: 'Selected fields',
        type: 'array',
        items: {
            type: 'string'
        },
        required: false
    }, {
        "in": 'body',
        name: 'v1UserPasswordPut',
        required: true,
        schema: {
            type: 'object',
            required: ['selected'],
            properties: {
                selected: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                }
            }
        }
    }];
test('Returns joi with 2 required params', function () {
    expect(SwaggerUtils_1["default"].createJoiValidation('post', { parameters: [params[0]] })).toBe('body: {password:Joi.string().required(),newPassword:Joi.string().required(),newPasswordConfirm:Joi.string().allow(\'\'),},');
});
test('openapi3 query request param', function () {
    expect(SwaggerUtils_1["default"].createJoiValidation('get', { parameters: [params[1]] })).toBe('query: {limit:Joi.number().integer(),},');
});
test('openapi2 enums', function () {
    expect(SwaggerUtils_1["default"].createJoiValidation('get', { parameters: [params[3]] })).toBe('query: {sort:Joi.string().allow(\'\').valid(\'asc\', \'desc\'),},');
});
test('openapi3 enums', function () {
    expect(SwaggerUtils_1["default"].createJoiValidation('get', { parameters: [params[2]] })).toBe('query: {sort:Joi.string().allow(\'\').valid(\'asc\', \'desc\'),},');
});
test('openapi3 query request array param: allow single value', function () {
    expect(SwaggerUtils_1["default"].createJoiValidation('get', { parameters: [params[4]] })).toBe("query: {select:Joi.array().items(Joi.string().allow('')).single(),},");
});
test('openapi3 request body: allow empty array', function () {
    expect(SwaggerUtils_1["default"].createJoiValidation('get', { parameters: [params[5]] })).toBe("body: {selected:Joi.array().items(Joi.string().allow('')).required(),},");
});
