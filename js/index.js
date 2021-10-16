// Iteration 1: Names and Input
let hacker1 = "albert";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "paula";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters!`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`Ìt seems that the navigator has the longest name, it has ${hacker2.length} characters!`)
  } else {
    console.log(`Wow you bouth have equally long names, ${hacker1.length} characters!`)
  }


// Iteration 3: Loops
let driverName = ""
for (i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " "
}
console.log(driverName)


let navigatorName = ""
for (i = hacker2.length - 1; i >= 0; i--) {
  navigatorName += hacker2[i]
}
console.log(navigatorName)

function lastCharacter(str) {
  let final = ""
  let lastUpper = ""
  lastUpper = str.charAt(navigatorName.length -1).toUpperCase();
  final += navigatorName.replace("p",lastUpper);
  return final;
}

lastCharacter(navigatorName)

if (hacker1 < hacker2) {
  console.log("The driver's name goes first")
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("What?! You both have the same name?")
}

//BONUS1
let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam odio elit, interdum ultricies nibh luctus nec. Suspendisse at arcu massa. Proin pulvinar venenatis sem accumsan porttitor. Suspendisse vel porttitor nunc. Vivamus sagittis, massa vel molestie blandit, enim nunc tincidunt lacus, a vestibulum nisi purus non est. Cras nisl augue, cursus non neque et, sollicitudin posuere neque. Sed non tellus nulla. Integer tincidunt purus ac nibh sagittis, ultrices varius mi posuere. Morbi malesuada diam sit amet lectus ornare, quis vulputate nibh porttitor. Vivamus pretium dui id semper finibus. Aliquam semper ex vitae nisl ultrices, sit amet scelerisque libero efficitur. Praesent a justo nec orci dapibus finibus vitae sit amet ex. Vivamus mauris tortor, semper et magna vitae, finibus pretium dui.Morbi eu nulla consequat, vehicula quam sed, vestibulum nibh. Nunc nec lorem a odio interdum placerat a sed ante. Sed gravida ultrices arcu, vitae iaculis orci laoreet eget. Etiam vestibulum lacus ac aliquet sodales. Suspendisse potenti. Nullam rhoncus suscipit ligula, at posuere massa auctor eu. Donec eu vehicula arcu. Vestibulum scelerisque velit erat, at ultricies ipsum vehicula vel. Ut nibhet nibh, bibendum in lorem sed, iaculis commodo et mauris. In pharetra leo imperdiet ipsum tincidunt eleifend et eu libero. Morbi a nulla rhoncus, et condimentum tortor eget, lobortis orci.Vestibulum at malesuada nunc, ut feugiat erat. Nullam fringilla lacinia quam, id lobortis arcu maximus nec. Duis lobortis, augue ut fermentum accumsan, libero ante volutpat ex, non congue leo mauris vel sem. Nulla dictum facilisis est, nec vulputate magna rutrum quis. Nunc auctor placerat viverra. Nam gravida condimentum pellentesque. Quisque vel commodo lacus. Duis et at ullamcorper nibh, non porttitor augue. In hac habitasse platea dictumst. Nullam volutpat eget dolor ultricies dictum."


function numberOfWords (number) {
  return number.length;
}

numberOfWords(paragraphs)

function wordsRepeat (number) {
  let count = 0
  let text = number.split(" ");
  for (i = 0; i < text.length; i++) {
    text[i] = text[i].toLowerCase();
    if (text[i] === "et") {
      count++
    } else {
      continue;
    }
  }
  return count
}

wordsRepeat(paragraphs)