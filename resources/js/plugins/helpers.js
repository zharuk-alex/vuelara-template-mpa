function findTextRecursively (needle, key, array){
    var result;
    array.some(o => o[key] === needle && (result = o) || (result = find(needle, o.children || [])));
    return result;
}

export { findTextRecursively }