export class ResponsePaginationDto<t> {

    readonly data: t[];

    readonly page?: number;
    readonly pageSize?: number;
    readonly totalElements?: number;
    readonly totalPages?: number;
}