/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GreetingRequest } from '../models/GreetingRequest';
import type { GreetingResponse } from '../models/GreetingResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ApiService {

    /**
     * 名前を受け取り、挨拶を返答します
     * @param requestBody
     * @returns GreetingResponse 名前を含めた挨拶を返却する
     * @throws ApiError
     */
    public static greeting(
        requestBody?: GreetingRequest,
    ): CancelablePromise<GreetingResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/greeting',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `サーバー内部エラー`,
            },
        });
    }

}
