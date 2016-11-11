var $ipt = $('.ipt'),$btn = $('.btn'),$list = $('.list');
$.ajax({  
    type:"GET", 
    url:"data.json", 
    dataType:"json", 
    success:function(data){
        str = "";
        match(str,data);
        $ipt.keyup(function(){
            var value = $ipt.val();
            match(value,data);
        });
    },
    error:function (result) {
        alert("请求失败，请稍后重试");
    }
});
function match(str,data){
    var s = "";
    for(var _key in data){
        if(_key.indexOf(str)>=0){
            s += "<li><p>"+_key+"</p>"+ "<span>Answer: "+data[_key]+"</span>" +"</li>";
            $('ul').html(s);
        }else if(!str){
            s += "<li><p>"+_key+"</p>"+ "<span>Answer: "+data[_key]+"</span>" +"</li>";
        }
    }
}