
function receivesAFunction(fun) {
    fun();
}

 function returnsANamedFunction() {
    return function hello() {
        return "hello world!"
    }   
 }

 function returnsAnAnonymousFunction() {
    return function () {
        return "hello world"
    }
 }
