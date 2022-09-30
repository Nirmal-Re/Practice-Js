const f = (a, b) => {
    const arrayKeys = Object.keys(a)
    const checked = arrayKeys.filter(key => key === b)
    if (checked.length >= 1){
        return true
    } else {

        return false
    }
}
    
    //Hello Emma, just checking. I am spending my time doing some js challenges. If there is something you would like me to do, do let me know.

console.log(f({a:1,b:2,c:3},'b'))
console.log(f({x:'a',y:'b',z:'c'},'a'))
console.log(f({x:'a',y:'b',z:undefined},'z'))