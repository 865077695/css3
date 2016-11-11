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
    str = pinyin.getFullChars(str).toLowerCase();
    var content = "";
    for(var _key in data){
       if(pinyin.getFullChars(_key).toLowerCase().indexOf(str)>=0){
            content += "<li><p>"+_key+"</p>"+ "<span>Answer: "+data[_key]+"</span>" +"</li>";
        }
        $('ul').html(content);
    }
    if(content == ''){
        $('ul').html("没有找到匹配的问题，请更换关键词后重新搜索")
    }
}