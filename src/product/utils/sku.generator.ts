export function skuGenerator(productName: string, variant: any){
    const productCode = productName.toUpperCase().replace(/\s/g,'');

    const variantAttributes = [variant.size, variant.color, variant.additionalCost];


    const variantCode = variantAttributes.join('-').toUpperCase();

    return `${productCode}-${variantCode}`;
}