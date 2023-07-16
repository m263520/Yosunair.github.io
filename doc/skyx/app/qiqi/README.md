---
title: 「韶光：柒柒」
index: true
icon: discover
category:
  - Skyx
  - App
---

::: center
韶光計劃：柒柒
:::

### 它是什麽？
柒柒 是為 Android Shell/Windows 終端(Android Debug Bridge) 編寫的可以使用指令來顯示 Toast/通知/常驻通知 的應用

### 环境需求
 - 安卓4及以上
 - Root或者Shell权限

### 如何使用？
##### 安装
 ##### Android Shell：
  - ```pm install APK路径```
  （注意，如果apk路径不在/data/local/tmp内可能会安装失败，请尽量解压到此目录内）
 ##### Windows 终端：
  - ```adb install APK路径```

##### 使用
 ##### Android Shell：
  - ```am start -n yosunair.opensource.toast/SABZBCZGZZA.toast -e toast "显示内容"```
 ##### Windows 终端：
  - ```adb shell am start -n yosunair.opensource.toast/SABZBCZGZZA.toast -e toast "显示内容"```

##### 卸载
 ##### Android Shell：
  - ```pm uninstall yosunair.opensource.toast```
 ##### Windows 终端：
  - ```adb uninstall yosunair.opensource.toast```

#### 小提示
你可以把它集成到 Magisk/KernelSU模块 或者 Windows Bat程序 里面，提供更好的服务
当初期版本发布的时候[维术](https://weishu.me/)大佬评论说理论可以免安装使用，但是后面就没有再回复了，如果知道相关方法的请尽量反馈，以便于提升使用体验


### 软件下载
请前往[下载中心](./../../../file.html)下载最新版软件

### 从源构建
韶光：柒柒(编码SABZBCZGZZA)现已开源于[GitHub.com](https://github.com/Yosunair/Qiqi)，你可以直接下载源码构建
```card
title: 韶光：柒柒
desc: 为 Android Shell/Windows 终端(Android Debug Bridge) 编写的可以使用指令来显示 Toast/通知/常驻通知 的应用。
logo: https://github.githubassets.com/favicons/favicon.svg
link: https://github.com/Yosunair/Qiqi
color: rgba(253, 230, 138, 0.15)
```

###### 源码只提供显示Toast的代码，请注意

#### 环境需求
 - 一个软件的编译工具，例如 [Android Studio](https://developer.android.google.cn/studio/) 或者 [IntelliJ IDEA](https://www.jetbrains.com/idea/)
 - [Java](https://jdk.java.net/) 17+
 - [Flutter](https://flutter.cn/) 3.0.0+
 - 编译器[Flutter](https://flutter.cn/)插件
 - 编译器[Dart](https://dart.cn/)插件
 - 如果使用[IntelliJ IDEA](https://www.jetbrains.com/idea/)，建议安装插件[Chinese ​(Simplified)​ Language Pack / 中文语言包](https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack----)

##### 为什么要[Flutter](https://flutter.cn/)？
因为本人的能力完全无法应对单独[Gradle](https://mirrors.cloud.tencent.com/gradle/)编译时遇到的各种错误，故选择[Flutter](https://flutter.cn/)进行构建，不过不用担心，我已经将源码中构建[Flutter](https://flutter.cn/)的代码全部注释掉了，构建后的代码完全不会包含[Flutter](https://flutter.cn/)的任何内容(除了强制要求的meta-data标签flutterEmbedding外)

::: warning 注意
本项目构建实测百分百报错(可能是因为不会构建flutter apk)，但是构建完成后还是会正常生成apk文件，不必担心
代码内容：
```powershell
flutter.bat --no-color build apk
Flutter assets will be downloaded from https://storage.flutter-io.cn. Make sure you trust this source!

Running Gradle task 'assembleRelease'...                        
XmlClassGuard version is 1.2.4, agpVersion=8.2.0-alpha11
Running Gradle task 'assembleRelease'...                           96.3s
Gradle build failed to produce an .apk file. It's likely that this file was generated under build, but the tool couldn't find it.
Process finished with exit code 1
```
apk在构建完成后会在 项目根目录build/app/outputs/apk/release/app-release.apk
:::

本项目使用了[StringFog](https://github.com/MegatronKing/StringFog)和[XmlClassGuard](https://github.com/liujingxing/XmlClassGuard)项目，虽然没有什么大的效果

::: danger 特别注意！
本项目使用了[BSD 3-Clause "New" or "Revised" License](https://github.com/Yosunair/Qiqi/blob/Yosunair/LICENSE)开源协议(因为国内环境较差，故选择这个较为宽松的协议)，如果你打算二次构建并且有作为一个人的良知的话，请做到以下两点

###### 1、保留开源协议
将开源协议保留在构建出的apk中的任意一个地方(除了放到res里面)(放到android/app/src/main/resources即可实现从apk根目录开始的任意位置)，你可以做一些你需要的修改，比如说将文件名“LICENSE”修改成“开源协议.txt”，或者将开源协议的内容修改成中文等

###### 2、保留原作者标记
你需要从sharedUserId、activity、meta-data、resources/skyx/code.txt中保留至少一个标记，保留sharedUserId为“yosunair.opensource”(不建议选择，如果安装多个相同sharedUserId的软件需要签名相同)，保留meta-data的name为“yosunair.skyx.code”，value为“SABZBCZGZZA”(软件编码)，保留activity的name为“SABZBCZGZZA.toast”

你还可以选择为显示toast的代码多出一个例如“skyx”的选项，让它在接收到“skyx”的时候显示出原作者的名称，执行示例如下
```am start -n yosunair.opensource.toast/SABZBCZGZZA.toast -e skyx```(Android Shell示例)
如果这样可以显示出原作者的名称，那么也是可以的，或者专门写一个活动来显示

###### 如果你不打算做到任何一项，那么我也是管不了你的，到底怎么做还是得看你自己的意愿
:::

#### 构建示例

###### 1、下载源码
```git clone https://github.com/Yosunair/Qiqi.git```

###### 2、编译
使用编译器打开此项目
依次点击 构建 -> Flutter -> Build APK

###### 3、获取文件
待到编译报错完成的时候，到build/app/outputs/apk/release/app-release.apk获取编译后的文件

###### 注意
项目使用的[StringFog](https://github.com/MegatronKing/StringFog)插件会导致编译后还会有进程读取文件，你可以通过杀死Java进程或者移除插件来解决此问题
所有build.gradle文件里面的引入的依赖均采用“+”来自动使用最新版，如果不需要可以修改