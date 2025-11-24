import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "周末早晨，你通常什么时候醒来？",
    options: [
      { text: "比平时更早，兴奋地想玩", score: 1 },
      { text: "和平时差不多", score: 2 },
      { text: "如果不被叫醒，会睡到中午", score: 1 }, // Note: Oversleeping is often associated with teenagers/young adults
    ]
  },
  {
    id: 2,
    text: "如果给你一个气球，你会？",
    options: [
      { text: "不想拿，怕它破", score: 3 },
      { text: "拿着玩一会", score: 1 },
      { text: "直接给身边的小孩", score: 2 }
    ]
  },
  {
    id: 3,
    text: "对于现在流行的流行语或网络梗？",
    options: [
      { text: "完全不懂，也不想懂", score: 3 },
      { text: "经常使用，张口就来", score: 1 },
      { text: "知道一些，偶尔用用", score: 2 }
    ]
  },
  {
    id: 4,
    text: "你喜欢的早餐类型是？",
    options: [
      { text: "甜甜圈或麦片", score: 1 },
      { text: "咖啡配吐司或三明治", score: 2 },
      { text: "热粥、咸菜或传统早餐", score: 3 }
    ]
  },
  {
    id: 5,
    text: "看到路边的积水坑，你会？",
    options: [
      { text: "想跳进去踩一下", score: 1 },
      { text: "小心翼翼地绕开", score: 3 },
      { text: "跨过去", score: 2 }
    ]
  },
  {
    id: 6,
    text: "对于“自助餐”你的态度是？",
    options: [
      { text: "一定要吃回本，吃到撑", score: 1 },
      { text: "挑选喜欢的吃，适量就好", score: 2 },
      { text: "不太喜欢，觉得嘈杂且质量一般", score: 3 }
    ]
  },
  {
    id: 7,
    text: "你如何看待“过年”？",
    options: [
      { text: "期待收红包/放假", score: 1 },
      { text: "是一种社交负担，有点累", score: 2 },
      { text: "这是传统的传承，很重要", score: 3 }
    ]
  },
  {
    id: 8,
    text: "如果有人批评你，你的第一反应？",
    options: [
      { text: "马上反驳或感到委屈", score: 1 },
      { text: "思考对方说得是否有道理", score: 2 },
      { text: "笑笑不说话，心里有数", score: 3 }
    ]
  },
  {
    id: 9,
    text: "你现在的理想是什么？",
    options: [
      { text: "成为超级英雄或明星", score: 1 },
      { text: "事业有成或家庭幸福", score: 2 },
      { text: "身体健康，无病无灾", score: 3 }
    ]
  },
  {
    id: 10,
    text: "去KTV你必点的歌是？",
    options: [
      { text: "当下最火的抖音神曲", score: 1 },
      { text: "几年前的经典流行歌", score: 2 },
      { text: "老歌，或者根本不去KTV", score: 3 }
    ]
  },
  {
    id: 11,
    text: "看到喜欢的玩具或手办？",
    options: [
      { text: "好想要！一定要买！", score: 1 },
      { text: "看看价格，考虑性价比", score: 2 },
      { text: "那是小孩子玩的东西", score: 3 }
    ]
  },
  {
    id: 12,
    text: "关于“健康养生”？",
    options: [
      { text: "那是老人才关心的事", score: 1 },
      { text: "开始关注发际线和保温杯", score: 2 },
      { text: "非常注重，定期体检", score: 3 }
    ]
  },
  {
    id: 13,
    text: "下雨天没带伞怎么办？",
    options: [
      { text: "淋着雨跑，觉得很爽", score: 1 },
      { text: "去便利店买把伞", score: 2 },
      { text: "找个地方躲雨，等雨停", score: 3 }
    ]
  },
  {
    id: 14,
    text: "对于电子产品说明书？",
    options: [
      { text: "不看，直接上手试", score: 1 },
      { text: "遇到不会的功能再翻", score: 2 },
      { text: "使用前先仔细阅读一遍", score: 3 }
    ]
  },
  {
    id: 15,
    text: "你觉得自己像个孩子吗？",
    options: [
      { text: "是的，经常这么觉得", score: 1 },
      { text: "偶尔会有幼稚的一面", score: 2 },
      { text: "不，我已经很成熟了", score: 3 }
    ]
  },
  {
    id: 16,
    text: "如果不小心摔倒了？",
    options: [
      { text: "大哭或者觉得很丢脸", score: 1 },
      { text: "赶紧爬起来看看有没有人看到", score: 2 },
      { text: "检查是否受伤，慢慢站起来", score: 3 }
    ]
  },
  {
    id: 17,
    text: "对于“排队”这件事？",
    options: [
      { text: "完全无法忍受，很烦躁", score: 1 },
      { text: "玩玩手机打发时间", score: 2 },
      { text: "很有耐心，既来之则安之", score: 3 }
    ]
  },
  {
    id: 18,
    text: "你喜欢的饮料是？",
    options: [
      { text: "碳酸饮料", score: 1 },
      { text: "咖啡或果汁", score: 2 },
      { text: "热茶或温水", score: 3 }
    ]
  },
  {
    id: 19,
    text: "关于存钱？",
    options: [
      { text: "有多少花多少，月光族", score: 1 },
      { text: "有计划地存一部分", score: 2 },
      { text: "非常节俭，精打细算", score: 3 }
    ]
  },
  {
    id: 20,
    text: "如果明天是世界末日？",
    options: [
      { text: "大吃大喝，玩个痛快", score: 1 },
      { text: "和最爱的人在一起", score: 2 },
      { text: "静静地祈祷或回忆一生", score: 3 }
    ]
  },
  {
    id: 21,
    text: "看到有人在街上吵架？",
    options: [
      { text: "凑过去看热闹", score: 1 },
      { text: "稍微关注一下，然后走开", score: 2 },
      { text: "避之不及，绕道走", score: 3 }
    ]
  },
  {
    id: 22,
    text: "对于“承诺”？",
    options: [
      { text: "经常随口答应，然后忘掉", score: 1 },
      { text: "努力做到，做不到会道歉", score: 2 },
      { text: "一言九鼎，不轻易许诺", score: 3 }
    ]
  },
  {
    id: 23,
    text: "你喜欢哪种颜色的衣服？",
    options: [
      { text: "鲜艳的亮色", score: 1 },
      { text: "黑白灰或大地色", score: 2 },
      { text: "深沉的暗色系", score: 3 }
    ]
  },
  {
    id: 24,
    text: "对于新开的网红店？",
    options: [
      { text: "一定要去打卡", score: 1 },
      { text: "等人少了再去", score: 2 },
      { text: "不感兴趣，只去熟悉的店", score: 3 }
    ]
  },
  {
    id: 25,
    text: "你平时看书多吗？",
    options: [
      { text: "只看漫画或小说", score: 1 },
      { text: "看专业书或畅销书", score: 2 },
      { text: "看历史、哲学或报纸", score: 3 }
    ]
  },
  {
    id: 26,
    text: "对于“孤独”？",
    options: [
      { text: "害怕一个人，需要陪伴", score: 1 },
      { text: "偶尔享受一个人的时光", score: 2 },
      { text: "孤独是常态，已经习惯了", score: 3 }
    ]
  },
  {
    id: 27,
    text: "如果朋友爽约了？",
    options: [
      { text: "非常生气，可能会绝交", score: 1 },
      { text: "有点不爽，但能理解", score: 2 },
      { text: "没关系，正好休息一下", score: 3 }
    ]
  },
  {
    id: 28,
    text: "你对自己的外貌？",
    options: [
      { text: "非常在意，经常照镜子", score: 1 },
      { text: "得体就好", score: 2 },
      { text: "不太在意了，舒适为主", score: 3 }
    ]
  },
  {
    id: 29,
    text: "遇到不懂的事情？",
    options: [
      { text: "马上问人", score: 1 },
      { text: "自己上网搜索", score: 2 },
      { text: "根据经验推断或查阅书籍", score: 3 }
    ]
  },
  {
    id: 30,
    text: "对于“回忆过去”？",
    options: [
      { text: "很少回忆，只看未来", score: 1 },
      { text: "偶尔会想起以前的事", score: 2 },
      { text: "经常沉浸在过去的回忆中", score: 3 }
    ]
  },
  {
    id: 31,
    text: "你的口头禅更接近？",
    options: [
      { text: "烦死了 / 真的假的", score: 1 },
      { text: "好吧 / 确实", score: 2 },
      { text: "现在的年轻人啊 / 想当年", score: 3 }
    ]
  },
  {
    id: 32,
    text: "看电影时容易哭吗？",
    options: [
      { text: "不太会，除非特别感人", score: 2 },
      { text: "经常被感动哭", score: 1 }, // Emotional volatility is often younger, but also elderly. Let's score it as 'pure heart' = 1
      { text: "基本不哭，内心毫无波澜", score: 3 }
    ]
  },
  {
    id: 33,
    text: "最后，你觉得自己老了吗？",
    options: [
      { text: "完全不觉得！", score: 1 },
      { text: "有时候会觉得力不从心", score: 2 },
      { text: "是的，心已经老了", score: 3 }
    ]
  }
];