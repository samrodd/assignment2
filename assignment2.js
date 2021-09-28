
// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue;
        //element
        //element, index
        //element, index, array

        callbackFn(this[i], i, this);
    }
};



// MAP //
Array.prototype.myMap = function(callbackFn) {
    const mappedOutput = [];
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue;
        mappedOutput.push(callbackFn(this[i], i, this));
    }
    return mappedOutput;
};


// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    const filteredOutput = [];
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue;
        if(callbackFn(this[i], i, this)===true){
            filteredOutput.push(this[i]);
        }
        else{
            continue;
        }
    }
    return filteredOutput;
};


// SOME //
Array.prototype.mySome = function(callbackFn) {
    var x = false;
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue;
        if(callbackFn(this[i], i, this) === true){
            x = true;
        }
        else{
            continue;
        }
    }
    return x;
};


// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue;
        if(callbackFn(this[i], i, this) === false ){
            return false;
        }
        else{
            continue;
        }
    }
    return true;
};


// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
    var t = 1;
    var x = this[0];
    while(x === undefined && t < this.length){
        x = this[t];
        t++;
    }
    for(let i = t; i < this.length; i++){
        if(this[i] === undefined) continue;
        x = callbackFn(x,this[i]);
    }
    if(x === undefined){
        return "Error: Reduce of empty array with no initial value"
    }
    else{
        return x;
    }
};


// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue;
        if(this[i] === searchElement){
            return true;
        }
        else{
            continue;
        }
    }
    return false;
};


// INDEXOF //
Array.prototype.myIndexOf = function(searchElement, fromIndex) {
    var startPos = (fromIndex === undefined) ? 0 : fromIndex;
    for(let i = startPos; i < this.length; i++){
        if(this[i] === undefined) continue;
        if(this[i] === searchElement){
            return i;
        }
    }
    return -1;
};



// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length;

    for(let i = length; i < length + args.length; i++){
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};



// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement, fromIndex) {
    var startPos = (fromIndex === undefined) ? this.length : fromIndex;
    for(let i = startPos; i >-1; i--){
        if(this[i] === undefined) continue;
        if(this[i] === searchElement){
            return i;
        }
    }
    return -1;
};




// KEYS //
Object.grabKeys = function(obj) {
    const keys = [];
    for(var i in obj){
        keys.push(i);
    }
    return keys;
};



// VALUES //
Object.grabValues = function() {

};

