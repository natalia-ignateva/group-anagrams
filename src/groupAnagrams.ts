/*  Task:
        Create a program that takes a list of any number of strings
        and will determine which words in the list are exact anagrams
        of each other (ignoring spaces).

    Example:

        Input -->
        [
            'rope',
            'pore',
            'repo',
            'red rum',
            'murder',
            'listen',
            'silent',
            'endeavour'
        ]

        Output -->
        [
            ['rope', 'pore', 'repo'],
            ['red rum', 'murder'],
            ['listen', 'silent'],
            ['endeavour']
        ]
 */

const myArr = [
    'rope',
    'pore',
    'repo',
    'hope',
    'peho',
    'red rum',
    'murder',
    'listen',
    'silent',
    'endeavour',
];

function groupAnagrams(words: String[]): String[][] {
    const anagramsByKey = words.reduce(
        (anagramsByKey: Map<String, String[]>, word: String) => {
            const sortedChars = word
                .split('')
                .sort()
                .join('')
                .replace(/ /g, '');

            const value = anagramsByKey.get(sortedChars);
            if (typeof value !== 'undefined') {
                value.push(word);
            } else {
                anagramsByKey.set(sortedChars, [word]);
            }
            return anagramsByKey;
        },
        new Map(),
    );

    return Array.from(anagramsByKey.values());
}

console.log(groupAnagrams(myArr));
