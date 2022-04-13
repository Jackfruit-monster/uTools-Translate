const options = {
  youDaoOld: {
    name: "内置有道",
    api: "http://fanyi.youdao.com/openapi.do?keyfrom=WoxLauncher&key=1247918016&type=data&doctype=json&version=1.1&q=",
  },
  youDaoWap: {
    name: "有道移动版",
    api: "https://m.youdao.com/dict?le=eng&q=",
  },
  google: {
    name: "谷歌",
    api: "translate.google.cn",
    path: "/_/TranslateWebserverUi/data/batchexecute",
  },
  xiaoNiu: {
    name: "小牛",
    api: "https://test.niutrans.com/NiuTransServer/testaligntrans",
  },
  deepL: {
    name: "DeepL",
    api: "https://www2.deepl.com/jsonrpc?method=LMT_handle_jobs",
  },
  youDao: {
    name: "有道",
    api: "http://openapi.youdao.com/api",
  },
  baiDu: {
    name: "百度",
    api: "https://fanyi-api.baidu.com/api/trans/vip/translate",
  },
  aliYun: {
    name: "阿里",
    api: "mt.cn-hangzhou.aliyuncs.com",
    path: "/api/translate/web/general",
    langs: {
      自动: "auto",
      英语: "en",
      中文: "zh",
      阿布哈兹语: "ab",
      阿尔巴尼亚语: "sq",
      阿肯语: "ak",
      阿拉伯语: "ar",
      阿拉贡语: "an",
      阿姆哈拉语: "am",
      阿萨姆语: "as",
      阿塞拜疆语: "az",
      阿斯图里亚斯语: "ast",
      阿兹特克语: "nch",
      埃维语: "ee",
      艾马拉语: "ay",
      爱尔兰语: "ga",
      爱沙尼亚语: "et",
      奥杰布瓦语: "oj",
      奥克语: "oc",
      奥里亚语: "or",
      奥罗莫语: "om",
      奥塞梯语: "os",
      巴布亚皮钦语: "tpi",
      巴什基尔语: "ba",
      巴斯克语: "eu",
      白俄罗斯语: "be",
      柏柏尔语: "ber",
      班巴拉语: "bm",
      邦阿西楠语: "pag",
      保加利亚语: "bg",
      北萨米语: "se",
      本巴语: "bem",
      比林语: "byn",
      比斯拉马语: "bi",
      俾路支语: "bal",
      冰岛语: "is",
      波兰语: "pl",
      波斯尼亚语: "bs",
      波斯语: "fa",
      博杰普尔语: "bho",
      布列塔尼语: "br",
      查莫罗语: "ch",
      查瓦卡诺语: "cbk",
      楚瓦什语: "cv",
      聪加语: "ts",
      鞑靼语: "tt",
      丹麦语: "da",
      掸语: "shn",
      德顿语: "tet",
      德语: "de",
      低地德语: "nds",
      低地苏格兰语: "sco",
      迪维西语: "dv",
      侗语: "kdx",
      杜順語: "dtp",
      俄语: "ru",
      法罗语: "fo",
      法语: "fr",
      梵语: "sa",
      菲律宾语: "fil",
      斐济语: "fj",
      芬兰语: "fi",
      弗留利语: "fur",
      富尔语: "fvr",
      刚果语: "kg",
      高棉语: "km",
      格雷罗纳瓦特尔语: "ngu",
      格陵兰语: "kl",
      格鲁吉亚语: "ka",
      格罗宁根方言: "gos",
      古吉拉特语: "gu",
      瓜拉尼语: "gn",
      哈萨克语: "kk",
      海地克里奥尔语: "ht",
      韩语: "ko",
      豪萨语: "ha",
      荷兰语: "nl",
      黑山语: "cnr",
      胡帕语: "hup",
      基里巴斯语: "gil",
      基隆迪语: "rn",
      基切语: "quc",
      吉尔吉斯斯坦语: "ky",
      加利西亚语: "gl",
      加泰罗尼亚语: "ca",
      捷克语: "cs",
      卡拜尔语: "kab",
      卡纳达语: "kn",
      卡努里语: "kr",
      卡舒比语: "csb",
      卡西语: "kha",
      康沃尔语: "kw",
      科萨语: "xh",
      科西嘉语: "co",
      克里克语: "mus",
      克里米亚鞑靼语: "crh",
      克林贡语: "tlh",
      克罗地亚语: "hbs",
      克丘亚语: "qu",
      克什米尔语: "ks",
      库尔德语: "ku",
      拉丁语: "la",
      拉特加莱语: "ltg",
      拉脱维亚语: "lv",
      老挝语: "lo",
      立陶宛语: "lt",
      林堡语: "li",
      林加拉语: "ln",
      卢干达语: "lg",
      卢森堡语: "lb",
      卢森尼亚语: "rue",
      卢旺达语: "rw",
      罗马尼亚语: "ro",
      罗曼什语: "rm",
      罗姆语: "rom",
      逻辑语: "jbo",
      马达加斯加语: "mg",
      马恩语: "gv",
      马耳他语: "mt",
      马拉地语: "mr",
      马拉雅拉姆语: "ml",
      马来语: "ms",
      "马里语（俄罗斯）": "chm",
      马其顿语: "mk",
      马绍尔语: "mh",
      玛雅语: "kek",
      迈蒂利语: "mai",
      毛里求斯克里奥尔语: "mfe",
      毛利语: "mi",
      蒙古语: "mn",
      孟加拉语: "bn",
      缅甸语: "my",
      苗语: "hmn",
      姆班杜语: "umb",
      纳瓦霍语: "nv",
      南非语: "af",
      尼泊尔语: "ne",
      纽埃语: "niu",
      挪威语: "no",
      帕姆语: "pmn",
      帕皮阿门托语: "pap",
      旁遮普语: "pa",
      葡萄牙语: "pt",
      普什图语: "ps",
      齐切瓦语: "ny",
      契维语: "tw",
      切罗基语: "chr",
      日语: "ja",
      瑞典语: "sv",
      萨摩亚语: "sm",
      桑戈语: "sg",
      僧伽罗语: "si",
      上索布语: "hsb",
      世界语: "eo",
      斯洛文尼亚语: "sl",
      斯瓦希里语: "sw",
      索马里语: "so",
      斯洛伐克语: "sk",
      他加禄语: "tl",
      塔吉克语: "tg",
      塔希提语: "ty",
      泰卢固语: "te",
      泰米尔语: "ta",
      泰语: "th",
      "汤加语(汤加群岛)": "to",
      "汤加语(赞比亚)": "toi",
      提格雷尼亚语: "ti",
      图瓦卢语: "tvl",
      图瓦语: "tyv",
      土耳其语: "tr",
      土库曼语: "tk",
      瓦隆语: "wa",
      "瓦瑞语(菲律宾)": "war",
      威尔士语: "cy",
      文达语: "ve",
      沃拉普克语: "vo",
      沃洛夫语: "wo",
      乌德穆尔特语: "udm",
      乌尔都语: "ur",
      乌孜别克语: "uz",
      西班牙语: "es",
      西方国际语: "ie",
      西弗里斯兰语: "fy",
      西里西亚语: "szl",
      希伯来语: "he",
      希利盖农语: "hil",
      夏威夷语: "haw",
      现代希腊语: "el",
      新共同语言: "lfn",
      信德语: "sd",
      匈牙利语: "hu",
      修纳语: "sn",
      宿务语: "ceb",
      叙利亚语: "syr",
      巽他语: "su",
      亚美尼亚语: "hy",
      亚齐语: "ace",
      伊班语: "iba",
      伊博语: "ig",
      伊多语: "io",
      伊洛卡诺语: "ilo",
      伊努克提图特语: "iu",
      意大利语: "it",
      意第绪语: "yi",
      因特语: "ia",
      印地语: "hi",
      印度尼西亚语: "id",
      印古什语: "inh",
      约鲁巴语: "yo",
      越南语: "vi",
      扎扎其语: "zza",
      爪哇语: "jv",
      中文繁体: "zh-tw",
      中文粤语: "yue",
      祖鲁语: "zu",
    },
  },
  tencent: {
    name: "腾讯",
    api: "tmt.tencentcloudapi.com",
  },
  caiYun: {
    name: "彩云小译",
    api: "http://api.interpreter.caiyunai.com/v1/translator",
  },
};

// Set the default API.
const defaultAPI = Object.keys(options)[3];

const defaultSpeak = true;

// 设置窗口的高度。
const settingHeight = 544;

const errMsgEmptyApp = "应用ID或密钥不能为空！";

function initSetting() {
  utools.setExpendHeight(settingHeight);
  loadConfiguration();
  addSpeakListener();
  addSiteListener();
  addSettingBtnListener();
  addEyeListener();
  addLangListener();
  addExchangeListener();
}

function loadConfiguration() {
  let option = utools.dbStorage.getItem("option");
  let radios = document.getElementsByName("service");

  if (!option || option.error || Object.keys(options).indexOf(option) == -1) {
    // Choose the default API.
    option = defaultAPI;
    utools.dbStorage.setItem("option", option);
  }
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].value == option) {
      radios[i].checked = true;
      break;
    }
  }

  loadSpeak();
  loadIdSecret();
  loadLang();
}

function loadIdSecret() {
  let youDaoAppId = utools.dbStorage.getItem("youDaoAppId");
  if (youDaoAppId) {
    document.getElementById("youDaoAppId").value = youDaoAppId;
  }

  let youDaoAppSecret = utools.dbStorage.getItem("youDaoAppSecret");
  if (youDaoAppSecret) {
    document.getElementById("youDaoAppSecret").value = youDaoAppSecret;
  }

  let baiDuAppId = utools.dbStorage.getItem("baiDuAppId");
  if (baiDuAppId) {
    document.getElementById("baiDuAppId").value = baiDuAppId;
  }

  let baiDuAppSecret = utools.dbStorage.getItem("baiDuAppSecret");
  if (baiDuAppSecret) {
    document.getElementById("baiDuAppSecret").value = baiDuAppSecret;
  }

  let aliYunAppId = utools.dbStorage.getItem("aliYunAppId");
  if (aliYunAppId) {
    document.getElementById("aliYunAppId").value = aliYunAppId;
  }

  let aliYunAppSecret = utools.dbStorage.getItem("aliYunAppSecret");
  if (aliYunAppSecret) {
    document.getElementById("aliYunAppSecret").value = aliYunAppSecret;
  }

  let tencentAppId = utools.dbStorage.getItem("tencentAppId");
  if (tencentAppId) {
    document.getElementById("tencentAppId").value = tencentAppId;
  }

  let tencentAppSecret = utools.dbStorage.getItem("tencentAppSecret");
  if (tencentAppSecret) {
    document.getElementById("tencentAppSecret").value = tencentAppSecret;
  }

  let caiYunToken = utools.dbStorage.getItem("caiYunToken");
  if (caiYunToken) {
    document.getElementById("caiYunToken").value = caiYunToken;
  }
}

/**
 * Load the configuration of speak.
 */
function loadSpeak() {
  speak = utools.dbStorage.getItem("speak");
  if (speak === null) {
    // Choose the default speak setting.
    speak = defaultSpeak;
    utools.dbStorage.setItem("speak", speak);
  }

  let speakBtn = document.querySelector("#setting>.speak>img");
  if (speak) {
    speakBtn.setAttribute("src", "./assets/images/speakOn.png");
  } else {
    speakBtn.setAttribute("src", "./assets/images/speakOff.png");
  }
}

function loadLang() {
  let aliYunSource = utools.dbStorage.getItem("aliYunSource") || "auto";
  let aliYunTarget = utools.dbStorage.getItem("aliYunTarget") || "auto";
  utools.dbStorage.setItem("aliYunSource", aliYunSource);
  utools.dbStorage.setItem("aliYunTarget", aliYunTarget);
  let names = Object.keys(options.aliYun.langs);
  let htmlStr = "";
  for (let i = 0; i < names.length; i++) {
    htmlStr += `<option value=${options.aliYun.langs[names[i]]}>${names[i]}</option>`;
  }
  let sourceElement = document.querySelector(".service.aliYun .lang>select.source");
  let targetElement = document.querySelector(".service.aliYun .lang>select.target");
  sourceElement.innerHTML = htmlStr;
  targetElement.innerHTML = htmlStr;
  for (let i = 0; i < sourceElement.length; i++) {
    if (aliYunSource == sourceElement.options[i].value) {
      sourceElement.options[i].selected = true;
      break;
    }
  }
  for (let i = 0; i < targetElement.length; i++) {
    if (aliYunTarget == targetElement.options[i].value) {
      targetElement.options[i].selected = true;
      break;
    }
  }
}

function saveConfiguration() {
  let option = $("input[name=service]:checked").val() || Object.keys(options)[0];

  const youDaoAppId = document.getElementById("youDaoAppId").value;
  const youDaoAppSecret = document.getElementById("youDaoAppSecret").value;
  const baiDuAppId = document.getElementById("baiDuAppId").value;
  const baiDuAppSecret = document.getElementById("baiDuAppSecret").value;
  const aliYunAppId = document.getElementById("aliYunAppId").value;
  const aliYunAppSecret = document.getElementById("aliYunAppSecret").value;
  const tencentAppId = document.getElementById("tencentAppId").value;
  const tencentAppSecret = document.getElementById("tencentAppSecret").value;
  const caiYunToken = document.getElementById("caiYunToken").value;
  let saveFailed = false;
  switch (option) {
    case "youDao":
      if (isBlank(youDaoAppId) || isBlank(youDaoAppSecret)) {
        $("#msg").text(errMsgEmptyApp);
        document.getElementById("youDaoAppId").focus();
        saveFailed = true;
      }
      break;
    case "baiDu":
      if (isBlank(baiDuAppId) || isBlank(baiDuAppSecret)) {
        $("#msg").text(errMsgEmptyApp);
        document.getElementById("baiDuAppId").focus();
        saveFailed = true;
      }
      break;
    case "aliYun":
      if (isBlank(aliYunAppId) || isBlank(aliYunAppSecret)) {
        $("#msg").text(errMsgEmptyApp);
        document.getElementById("aliYunAppId").focus();
        saveFailed = true;
      }
      break;
    case "tencent":
      if (isBlank(tencentAppId) || isBlank(tencentAppSecret)) {
        $("#msg").text(errMsgEmptyApp);
        document.getElementById("tencentAppId").focus();
        saveFailed = true;
      }
      break;
    case "caiYun":
      if (isBlank(caiYunToken)) {
        $("#msg").text("Token不能为空！");
        document.getElementById("caiYunToken").focus();
        saveFailed = true;
      }
      break;
    default:
      break;
  }
  if (saveFailed) {
    return;
  }
  utools.dbStorage.setItem("option", option);
  utools.dbStorage.setItem("youDaoAppId", youDaoAppId);
  utools.dbStorage.setItem("youDaoAppSecret", youDaoAppSecret);
  utools.dbStorage.setItem("baiDuAppId", baiDuAppId);
  utools.dbStorage.setItem("baiDuAppSecret", baiDuAppSecret);
  utools.dbStorage.setItem("aliYunAppId", aliYunAppId);
  utools.dbStorage.setItem("aliYunAppSecret", aliYunAppSecret);
  utools.dbStorage.setItem("tencentAppId", tencentAppId);
  utools.dbStorage.setItem("tencentAppSecret", tencentAppSecret);
  utools.dbStorage.setItem("caiYunToken", caiYunToken);
  saveLang();
  hideSetting();
  utools.showNotification(`切换为${options[option]["name"]}成功！`);
}

/**
 * Save the configuration of language.
 */
function saveLang() {
  let sourceValue = $(".service.aliYun .lang>select.source").val();
  let targetValue = $(".service.aliYun .lang>select.target").val();
  utools.dbStorage.setItem("aliYunSource", sourceValue);
  utools.dbStorage.setItem("aliYunTarget", targetValue);
}

/**
 * Add the speak button listener.
 */
function addSpeakListener() {
  $("#setting>.speak>img").click(function () {
    speak = !speak;
    utools.dbStorage.setItem("speak", speak);
    let speakStatus = "";
    if (speak) {
      $(this).attr("src", "./assets/images/speakOn.png");
      speakStatus = "打开";
    } else {
      $(this).attr("src", "./assets/images/speakOff.png");
      speakStatus = "关闭";
    }
    utools.showNotification(`朗读已${speakStatus}！`);
  });
}

function addSiteListener() {
  $("a.site").each((index, element) => {
    $(element).on("click", () => {
      const url = $(element).attr("href");
      utools.shellOpenExternal(url);
    });
  });
}

function addSettingBtnListener() {
  $("#btnClose").click(function () {
    hideSetting();
  });

  $("#btnSave").click(function (e) {
    saveConfiguration();
  });
}

function addEyeListener() {
  $(".eye").each(function () {
    $(this).click(function (e) {
      const className = $(this).attr("class");
      if (className.indexOf("closed") != -1) {
        $(this).removeClass("closed");
        $(this).addClass("open");
        $(this).prev().attr("type", "text");
      } else if (className.indexOf("open") != -1) {
        $(this).removeClass("open");
        $(this).addClass("closed");
        $(this).prev().attr("type", "password");
      }
    });
  });
}

function addLangListener() {
  $(".service.aliYun .lang>select.source").change(function () {
    changeBrother($(this).val(), $(".service.aliYun .lang>select.target"));
  });
  $(".service.aliYun .lang>select.target").change(function () {
    changeBrother($(this).val(), $(".service.aliYun .lang>select.source"));
  });
}

/**
 * Change the value of the brother select element.
 * @param {String} thisValue The value of the current select element.
 * @param {Object} brother The brother jquery object of the current select element.
 */
function changeBrother(thisValue, brother) {
  let brotherValue = brother.val();
  if ("mn" == thisValue || "yue" == thisValue || "zh-tw" == thisValue) {
    brother[0].selectedIndex = 2;
  } else if ("auto" != brotherValue && thisValue == brotherValue) {
    if ("en" == thisValue) {
      brother[0].selectedIndex = 2;
    } else if ("zh" == thisValue) {
      brother[0].selectedIndex = 1;
    }
  }
}

/**
 * Add the exchange button listener.
 */
function addExchangeListener() {
  $(".lang>.exchange").click(function () {
    let sourceEle = $(".service.aliYun .lang>select.source");
    let targetEle = $(".service.aliYun .lang>select.target");
    let temp = sourceEle[0].selectedIndex;
    sourceEle[0].selectedIndex = targetEle[0].selectedIndex;
    targetEle[0].selectedIndex = temp;
  });
}

function hideSetting() {
  $("#msg").html("");
  $("#setting").addClass("hide");
  $("#root").removeClass("hide");
  $("#page").removeClass("hide");
  utools.outPlugin();
}

function isBlank(str) {
  if (str == "" || str == null || str == undefined) {
    return true;
  } else if (str.trim() == "") {
    return true;
  } else {
    return false;
  }
}
