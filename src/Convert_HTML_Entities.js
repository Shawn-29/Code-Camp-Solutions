/*
    Problem:

    Convert the characters &, <, >, " (double quote), and ' (apostrophe),
        in a string to their corresponding HTML entities.

    example:

    convertHTML('Stuff in "quotation marks"')
    
    should return the string "Stuff in &quot;quotation marks&quot;."
*/

const conversionTbl = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&apos;'
};

const convertHTML = str =>
    str.replaceAll(/[&<>'"]/g, match => conversionTbl[match]);