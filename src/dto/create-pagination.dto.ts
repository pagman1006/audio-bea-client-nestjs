export class CreatePaginationDto {

    readonly page?: number;
    readonly pageSize?: number;
    readonly totalElements?: number;
    readonly totalPages?: number;
}