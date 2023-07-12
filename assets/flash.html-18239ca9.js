import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as l,a as i,b as e,d as a,e as s}from"./app-b584db08.js";const t={},v=s('<div style="text-align:center;"><p>格机代码一览</p></div><h3 id="这里是哪" tabindex="-1"><a class="header-anchor" href="#这里是哪" aria-hidden="true">#</a> 这里是哪？</h3><p>这里是记录格机代码的地方</p><h3 id="为什么要记录格机代码" tabindex="-1"><a class="header-anchor" href="#为什么要记录格机代码" aria-hidden="true">#</a> 为什么要记录格机代码？</h3>',4),b={href:"https://yosunair.github.io/Yosunair-Flash-Home/",target:"_blank",rel:"noopener noreferrer"},c=s('<h3 id="相关知识" tabindex="-1"><a class="header-anchor" href="#相关知识" aria-hidden="true">#</a> 相关知识</h3><h4 id="什么是格机" tabindex="-1"><a class="header-anchor" href="#什么是格机" aria-hidden="true">#</a> 什么是格机？</h4><p>格机指的是对 Android(Linux) 设备的系统进行不同程度的破坏，较轻的丢失手机数据，严重的则会导致设备损坏，需要进行较为底层的刷机(例如9008)，有些甚至需要拆机短接或者直接更换主板</p><h4 id="为什么会有格机" tabindex="-1"><a class="header-anchor" href="#为什么会有格机" aria-hidden="true">#</a> 为什么会有格机？</h4><p>Magisk/KernelSU(虽然KernelSU的出现较晚，但是KernelSU基本兼容Magisk模块，这里便提上了)的模块功能不免会使某些牟利者在其中做出一些行为，通过在模块的安装/启动脚本里面添加格机代码来破坏使用者的设备(更有甚者会在模块里加入联网下载格机的功能，导致了可能一开始模块使用正常，后续牟利者收网，所有使用者一起被格机)，这是牟利者就会提供修复服务来赚取服务费，达到其目的，使得使用者数据、钱财两失</p><p>还有一种情况则是使用了被添加了格机代码的软件/作弊器导致的格机，相关原理都差不多</p><h4 id="格机从何而来" tabindex="-1"><a class="header-anchor" href="#格机从何而来" aria-hidden="true">#</a> 格机从何而来？</h4>',7),m={href:"https://landley.net/toybox/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/topjohnwu/ndk-busybox",target:"_blank",rel:"noopener noreferrer"},f=i("code",null,"rm -rf /*",-1),h=i("code",null,"rm -rf $变量/",-1),_=i("h4",{id:"如何预防格机",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#如何预防格机","aria-hidden":"true"},"#"),e(" 如何预防格机？")],-1),p={href:"https://github.com/BuerApp/RootGuard",target:"_blank",rel:"noopener noreferrer"},g=i("br",null,null,-1),k=s(`<h2 id="代码一览" tabindex="-1"><a class="header-anchor" href="#代码一览" aria-hidden="true">#</a> 代码一览</h2><h6 id="文章会先解析指令-后放出完整的格机代码" tabindex="-1"><a class="header-anchor" href="#文章会先解析指令-后放出完整的格机代码" aria-hidden="true">#</a> 文章会先解析指令，后放出完整的格机代码</h6><h6 id="以下代码都需要root权限执行" tabindex="-1"><a class="header-anchor" href="#以下代码都需要root权限执行" aria-hidden="true">#</a> 以下代码都需要root权限执行</h6><div class="hint-container info"><p class="hint-container-title">如何检测是否使用root权限执行的内容？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>id -u #获取用户id，root为0
id -g #获取用户组id，root为0
whoami #获取用户名称，root为root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,4),x={id:"部分知识可见-谷歌官方文档",tabindex:"-1"},y=i("a",{class:"header-anchor",href:"#部分知识可见-谷歌官方文档","aria-hidden":"true"},"#",-1),$={href:"https://source.android.google.cn/docs/core/ota?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},B=s(`<h3 id="_1、rm" tabindex="-1"><a class="header-anchor" href="#_1、rm" aria-hidden="true">#</a> 1、rm</h3><p>“rm”是Linux的删除指令，用于删除文件/目录，也是常见的格机代码，它通过删除设备上的文件来达到格机效果，通常来说，较新机型一般系统分区都是只读，所以只会删除/data目录及/mnt/vendor/persist目录(persist是存储例如指纹校准信息的地方，删除会使指纹失效，需要重新校准)，所以只需要格式化data就可以正常启动手机，但是在较旧机型或者手动修改系统分区使之可读写的设备上，它可能导致更严重地破坏系统(会删除系统分区文件)，届时需要重新线刷完整包来正常启动手机</p><h6 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rm -rf / #删除根目录下所有文件(删除系统分区文件需要支持读写，内核/内存分区无效)
rm -rf /data #删除所有用户数据(软件及数据、音视频图片、文档等)
rm -rf /storage/emulated/0 #删除用户0的所有数据(软件存储在此的数据、音视频图片、文档等)(用户id为0的是主用户(指的是多用户中的设备用户，不是系统用户组/用户)，其他则是多开用户等)
rm -rf /storage/sdcard #删除用户的所有数据(较旧安卓版本的存储目录，因为不支持多用户，所以只有一个目录)
rm -rf /storage #删除所有用户及内容提供者的数据
rm -rf /cache #删除缓存分区内文件(无任何破坏性)
rm -rf /mnt #删除所有设备的文件(包括所有用户的存储数据，persist分区，OTG设备及TF卡等)

rm -rf /system #删除system分区内的所有文件(需要支持读写)
rm -rf /vendor #删除vendor分区内的所有文件(需要支持读写)
rm -rf /product #删除product分区内的所有文件(需要支持读写)
rm -rf /odm #删除odm分区内的所有文件(需要支持读写)
rm -rf /system_ext #删除system_ext分区内的所有文件(需要支持读写)

rm -rf /sys #删除内核映射分区内文件(此操作无效)
rm -rf /proc #删除内存映射分区内文件(此操作无效)
rm -rf /dev #删除tmpfs分区内文件(此操作理论无效)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、dd" tabindex="-1"><a class="header-anchor" href="#_2、dd" aria-hidden="true">#</a> 2、dd</h3><p>“dd”是一个创建/修改文件的指令，用源文件的内容填充指定文件，是最常见的格机代码，格机通常通过/dev/zero(空文件)来填充设备分区，达到破坏系统分区，使设备无法正常启动(如果涉及到了引导等分区，则会直接黑砖)<br> 值得一提的是，开机状态下如果内核有限制，那么dd也是无效的(例如联发科旧型号CPU锁定boot分区，导致Magisk无法开机替换boot更新)，但是在BootLoader或者FastBoot模式下，这些分区通常是可以正常清除的，某些格机代码也会潜藏在刷机脚本内</p><h6 id="代码示例-1" tabindex="-1"><a class="header-anchor" href="#代码示例-1" aria-hidden="true">#</a> 代码示例</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dd if=/dev/zero of=路径 bs=1b count=10 #bs指一个输入块的大小，count指输入块的个数，此代码可以把指定文件修改成10b大小

# 为了节约时间，下面的代码采用循环展示

for i in $(ls /dev/block/sd*) ; do
  dd if=/dev/zero of=\${i} bs=1b count=10
done
#此代码通过获取/dev/block目录下所有以sd开头的设备文件(例如 sd[a-c])来修改文件(ls 带“*”的路径会直接输出完整路径)

for i in $(ls /dev/block/dm*) ; do
  dd if=/dev/zero of=\${i} bs=1b count=10
done
#此代码通过获取/dev/block目录下所有以dm开头的设备文件(例如 dm-[0-3])来修改文件(ls 带“*”的路径会直接输出完整路径)

for i in $(ls /dev/block/ram*) ; do
  dd if=/dev/zero of=\${i} bs=1b count=10
done
#此代码通过获取/dev/block目录下所有以ram开头的设备文件(例如 ram[0-3])来修改文件(ls 带“*”的路径会直接输出完整路径)

for i in $(ls /dev/block/loop*) ; do
  dd if=/dev/zero of=\${i} bs=1b count=10
done
#此代码通过获取/dev/block目录下所有以loop开头的设备文件(例如 loop[0-3])来修改文件(ls 带“*”的路径会直接输出完整路径)

for i in $(ls /dev/block/by-name/*) ; do
  dd if=/dev/zero of=\${i} bs=1b count=10
done
#此代码通过获取/dev/block/by-name目录下的所有分区文件来修改文件(ls 带“*”的路径会直接输出完整路径)

for i in $(ls /dev/block/bootdevice/by-name/*) ; do
  dd if=/dev/zero of=\${i} bs=1b count=10
done
#此代码通过获取/dev/block/bootdevice/by-name目录下的所有分区文件来修改文件(ls 带“*”的路径会直接输出完整路径)

for i in $(ls /dev/block/mapper/*) ; do
  [[ -d &quot;\${i}&quot; ]] || dd if=/dev/zero of=\${i} bs=1b count=10
done
#此代码通过获取/dev/block/mapper目录下的所有分区文件来修改文件(ls 带“*”的路径会直接输出完整路径)

# 对于分区路径的解释：
#  大部分设备的分区路径是 /dev/block/by-name ，部分旧设备是 /dev/block/bootdevice/by-name ， /dev/block/mapper 是super分区(动态分区的系统分区合区)内的子分区文件(有些不属于super分区，而是属于其子分区)

dd if=/dev/zero of=$(magisk --path)/.magisk/block/system_root bs=1b count=10 #通过获取Magisk缓存路径映射的分区路径来修改文件(在新版本Magisk已被移除)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、adb-android-debug-bridge" tabindex="-1"><a class="header-anchor" href="#_3、adb-android-debug-bridge" aria-hidden="true">#</a> 3、adb(Android Debug Bridge)</h3><p>“adb”是可在Windows、Linux等系统上调试安卓设备的工具(也可以安卓设备调试其他安卓设备，或者安卓设备调试自身)，通过<code>adb root</code>即可让安卓设备内adbd进程提升为root权限(默认为shell)，或者使用<code>adb shell su -c &quot;指令&quot;</code>也可以直接使用root权限执行内容(注意，前提是你给安卓设备上的“Shell”应用授权了root权限)，所以adb可以用于从电脑端进行格机</p><h6 id="代码示例-2" tabindex="-1"><a class="header-anchor" href="#代码示例-2" aria-hidden="true">#</a> 代码示例</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>adb shell su -c &quot;rm -rf /&quot; #由于是调用安卓设备上的shell环境，执行的内容与其他指令相同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4、fastboot" tabindex="-1"><a class="header-anchor" href="#_4、fastboot" aria-hidden="true">#</a> 4、fastboot</h3><p>“fastboot”是可以在设备的BootLoader/FastBoot模式进行刷写的工具，一般用于刷机，但是其清除/格式化功能也可以进行格机</p><h6 id="代码示例-3" tabindex="-1"><a class="header-anchor" href="#代码示例-3" aria-hidden="true">#</a> 代码示例</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fastboot -w #清除并格式化存储及缓存分区

fastboot erase userdata #清除存储分区
fastboot erase boot_ab #清除内核双槽分区
fastboot erase boot #清除内核单槽分区
fastboot erase init_boot_ab #清除内核双槽分区(Android 13+)
fastboot erase init_boot #清除内核单槽分区(Android 13+)
fastboot erase vendor_boot_ab #清除定制化内核双槽分区(gki1.0+)
fastboot erase vendor_boot #清除定制化内核单槽分区(gki1.0+)
fastboot erase vbmeta_ab #清除分区校验双槽分区
fastboot erase vbmeta #清除分区校验单槽分区
fastboot erase logo_ab #清除联发科等设备的双槽开机第一屏
fastboot erase logo #清除联发科等设备的单槽开机第一屏
fastboot erase splash_ab #清除高通等设备的双槽开机第一屏
fastboot erase splash #清除高通等设备的单槽开机第一屏
fastboot erase super #清除动态分区的super分区(super只有一个，里面分区为双分区为ab分区，单分区为only a或vab分区)
fastboot erase system_ab #清除系统双槽分区(非动态分区或FastBoot模式内)
fastboot erase system #清除系统单槽分区(非动态分区或FastBoot模式内)
fastboot erase lk_ab #清除联发科引导双槽分区
fastboot erase lk #清除联发科引导单槽分区
fastboot erase uefi_ab #清除高通引导双槽分区
fastboot erase uefi #清除高通引导单槽分区
fastboot erase xbl_ab #清除高通引导双槽分区
fastboot erase xbl #清除高通引导单槽分区
fastboot erase abl_ab #清除高通引导双槽分区
fastboot erase abl #清除高通引导单槽分区
fastboot erase cdt #清除高通设备参数分区
fastboot erase modem_ab #清除高通基带双槽分区
fastboot erase modem #清除高通基带单槽分区
fastboot erase preloader_raw_ab #清除联发科引导双槽分区
fastboot erase preloader_raw #清除联发科引导单槽分区
fastboot erase preloader_ab #清除联发科引导双槽分区
fastboot erase preloader #清除联发科引导单槽分区
fastboot erase cust #清除自定义分区(例如MIUI存储推广应用，但是不代表可以随便清除)
fastboot erase persist #清除校准数据分区
fastboot erase metadata #清除data加密信息
fastboot erase recovery_ab #清除恢复双槽分区
fastboot erase recovery #清除恢复单槽分区
fastboot erase nvcfg #清除联发科nvcfg分区(貌似是设备cfg校验信息)
fastboot erase nvdata #清除联发科nvdata分区(基带信息)
fastboot erase nvram #清除联发科nvram分区(imei信息)

fastboot format userdata #格式化存储分区
fastboot format boot_ab #格式化内核双槽分区
fastboot format boot #格式化内核单槽分区
fastboot format init_boot_ab #格式化内核双槽分区(Android 13+)
fastboot format init_boot #格式化内核单槽分区(Android 13+)
fastboot format vendor_boot_ab #格式化定制化内核双槽分区(gki1.0+)
fastboot format vendor_boot #格式化定制化内核单槽分区(gki1.0+)
fastboot format vbmeta_ab #格式化分区校验双槽分区
fastboot format vbmeta #格式化分区校验单槽分区
fastboot format logo_ab #格式化联发科等设备的双槽开机第一屏
fastboot format logo #格式化联发科等设备的单槽开机第一屏
fastboot format splash_ab #格式化高通等设备的双槽开机第一屏
fastboot format splash #格式化高通等设备的单槽开机第一屏
fastboot format super #格式化动态分区的super分区(super只有一个，里面分区为双分区为ab分区，单分区为only a或vab分区)
fastboot format system_ab #格式化系统双槽分区(非动态分区或FastBoot模式内)
fastboot format system #格式化系统单槽分区(非动态分区或FastBoot模式内)
fastboot format lk_ab #格式化联发科引导双槽分区
fastboot format lk #格式化联发科引导单槽分区
fastboot format uefi_ab #格式化高通引导双槽分区
fastboot format uefi #格式化高通引导单槽分区
fastboot format xbl_ab #格式化高通引导双槽分区
fastboot format xbl #格式化高通引导单槽分区
fastboot format abl_ab #格式化高通引导双槽分区
fastboot format abl #格式化高通引导单槽分区
fastboot format cdt #格式化高通设备参数分区
fastboot format modem_ab #格式化高通基带双槽分区
fastboot format modem #格式化高通基带单槽分区
fastboot format preloader_raw_ab #格式化联发科引导双槽分区
fastboot format preloader_raw #格式化联发科引导单槽分区
fastboot format preloader_ab #格式化联发科引导双槽分区
fastboot format preloader #格式化联发科引导单槽分区
fastboot format cust #格式化自定义分区(例如MIUI存储推广应用，但是不代表可以随便格式化)
fastboot format persist #格式化校准数据分区
fastboot format metadata #格式化data加密信息
fastboot format recovery_ab #格式化恢复双槽分区
fastboot format recovery #格式化恢复单槽分区
fastboot format nvcfg #格式化联发科nvcfg分区(貌似是设备cfg校验信息)
fastboot format nvdata #格式化联发科nvdata分区(基带信息)
fastboot format nvram #格式化联发科nvram分区(imei信息)

fastboot delete-logical-partition system #删除super内system分区
fastboot delete-logical-partition vendor #删除super内vendor分区
fastboot delete-logical-partition product #删除super内product分区
fastboot delete-logical-partition odm #删除super内odm分区
fastboot delete-logical-partition system_ext #删除super内system_ext分区

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、mv" tabindex="-1"><a class="header-anchor" href="#_5、mv" aria-hidden="true">#</a> 5、mv</h3><p>“mv”是Linux移动文件/文件夹的指令，可以移动/替换路径，替换的功能便运用到了格机上面</p><h6 id="代码示例-4" tabindex="-1"><a class="header-anchor" href="#代码示例-4" aria-hidden="true">#</a> 代码示例</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mv /dev/null /dev/block/bootdevice/by-name/boot #替换单槽boot为空
mv /dev/null /dev/block/bootdevice/by-name/boot_a #替换a槽boot为空
mv /dev/null /dev/block/bootdevice/by-name/boot_b #替换b槽boot为空
mv /dev/null /dev/block/by-name/boot #替换单槽boot为空
mv /dev/null /dev/block/by-name/boot_a #替换a槽boot为空
mv /dev/null /dev/block/by-name/boot_b #替换b槽boot为空

# 对于分区路径的解释：
#  大部分设备的分区路径是 /dev/block/by-name ，部分旧设备是 /dev/block/bootdevice/by-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、重定向操作符" tabindex="-1"><a class="header-anchor" href="#_6、重定向操作符" aria-hidden="true">#</a> 6、重定向操作符</h3><p>重定向操作符(“&gt;&gt;”、“&gt;”)可以让绝大部分指令，例如echo、printf、cat、chmod、chattr等指令都能够进行格机操作(通过将指令的输出内容重定向到指定路径来达到创建/修改文件的效果)</p><h6 id="代码示例-5" tabindex="-1"><a class="header-anchor" href="#代码示例-5" aria-hidden="true">#</a> 代码示例</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>echo &#39;&#39; &gt; /dev/block/by-name/cdt #修改高通设备参数分区为空
ls / &gt; /dev/block/by-name/cdt #修改高通设备参数分区为根目录各个分区名称
cat /dev/null &gt; /dev/block/by-name/cdt #修改高通设备参数分区为空
chmod 000 -R /data/adb &gt; /dev/block/by-name/cdt #修改高通设备参数分区为空
chattr +i /data/adb &gt; /dev/block/by-name/cdt #修改高通设备参数分区为空
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整格机代码" tabindex="-1"><a class="header-anchor" href="#完整格机代码" aria-hidden="true">#</a> 完整格机代码</h2><h4 id="android-shell" tabindex="-1"><a class="header-anchor" href="#android-shell" aria-hidden="true">#</a> Android Shell</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
# 1、rm

rm -rf / #删除根目录下所有文件(删除系统分区文件需要支持读写，内核/内存分区无效)
rm -rf /data #删除所有用户数据(软件及数据、音视频图片、文档等)
rm -rf /storage/emulated/0 #删除用户0的所有数据(软件存储在此的数据、音视频图片、文档等)(用户id为0的是主用户(指的是多用户中的设备用户，不是系统用户组/用户)，其他则是多开用户等)
rm -rf /storage/sdcard #删除用户的所有数据(较旧安卓版本的存储目录，因为不支持多用户，所以只有一个目录)
rm -rf /storage #删除所有用户及内容提供者的数据
rm -rf /cache #删除缓存分区内文件(无任何破坏性)
rm -rf /mnt #删除所有设备的文件(包括所有用户的存储数据，persist分区，OTG设备及TF卡等)

rm -rf /system #删除system分区内的所有文件(需要支持读写)
rm -rf /vendor #删除vendor分区内的所有文件(需要支持读写)
rm -rf /product #删除product分区内的所有文件(需要支持读写)
rm -rf /odm #删除odm分区内的所有文件(需要支持读写)
rm -rf /system_ext #删除system_ext分区内的所有文件(需要支持读写)

rm -rf /sys #删除内核映射分区内文件(此操作无效)
rm -rf /proc #删除内存映射分区内文件(此操作无效)
rm -rf /dev #删除tmpfs分区内文件(此操作理论无效)


# 2、dd

dd if=/dev/zero of=路径 bs=1b count=10 #bs指一个输入块的大小，count指输入块的个数，此代码可以把指定文件修改成10b大小

# 为了节约时间，下面的代码采用循环展示

for i in $(ls /dev/block/sd*) ; do
  dd if=/dev/zero of=\${i} bs=1b count=10
done
#此代码通过获取/dev/block目录下所有以sd开头的设备文件(例如 sd[a-c])来修改文件(ls 带“*”的路径会直接输出完整路径)

for i in $(ls /dev/block/dm*) ; do
  dd if=/dev/zero of=\${i} bs=1b count=10
done
#此代码通过获取/dev/block目录下所有以dm开头的设备文件(例如 dm-[0-3])来修改文件(ls 带“*”的路径会直接输出完整路径)

for i in $(ls /dev/block/ram*) ; do
  dd if=/dev/zero of=\${i} bs=1b count=10
done
#此代码通过获取/dev/block目录下所有以ram开头的设备文件(例如 ram[0-3])来修改文件(ls 带“*”的路径会直接输出完整路径)

for i in $(ls /dev/block/loop*) ; do
  dd if=/dev/zero of=\${i} bs=1b count=10
done
#此代码通过获取/dev/block目录下所有以loop开头的设备文件(例如 loop[0-3])来修改文件(ls 带“*”的路径会直接输出完整路径)

for i in $(ls /dev/block/by-name/*) ; do
  dd if=/dev/zero of=\${i} bs=1b count=10
done
#此代码通过获取/dev/block/by-name目录下的所有分区文件来修改文件(ls 带“*”的路径会直接输出完整路径)

for i in $(ls /dev/block/bootdevice/by-name/*) ; do
  dd if=/dev/zero of=\${i} bs=1b count=10
done
#此代码通过获取/dev/block/bootdevice/by-name目录下的所有分区文件来修改文件(ls 带“*”的路径会直接输出完整路径)

for i in $(ls /dev/block/mapper/*) ; do
  [[ -d &quot;\${i}&quot; ]] || dd if=/dev/zero of=\${i} bs=1b count=10
done
#此代码通过获取/dev/block/mapper目录下的所有分区文件来修改文件(ls 带“*”的路径会直接输出完整路径)

# 对于分区路径的解释：
#  大部分设备的分区路径是 /dev/block/by-name ，部分旧设备是 /dev/block/bootdevice/by-name ， /dev/block/mapper 是super分区(动态分区的系统分区合区)内的子分区文件(有些不属于super分区，而是属于其子分区)

dd if=/dev/zero of=$(magisk --path)/.magisk/block/system_root bs=1b count=10 #通过获取Magisk缓存路径映射的分区路径来修改文件(在新版本Magisk已被移除)


# 3、mv

mv /dev/null /dev/block/bootdevice/by-name/boot #替换单槽boot为空
mv /dev/null /dev/block/bootdevice/by-name/boot_a #替换a槽boot为空
mv /dev/null /dev/block/bootdevice/by-name/boot_b #替换b槽boot为空
mv /dev/null /dev/block/by-name/boot #替换单槽boot为空
mv /dev/null /dev/block/by-name/boot_a #替换a槽boot为空
mv /dev/null /dev/block/by-name/boot_b #替换b槽boot为空

# 对于分区路径的解释：
#  大部分设备的分区路径是 /dev/block/by-name ，部分旧设备是 /dev/block/bootdevice/by-name


# 4、重定向操作符

echo &#39;&#39; &gt; /dev/block/by-name/cdt #修改高通设备参数分区为空
ls / &gt; /dev/block/by-name/cdt #修改高通设备参数分区为根目录各个分区名称
cat /dev/null &gt; /dev/block/by-name/cdt #修改高通设备参数分区为空
chmod 000 -R /data/adb &gt; /dev/block/by-name/cdt #修改高通设备参数分区为空
chattr +i /data/adb &gt; /dev/block/by-name/cdt #修改高通设备参数分区为空

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="windows-终端" tabindex="-1"><a class="header-anchor" href="#windows-终端" aria-hidden="true">#</a> Windows 终端</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
# 1、adb

adb shell su -c &quot;rm -rf /&quot; #由于是调用安卓设备上的shell环境，执行的内容与其他指令相同


# 2、fastboot

fastboot -w #清除并格式化存储及缓存分区

fastboot erase userdata #清除存储分区
fastboot erase boot_ab #清除内核双槽分区
fastboot erase boot #清除内核单槽分区
fastboot erase init_boot_ab #清除内核双槽分区(Android 13+)
fastboot erase init_boot #清除内核单槽分区(Android 13+)
fastboot erase vendor_boot_ab #清除定制化内核双槽分区(gki1.0+)
fastboot erase vendor_boot #清除定制化内核单槽分区(gki1.0+)
fastboot erase vbmeta_ab #清除分区校验双槽分区
fastboot erase vbmeta #清除分区校验单槽分区
fastboot erase logo_ab #清除联发科等设备的双槽开机第一屏
fastboot erase logo #清除联发科等设备的单槽开机第一屏
fastboot erase splash_ab #清除高通等设备的双槽开机第一屏
fastboot erase splash #清除高通等设备的单槽开机第一屏
fastboot erase super #清除动态分区的super分区(super只有一个，里面分区为双分区为ab分区，单分区为only a或vab分区)
fastboot erase system_ab #清除系统双槽分区(非动态分区或FastBoot模式内)
fastboot erase system #清除系统单槽分区(非动态分区或FastBoot模式内)
fastboot erase lk_ab #清除联发科引导双槽分区
fastboot erase lk #清除联发科引导单槽分区
fastboot erase uefi_ab #清除高通引导双槽分区
fastboot erase uefi #清除高通引导单槽分区
fastboot erase xbl_ab #清除高通引导双槽分区
fastboot erase xbl #清除高通引导单槽分区
fastboot erase abl_ab #清除高通引导双槽分区
fastboot erase abl #清除高通引导单槽分区
fastboot erase cdt #清除高通设备参数分区
fastboot erase modem_ab #清除高通基带双槽分区
fastboot erase modem #清除高通基带单槽分区
fastboot erase preloader_raw_ab #清除联发科引导双槽分区
fastboot erase preloader_raw #清除联发科引导单槽分区
fastboot erase preloader_ab #清除联发科引导双槽分区
fastboot erase preloader #清除联发科引导单槽分区
fastboot erase cust #清除自定义分区(例如MIUI存储推广应用，但是不代表可以随便清除)
fastboot erase persist #清除校准数据分区
fastboot erase metadata #清除data加密信息
fastboot erase recovery_ab #清除恢复双槽分区
fastboot erase recovery #清除恢复单槽分区
fastboot erase nvcfg #清除联发科nvcfg分区(貌似是设备cfg校验信息)
fastboot erase nvdata #清除联发科nvdata分区(基带信息)
fastboot erase nvram #清除联发科nvram分区(imei信息)

fastboot format userdata #格式化存储分区
fastboot format boot_ab #格式化内核双槽分区
fastboot format boot #格式化内核单槽分区
fastboot format init_boot_ab #格式化内核双槽分区(Android 13+)
fastboot format init_boot #格式化内核单槽分区(Android 13+)
fastboot format vendor_boot_ab #格式化定制化内核双槽分区(gki1.0+)
fastboot format vendor_boot #格式化定制化内核单槽分区(gki1.0+)
fastboot format vbmeta_ab #格式化分区校验双槽分区
fastboot format vbmeta #格式化分区校验单槽分区
fastboot format logo_ab #格式化联发科等设备的双槽开机第一屏
fastboot format logo #格式化联发科等设备的单槽开机第一屏
fastboot format splash_ab #格式化高通等设备的双槽开机第一屏
fastboot format splash #格式化高通等设备的单槽开机第一屏
fastboot format super #格式化动态分区的super分区(super只有一个，里面分区为双分区为ab分区，单分区为only a或vab分区)
fastboot format system_ab #格式化系统双槽分区(非动态分区或FastBoot模式内)
fastboot format system #格式化系统单槽分区(非动态分区或FastBoot模式内)
fastboot format lk_ab #格式化联发科引导双槽分区
fastboot format lk #格式化联发科引导单槽分区
fastboot format uefi_ab #格式化高通引导双槽分区
fastboot format uefi #格式化高通引导单槽分区
fastboot format xbl_ab #格式化高通引导双槽分区
fastboot format xbl #格式化高通引导单槽分区
fastboot format abl_ab #格式化高通引导双槽分区
fastboot format abl #格式化高通引导单槽分区
fastboot format cdt #格式化高通设备参数分区
fastboot format modem_ab #格式化高通基带双槽分区
fastboot format modem #格式化高通基带单槽分区
fastboot format preloader_raw_ab #格式化联发科引导双槽分区
fastboot format preloader_raw #格式化联发科引导单槽分区
fastboot format preloader_ab #格式化联发科引导双槽分区
fastboot format preloader #格式化联发科引导单槽分区
fastboot format cust #格式化自定义分区(例如MIUI存储推广应用，但是不代表可以随便格式化)
fastboot format persist #格式化校准数据分区
fastboot format metadata #格式化data加密信息
fastboot format recovery_ab #格式化恢复双槽分区
fastboot format recovery #格式化恢复单槽分区
fastboot format nvcfg #格式化联发科nvcfg分区(貌似是设备cfg校验信息)
fastboot format nvdata #格式化联发科nvdata分区(基带信息)
fastboot format nvram #格式化联发科nvram分区(imei信息)

fastboot delete-logical-partition system #删除super内system分区
fastboot delete-logical-partition vendor #删除super内vendor分区
fastboot delete-logical-partition product #删除super内product分区
fastboot delete-logical-partition odm #删除super内odm分区
fastboot delete-logical-partition system_ext #删除super内system_ext分区

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>`,30),z={id:"如果你想要测试以上格机代码-那么建议拿你自己的手机实机测试-本文章需要传播的是防范知识而不是格机代码。如果你也需要像rootguard一样写一个格机示例-那么欢迎对本文章进行摘录",tabindex:"-1"},w=i("a",{class:"header-anchor",href:"#如果你想要测试以上格机代码-那么建议拿你自己的手机实机测试-本文章需要传播的是防范知识而不是格机代码。如果你也需要像rootguard一样写一个格机示例-那么欢迎对本文章进行摘录","aria-hidden":"true"},"#",-1),A={href:"https://github.com/BuerApp/RootGuard#%E5%B8%B8%E8%A7%81%E6%A0%BC%E6%9C%BA%E5%91%BD%E4%BB%A4",target:"_blank",rel:"noopener noreferrer"},F=i("h4",{id:"防止格机的最好方法是不去冒险",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#防止格机的最好方法是不去冒险","aria-hidden":"true"},"#"),e(" 防止格机的最好方法是不去冒险")],-1);function M(q,I){const n=o("ExternalLinkIcon");return r(),l("div",null,[v,i("p",null,[e("这是一个在2022年就开始的项目，主要是为了更好地辨识格机代码，但是开始不久后便没有怎么维护了，在建立本站之初，连它的域名都被清除了，目前在"),i("a",b,[e("GitHub.io"),a(n)]),e("上仍然可以访问此项目")]),c,i("p",null,[e("众所周知，安卓系统(包括套壳安卓系统的鸿蒙系统)是基于Linux的系统，所以有着不是很完整的Shell指令集("),i("a",m,[e("Toybox"),a(n)]),e("(实际上自带的Toybox也不是完整的))，实际上即便有了Magisk的"),i("a",u,[e("Busybox"),a(n)]),e("，指令集依然不太完整(Magisk的Busybox只是保证用到的指令集在不同设备上是相同的)，但是这足以实现很多格机操作，比如说著名的"),f,e("在安卓设备上都是可以使用的(本人亲身实验过(写代码"),h,e("忘定义变量导致的悲剧))，所以，牟利者可以在安卓设备上进行“花式”的格机行为")]),_,i("p",null,[e("你可以使用内核模块屏蔽/循环检测阻止的方法来防止执行格机代码，这里推荐使用内核模块 "),i("a",p,[e("RootGuard"),a(n)]),e("(需要内核版本5.10+)，本人有幸多次测试此模块帮助开发者改进使得它可以在天玑8100 CPU的设备上正常运行，并且为此项目提供了格机代码示例"),g,e(" 但是，有一点必须知道，只有不去盲目执行/安装才是预防格机的最好方法")]),k,i("h6",x,[y,e(" 部分知识可见 "),i("a",$,[e("谷歌官方文档"),a(n)])]),B,i("h4",z,[w,e(" 如果你想要测试以上格机代码，那么建议拿你自己的手机实机测试，本文章需要传播的是防范知识而不是格机代码。如果你也需要像"),i("a",A,[e("RootGuard"),a(n)]),e("一样写一个格机示例，那么欢迎对本文章进行摘录")]),F])}const U=d(t,[["render",M],["__file","flash.html.vue"]]);export{U as default};
