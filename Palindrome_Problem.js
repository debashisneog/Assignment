let nam="Rahul";
let sum="";
for(let i=nam.length-1; i>=0; i--)
{
	sum=sum+nam[i];
}
if(sum == nam)
{
console.log("Palindrome");
}
else
{
console.log("Not Palindrome");
}