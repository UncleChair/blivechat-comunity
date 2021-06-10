import {mergeConfig} from '@/utils'

export const DEFAULT_CONFIG = {
  minGiftPrice: 0, // ￥0.0
  minTickerPrice: 0.1, // ￥0.1
  showDanmaku: true,
  showGift: true,
  showGiftName: true,
  mergeSimilarDanmaku: false,
  mergeGift: true,
  maxNumber: 60,
  maxImage: 2,

  blockGiftDanmaku: true,
  blockLevel: 0,
  blockNewbie: false,
  blockNotMobileVerified: false,
  blockKeywords: '',
  blockUsers: '',
  blockMedalLevel: 0,

  relayMessagesByServer: false,
  autoTranslate: false,
  giftUsernamePronunciation: ''
}

export function setLocalConfig (config) {
  config = mergeConfig(config, DEFAULT_CONFIG)
  window.localStorage.config = JSON.stringify(config)
}

export function getLocalConfig () {
  try {
    return mergeConfig(JSON.parse(window.localStorage.config), DEFAULT_CONFIG)
  } catch {
    return {...DEFAULT_CONFIG}
  }
}