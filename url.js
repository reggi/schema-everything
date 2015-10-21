module.exports = {
  'description': "Parsed URL",
  'props': {
    'href': {
      'description': 'The full URL that was originally parsed. Both the protocol and host are lowercased.',
      'example': 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash',
      'type': String
    },
    'protocol': {
      'description': 'The request protocol, lowercased.',
      'example': 'http:',
      'type': String
    },
    'slashes': {
      'description': 'The protocol requires slashes after the colon.',
      'examples': [true, false],
      'type': Boolean
    }
    'host': {
      'description': 'The full lowercased host portion of the URL, including port information.',
      'example': 'host.com:8080',
      'type': String
    }
    'auth': {
      'description': 'The authentication information portion of a URL.',
      'example:': 'user:pass',
      'type': String
    }
    'hostname': {
      'description': 'Just the lowercased hostname portion of the host.',
      'example': 'host.com',
      'type': String
    },
    'port': {
      'description': 'The port number portion of the host.',
      'example': '8080',
      'type': String
    },
    'pathname': {
      'pathname': 'The path section of the URL, that comes after the host and before the query, including the initial slash if present. No decoding is performed.',
      'example': '/p/a/t/h',
      'type': String
    },
    'search': {
      'decscription': 'The \'query string\' portion of the URL, including the leading question mark.'
      'example': '?query=string'
      'type': String
    },
    'path': {
      'path': 'Concatenation of pathname and search. No decoding is performed.',
      'example': '/p/a/t/h?query=string',
      'type': String
    },
    'query': {
      'description': 'Either the \'params\' portion of the query string, or a querystring-parsed object.',
      'examples': ['query=string', {'query':'string'}],
      'type': String || Object
    },
    'hash': {
      'description': 'The \'fragment\' portion of the URL including the pound-sign.',
      'example': '#hash',
      'type': String
    }
  }
}
