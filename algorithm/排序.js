const arr = [8,39,48,23,8,29,9,0,4,484,28]
//冒泡排序
// let babluSort = function(arr){
//     for(let i = 0;i<arr.length;i++){
//         for(let j = i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//             }
//         }
//     }
//     return arr
// }
// console.log(babluSort(arr));

//快速排序

let quicksort = function(arr){
    if (arr.length <= 1) return arr
    let index = Math.floor(arr.length/2);
    let middle = arr.splice(index,1)[0]
    let left = []
    let right = []
    for(let i = 0;i<arr.length;i++){
        if (arr[i]<middle) {
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return quicksort(left).concat([middle],quicksort(right));
}
console.log(quicksort(arr));
