const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'Swift by apple'
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}