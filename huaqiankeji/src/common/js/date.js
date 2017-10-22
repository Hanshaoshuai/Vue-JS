export function formatDate(date,fmt){
	if(/(y+)/.test(fmt)){
		fmt=fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length));
	};
	let o = {
		'M+':date.getMonth()+1,
		'd+':date.getDate(),
		'h+':date.getHours(),
		'm+':date.getMinutes(),
		's+':date.getSeconds()
	};
	for(let k in o){
		if(new RegExp(`(${k})`).test(fmt)){
			let str=o[k]+'';
			fmt=fmt.replace(RegExp.$1,(RegExp.$1.length===1)?str:padLeftZero(str));
		}
	}
	return fmt;
};

function padLeftZero(str){
	return ('00'+str).substr(str.length);
}

export function numToTime(num){
	num *= 1000;
    let newNum = new Date().getTime(),
      time = new Date(num).toLocaleString(),
      year,
      mouth,
      day,
      newTime = new Date(newNum).toLocaleString();

    time = time.replace(/\d+[\/\-]/, function(text){
      year = text.match(/\d+/)[0];
      return '';
    });
    time = time.replace(/\d+[\/\-]/, function(text){
      mouth = text.match(/\d+/)[0];
      return '';
    });
    time = time.replace(/\d+/, function(text){
      day = text.match(/\d+/)[0];
      return '';
    });

    num = (newNum - num) / 1000;
    if(num < 60){
      return '刚刚';
    } else if(num < 3600){
      return parseInt(num / 60) + '分钟前';
    } else if(num < 86400){
      return parseInt(num / 3600) + '小时前';
    } else if(year === newTime.match(/\d+/)[0]){
      return mouth + '月' + day + '日';
    } else {
      return year + '年' + mouth + '月' + day + '日';
    }
}
export function numToTime1(num){
	num *= 1000;
//	console.log(num)
    let newNum = new Date().getTime(),
      time = new Date(num).toLocaleString(),
      year,
      mouth,
      day,
      h,
      m,
      newTime = new Date(newNum).toLocaleString();

    time = time.replace(/\d+[\/\-]/, function(text){
      year = text.match(/\d+/)[0];
      return '';
    });
    time = time.replace(/\d+[\/\-]/, function(text){
      mouth = text.match(/\d+/)[0];
      return '';
    });
    time = time.replace(/\d+/, function(text){
      day = text.match(/\d+/)[0];
      return '';
    });
     time = time.replace(/\d+/, function(text){
      h = text.match(/\d+/)[0];
      return '';
    });
    time = time.replace(/\d+/, function(text){
      m = text.match(/\d+/)[0];
      return '';
    });
    num = (newNum - num) / 1000;
    console.log(new Date().getDate())
    console.log(day)
//  if(num < 3600){
//    fenzhong = parseInt(num / 60);
//  }
	if(day==new Date().getDate()){
		return h + ':'+ m;
	}
    if(year === newTime.match(/\d+/)[0]){
      return mouth + '月' + day + '日';
    } else {
      return year + '年' + mouth + '月' + day + '日';
    }
}

