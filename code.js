// 音乐链接
let link = $$(".m-table tbody td:nth-child(2) a").map(function(item){return item.href})

//标题
let title = $$(".m-table tbody td:nth-child(2) b").map(function(item){return item.title})

//艺术家
let artist = $$(".m-table tbody td:nth-child(4) > div").map(function(item){return item.title})

let list = []

for(let i=0; i<title.length; i++){
    let temp = title[i] + ' ' + artist[i]
    let regx = / - .+( \|\| )/
    list.push(temp.replace(regx, '$1'))
}

copy(list.join('\n'));