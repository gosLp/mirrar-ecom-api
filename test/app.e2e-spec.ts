import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import * as pactum from 'pactum';
import { CreateProductDto } from 'src/product/dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async() =>{
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),

    );

    await app.init();
    await app.listen(3333);
    prisma = app.get(PrismaService);
    await prisma.cleanDb();
    pactum.request.setBaseUrl('http://localhost:3333')
  });

  afterAll(()=>{
    app.close();
  })

  describe('Product', ()=>{
    describe('get empty todos', ()=>{
      it("should get empty",  ()=>{
        return pactum
          .spec()
          .get('/product')
          .withHeaders({})
          .expectStatus(200)
          .expectBody([])
      })
    })

    describe(' Create a Product', ()=>{
      const dto: CreateProductDto = {
        name: "T-shirt",
        description: "A soft and cozy cotton shirt",
        price: 200,
        variants: [
          {
            name: "T-shirt-Medium-Green",
            additionalCost: 10.5,
            color: "Green",
            size: "Medium",
            stockCount: 50
          },
          {
            name: "Default Variant",
            color: "Blue",
            size: "Medium",
            additionalCost: 5.00,
            stockCount: 100
          }
        ]
      }
      it('should create the product', () =>{
        return pactum
          .spec()
          .post('/product')
          .withHeaders({})
          .withBody(dto)
          .expectStatus(201)
          .stores('productId', 'id')
      })
    });

    describe('Get Products', ()=>{
      it('should get products', ()=>{
        return pactum
          .spec()
          .get('/product')
          .withHeaders({})
          .expectStatus(200)
          .expectJsonLength(1);
      })
    })
  })

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
