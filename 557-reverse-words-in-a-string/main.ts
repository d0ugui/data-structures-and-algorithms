// This implementation uses the two-pointer approach.
// There are a few other ways to solve this problem in javascript without pointers,
// but the focus here is to practice the two-pointer technique.

function reverseWords(s: string) {
  let h = 0;
  let t = 0;
  let res = "";

  while (t < s.length) {
    if (s[t] !== " ") {
      t += 1
    } else {
      res = res.concat(s.slice(h, t).split("").reverse().join(""))
      t += 1
      h = t

      res = res.concat(" ", s.slice(h, t).split("").reverse().join(""))
    }
  }

  res = res.concat(s.slice(h, t).split("").reverse().join(""))

  return res;
}

// Better JavaScript Solution
function reverseWordsJs(s: string) {
  return s.split(" ").map((s) => s.split("").reverse().join('')).join(" ")
}

console.log(reverseWords("Let's take LeetCode contest"))
// console.log(reverseWordsJs("Let's take LeetCode contest"))
