/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeEmailRequest } from '../models/ChangeEmailRequest';
import type { ChangeNumberRequest } from '../models/ChangeNumberRequest';
import type { ConfirmNumberRequest } from '../models/ConfirmNumberRequest';
import type { ConfirmPasswordRequest } from '../models/ConfirmPasswordRequest';
import type { ForgottenAccountJSON } from '../models/ForgottenAccountJSON';
import type { ForgottenAccountResponse } from '../models/ForgottenAccountResponse';
import type { MessageResponse } from '../models/MessageResponse';
import type { ResetPasswordRequestBody } from '../models/ResetPasswordRequestBody';
import type { SendOTPByNumber } from '../models/SendOTPByNumber';
import type { SendResetTokenRequestBody } from '../models/SendResetTokenRequestBody';
import type { UpdatePasswordRequestBody } from '../models/UpdatePasswordRequestBody';
import type { UserAuthResponse } from '../models/UserAuthResponse';
import type { UserLoginSchema } from '../models/UserLoginSchema';
import type { UserSchema } from '../models/UserSchema';
import type { VerifyOTP } from '../models/VerifyOTP';
import type { VerifyOTPRequest } from '../models/VerifyOTPRequest';
import type { VerifyOTPSuccessResponse } from '../models/VerifyOTPSuccessResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Verify OTP during authentication
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static postApiAuthVerifyOtp({
requestBody,
}: {
requestBody: VerifyOTPRequest,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/verify-otp',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Send OTP for authentication
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static postApiAuthSendOtp(): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/send-otp',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Send Reset Token OTP
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static postApiAuthResetTokenOtp({
requestBody,
}: {
requestBody: SendOTPByNumber,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/reset-token/otp',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Verify OTP Token
     * @returns VerifyOTPSuccessResponse Successful response
     * @throws ApiError
     */
    public static postApiAuthVerifyTokenOtp({
requestBody,
}: {
requestBody: VerifyOTP,
}): CancelablePromise<VerifyOTPSuccessResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/verify-token/otp',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Confirm Password
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static postApiAuthConfirmPassword({
requestBody,
}: {
requestBody: ConfirmPasswordRequest,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/confirm/password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Update Email
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static postApiAuthUpdateEmail({
requestBody,
}: {
requestBody: ChangeEmailRequest,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/update/email',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Update Number
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static postApiAuthUpdateNumber({
requestBody,
}: {
requestBody: ChangeNumberRequest,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/update/number',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Confirm Update Number
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static postApiAuthConfirmNumberUpdate({
requestBody,
}: {
requestBody: ConfirmNumberRequest,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/confirm/number-update',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Update User Password
     * @returns MessageResponse Successful response
     * @throws ApiError
     */
    public static postApiAuthUpdatePassword({
requestBody,
}: {
requestBody: UpdatePasswordRequestBody,
}): CancelablePromise<MessageResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/update/password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Find forgotten account
     * @returns ForgottenAccountResponse Account found successfully
     * @throws ApiError
     */
    public static postApiAuthFindForgottenAccount({
requestBody,
}: {
requestBody: ForgottenAccountJSON,
}): CancelablePromise<ForgottenAccountResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/find/forgotten/account',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Authenticate
     * @returns UserAuthResponse Success
     * @throws ApiError
     */
    public static postApiAuthLogin({
requestBody,
}: {
requestBody: UserLoginSchema,
}): CancelablePromise<UserAuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Get current user from session
     * @returns UserSchema Success
     * @throws ApiError
     */
    public static getApiAuthMe(): CancelablePromise<UserSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/me',
            errors: {
                401: `Unauthorized`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Delete session token form
     * @returns any Unauthorized
     * @throws ApiError
     */
    public static deleteApiAuthLogout(): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/auth/logout',
            errors: {
                500: `Server Error`,
            },
        });
    }

    /**
     * Reset password using token
     * @returns any Success message
     * @throws ApiError
     */
    public static postApiAuthResetPassword({
token,
requestBody,
}: {
token: string,
requestBody: ResetPasswordRequestBody,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/reset-password/{token}',
            path: {
                'token': token,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Send reset token to user's email
     * @returns any Success message
     * @throws ApiError
     */
    public static postApiAuthResetToken({
requestBody,
}: {
requestBody: SendResetTokenRequestBody,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/reset-token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Check token validity
     * @returns any Success message
     * @throws ApiError
     */
    public static getApiAuthCheckToken({
token,
}: {
token: string,
}): CancelablePromise<{
message?: string;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/check-token/{token}',
            path: {
                'token': token,
            },
            errors: {
                400: `Validation Error`,
                401: `Unauthorized`,
                404: `Not Found Error`,
                500: `Server Error`,
            },
        });
    }

}
