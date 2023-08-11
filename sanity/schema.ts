import { type SchemaTypeDefinition } from 'sanity'
import Products from './Products'
import ProductType from './ProductType'
import ProductCategory from './ProductCategory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products, ProductType, ProductCategory],
}
