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

//  time = time.replace(/\d+[\/\-]/, function(text){
//    year = text.match(/\d+/)[0];
//    return '';
//  });
//  time = time.replace(/\d+[\/\-]/, function(text){
//    mouth = text.match(/\d+/)[0];
//    return '';
//  });
//  time = time.replace(/\d+/, function(text){
//    day = text.match(/\d+/)[0];
//    return '';
//  });
	time = time.replace(/\d+/, function(text){
      year = text;
      return '';
    });
    time = time.replace(/\d+/, function(text){
      mouth = text;
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
//    console.log(time)
//  time = time.replace(/\d+[\/\-]/, function(text){
//    year = text.match(/\d+/)[0];
//    return '';
//  });
//  time = time.replace(/\d+[\/\-]/, function(text){
//    mouth = text.match(/\d+/)[0];
//    return '';
//  });
//  time = time.replace(/\d+/, function(text){
//    day = text.match(/\d+/)[0];
//    return '';
//  });
	time = time.replace(/\d+/, function(text){
      year = text;
      return '';
    });
    time = time.replace(/\d+/, function(text){
      mouth = text;
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
//  console.log(new Date().getDate())
//  console.log(time)
//  if(num < 3600){
//    fenzhong = parseInt(num / 60);
//  }
	if(day==new Date().getDate()){
//		time.replace(/(上午|下午)\d+/, function(text){
//			if(/上午/.test(text)){
//				console.log(text)
//				return h + ':'+ m;
////				return text.match(/\d+/)[0];
//			} else {
//				console.log(text)
//				return (12+h*1) + ':'+ m;
////				return parseInt(text.match(/\d+/)[0]) + 12;
//			}
//		});
		if(/上午/.test(time)){
			if(h<10){
				return '0'+h.toString() + ':'+ m;
			}else{
				if(h==12){
					return '00' + ':'+ m;
				}else{
					return h + ':'+ m;
				}
			}
		} else {
			if(h<12){
				return (12+h*1) + ':'+ m;
			}else{
//				if(h==12){
//					return '00' + ':'+ m;
//				}else{
					return h + ':'+ m;
//				}
			}
		}
	}
    if(year === newTime.match(/\d+/)[0]){
      return mouth + '月' + day + '日';
    } else {
      return year + '年' + mouth + '月' + day + '日';
    }
}


export function numToTime2(num){
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

//  time = time.replace(/\d+[\/\-]/, function(text){
//    year = text.match(/\d+/)[0];
//    return '';
//  });
//  time = time.replace(/\d+[\/\-]/, function(text){
//    mouth = text.match(/\d+/)[0];
//    return '';
//  });
//  time = time.replace(/\d+/, function(text){
//    day = text.match(/\d+/)[0];
//    return '';
//  });
	time = time.replace(/\d+/, function(text){
      year = text;
      return '';
    });
    time = time.replace(/\d+/, function(text){
      mouth = text;
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
//  console.log(new Date().getDate())
//  console.log(day)
//  if(num < 3600){
//    fenzhong = parseInt(num / 60);
//  }
//	if(day==new Date().getDate()){
//		return h + ':'+ m;
//	}
    if(year === newTime.match(/\d+/)[0]){
      return mouth + '月' + day + '日'+ h + ':'+ m;
    } else {
      return year + '年' + mouth + '月' + day + '日';
    }
}


//倒计时
export function numToTime3(num){
	num *= 1000;
    let newNum = new Date().getTime(),
      time = new Date(num).toLocaleString(),
      year,
      mouth,
      day,
      newTime = new Date(newNum).toLocaleString();
//  time = time.replace(/\d+[\/\-]/, function(text){
//    year = text.match(/\d+/)[0];
//    return '';
//  });
//  time = time.replace(/\d+[\/\-]/, function(text){
//    mouth = text.match(/\d+/)[0];
//    return '';
//  });
//  time = time.replace(/\d+/, function(text){
//    day = text.match(/\d+/)[0];
//    return '';
//  });
    time = time.replace(/\d+/, function(text){
      year = text;
      return '';
    });
    time = time.replace(/\d+/, function(text){
      mouth = text;
      return '';
    });
    time = time.replace(/\d+/, function(text){
      day = text.match(/\d+/)[0];
      return '';
    });

    num = (num+10*24*3600*1000-newNum) /1000;
    var h = num/3600/24;
    var f = h- Math.floor(h)
    var x=f*24
    if(h >= 1){
//  	return h
    	return Math.floor(h)+'天'+Math.floor(x)+"小时";
    }else{
    	return Math.floor(x)+"小时";
    }
    
//  console.log(num)
//  if(num/3600 > 24){
////  	console.log(num/86400/60)
//		
//  	return parseInt(num /24 / 3600) + '天';
//  }
//  if(num > 86400){
//  	return parseInt(num / 3600) + '小时前';
//  }
//  if(num > 3600){
//  	return parseInt(num / 60) + '分钟前';
//  }
//  if(num < 60){
//    return '刚刚';
//  } else if(num < 3600){
//    return parseInt(num / 60) + '分钟前';
//  } else if(num < 86400){
//    return parseInt(num / 3600) + '小时前';
//  } else if(year === newTime.match(/\d+/)[0]){
//    return mouth + '月' + day + '日';
//  } else {
//    return year + '年' + mouth + '月' + day + '日';
//  }
}
