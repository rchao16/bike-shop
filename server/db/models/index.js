const User = require('./user')
const {Bike, BikeImage, CategoryKey, CategoryValue} = require('./bike')
const {Cart, CartEntry} = require('./cart')
const Order = require('./order')
const OrderEntry = require('./orderEntry')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

//BIKE SPECIFIC SECTION

Bike.hasMany(BikeImage)
BikeImage.belongsTo(Bike)

CategoryKey.hasMany(CategoryValue)
CategoryValue.belongsTo(CategoryKey)

Bike.belongsToMany(CategoryValue, {through: 'bikeCategoryValue'})
CategoryValue.belongsToMany(Bike, {through: 'bikeCategoryValue'})

//CART SPECIFIC SECTION
Cart.hasMany(CartEntry)
CartEntry.belongsTo(Cart)

CartEntry.belongsTo(Bike)

Cart.belongsTo(User)

//ORDER SPECIFIC SECTION
User.hasMany(Order)
Order.belongsTo(User)
Order.hasMany(OrderEntry)
OrderEntry.belongsTo(Order)
Bike.belongsTo(OrderEntry)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Bike,
  BikeImage,
  CategoryKey,
  CategoryValue,
  Cart,
  CartEntry,
  OrderEntry,
  Order
}
