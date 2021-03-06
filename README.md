# Simple Restful

[![Build Status](https://travis-ci.org/epayet/simple-restful.svg?branch=master)](https://travis-ci.org/epayet/simple-restful)

With this module, you can easily create a complete JSON based RESTful API with just a few lines.
You can use existing storage strategies (InMemory, File, Mongo etc.) or even create your own.

## Installation

`npm install simple-restful`

## Usage

Here the few lines to create you first resource:

```javascript
var simpleRestful = require('simple-restful');
var server = simpleRestful.createServer({port: 8080});

// The minimum information to define the resource
var simpleResourceInfo = {
    name: "example",
    repository: "InMemory"
};

// Register the resource and then start the server
server.addResource(simpleResourceInfo);
server.start();
```

These lines mean you created the routes for the "example" resource, and everything will be stored in memory 
(not persisted).

Here the routes created:

* `GET`       `/example`            (get all the resources in an array)
* `GET`       `/example/:__id`      (get one resource by id)
* `POST`      `/example`            (create a new resource)
* `PUT`       `/example/:__id`      (update a resource)
* `DELETE`    `/example/:__id`      (delete a resource)

### Repositories

A repository is like a box containing and handling data. Here are the defaults one, but you can create your own.
When you add a resource to the server, you can specify options specific to the type of repository via `repositoryOptions`:

#### InMemoryRepository (InMemory)

The data are stored in memory and vanish when the server stops. Options:

* `defaultData`: array of data to start with (default: [])

```javascript
// Example
var exampleResourceInfo = {
    name: "example",
    repository: "InMemory",
    repositoryOptions: {            
        defaultData: [{__id: 0}]
    }       
};

server.addResource(exampleResourceInfo);
```

#### FileRepository (File)

With this strategy, the data are stored in json files in the directory of your choice Options:

* `folderPath`: the absolute folder path for the data (mandatory)

```javascript
// Example
var path = require('path');

var exampleResourceInfo = {
    name: "example",
    repository: "File",
    repositoryOptions: {            
        folderPath: path.join(__dirname, 'data')
    }       
};

server.addResource(exampleResourceInfo);
```

#### MongoRepository (Mongo)

TODO

#### Custom repository

You can create you own repository if you respect the method names and register it to the server.
Here are the methods you need to override:

* getAll()
* get(id)
* add(newData)
* update(id, newData)
* delete(id)

Example: https://github.com/epayet/SimpleRestJS/blob/master/examples/customRepository.js

Don't hesitate to submit a pull request to add yours to the official ones!

## Options

```javascript
var simpleRestful = require('simple-restful');
var server = new simpleRestful.createServer({
    port: 8080,
    logLevel: 'error' // Can be error, warn, info, verbose, debug, silly
});
```

## License

MIT License

Copyright (c) 2016 Emmanuel Payet

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.