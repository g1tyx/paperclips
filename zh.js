//汉化杂项
var cnItems = {
    'RANDOM': '随机',
    'fight': '战斗',
    'back_down': '后退',
    'discrete': '离散',
    'continuous': '连续',
    'particle': '粒子',
    'wave': '波动',
    'go': '继续',
    'stay': '停留',
    'search': '搜索',
    'evaluate': '评估',
    'attack': '攻击',
    'decay': '衰减',
    'raise_price': 'raise_price ',
    'lower_price': '降价',
    'swerve': '转向',
    'straight': '直线',
    'macro': '宏观',
    'micro': '微观',
    'cooperate': '合作',
    'defect': '叛变',
    'football': '足球',
    'opera': '歌剧',
    'accept': '接受',
    'reject': '拒绝',
    'lead': '领导',
    'follow': '随从',
    'fold': '信徒',
    'bet': '打赌',
    'tails': '尾部',
    'heads': '头部',
    'deny': '否认',
    'A100': 'A100',
    'B100': 'B100',
    'GREEDY': '贪婪',
    'GENEROUS': '慷慨',
    'BEAT LAST': '最后一击',
    'TIT FOR TAT': '针锋相对',
    'MINIMAX': '最小最大',
    'peace': '和平',
    'war': '战争',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

};

function cnItem(text) {
    //数组里面有的，返回中文
    for (var i in cnItems) {
        if (text == i) {
            return cnItems[i];
        }
    }
    //数组里面没有的，原样返回
    for (var i in cnItems) {
        if (text != i) {
            console.log("需汉化的英文Item：" + text);
            return text;
        }
    }
}



//汉化标题
var cntit = {
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    

};

function cntitle(text) {
    //数组里面有的，返回中文
    for (var i in cntit) {
        if (text == i) {
            return cntit[i];
        }
    }
    //数组里面没有的，原样返回
    for (var i in cntit) {
        if (text != i) {
            console.log("需汉化的英文标题：" + text);
            return text;
        }
    }
}

