var input=+prompt("enter Roza Date")
if(input>=1&&input<=30)
{
var rozaDate=["","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
var sehriTime=["","04:01","04:02","04:03","04:04","04:05","04:06","04:07","04:08","04:09","04:10","04:11","04:12","04:13","04:14","04:15","04:16","04:17","04:18","04:19","04:20","04:21","04:22","04:23","04:24","04:25","04:26","04:27","04:28","04:29","04:30"]
var iftariTime=["","07:01","07:02","07:03","07:04","07:05","07:06","07:07","07:08","07:09","07:10","07:11","07:12","07:13","07:14","07:15","07:16","07:17","07:18","07:19","07:20","07:21","07:22","07:23","07:24","07:25","07:26","07:27","07:28","07:29","07:30"]
document.write("rozaDate",rozaDate[input],"<br/>","sehriTime",sehriTime[input],"<br/>","iftariTime",iftariTime[input])
}
else{
    alert("Enter a Valid roza:")
}