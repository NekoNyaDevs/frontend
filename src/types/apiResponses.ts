export interface APIResponse<errored=false> {
    error?: errored extends true ? APIError : null;
}

export interface APIRandomImageResponse extends APIResponse {
    url: string;
}

export interface APIEightBallResponse extends APIResponse {
    answer: string;
}

export interface APIOwoifyResponse extends APIResponse {
    result: string;
}

export interface APIError {
    code: number;
    message: string;
    type: APIErrorType;
}

export type APIErrorType = "APIError" | "NotFoundError" | "BadRequestError" | "ValidationError" | "InternalServerError" | string; // ref to backend/src/utils/types.ts:37