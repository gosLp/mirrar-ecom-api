import { Inject, Injectable } from '@nestjs/common';
import { Product, ProductVariant } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto';
import { UpdateProductDto } from './dto/update-product.dto';
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

    async getAllProducts(): Promise<Product[]>{
        return await this.prisma.product.findMany();
    }

    async search(q: string): Promise<Product[]>{
        return await this.prisma.product.findMany({
            where: {
                OR:[
                    {
                        name: {
                            contains: q,
                            mode: 'insensitive'
                        },
                    },
                    {
                        description:{
                            contains: 'q',
                            mode: 'insensitive',
                        },
                    },
                    {
                        variants: {
                            some: {
                                name:{
                                    contains: q,
                                    mode: 'insensitive'
                                },

                            }
                        },
                        
                    },
                    {
                        variants:{
                            some: {
                                sku:{
                                    contains: q,
                                    mode: 'insensitive',
                                }
                            }
                        }
                    }
                ]
            },
            include: {
                variants: true,
            }
        })

    }


    async deleteProductById(productId: string):Promise<Product>{
        return await this.prisma.product.delete({
            where:{
                id: productId,
            },
            include:{
                variants: true,
            }
        })
    }

    async updateProductById(productId: string, data:UpdateProductDto): Promise<Product>{

        const {name, description, price, variants} = data;

        const skus = variants.map((variant) => skuGenerator(name, variant));
        console.log("data is:", data);

        return await this.prisma.product.update({
            where: {
                id: productId, 
            },
            data:{
                name,
                description,
                price,
                variants: {
                    // Use upsert for variants that have an id
                    upsert: variants
                        .filter((variant) => variant.id)    
                        .map((variant, index)=>({
                        create: {
                            ...variant,
                            sku: skus[index],
                        },
                        update: {
                            ...variant,
                            sku: skus[index],
                        },
                        where:{
                            id: variant.id
                        }
                    })),
                    //use for variants that do not have an id
                    create: variants.filter((variant)=> !variant.id)
                            .map((variant, index)=>({
                                ...variant,
                                sku:skus[index],
                            }))
                }
            }
        })
    }

}
