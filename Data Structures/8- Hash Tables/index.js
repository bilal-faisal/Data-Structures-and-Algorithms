// Hash Tables

class HashMap {
    constructor(size = 4) {
        this.keyMap = new Array(size);
    }

    hash(key) {
        let total = 0;
        const PRIME_NUMBER = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME_NUMBER + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this.hash(key);
        if (!this.keyMap[index]) { // if there's nothing there
            this.keyMap[index] = [];
        } else {
            let arr = this.keyMap[index];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][0] === key) {
                    arr[i][1] = value;
                    return;
                }
            }
        }
        this.keyMap[index].push([key, value])
    }

    get(key) {
        let index = this.hash(key);

        if (this.keyMap[index]) {
            let arr = this.keyMap[index];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][0] === key) {
                    return arr[i][1]
                }
            }
        }
        return undefined;
    }

    keys() {
        let keys = [];
        this.keyMap.forEach((outer_array) => {
            outer_array.forEach((arr) => {
                keys.push(arr[0]);
            })
        })
        console.log(keys);
        return keys;
    }

    values() {
        let values = [];
        this.keyMap.forEach((main_array) => {
            main_array.forEach((sub_arr) => {
                if (!values.includes(sub_arr[1])) {
                    values.push(sub_arr[1]);
                }
            });
        });
        return values;
    }

}

let hashMap = new HashMap();
hashMap.set("pink", "#1")
hashMap.set("pink", "#1 new1")
hashMap.set("pink", "#2")
hashMap.set("hello", "#2")
hashMap.set("orange", "#3")
hashMap.set("cyan", "#4")
console.log(hashMap.keyMap)
hashMap.keys();
hashMap.values();
// console.log(hashMap.get("pink"))
// console.log(hashMap.get("hello"))
// console.log(hashMap.get("orange"))
// console.log(hashMap.get("cyan"))