$(document).ready(function () {

    $(function() {
        $('.gotop').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 600);
        })
    });
    $('.ham').click(function () {
        $(this).toggleClass('-close');
        $('header ul').toggleClass('-show');
    });

    $('.item').click(function () { 
        $('.inner').removeClass('fade-leave-to').addClass('fade-enter-to');
    });

    $('.back').click(function () { 
        $('.inner').removeClass('fade-enter-to').addClass('fade-leave-to');
    });

    $('.filters_btn li').click(function () {
        $(this).addClass('-this').siblings().removeClass('-this');
        
    });
    
});




var PreCount = 0;
var Filter = 0;

var inner_txt =[
    {
        tag:2,
        mark:'web design',
        h2:'個人網站 | TOAST bakery網頁設計',
        date:'2020.12',
        tit:'TOAST bakery | LOGO、網站視覺、全頁面 | <a href="http://www.nrs77.com/do/toast/" style="color: cornflowerblue;"> 前往網站</a>',
        count:1,
        image:[
            "./img/project_020_1.jpg",
        ],
    },
    {
        tag:2,
        mark:'web design',
        h2:'團體網站 | 肉多不怪電商網站',
        date:'2021.3',
        tit:'肉多不怪 | LOGO、網站視覺、首頁、QA、客製頁面、心理測驗、動畫特效 | <a href="https://succulentsplant.net/main.html" style="color: cornflowerblue;"> 前往網站</a>',
        count:5,
        image:[
            "./img/project_021_1.jpg",
            "./img/project_021_2.jpg",
            "./img/project_021_3.jpg",
            "./img/project_021_4.jpg",
            "./img/project_021_5.jpg",
        ],
    },
    {
        tag:1,
        mark:'package design',
        h2:'Kotex | 輕柔棉聯名包裝',
        date:'2019.09',
        tit:'靠得住Ｘ宇宙人聯名 | 主視覺、包裝設計、棉片袋設計、贈品設計、立體圖',
        count:5,
        image:[
            "./img/project_01_1.jpg",
            "./img/project_01_2.jpg",
            "./img/project_01_3.jpg",
            "./img/project_01_4.jpg",
            "./img/project_01_5.jpg"
        ],
    },
    {
        tag:1,
        mark:'package design',
        h2:'Kleenex | 溫和柔感面紙',
        date:'2020.04',
        tit:'舒潔 | 包裝設計、立體圖',
        count:2,
        image:[
            "./img/project_023_1.jpg",
            "./img/project_023_2.jpg",
        ],
    },
    {
        tag:1,
        mark:'package design',
        h2:'Kleenex | 迪士尼聯名-奧運應援包',
        date:'2020.05',
        tit:'舒潔Ｘ迪士尼聯名X奧運應援包 | 主視覺、包裝設計、立體圖',
        count:4,
        image:[
            "./img/project_02_1.jpg",
            "./img/project_02_2.jpg",
            "./img/project_02_3.jpg",
            "./img/project_02_4.jpg"
        ],
    },
    {
        tag:2,
        mark:'web design',
        h2:'MUJI無印良品 | 木製沙發特企',
        date:'2021.3',
        tit:'MUJI無印良品 | 網頁設計 | <a href="https://www.books.com.tw/activity/fashion/muji/2021/05/e-3/" style="color: cornflowerblue;"> 前往網站</a>',
        count:1,
        image:[
            "./img/project_024_1.jpg",
        ],
    },
    {
        tag:1,
        mark:'package design',
        h2:'Kleenex | 玩具總動員聯名包裝',
        date:'2019.04',
        tit:'舒潔Ｘ玩具總動員 | 主視覺、包裝設計(盒面/外袋/袖珍包/紙手帕)、立體圖',
        count:5,
        image:[
            "./img/project_03_1.jpg",
            "./img/project_03_2.jpg",
            "./img/project_03_3.jpg",
            "./img/project_03_4.jpg",
            "./img/project_03_5.jpg"
        ],
    },
    {
        tag:1,
        mark:'package design',
        h2:'Huggies | 小熊維尼聯名包裝',
        date:'2019.12',
        tit:'好奇Ｘ小熊維尼聯名 | 包裝設計、立體圖',
        count:1,
        image:[
            "./img/project_04_1.jpg"
        ],
    },
    {
        tag:2,
        mark:'web design',
        h2:'Huggies | 大樹旗艦店網頁設計',
        date:'2020.03',
        tit:'好奇Ｘ大樹網站視覺設計 | 主視覺、網頁UI/UX、廣告Banner',
        count:4,
        image:[
            "./img/project_05_1.jpg",
            "./img/project_05_2.jpg",
            "./img/project_05_3.jpg",
            "./img/project_05_4.jpg"
        ],
    },
    {
        tag:1,
        mark:'package design',
        h2:'Kleenex | 迪士尼XCostco 聯名包裝',
        date:'2019.09',
        tit:'舒潔Ｘ迪士尼XCostco 春季聯名包裝 | 包裝設計、立體圖',
        count:3,
        image:[
            "./img/project_06_1.jpg",
            "./img/project_06_2.jpg",
            "./img/project_06_3.jpg",
        ],
    },
    {
        tag:2,
        mark:'web design',
        h2:'Kleenex | 兒童衛生紙系列EDM',
        date:'2020.05',
        tit:'舒潔Ｘ迪士尼聯名兒童衛生紙系列EDM | 海報設計、EDM設計',
        count:2,
        image:[
            "./img/project_07_1.jpg",
            "./img/project_07_2.jpg"
        ],
    },
    {
        tag:1,
        mark:'package design',
        h2:'Kotex | 喵掌包主視覺',
        date:'2020.06',
        tit:'靠得住Ｘ喵掌包主視覺 | 主視覺設計',
        count:1,
        image:[
            "./img/project_08_1.jpg"
        ],
    },
    {
        tag:1,
        mark:'package design',
        h2:'Kleenex | 迪士尼XCostco 春季聯名',
        date:'2010.03',
        tit:'舒潔Ｘ迪士尼XCostco 春季聯名包裝 | 包裝設計、外袋設計、立體圖',
        count:2,
        image:[
            "./img/project_09_1.jpg",
            "./img/project_09_2.jpg",
        ],
    },
    {
        tag:2,
        mark:'web design',
        h2:'Kotex | 舒潔夏日EDM',
        date:'2019.08',
        tit:'靠得住Ｘ夏日EDM | 主視覺設計、EDM設計、廣告banner',
        count:3,
        image:[
            "./img/project_010_1.jpg",
            "./img/project_010_2.jpg",
            "./img/project_010_3.jpg",
        ],
    },
    {
        tag:2,
        mark:'web design',
        h2:'Huggies | PChome旗艦店網頁設計',
        date:'2020.06',
        tit:'好奇ＸPChome旗艦店 | 網頁設計、廣告banner',
        count:2,
        image:[
            "./img/project_011.gif",
            "./img/project_011_2.jpg",
        ],
    },
    {
        tag:1,
        mark:'package design',
        h2:'Huggies | 奇奇蒂蒂聯名包裝',
        date:'2019.05',
        tit:'好奇Ｘ奇奇蒂蒂聯名 | 包裝設計、立體圖',
        count:2,
        image:[
            "./img/project_012_1.jpg",
            "./img/project_012_2.jpg"
        ],
    },
    {
        tag:1,
        mark:'package design',
        h2:'可麗舒 | 熊熊遇見你聯名包裝',
        date:'2019.10',
        tit:'可麗舒Ｘ奇奇蒂蒂聯名 | 包裝設計、立體圖',
        count:1,
        image:[
            "./img/project_013_1.jpg"
        ],
    },
    {
        tag:1,
        mark:'package design',
        h2:'Kotex | TheBodyShop聯名包裝',
        date:'2019.07',
        tit:'靠得住ＸTheBodyShop聯名 | 包裝設計、廣吿banner、立體圖',
        count:3,
        image:[
            "./img/project_014_1.jpg",
            "./img/project_014_2.jpg",
            "./img/project_014_3.jpg",
        ],
    },
    {
        tag:1,
        mark:'package design',
        h2:'Huggies | LINE聯名禮物箱',
        date:'2020.05',
        tit:'好奇ＸLINE | 包裝設計、廣吿banner、立體圖',
        count:2,
        image:[
            "./img/project_015_1.jpg",
            "./img/project_015_2.jpg"
        ],
    },
    {
        tag:2,
        mark:'web design',
        h2:'博士倫 | LACELLA網頁設計',
        date:'2019.02',
        tit:'博士倫ＸLACELLA | 網頁設計、網站維護',
        count:2,
        image:[
            "./img/project_016_1.jpg",
            "./img/project_016_2.jpg"
        ],
    },
    {
        tag:2,
        mark:'web design',
        h2:'Kleenex | 迪士尼X全聯限定包裝',
        date:'2020.02',
        tit:'舒潔Ｘ迪士尼X全聯 聯名包裝 | 包裝設計、立體圖',
        count:2,
        image:[
            "./img/project_017_1.jpg",
            "./img/project_017_2.jpg"
        ],
    },
    {
        tag:2,
        mark:'web design',
        h2:'Kleenex | 新年企劃EDM',
        date:'2018.09',
        tit:'舒潔Ｘ新年企劃 | 主視覺設計、EDM設計',
        count:2,
        image:[
            "./img/project_018_1.jpg",
            "./img/project_018_2.jpg"
        ],
    },
    {
        tag:1,
        mark:'package design',
        h2:'Kleenex | 迪士尼聯名-櫻花季',
        date:'2019.12',
        tit:'舒潔Ｘ迪士尼聯名Ｘ櫻花季 | 包裝設計(袖珍包/紙手帕/攜帶型面紙)、外袋設計、立體圖',
        count:4,
        image:[
            "./img/project_019_1.jpg",
            "./img/project_019_2.jpg",
            "./img/project_019_3.jpg",
            "./img/project_019_4.jpg",
        ],
    },
    {
        tag:1,
        mark:'package design',
        h2:'曼秀雷敦 | Tsumtsum護唇膏',
        date:'2018.12',
        tit:'曼秀雷敦ＸTsumtsum | 主視覺、包裝設計、立體圖',
        count:2,
        image:[
            "./img/project_022_1.jpg",
            "./img/project_022_2.jpg",
        ],
    },
    {
        tag:1,
        mark:'package design',
        h2:'創作系列',
        date:'2016.6',
        tit:'創作系列 | LOGO、包裝設計、插畫 | <a href="https://www.opds.tw/muji_2017Xmas/" style="color: cornflowerblue;"> 前往網站</a>',
        count:7,
        image:[
            "./img/project_025_1.jpg",
            "./img/project_025_2.jpg",
            "./img/project_025_3.jpg",
            "./img/project_025_4.jpg",
            "./img/project_025_5.jpg",
            "./img/project_025_6.jpg",
            "./img/project_025_7.jpg",
        ],
    },
];



/*----------------------   選單點擊後內容切換  -----------------------*/
// var All = document.getElementById("All");
// All.addEventListener('click',function(){
//     Filter = 0;
//     ViewFilter();
// }); 
// var Package = document.getElementById("Package");
// Package.addEventListener('click',function(){
//     Filter = 1;
//     ViewFilter();
// }); 
// var Web = document.getElementById("Web");
// Web.addEventListener('click',function(){
//     Filter = 2;
//     ViewFilter();
// }); 

// function ViewFilter()
// {
//     for(let i=0;i<inner_txt.length;++i)
//     {
//         let removeImg = document.querySelector(".item");
//         if(removeImg)
//         document.getElementsByClassName("container")[0].removeChild(removeImg);
//     }

//     for(let i=0;i<inner_txt.length;++i)
//     {
//         if(Filter == inner_txt[i].tag || Filter == 0)
//         {
//             node=document.createElement("div");
//             node.className = "item";

//             let node1=document.createElement("img");
//             let tmp = i+1;
//             if(tmp!=11)
//             node1.srcset = "./img/project_0"+tmp+".png";
//             else
//             node1.srcset = "./img/project_0"+tmp+".gif";
//             node.appendChild(node1);

//             let node2=document.createElement("mark");
//             node2.innerText = inner_txt[i].mark;
//             node.appendChild(node2);

//             node2=document.createElement("h1");
//             node2.innerText = inner_txt[i].h2;
//             node.appendChild(node2);

//             node2=document.createElement("time");
//             node2.innerText = inner_txt[i].date;
//             node.appendChild(node2);

//             document.getElementsByClassName("container")[0].appendChild(node);
//         }
//     } 
// }


/*----------------------作品點擊後進入內頁----------------------*/
function boxclick(inner){    
    return function(){
        for(let i=0;i<PreCount;++i)
        {
            let removeImg = document.querySelector(".DyImg");
            if(removeImg)
            document.getElementsByClassName("item_introduction")[0].removeChild(removeImg);
        }

        {
            let removeImg = document.querySelector(".title");
            if(removeImg)
            document.getElementsByClassName("item_introduction")[0].removeChild(removeImg);
        }

        document.getElementById('mark').innerText = inner.mark;
        document.getElementById('h2').innerText = inner.h2;

        for(let i=0;i<inner.count;++i)
        {
            let node=document.createElement("img");
            node.srcset = inner.image[i];
            node.className = "DyImg";
            document.getElementsByClassName("item_introduction")[0].appendChild(node);

            if(i==0)
            {
                node=document.createElement("div");
                node.className = "title";

                let node1=document.createElement("time");
                node1.innerText = "Data | "+inner.date;
                node.appendChild(node1);

                let node2=document.createElement("p");
                node2.innerHTML = inner.tit;
                node.appendChild(node2);

                document.getElementsByClassName("item_introduction")[0].appendChild(node);
            }
        }

        PreCount = inner.count;
    };	
};

var boxs = document.querySelectorAll('.item');
for( let i=0 ; i<boxs.length ;i++){
    boxs[i].addEventListener('click',boxclick(inner_txt[i]),false);
};

