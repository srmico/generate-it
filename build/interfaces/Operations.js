"use strict";
exports.__esModule = true;
// WIP
var a = {
    post: {
        'tags': ['image'],
        'summary': 'Creates a new image',
        'description': 'Creates a new image based on given image and related id',
        'operationId': 'imageRelatedIdPost',
        'consumes': ['multipart/form-data'],
        'produces': ['application/json'],
        'parameters': [
            {
                "in": 'formData',
                name: 'imageCreate',
                type: 'file',
                description: 'An image-create to upload',
                required: true
            },
            {
                "in": 'path',
                name: 'relatedId',
                type: 'string',
                description: 'The id the image-create is related to',
                required: true
            },
        ],
        'responses': {
            '200': {
                description: 'Successful unlock',
                schema: {
                    type: 'object',
                    required: ['filename'],
                    properties: {
                        filename: {
                            type: 'string',
                            description: 'The file name created'
                        }
                    }
                }
            },
            '401': { description: 'Permission denied' }
        },
        'security': [{ apiKey: '' }],
        'x-request-definitions': {
            formData: {
                name: 'ImageRelatedIdPostFormData',
                params: ['parameters.FormDataImageCreate'],
                interfaceText: {
                    outputString: "export interface ImageRelatedIdPostFormData {\n  'imageCreate':any,  \n } "
                }
            },
            path: {
                name: 'ImageRelatedIdPostPath',
                params: ['parameters.PathRelatedId'],
                interfaceText: {
                    outputString: "export interface ImageRelatedIdPostPath {\n  'relatedId':string,  \n } "
                }
            }
        },
        'x-response-definitions': { '200': 'ImageModel' }
    },
    endpointName: 'image'
};
