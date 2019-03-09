arr=[{Movie:"KGF",actor:"Yash",id:605},
{Movie:"A",actor:"Uppi",id:01},
{Movie:"ABCD",actor:"varun",id:305}];
var nid=arr[0]["id"];
var newarr=[]
var newarr1=[]
for(var i=0;i<arr.length;i++)
{
  newarr.push(arr[i]["id"])
}
var p=newarr.sort((a,b)=>{return a-b});
for(var l=0;l<p.length;l++)
{
	var m=p[l]
for(var j=0;j<arr.length;j++)
{
if(arr[j]["id"]===m)
{
newarr1.push(arr[j]);
}
} 
}