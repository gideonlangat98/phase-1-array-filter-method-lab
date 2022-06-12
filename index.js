// Code your solution here
const drivers = [
    {
        name: "Bobby"
    },
    {
        name: "Sammy"
    },
    {
        name: "Sally"
    },
    {
        name: "Annette"
    },
    {
        name: "Sarah"
    },
    {
        name: "Bobby"
    }
];

function findMatching(driver, name) {
    return driver.filter((Matching) => Matching.toLowerCase() === name.toLowerCase());
};

function fuzzyMatch(driver, fuzzy) {
    return driver.filter(
        (Matching) => Matching[0] === fuzzy[0]);  
}

function matchName(driver, sortingName) {
    return driver.filter((record) => record.name === sortingName);

}
