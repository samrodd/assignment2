
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
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

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
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};

