import {IsString, IsNumber, IsArray, ValidateNested} from 'class-validator';
import {Type} from 'class-transformer';

export class VariantDto{
    @IsString()
    name: string;
    
    @IsNumber()
    additionalCost: number;

    @IsNumber()
    stockCount: number;
}

export class CreateProductDto{

    @IsString()
    name: string;

    @IsString()
    description: string;


    @IsNumber()
    price: number;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => VariantDto)
    variants: VariantDto[];
}