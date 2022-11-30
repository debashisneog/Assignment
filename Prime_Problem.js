let num=13;
let flag=true;
for(let i=0; i<num; i++){
	if(num%i==0){
	flag=true;
	break;
	}
}
if(flag=true){
	console.log(num, "is a Prime Number")
	}
	else{
	console.log(num, "is not a Prime number")
	}