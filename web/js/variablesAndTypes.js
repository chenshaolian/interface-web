window.onload = function () {
  var options = {
    mode: "python",// 语言模式
    keyMap: "sublime",// 快键键风格
    lineNumbers: true,// 显示行号
    smartIndent: true, //智能缩进
    indentUnit: 4, // 智能缩进单位为4个空格长度
    indentWithTabs: true,  // 使用制表符进行智能缩进
    lineWrapping: true, // 自动换行
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],// 在行槽中添加行号显示器、折叠器、语法检测器
    foldGutter: true, // 启用行槽中的代码折叠
    autofocus: true,  //自动聚焦
    matchBrackets: true,// 匹配结束符号，比如"]、}"
    autoCloseBrackets: true, // 自动闭合符号
    styleActiveLine: true, // 显示选中行的样式
  }

  var el = document.getElementById("numbers");
  var myCodeMirror = CodeMirror.fromTextArea(el, options);
  
  var initValue = "myint = 7\n" + "print(myint)";  
  myCodeMirror.setOption("value", initValue);

  var run1 = document.getElementById("numbersRun");
  run1.onclick = function () {
    var value = myCodeMirror.getValue();
    var qs = Qs;
    axios({
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      url: 'http://127.0.0.1:5000/run',
      data: qs.stringify({ code: value })
    }).then(function (res) {
      var output = new Function("return " + res.data)()
      var content = '';
      if (output.code == 'Error') {
        content = '<div class="error">' + output.output + '</div>'
      } else {
        content = '<div class="success">' + output.output + '</div>'
      }
      document.getElementById('numbersContainer').innerHTML += content;
    }).catch(function (err) {
      alert('再试一次，编译错误！')
    });;
  };

  var el2 = document.getElementById("numbers2");
  var myCodeMirror2 = CodeMirror.fromTextArea(el2, options);

  var initValue2 = "myfloat = 7.0\n" + "print(myfloat)\n" + "myfloat = float(7)\n" + "print(myfloat)";
  myCodeMirror2.setOption("value", initValue2);

  var run2 = document.getElementById("numbersRun2");
  run2.onclick = function () {
    var value = myCodeMirror2.getValue();
    var qs = Qs;
    axios({
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      url: 'http://127.0.0.1:5000/run',
      data: qs.stringify({ code: value })
    }).then(function (res) {
      var output = new Function("return " + res.data)()
      var content = '';
      if (output.code == 'Error') {
        content = '<div class="error">' + output.output + '</div>'
      } else {
        content = '<div class="success">' + output.output + '</div>'
      }
      document.getElementById('numbersContainer2').innerHTML += content;
    }).catch(function (err) {
      alert('再试一次，编译错误！')
    });;
  };

  var el3 = document.getElementById("strings");
  var myCodeMirror3 = CodeMirror.fromTextArea(el3, options);

  var initValue3 = "mystring = 'hello'\n" + "print(mystring)\n" + "mystring = 'hello'\n" + "print(mystring)";
  myCodeMirror3.setOption("value", initValue3);

  var run3 = document.getElementById("stringsRun");
  run3.onclick = function () {
    var value = myCodeMirror3.getValue();
    var qs = Qs;
    axios({
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      url: 'http://127.0.0.1:5000/run',
      data: qs.stringify({ code: value })
    }).then(function (res) {
      var output = new Function("return " + res.data)()
      var content = '';
      if (output.code == 'Error') {
        content = '<div class="error">' + output.output + '</div>'
      } else {
        content = '<div class="success">' + output.output + '</div>'
      }
      document.getElementById('stringsContainer').innerHTML += content;
    }).catch(function (err) {
      alert('再试一次，编译错误！')
    });;
  };

  var el4 = document.getElementById("strings2");
  var myCodeMirror4 = CodeMirror.fromTextArea(el4, options);

  var initValue4 = 'mystring = "Don\'t worry about apostrophes"\n' + 'print(mystring)';
  myCodeMirror4.setOption("value", initValue4);
 
  var run4 = document.getElementById("stringsRun2");
  run4.onclick = function () {
    var value = myCodeMirror4.getValue();
    var qs = Qs;
    axios({
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      url: 'http://127.0.0.1:5000/run',
      data: qs.stringify({ code: value })
    }).then(function (res) {
      var output = new Function("return " + res.data)()
      var content = '';
      if (output.code == 'Error') {
        content = '<div class="error">' + output.output + '</div>'
      } else {
        content = '<div class="success">' + output.output + '</div>'
      }
      document.getElementById('stringsContainer2').innerHTML += content;
    }).catch(function (err) {
      alert('再试一次，编译错误！')
    });;
  };

  var el5 = document.getElementById("strings3");
  var myCodeMirror5 = CodeMirror.fromTextArea(el5, options);

  var initValue5 = 'one = 1\n' + 'two = 2\n' + 'three = one + two\n' + 'print(three)\n\n' + 'hello = "hello"\n' + 'world = "world"\n' + 'helloworld = hello + " " + world\n' + 'print(helloworld)';
  myCodeMirror5.setOption("value", initValue5);
 
  var run5 = document.getElementById("stringsRun3");
  run5.onclick = function () {
    var value = myCodeMirror5.getValue();
    var qs = Qs;
    axios({
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      url: 'http://127.0.0.1:5000/run',
      data: qs.stringify({ code: value })
    }).then(function (res) {
      var output = new Function("return " + res.data)()
      var content = '';
      if (output.code == 'Error') {
        content = '<div class="error">' + output.output + '</div>'
      } else {
        content = '<div class="success">' + output.output + '</div>'
      }
      document.getElementById('stringsContainer3').innerHTML += content;
    }).catch(function (err) {
      alert('输再试一次，编译错误！')
    });;
  };

  var el6 = document.getElementById("strings4");
  var myCodeMirror6 = CodeMirror.fromTextArea(el6, options);

  var initValue6 = 'a, b = 3, 4\n' + 'print(a,b)';
  myCodeMirror6.setOption("value", initValue6);
  
  var run6 = document.getElementById("stringsRun4");
  run6.onclick = function () {
    var value = myCodeMirror6.getValue();
    var qs = Qs;
    axios({
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      url: 'http://127.0.0.1:5000/run',
      data: qs.stringify({ code: value })
    }).then(function (res) {
      var output = new Function("return " + res.data)()
      var content = '';
      if (output.code == 'Error') {
        content = '<div class="error">' + output.output + '</div>'
      } else {
        content = '<div class="success">' + output.output + '</div>'
      }
      document.getElementById('stringsContainer4').innerHTML += content;
    }).catch(function (err) {
      alert('再试一次，编译错误！')
    });;
  };

  var el7 = document.getElementById("strings5");
  var myCodeMirror7 = CodeMirror.fromTextArea(el7, options);

  var initValue7 = '# This will not work!\n' + 'one = 1\n' + 'two = 2\n' + 'hello = "hello"\n\n' + 'print(one + two + hello)';
  myCodeMirror7.setOption("value", initValue7);

  var run7 = document.getElementById("stringsRun5");
  run7.onclick = function () {
    var value = myCodeMirror7.getValue();
    var qs = Qs;
    axios({
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      url: 'http://127.0.0.1:5000/run',
      data: qs.stringify({ code: value })
    }).then(function (res) {
      var output = new Function("return " + res.data)()
      var content = '';
      if (output.code == 'Error') {
        content = '<div class="error">' + output.output + '</div>'
      } else {
        content = '<div class="success">' + output.output + '</div>'
      }
      document.getElementById('stringsContainer5').innerHTML += content;
    }).catch(function (err) {
      alert('再试一次，编译错误！')
    });;
  };

  var el8 = document.getElementById("exercise");
  var myCodeMirror8 = CodeMirror.fromTextArea(el8, options);

  var initValueExercise = '# change this code\n' + 'mystring = None\n' + 'myfloat = None\n' + 'myint = None\n\n' + '# testing code\n' + 'if mystring == "hello":\n' + '\tprint("String: %s" % mystring)\n' + 'if isinstance(myfloat, float) and myfloat == 10.0:\n' + '\tprint("Float: %f" % myfloat)\n' + 'if isinstance(myint, int) and myint == 20:\n' + '\tprint("Integer: %d" % myint)';
  myCodeMirror8.setOption("value", initValueExercise);

  var run8 = document.getElementById("exerciseRun");
  run8.onclick = function () {
    var value = myCodeMirror8.getValue();
    var qs = Qs;
    axios({
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      url: 'http://127.0.0.1:5000/run',
      data: qs.stringify({ code: value })
    }).then(function (res) {
      var output = new Function("return " + res.data)()
      var content = '';
      if (output.code == 'Error') {
        content = '<div class="error">' + output.output + '</div>'
      } else {
        content = '<div class="success">' + output.output + '</div>'
        document.getElementById('tip').style.display = 'block';
        document.getElementById('exerciselt').style.paddingBottom = '40px';
        var reg1 = RegExp(/String: hello/);
        var reg2 = RegExp(/Float: 10.000000/);
        var reg3 = RegExp(/Integer: 20/);
        if (output.output.match(reg1) && output.output.match(reg2) && output.output.match(reg3)) {
          document.getElementById('tip').innerHTML = 'Great job!<span class="close" id="close">×</span>';
          document.getElementById('tip').style.background = '#83c967';
        } else {
          document.getElementById('tip').innerHTML = 'Make sure your anser.<span class="close" id="close">×</span>';
          document.getElementById('tip').style.background = '#c96768';
        }
      }
      document.getElementById('exerciseContainer').innerHTML += content;
      document.getElementById('close').onclick = function () {
        document.getElementById('tip').style.display = 'none';
      }
    }).catch(function (err) {
      alert('再试一次，编译错误！')
    });;
  };
  var lis1 = document.getElementById("li1")
  var lis2 = document.getElementById("li2")


  lis1.onclick = function () {
    lis1.className = "active"
    lis2.className = ""
    initValueExercise = '# change this code\n' + 'mystring = None\n' + 'myfloat = None\n' + 'myint = None\n\n' + '# testing code\n' + 'if mystring == "hello":\n' + '\tprint("String: %s" % mystring)\n' + 'if isinstance(myfloat, float) and myfloat == 10.0:\n' + '\tprint("Float: %f" % myfloat)\n' + 'if isinstance(myint, int) and myint == 20:\n' + '\tprint("Integer: %d" % myint)';
    myCodeMirror8.setOption("value", initValueExercise);
  }
  lis2.onclick = function () {
    lis2.className = "active"
    lis1.className = ""
    initValueExercise = '# change this code\n' + 'mystring = "hello"\n' + 'myfloat = 10.0\n' + 'myint = 20\n\n' + '# testing code\n' + 'if mystring == "hello":\n' + '\tprint("String: %s" % mystring)\n' + 'if isinstance(myfloat, float) and myfloat == 10.0:\n' + '\tprint("Float: %f" % myfloat)\n' + 'if isinstance(myint, int) and myint == 20:\n' + '\tprint("Integer: %d" % myint)';
    myCodeMirror8.setOption("value", initValueExercise);
  }
  document.getElementById("solution").onclick = function () {
    lis2.className = "active"
    lis1.className = ""
    this.style.display = 'none';
    document.getElementById('li2').style.visibility = 'visible';
    initValueExercise = '# change this code\n' + 'mystring = "hello"\n' + 'myfloat = 10.0\n' + 'myint = 20\n\n' + '# testing code\n' + 'if mystring == "hello":\n' + '\tprint("String: %s" % mystring)\n' + 'if isinstance(myfloat, float) and myfloat == 10.0:\n' + '\tprint("Float: %f" % myfloat)\n' + 'if isinstance(myint, int) and myint == 20:\n' + '\tprint("Integer: %d" % myint)';
    myCodeMirror8.setOption("value", initValueExercise);
    run8.onclick = function () {
      var value = myCodeMirror8.getValue();
      var qs = Qs;
      axios({
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'post',
        url: 'http://127.0.0.1:5000/run',
        data: qs.stringify({ code: value })
      }).then(function (res) {
        var output = new Function("return " + res.data)()
        var content = '<script.py> output:';
        if (output.code == 'Error') {
          content = '<div class="error">' + output.output + '</div>'
        } else {
          content = '<div class="success">' + output.output + '</div>'
          document.getElementById('tip').style.display = 'block';
          document.getElementById('exerciselt').style.paddingBottom = '40px';
          var reg1 = RegExp(/String: hello/);
          var reg2 = RegExp(/Float: 10.000000/);
          var reg3 = RegExp(/Integer: 20/);
          if (output.output.match(reg1) && output.output.match(reg2) && output.output.match(reg3)) {
            document.getElementById('tip').innerHTML = 'Great job!<span class="close" id="close">×</span>';
            document.getElementById('tip').style.background = '#83c967';
          } else {
            document.getElementById('tip').innerHTML = 'Make sure your anser.<span class="close" id="close">×</span>';
            document.getElementById('tip').style.background = '#c96768';
          }
        }
        document.getElementById('exerciseContainer').innerHTML += content;
        document.getElementById('close').onclick = function () {
          document.getElementById('tip').style.display = 'none';
        }
      }).catch(function (err) {
        alert('再试一次，编译错误！')
      });;
    };
  }

  function pageTwo() {
    window.location.href = '../html/lists.html'
  }
  document.getElementById("pageTwo").onclick = pageTwo;

  function pageOne() {
    window.location.href = '../html/helloWorld.html'
  }
  document.getElementById("pageOne").onclick = pageOne;

  function toIndex() {
    window.location.href = '../index.html'
  }
  document.getElementById("logo").onclick = toIndex;
  document.getElementById("project").onclick = toIndex;
  window.scrollTo(0, 0);
}
