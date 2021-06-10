import {getUuid4Hex} from '@/utils'
import * as constants from '@/components/ChatRenderer/constants'
import * as avatar from './avatar'

const NAMES = [
  'xfgryujk', 'Simon', 'Il Harper', 'Kinori', 'shugen', 'yuyuyzl', '3Shain', '光羊', '黑炎', 'Misty', '孤梦星影',
  'ジョナサン・ジョースター', 'ジョセフ・ジョースター', 'ディオ・ブランドー', '空條承太郎', '博丽灵梦', '雾雨魔理沙',
  '只熊KUMA', 'doodlebear', '椅子_Official' , '星界璃海' ,'Rick Astley'
]
const SC_CONTENTS = [
  '三点几嘞[喝茶]先嘞，做什么做，[喝茶], 喝茶先啦', '我很有[钱][钱][钱]', '没见过黑手？【见没见过黑手】', '“希望之花”', '【二次元是不会背叛你的】',
  '一个bug，只需要改3行，我改了3个小时才知道问题出在哪【希望之花】', '一个bug，只需要改3行，我改了3个小时才知道问题出在哪【希望之花】',
  '草',  'kksk', '8888888888', '888888888888888888888888888888', '老板大气，老板身体健康',
  ' ',' ',' ',' ',' ',' ',' ',' ','   ',' '
]

const CONTENTS = [
  '好耶，哭了，不够色', '好耶，哭了，不够色', '好耶，哭了，不够色', '好耶，哭了，不够色', '好耶，哭了，不够色', '好耶，哭了，不够色', '好耶，哭了，不够色', '好耶，哭了，不够色', '好耶，哭了，不够色', '桃子', '桃子',
  '好耶，哭了，不够色', '好耶，哭了，不够色', '好耶，哭了，不够色', '好耶，哭了，不够色', '好耶，哭了，不够色', '好耶，哭了，不够色', '好耶，哭了，不够色', '好耶，哭了，不够色', '好耶，哭了，不够色', '桃子', '桃子',
  '三点几嘞[喝茶]先嘞，做什么做，[喝茶], 喝茶先啦', '我很有[钱][钱][钱]', '没见过黑手？【见没见过黑手】', '“希望之花”', '【二次元是不会背叛你的】',
  '【美兔3D】', '三点几嘞【喝茶】先嘞', '没见过黑手？【见没见过黑手】', '“希望之花”', '【二次元是不会背叛你的】',
  '三点几嘞[喝茶]先嘞', '三点几嘞【喝茶】先嘞', '没见过黑手？【见没见过黑手】', '“希望之花”', '【二次元是不会背叛你的】',
  '一个bug，只需要改3行，我改了3个小时才知道问题出在哪【希望之花】', '一个bug，只需要改3行，我改了3个小时才知道问题出在哪【希望之花】',
  '我很有[钱][钱][钱]', '三点几嘞【喝茶】先嘞', '没见过黑手？【见没见过黑手】', '“希望之花”', '【二次元是不会背叛你的】',
  '草',  'kksk', '8888888888', '888888888888888888888888888888', '老板大气，老板身体健康',
  'The quick brown fox jumps over the lazy dog', "I can eat glass, it doesn't hurt me",
  '我不做人了，JOJO', '無駄無駄無駄無駄無駄無駄無駄無駄', '欧啦欧啦欧啦欧啦欧啦欧啦欧啦欧啦', '逃げるんだよォ！',
  '嚯，朝我走过来了吗，没有选择逃跑而是主动接近我么', '不要停下来啊', '已经没有什么好怕的了',
  'I am the bone of my sword. Steel is my body, and fire is my blood.', '言いたいことがあるんだよ！',
  '我忘不掉夏小姐了。如果不是知道了夏小姐，说不定我已经对这个世界没有留恋了', '迷えば、敗れる',
  'Farewell, ashen one. May the flame guide thee', '竜神の剣を喰らえ！', '竜が我が敌を喰らう！',
  '有一说一，这件事大家懂的都懂，不懂的，说了你也不明白，不如不说', '让我看看', '我柜子动了，我不玩了'
]

const AUTHOR_TYPES = [
  {weight: 2, value: constants.AUTHRO_TYPE_NORMAL},
  {weight: 2, value: constants.AUTHRO_TYPE_MEMBER},
  {weight: 1, value: constants.AUTHRO_TYPE_ADMIN},
  {weight: 1, value: constants.AUTHRO_TYPE_OWNER}
]

function randGuardInfo () {
  let authorType = randomChoose(AUTHOR_TYPES)
  let privilegeType
  if (authorType === constants.AUTHRO_TYPE_MEMBER || authorType === constants.AUTHRO_TYPE_ADMIN) {
    privilegeType = randInt(1, 3)
  } else {
    privilegeType = 0
  }
  return {authorType, privilegeType}
}

const GIFT_INFO_LIST = [
  {giftName: '辣条', price: 0, totalCoin: 100, coinType: 'silver', num: 10},
  {giftName: '小心心', price: 0, totalCoin: 0, coinType: 'silver', num: 24},
  {giftName: '吃瓜', price: 0.1, totalCoin: 200, coinType: 'gold', num: 2},
  {giftName: '冰阔落', price: 1, totalCoin: 3000, coinType: 'gold', num: 3},
  {giftName: '给大佬递茶', price: 2, totalCoin: 10000, coinType: 'gold', num: 5},
  {giftName: 'B坷垃', price: 0, totalCoin: 9900, coinType: 'silver', num: 1 },
  {giftName: 'B坷垃', price: 9.9, totalCoin: 9900, coinType: 'gold', num: 1 },
  {giftName: '礼花', price: 28, totalCoin: 28000, coinType: 'gold', num: 1 },
  {giftName: '花式夸夸', price: 39, totalCoin: 39000, coinType: 'gold', num: 1 },
  {giftName: '天空之翼', price: 100, totalCoin: 100000, coinType: 'gold', num: 1 },
  {giftName: '摩天大楼', price: 450, totalCoin: 450000, coinType: 'gold', num: 1 },
  {giftName: '小电视飞船', price: 1245, totalCoin: 1245000, coinType: 'gold', num: 1 },
  {giftName: '小电视飞船', price: 1245, totalCoin: 12450000, coinType: 'gold', num: 10}
]

const SC_PRICES = [
  30, 50, 100, 200, 500, 1000, 2000
]

const MESSAGE_GENERATORS = [
  // 文字
  {
    weight: 4,
    value() {
      return {
        type: constants.MESSAGE_TYPE_TEXT,
        message: {
          ...randGuardInfo(),
          avatarUrl: avatar.DEFAULT_AVATAR_URL,
          timestamp: new Date().getTime() / 1000,
          authorName: randomChoose(NAMES),
          content: randomChoose(CONTENTS),
          isGiftDanmaku: randInt(1, 10) <= 1,
          authorLevel: randInt(0, 60),
          isNewbie: randInt(1, 10) <= 9,
          isMobileVerified: randInt(1, 10) <= 9,
          medalLevel: randInt(0, 40),
          id: getUuid4Hex(),
          translation: ''
        }
      }
    }
  },
  // 礼物
  {
    weight: 3,
    value() {
      return {
        type: constants.MESSAGE_TYPE_GIFT,
        message: {
          ...randomChoose(GIFT_INFO_LIST),
          id: getUuid4Hex(),
          avatarUrl: avatar.DEFAULT_AVATAR_URL,
          timestamp: new Date().getTime() / 1000,
          authorName: randomChoose(NAMES)
          // num: 1
        }
      }
    }
  },
  // SC
  {
    weight: 2,
    value() {
      return {
        type: constants.MESSAGE_TYPE_SUPER_CHAT,
        message: {
          id: getUuid4Hex(),
          avatarUrl: avatar.DEFAULT_AVATAR_URL,
          timestamp: new Date().getTime() / 1000,
          authorName: randomChoose(NAMES),
          price: randomChoose(SC_PRICES),
          content: randomChoose(SC_CONTENTS),
          translation: ''
        }
      }
    }
  },
  // 新舰长
  {
    weight: 1,
    value() {
      return {
        type: constants.MESSAGE_TYPE_MEMBER,
        message: {
          id: getUuid4Hex(),
          avatarUrl: avatar.DEFAULT_AVATAR_URL,
          timestamp: new Date().getTime() / 1000,
          authorName: randomChoose(NAMES),
          privilegeType: randInt(1, 3)
        }
      }
    }
  }
]

function randomChoose (nodes) {
  if (nodes.length === 0) {
    return null
  }
  for (let node of nodes) {
    if (node.weight === undefined || node.value === undefined) {
      return nodes[randInt(0, nodes.length - 1)]
    }
  }

  let totalWeight = 0
  for (let node of nodes) {
    totalWeight += node.weight
  }
  let remainWeight = randInt(1, totalWeight)
  for (let node of nodes) {
    remainWeight -= node.weight
    if (remainWeight > 0) {
      continue
    }
    if (node.value instanceof Array) {
      return randomChoose(node.value)
    }
    return node.value
  }
  return null
}

function randInt (min, max) {
  return Math.floor(min + (max - min + 1) * Math.random())
}

export default class ChatClientTest {
  constructor () {
    this.minSleepTime = 800
    this.maxSleepTime = 1200

    this.onAddText = null
    this.onAddGift = null
    this.onAddMember = null
    this.onAddSuperChat = null
    this.onDelSuperChat = null
    this.onUpdateTranslation = null

    this.timerId = null
  }

  start () {
    this.refreshTimer()
  }

  stop () {
    if (this.timerId) {
      window.clearTimeout(this.timerId)
      this.timerId = null
    }
  }

  refreshTimer () {
    this.timerId = window.setTimeout(this.onTimeout.bind(this), randInt(this.minSleepTime, this.maxSleepTime))
  }

  onTimeout () {
    this.refreshTimer()

    let {type, message} = randomChoose(MESSAGE_GENERATORS)()
    switch (type) {
    case constants.MESSAGE_TYPE_TEXT:
      this.onAddText(message)
      break
    case constants.MESSAGE_TYPE_GIFT:
      this.onAddGift(message)
      break
    case constants.MESSAGE_TYPE_MEMBER:
      this.onAddMember(message)
      break
    case constants.MESSAGE_TYPE_SUPER_CHAT:
      this.onAddSuperChat(message)
      break
    }
  }
}