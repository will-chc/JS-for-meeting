//数组拍平（扁平化数组）

// function flat(arr){
// 	if(Object.prototype.toString.call(arr) != "[object Array]"){return false};
// 	let res = [];
// 	for(var i=0;i<arr.length;i++){
// 		if(arr[i] instanceof Array){
// 			res = res.concat(flat(arr[i]))
// 		}else{
// 			res.push(arr[i])
// 		}
// 	}
// 	return res;
// };
// var arr = [1, 2, [3, 4, 5, [6, 7, 8, [2, 4]], 9], 10, [11, 12]];
// console.log(flat(arr));

//递归
// function flat(arr){
// 	if(!Array.isArray(arr)){
// 		return ;
// 	}
// 	let res = [];
// 	for(let i = 0;i<arr.length;i++){
// 		if(arr[i] instanceof Array){
// 			contact
// 			res = res.concat(flat(arr[i]))
// 			...
// 			res.push(...flat(arr[i]))
// 		}
// 		else{
// 			res.push(arr[i]);
// 		}
// 	}
// 	return res
// }
// console.log(flat(arr));

//reduce
// function flat(arr){
// 	if(!Array.isArray(arr)){
// 		return ;
// 	}
// 	let res = [];
// 	res = arr.reduce((pre,cur)=>{
// 		return pre.concat(Array.isArray(cur)?flat(cur):cur)
// 	},[])
// 	return res;
// }
//reduce2
// function flat(arr) {
// 	if (!Array.isArray(arr)) {
// 		return;
// 	}
// 	let res = [];
// 	res = arr.reduce((pre, cur) => {
// 		if (Array.isArray(cur)) {
// 			return [...pre, ...flat(cur)]
// 		}
// 		else {
// 			return [...pre, cur];
// 		}
// 	}, [])
// 	return res
// }

// console.log(flat(arr));

//使用toString+split
// function flat(arr) {
// 	if (!Array.isArray(arr)) {
// 		return;
// 	}
// 	return arr.toString().split(',').map(item => {
// 		return parseInt(item);
// 	});
// }
//toString(),去掉所用[] 
// "1, 2, 3, 4, 5, 6, 7, 8, 2, 4, 9, 10, 11, 12"
//split(',')
// [
// 	'1', '2', '3', '4',
// 	'5', '6', '7', '8',
// 	'2', '4', '9', '10',
// 	'11', '12'
// ]

// console.log(flat(arr));

//原生的flat函数
//参数为数组的层数
// [1,2,3,[4]].flat();//默认参数为1
// [1,2,3,[4,[5]]].flat(2);

//推荐放过toStrin+spilt
