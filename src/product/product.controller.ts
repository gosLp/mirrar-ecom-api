import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService){}
        @Post()
        @UsePipes(ValidationPipe) // Validate the product DTO
        @HttpCode(201)
        async create(@Body() productDto: CreateProductDto){
            return await this.productService.create(productDto);
        }
    
}
