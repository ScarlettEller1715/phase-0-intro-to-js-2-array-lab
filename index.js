const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
};

function destructivelyPrependCat() {
    cats.unshift("Bob");
};

function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
};

function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
};

function appendCat() {
    const appendCat = [...cats, "Broom"];
    return appendCat;
};

function prependCat() {
    const prependCat = ["Arnold", ...cats];
    return prependCat;
};

function removeLastCat() {
    const removeLastCat = cats.slice(0,2);
    return removeLastCat;
};

function removeFirstCat() {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
};