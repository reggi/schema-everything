
























* 'Thomas Reggi' is a 'Person'
* 'Person' is an 'Object Type'
* 'Person' has a 'Schema'
* 'Thomas Reggi' is an 'Object'
* 'Objects have properties'

var SchemaFactory = function () {

}

var Schema = new SchemaFactory({
  'properties': {
    'type': Array
  }
})

var Person = new Schema({
  'properties': [
    'firstName',
    'lastName',
    'age',
    'birthday',
  ]
})


var Age = function (this) {
  this.birthday - date
}

new Person({
  firstName: 'Thomas',
  lastName: 'Reggi',
  age: 25,
  birthday: 'November 3rd, 1989'
})


getAge


var MinimumValue = new Number({
  'name': 'MinimumValue',
  'javascriptType': Number
  'minimum': null,
  'maximum': null
})

var MaximumValue = new Number({
  'name': 'MaximumValue',
  'minimum': null,
  'maximum': null
})

var Number = new Schema({
  'name': 'number',
  'minimum': new MinimumValue,
  'maximum': new MaximumValue
})

var shopifyRedirect = new Schema({
  'id': new Schema({
    'name': 'shopifyRedirectId'
    'description': 'Identification designated by Shopify for specific redirect'
    'type': new Number({
        'minimum': 0,
        'maximum': Infinity
      })
    })
  }),
  'path': new Schema({

  })
})


      "id": 950115854,
      "path": "\/ibook",
      "target": "\/products\/macbook"





















var Author = new Schema({

})

var Description = new Schema({
  value: new String
})

var Name = new Schema({
  description: new Description({
    'value': 'The designation of a specific object'
  })
})

var SchemaProperty = new Schema({

})

var SchemaProperties = new Schema({
  name: new Name({
    'value': 'SchemaProperties'
  }),

})

var Semver = new Schema({

})

var schema = new Schema({
  author: new Author
  name: new Name
  version: new Semver
})

var url = new Schema({

})

var query = new Schema({

})


















Intelegence


var api = require('./api')

{
  count: new Api({
    'url': new Url('/admin/redirects/count.json'),
    'description': 'Receive a count of all Redirects'
  }),
  retrieve: new Api({
    'description': 'Receive a list of Redirects',
    'query': {
      'limit': {
        'description': 'Amount of results',
        'default': 50,
        'maximum': 250
      },
      'page': {
        'description': 'Page to show',
        'default': 1,
        'maximum': this.count.value / this.limit.value
      }
    }
  })


}




page
Page to show
(default: 1)
since_id
Restrict results to after the specified ID
path
Show Redirects with given path
target
Show Redirects with given target
fields
comma-separated list of fields to include in the response

GET /admin/redirects.json?since_id=668809255
Receive a list of all Redirects
GET /admin/redirects/count.json

GET /admin/redirects/#{id}.json
Receive a single Redirect
POST /admin/redirects.json
Create a new Redirect
PUT /admin/redirects/#{id}.json
Modify an existing Redirect
DELETE /admin/redirects/#{id}.json
