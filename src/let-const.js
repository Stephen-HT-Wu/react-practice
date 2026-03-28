const topic = "JavaScript";
console.log("const in global", topic); // global JavaScript
if (topic) {
    let topic = "React";
    console.log("let in block", topic); // block React
}

console.log("const in global", topic); // global JavaScript
