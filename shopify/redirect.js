
* `redirectCSV`
  * fileName
  * value (string)
    * file
* `redirectCSVRow`
  * value (json)
    * rowNumber
    * path
    * target
* `redirectCSVRows`
  * value (array)
    * prospectiveShopifyRedirects
* `shopifyRedirect`
  * value (json)
    * shopifyRedirectId
    * path
    * target
* `shopifyRedirects`
  * value (array)
    * shopifyRedirects

---

var redirectCSVRow = {

}

var ShopifyRedirect = new Schema({
  description: 'Shopify Redirect data.'
  value: new JsonObject({
    id: new Schema({
      description: 'The unique numeric identifier for the redirect.',
      value: Number
    }),
    path: new Schema({
      decription: 'Show Redirects with given path',
      value: new String
    }),
    target: new Schema({
      description: 'Show Redirects with given target',
      value: new String
    })
  })
})

var ShopifyRedirects = new Schema({
  descirption: 'An array of many Shopify Redirects.',
  value: Array
})


response: {
  'redirects': new ShopifyRedirects
}
