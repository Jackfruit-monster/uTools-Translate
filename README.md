# uTools-Translate

uTools plugin - Translate

uTools 插件 - 翻译

自v3.0.0起，将插件《词典》<img src="https://raw.githubusercontent.com/HaleShaw/uTools-Translate/main/screenshots/logoDictionary.png" height="28px" witdh="28px">和《Translate》<img src="https://raw.githubusercontent.com/HaleShaw/uTools-Translate/main/screenshots/logoTranslate.png" height="28px" witdh="28px">合并为《翻译》<img src="https://raw.githubusercontent.com/HaleShaw/uTools-Translate/main/logo.png" height="28px" witdh="28px">

![Translate](https://raw.githubusercontent.com/HaleShaw/uTools-Translate/main/screenshots/Translate.gif)

## Screenshots

![translateSentence](https://raw.githubusercontent.com/HaleShaw/uTools-Translate/main/screenshots/translateSentence.png)
![translateBaidu](https://raw.githubusercontent.com/HaleShaw/uTools-Translate/main/screenshots/translateBaidu.png)
![translateSetting](https://raw.githubusercontent.com/HaleShaw/uToolsTranslate/main/screenshots/translateSetting.png)
![translatePage](https://raw.githubusercontent.com/HaleShaw/uToolsTranslate/main/screenshots/translatePage.png)
![translateListDark](https://raw.githubusercontent.com/HaleShaw/uToolsTranslate/main/screenshots/translateListDark.png)
![translatePageDark](https://raw.githubusercontent.com/HaleShaw/uToolsTranslate/main/screenshots/translatePageDark.png)
![translateSettingDark](https://raw.githubusercontent.com/HaleShaw/uToolsTranslate/main/screenshots/translateSettingDark.png)

## Features

- 支持中英文翻译
- 支持切换翻译API
- 支持单词句子翻译
- 支持查询音标，朗读
- 支持句子朗读
- 支持自动复制翻译结果
- 支持自动翻译剪贴板文本
- 支持单词变形
- 支持自动即时查询
- 支持暗黑模式

## API

- 有道词典 http://fanyi.youdao.com

  官方提示此版本API已经停用，但经测试现还能使用。
  不过调用频率不能太高，否则容易暂时被封禁。

- 有道词典 https://m.youdao.com

  属于移动端网页API，故精准度不是非常高。

- 有道翻译 http://openapi.youdao.com/api

  需要到[有道智云官网](https://ai.youdao.com/doc.s)申请获取应用ID和应用密钥。

- 百度翻译 https://fanyi-api.baidu.com/api/trans/vip/translate

  需要到[百度翻译开放平台](http://api.fanyi.baidu.com/)申请获取应用ID和应用密钥。

## Reference

- [Wox.Plugin.Youdao](https://github.com/Wox-launcher/Wox.Plugin.Youdao)

  借用[作者](https://github.com/bao-qian)提供的API，感谢！

- [myDictionary-uToolsPlugin](https://github.com/vst93/myDictionary-uToolsPlugin)

  借用[作者](https://github.com/vst93)提供的HTML解析方式，感谢！
