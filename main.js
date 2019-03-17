var div = document.getElementById('canvas')//获取元素通过id
var painting = false//表示没有画画
//摁下鼠标
document.onmousedown = function(a){
    painting = true
    var x = a.clientX
    var y = a.clientY//获取xy坐标
    var divA = document.createElement('div')//创建div
    divA.style = "width: 6px; height: 6px;" + 
      "background: black; border-radius: 3px;" +
      "position: absolute; left: "+(x-3)+"px;" +
      "top: "+(y-3)+"px;"//divA的样式
    div.appendChild(divA)//放入到divA中
}
//移动鼠标
document.onmousemove = function(a){
    if(painting){//如果为true
        var x = a.clientX
        var y = a.clientY//获取xy坐标
        var divA = document.createElement('div')//创建div
        divA.style = "width: 6px; height: 6px;" + 
          "background: black; border-radius: 3px;" +
          "position: absolute; left: "+(x-3)+"px;" +
          "top: "+(y-3)+"px;"//divA的样式
        div.appendChild(divA)//放入到divA中
    }else{ //否则什么也不做 
    } 
}
//松开鼠标
document.onmouseup = function(c){
    painting = false//停笔
}