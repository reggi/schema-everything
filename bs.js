




























// even schema has a schema
var schema = require('schema/schema')
var integer = require('schema/number')
var array = require('schema/array')
var id = require('schema/id/incremented')
var text = require('schema/text')
//var createdAt = require('schema/createdAt')

var planet = new Schema({

})

module.exports = new Planet({

})

var time = new Schema({
  hour:
  minutes:
  seconds:
  yactoseconds:

})

var date = new schema({
  name: 'date'
  schema: {
    month:
    day:
    hour:
    minutes
    date:
    year:

  }
})

var createdAt = new schema({
  name:
})

var shopifyRedirect = new schema({
  name: 'shopifyRedirect',
  schema: {
    id: {
      type: id
    },
    path: {
      type: text
    },
    target: {
      type: text
    }
  }
})

var shopifyRedirects = new schema({
  name: 'shopifyRedirects',
  schema: {
    shopifyRedirects: {
      type: array({
        validTypes: [shopifyRedirects]
      })
    }
  }
})

var enhancedShopifyRedirect = new extendedSchema(shopifyRedirect, {
  name: enhancedShopifyRedirect,
  schema: {
    createdAt: createdAt
  }
})

module.exports = {
  shopifyRedirect: shopifyRedirect
  shopifyRedirects: shopifyRedirects
}
