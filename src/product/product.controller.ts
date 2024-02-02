import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto';
import { UpdateProductDto } from './dto/update-product.dto';
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

        @HttpCode(HttpStatus.NO_CONTENT)
        @Delete(':id')
        async deleteProductById(
            @Param('id', ParseUUIDPipe) productId: string
        ){
            return await this.productService.deleteProductById(productId);
        }


        @Get('search')
        async searchProduct(@Query('q') q: string){
            return await this.productService.search(q);
        }

        @Get()
        async getallProducts(){
            return await this.productService.getAllProducts();
        }
    
        @Patch(':id')
        @UsePipes(ValidationPipe)
        async update(
            @Param('id', ParseUUIDPipe)productId: string,
            @Body() data: UpdateProductDto){
                return await this.productService.updateProductById(productId, data);
            }
}
