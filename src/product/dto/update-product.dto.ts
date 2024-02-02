import {IsString, IsNumber, IsArray, ValidateNested, IsUUID, IsOptional } from 'class-validator'
import { Type } from 'class-transformer';

export class UpdateVariantDto{
    @IsUUID()
    @IsOptional()
    id: string;

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    size: string;

    @IsString()
    color: string;
    
    @IsNumber()
    additionalCost: number;

    @IsNumber()
    stockCount: number;
}

export class UpdateProductDto{
    @IsString()
    name: string;

    @IsString()
    description: string;


    @IsNumber()
    price: number;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => UpdateVariantDto)
    variants: UpdateVariantDto[];
}