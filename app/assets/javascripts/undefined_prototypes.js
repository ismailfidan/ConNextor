if (typeof String.prototype.startsWith != 'function') {
    // see below for better implementation!
    String.prototype.startsWith = function (str){
        return this.indexOf(str) == 0;
    };
}

if (typeof String.prototype.contains != 'function') {
    // see below for better implementation!
    String.prototype.contains = function (str){
        return this.indexOf(str) != -1;
    };
}
