import { Inject, Injectable } from '@nestjs/common';
import { Product, ProductVariant } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto';
import { skuGenerator } from './utils';

@Injectable()
export class ProductService {
    constructor(private readonly prisma: PrismaService
    ){}

    async create(productDto: CreateProductDto): Promise<Product>{
        const { name, description, price, variants } = productDto;

        const skus = variants.map((variant)=> skuGenerator(name, variant));

        return await this.prisma.product.create({
            data:{
                name, 
                description,
                price,
                variants:{
                    create: variants.map((variant, index)=>({
                        ...variant,
                        sku: skus[index],
                    })),
                }
            }
        })
    }
}
