export class DetermineUtil {
  public isNumber(value: any): boolean {
    return !Number.isNaN(parseInt(value));
  }
}
