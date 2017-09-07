
1. 安装ruby
2. 安装sass:`gem install sass`
3. `sass -v`

`sass --watch sass/scss:sass/css --style expanded`

上面这行命令意思是以expanded格式将sass/scss目录下的所有scss文件编译并保存到sass/css目录下


关于命令参数：

--style表示解析后的css是什么排版格式;
sass内置有四种编译格式:`nested`,`expanded`,`compact`,`compressed`。


或者可以使用工具koala编译。[下载考拉](https://www.sass.hk/skill/koala-app.html)


另：关于中文注释报错:

`C:\Ruby24-x64\lib\ruby\gems\2.4.0\gems\sass-3.5.1\lib\sass`下engine.rb文件打开，在所有的`require('xxx')`后加上一行代码:`Encoding.default_external = Encoding.find('utf-8')`