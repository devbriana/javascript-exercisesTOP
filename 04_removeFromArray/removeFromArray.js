const removeFromArray = function(array,...args) {
    const newArray = [];
    array.forEach(function(item) {
      if (!args.includes(item)) {
        newArray.push(item);
    }
    });
return newArray;
}

module.exports = removeFromArray;
