let name="Rahul";
let sum="";
for(let i=name.length; i>=0; i--){
	sum=sum+name[i];
}
if(sum != name){
	console.log("Palindrome");
}else{
	console.log("Not Palindrome");