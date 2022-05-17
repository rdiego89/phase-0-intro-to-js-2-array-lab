let cats = ["Milo", "Otis", "Garfield"]
// destructivelyAppendCat = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(cat) {
    cats.push(cat);

}

function destructivelyPrependCat(john) {
    cats.unshift(john);

}

function destructivelyRemoveLastCat(garfield) {
    cats.pop(garfield);

}

function destructivelyRemoveFirstCat(milo) {
    cats.shift(milo);
}

function appendCat(name) {
    // console.log('cat;', name)
    const copyOfCats = [...cats, name];
    return (copyOfCats)
}

function prependCat(john) {
    const copyOfCats = [john, ...cats];
    return (copyOfCats)
}

function removeLastCat(name) {
const copyOfCats = [...cats]
copyOfCats.pop()
return (copyOfCats)
}

function removeFirstCat(name) {
    const copyOfCats = [...cats]
    copyOfCats.shift()
    return(copyOfCats)
}

