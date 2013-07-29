
# reconnect-engine

Reconnect an [engine.io](https://github.com/LearnBoost/engine.io)
[stream](http://ghub.io/engine.io-stream) when it goes down.

## Usage

Create an http server and mount engine.io onto it:

```js
var http = require('http');
var Engine = require('engine.io-stream');

var server = http.createServer(function (req, res) {
  // ...
});

var engine = Engine(function (stream) {
  stream.end('yup, I\'m up!');
});

engine.attach(server, '/engine');
server.listen(8000);
```

The connect to it from the browser:

```js
var reconnect = require('reconnect-engine');

reconnect(function (stream) {
  stream.on('data', function (data) {
    console.log(data);
    // => yup, I'm up!
  });
}).connect('/engine');
```

For the events you can listen to, see
[reconnect-core](https://github.com/juliangruber/reconnect-core#usage).

## Installation

With [npm](https://npmjs.org) do:

```
npm install reconnect-engine
```

Then bundle for the browser with [browserify](browserify.org) or grab a
[prebuilt bundle](http://wzrd.in/standalone/reconnect-engine) that exposes
`reconnect-engine` on the window object.

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
