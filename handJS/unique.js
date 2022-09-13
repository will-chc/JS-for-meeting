//数组去重


let array = [1,2,3,6,4,8,5,2,3,0];

//indexOf 和filter

// function unique(arr){
//     if(!Array.isArray(arr)){
//         return console.error('is not a array');
//     }
//     let res = arr.filter((item,index)=>{
//         //indexOf返回数组中第一个该元素的下标
//         return arr.indexOf(item) == index;
//     })
//     return res;
// }
// console.log(unique(array));

// ---------------------------------------------------------------

//indexOf和循环

// function unique(arr){
//     if(!Array.isArray(arr)){
//         return console.error('is not a array');
//     }
//     let res = [];
//     for(let i =0;i<arr.length;i++){
//         //使用用indexOf
//         // if(res.indexOf(arr[i])===-1){
//         //     res.push(arr[i])
//         // }
//         // 使用includes
//         if(!res.includes(arr[i])){
//             res.push(arr[i])
//         }
//     }
//     return res;
// }
// console.log(unique(array));

// ---------------------------------------------------------------

//双重for循环

function unique(arr){
    if(!Array.isArray(arr)){
        return console.log('not a array');
    }
    let res = [arr[0]];
    for(let i = 0;i<arr.length;i++){
        let flag = true
        for(let j = 0; j<res.length;j++){
            if(arr[i]===res[j]){
                flag = false;
                break
            }
        }
        if(flag){
            res.push(arr[i])
        }
    }
    return res
}
console.log(unique(array));

// ---------------------------------------------------------------

// 相邻元素去重
// function unique(arr){
//     if(!Array.isArray(arr)){
//         return console.log('not a array');
//     }
//     let res = [];
//     //排序
//     arr = arr.sort();
//     for(let i = 0 ;i<arr.length;i++){
//         if(arr[i]!==arr[i+1]){
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(unique(array));

// ---------------------------------------------------------------

//利用对象属性去重
// function unique(arr){
//     if(!Array.isArray(arr)){
//         return console.log('is not a array');
//     }
//     let res = [];
//     let obj = {};
//     for(let i = 0;i<arr.length;i++){
//         if(!obj[arr[i]]){
//             res.push(arr[i]);
//             obj[arr[i]] = 1;
//         }
//         else{
//             obj[arr[i]]++;
//         }
//     }
//     return res;
// }

// console.log(unique(array));

// ---------------------------------------------------------------

//ES6 set 去重

// function unique(arr){
//     if(!Array.isArray(arr)){
//         return console.log('not a array');
//     }
//     //set 和解构赋值
//     // return [...new Set(arr)]    
//     //set 和Array.from
//     return Array.from(new Set(arr))
// }
// console.log(unique(array));

//hasOwnproperty去重
function unique(arr){
    if(!Array.isArray(arr)){
        return console.log('not a array');
    }
   
    let obj = {}
    let res = arr.filter((item,index)=>{
        if(obj.hasOwnProperty(typeof item +item)){
            return false
        }
        else{
            obj[typeof item +item] = true;
            return true
        }
    })
    return res;
}
console.log(unique(array));
