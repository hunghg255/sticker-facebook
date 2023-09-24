//@ts-nocheck
export function useInvalidNumberThrowsViolation(numberToCheck?: number, defaultMessage?: string) {
  if (!defaultMessage) {
    defaultMessage = 'Unexpected invalid number value';
  }

  if (!Number.isNaN(numberToCheck) && Number.isFinite(numberToCheck)) {
    return numberToCheck;
  }

  throw new Error(defaultMessage);
}
