export function skuGenerator(productName: string, variant: any){
    const productCode = productName.toUpperCase().replace(/\s/g,'');

    const variantAttributes = [variant.size, variant.ram, variant];


    const variantCode = variantAttributes.join('-').toUpperCase();

    return `${productCode}-${variantCode}`;
}