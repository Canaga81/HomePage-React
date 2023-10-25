let sen = "fun&!! time";

const arr = sen.replace(/[^a-zA-Z ]/g, "").split(' ');
arr.sort((a, b) => {return b.length - a.length});
console.log(arr[0]);


    //! Noktalama isaretlerini kaldir
    //! Cumleyi bosluklardan bolup, kelimelerle bir Array olusturmak
    //! Kelimelerle olustudugumuz arrayi, kelimelerin karakter sayilarina gore azalan bir sekilde siralamak
    //! En basta yani 0. indekste yer alan kelimeyi return etmek



/* Rules

    Longest Word

- Using the Javascript language, have the function longestWord(sen)
take the sen parameter being passed and return the largest word in the
string.

- If there are two or more words that are the same lenght, return the
first word from the string with that length.

- Ignore punctuation and assume sen will not be empty.

*/