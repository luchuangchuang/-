function saveStorage() {
	var data = new Object;
	data.name = document.getElementById('name').value;
	data.phone = document.getElementById('phone').value;
	data.wechat = document.getElementById('wechat').value;
	data.memo = document.getElementById('memo').value;
	var str = JSON.stringify(data);
	localStorage.setItem(data.name,str);
	alert('数据已经保存！');
}

function findStorage(id){
	var find = document.getElementById('find').value;
	var str = localStorage.getItem(find);
	var data = JSON.parse(str);
	var result  = "姓名：" + data.name + '</br>';
		result += "手机：" + data.phone + '</br>';
		result += "微信：" + data.wechat + '</br>';
		result += "备注：" + data.memo + '</br>';
	var msg = document.getElementById(id);
	msg.innerHTML = result;
}
