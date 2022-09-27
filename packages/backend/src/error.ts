export const errors = {
  invalidToken: 'INVALID_TOKEN',
  missingToken: 'MISSING_TOKEN',
  missingParams: 'MISSING_PARAMS',
  notFound: 'NOT_FOUND',
  emailDuplicated: 'EMAIL_DUPLICATED',
  notImplemented: 'NOT_IMPLEMENTED',
} as const;

export type Error = typeof errors[keyof typeof errors];

export class HitorisskeyError extends Error {
  constructor(public code: Error) {
    super(code);
  }
}