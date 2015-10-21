# Schema Everything

Really rough implementation of ideas expressed [here](https://medium.com/@thomasreggi/shared-schemas-dacfbff49b2a).

I got pretty meta, where I wanted to express every schema and property as an object even the schema object is a schema. I wen't so far to do extreme things, like when adding an `.age` method to a person it wouldn't be a static value it would calculate it using the persons birthday and todays date. Todays date expressed as it's own constant is tied to really abstract things like Earths orbit around the sun, so really abstract ideas here. But I wanted to build a foundation for the data of the world. In the case of date `Earth Time` is a object itself and not a general schema. So I'm struggling how objects can talk to one another within a system and use their own properties. How do you establish a global id for the object `earth`?

The idea is how could we have a true object-oriented distributed package system? Where everything is either a schema or object (which are both objects). This gets messy when you wanna add in function methods like described above. Ideally things like `url` would have a schema, and it would know how to convert itself from `string` (Node's `url.parse`) or `plain object` (Node's `url.format`). The number of methods that can be attached to this one object can be infinite, forkable, versionable.

Look I know this isn't very clear, and it may seem like I'm boasting about object-oriented programming like it's something new, I get it, it's not.

The idea is that what if there was a "package manager" for object-oriented programing? Everything is an object every object has a hashable ID on the network. Perhaps using something like [ipfs](https://ipfs.io//) the whole system could be decentralized.

The general idea is that we create too many inconsistencies in preference of formatting and converting data from one format to another. We don't place emphasis on organization and doing things one / the best way. We have many libraries out there that do the same things. If there was an echo system for piecing together objects and schemas every API wrapper could follow the same convention.
