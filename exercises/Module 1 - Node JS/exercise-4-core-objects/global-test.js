var hello = "Hello from Node";
hello = hello.slice(10);
console.log(`global hello ${global.hello}`);
console.log(`local hello ${hello}`);
console.log("global hello " + hello)