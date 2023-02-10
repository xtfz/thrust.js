# ThrustJS - Simplify the Simple.

## Usage
Import Thrust.js
```js
  const thrust = require('thrust.js');
```

---

## Features:
+ ### Generate IDs
  There are two kinds of IDs -
  + Random ID (example: `3ryh87fct`)
  + Number ID (example: `4873534835`)
  ---

  Default Length of IDs: `6`

  ---
  + #### Creating a random ID
  ```js
  const length_of_ID = 10; // the length of the ID.
  thrust.createID(length_of_ID);
  // Creates and returns an ID
  ```
  Examples: `fjkrhfu5y78`, `4jhct4y8vjf`, `rjf5h87y8v9`, `5hyc84hh8yt`, `4c89hy45tv`
  ---
  + Generate a number ID
  ```js
  const length_of_ID = 10; // the length of the ID.
  thrust.createNumID(length_of_ID);
  // Creates and returns a number ID
  ```
  Examples: `548935`, `459749856`, `48597457`, `47598475`, `495749857`
  ---
  ### Note:
  - *ABOVE EXAMPLES ARE IDs OF DIFFERENT LENGTHS. IF YOU PROVIDE THE LENGTH AS 10, IT WILL CREATE AN ID OF 10 CHARACTERS.*
  - IF YOU DO NOT PROVIDE ANY LENGTH, OR PROVIDE AN INVALID PARAMETER AS LENGTH, THE DEFAULT LENGTH WILL BE USED TO CREATE THE ID.

---

## Parameters
  + ### `createID(length)`
    | Parameters | Type | Description | Required | Default Value
    | ---------- | ---- |----------- | -------- | ------------- |
    | `length`      | `Number`       | The length of the ID. | `false` | `6` |

    ---

    + ### `createNumID(length)`
    | Parameters | Type | Description | Required | Default Value
    | ---------- | ---- |----------- | -------- | ------------- |
    | `length`      | `Number`       | The length of the ID. | `false` | `6` |

---

## Links
+ [Discord](https://discord.gg/GdCjHfXDvs) (You can get help in this server)
+ [Twitter](https://twitter.com/teamXTFZ) (For latest development news and updates)
+ [XTFZ](https://xtfz.tech) (Under development)

## Credits
+ [snehasishkun](https://snehasish.cf) - Publisher, Maintainer, Lead.
+ [Team XTFZ](https://xtfz.tech) - Help and usage

# Made with 👐🏻 by [Team XTFZ](https://xtfz.tech) ([@TeamXTFZ](https://twitter.com/TeamXTFZ))