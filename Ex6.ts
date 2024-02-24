/*Stripping Names:
Store a person’s name,
and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed. 
Then print the name after striping the white spaces. */

function addWhitespaceToName(name: string): string {
    // Add whitespace characters at the beginning and end
    const nameWithWhitespace = `\t\n ${name} \t\n`;
    return nameWithWhitespace;
}

function stripWhitespaceFromName(nameWithWhitespace: string): string {
    // Remove leading and trailing whitespace
    const strippedName = nameWithWhitespace.trim();
    return strippedName;
}

const personName = "Areej Fatima";
const nameWithWhitespace = addWhitespaceToName(personName);
console.log(`Name with whitespace: "${nameWithWhitespace}"`);

const strippedName = stripWhitespaceFromName(nameWithWhitespace);
console.log(`Stripped name: "${strippedName}"`);

export{}