/**
 * Created by Administrator on 2017/2/15.
 */
function setCookie(name,value,iDate) {
    var oDate =new Date();
    oDate.setDate(oDate.getDate()+iDate);
    document.cookie =name+"="+value+";expires="+oDate;
}
function getCookie(name) {
    var arr = document.cookie.split("; ");
    for(var i =0; i<arr.length; i++){
        var arr2 = arr[i].split("=");
        if(arr2[0] == name){
            return arr2[1];
        }
    }

}
function removeCookie(name) {
    setCookie(name,1,-1);
}