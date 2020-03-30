export interface IResponse<T> {
 status: number;
 Message?: any;
 data: T;
}