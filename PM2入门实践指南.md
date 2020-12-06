###  PM2简介

&nbsp;PM2(Process Manager 2)是一个基于Node.js开发的应用进程管理器，支持多种脚本语言（ruby，python，bash等等）

&nbsp;提供了性能/进程实时监控，负载均衡（仅限于node.js），自动重启，日志管理等等。

### PM2特点

1.支持集群模式实现负载均衡，但因采用nodejs的cluster模块实现，仅适用于nodejs进程；

2.支持监听重启，当文件更新变化等情况实现进程自动重启

3.支持热重启（无需关闭服务器，重启应用），支持0秒停机重载（reload），维护升级的时候不需要停机.

4.支持最大内存重启，设置最大内存限制，当进程占用内存超过限制实现自动重启；

5.支持异常重启与异常重启次数限制，当某个进程异常重启次数超过限制，则认为该进程为不稳定进程，自动停止（避免无限循环）

6.支持部署工作流，pm2可依据测试环境和线上环境自动部署到不同的服务器，同时运行在不同配置下

7.支持通过配置实现PM2开机进程自启动

8.支持pm2系统日志与管理的进程日志两种日志管理，默认会把进程的控制台输出记录到日志中

9.进程监控功能，pm2 monit 通过控制台观测进程资源使用情况（CPU，内存等),keymetrics监控通过网页展示,信息更丰富且可交互

10.支持Linux (stable) & MacOSx (stable) & Windows (stable)多个平台

11.提供远程控制和实时的接口 HTTP API (Nodejs模块,允许和PM2进程管理器交互)，供开发者通过编程方式灵活管理进程

12.支持pm2模块开发，实现pm2的功能扩展；

### 安装

  npm install pm2 -g

### 命令列表

 **1.启动/引导管理**  
-  pm2 startup                   &nbsp; &nbsp;开机自启动(自动检测init系统+在服务器启动时生成并设置PM2启动)
-  pm2 startup [platform]         &nbsp; &nbsp;手动指定启动系统，可以是：systemd，upstart，launchd，rcd
-  pm2 unstartup                  &nbsp; &nbsp;在服务器启动时禁用并删除PM2引导

 **2.进程信息管理**   
-  pm2 save                       &nbsp; &nbsp;在重新启动时保存/冻结进程列表
-  pm2 resurrect                 &nbsp; &nbsp;重载保存的应用列表
-  pm2 update                     &nbsp; &nbsp;保存进程，杀死pm2进程，恢复保存的进程
-  pm2 init                        &nbsp; &nbsp; ### Generate a sample js configuration file

 **3.全局命令**  
- pm2 start app.js               &nbsp; &nbsp; 启动并守护进程，重启Node应用
- pm2 satrt app.py               &nbsp; &nbsp; 启动并守护进程，重启Python应用

 **4.集群模式**  (仅限Node应用程序)  
- pm2 start app.js -i 4          &nbsp; &nbsp;在集群模式下启动4个应用实例，自动分配请求给每个实例，实现负载均衡                           
- pm2 scale [app-name] 10        &nbsp; &nbsp;将集群应用实例缩放到10个
- pm2 scale [app-name] +10       &nbsp; &nbsp;增加10个应用进程

 **5.进程监控** 
- pm2 list/ls                       &nbsp; &nbsp;列出所有已启动的进程（应用实例）
- pm2 list --sort=<field>        &nbsp; &nbsp;列出指定字段的进程信息
- pm2 monit                      &nbsp; &nbsp;显示每个进程的内存以及cpu使用情况
- pm2 show [app-name]            &nbsp; &nbsp;显示指定进程的所有信息

 **6.日志管理** 
- pm2 logs                       &nbsp; &nbsp;显示所有应用实例的日志信息
- pm2 logs [app-name]            &nbsp; &nbsp;显示指定应用实例的日志信息
- pm2 logs --json                &nbsp; &nbsp;日志信息以JSON格式显示
- pm2 flush                      &nbsp; &nbsp;清除所有的l日志信息
- pm2 reloadLogs                 &nbsp; &nbsp;重载所有的日志信息

 **7.进程状态管理** 
- pm2 start app.js --name="api"  &nbsp; &nbsp;启动应用并给应用命名api（注：应用名称可以自定义）
- pm2 start app.js -- -a 34      &nbsp; &nbsp;启动应用并传递参数"a 34"
- pm2 start app.js --watch       &nbsp; &nbsp;监听项目文件变化，当文件发生变化时重启应用
- pm2 start app.json             &nbsp; &nbsp;使用配置文件方式启动应用
- pm2 reset [app-name]           &nbsp; &nbsp;重置所有应用的计数器
- pm2 stop all                   &nbsp; &nbsp;停止所有的应用
- pm2 stop 0                     &nbsp; &nbsp;停止id为0的应用进程
- pm2 restart all                &nbsp; &nbsp;重启所有应用
- pm2 reload all                 &nbsp; &nbsp;0秒停机重载应用
- pm2 gracefulReload all         &nbsp; &nbsp;集群模式下优雅地重启所有应用
- pm2 delete all                 &nbsp; &nbsp;终止并删除所有的应用进程
- pm2 delete 0                   &nbsp; &nbsp;终止并id为0的应用进程
- pm2 kill                       &nbsp; &nbsp;杀掉所有pm2管理的应用进程
  
 **8.应用部署** 
- pm2 deploy app.json prod setup    &nbsp; &nbsp;通过配置文件给远程服务器（生产环境）部署项目
- pm2 deploy app.json prod          &nbsp; &nbsp;通过配置文件给远程服务器（生产环境）更新已部署项目
- pm2 deploy app.json prod revert 2  &nbsp; &nbsp;### Revert "prod" remote server by 2

 **9.模块系统**   
- pm2 module:generate [name]     &nbsp; &nbsp;创建一个模块并且命名
- pm2 install pm2-logrotate      &nbsp; &nbsp;安装模块
- pm2 uninstall pm2-logrotate    &nbsp; &nbsp;卸载模块
- pm2 publish                    &nbsp; &nbsp;模块版本增量发布到git或者npm中（当模块做了更新，通过该命令推送发布更新）


###  实践部分 


  **1.安装**   在服务器全局安装（根据项目需求也可以局部安装pm2),执行 npm install pm2 -g(局部安装无需加-g)

  **2.PM2配置**  


##### [命令行配置方式](https://pm2.io/doc/en/runtime/reference/pm2-cli/)：pm2 start [option]  &nbsp;&nbsp;&nbsp;例如：pm2 start /path/app.js --watch -i 4 && pm2 save  

&nbsp;&nbsp;path：表示项目入口文件所在的目录

&nbsp;&nbsp;--watch：表示监控整个项目文件的变化，一旦变化发生就重启应用

&nbsp;&nbsp;-i 4 :表示使用集群模式，开启4个项目实例进程

&nbsp;&nbsp;-save：保存项目列表信息，用于重载

&nbsp;&nbsp;更多配置可参考上面的命令列表

&nbsp;&nbsp;下面以启动一个koa2项目为例，调取控制台输入命令 pm2 start ./bin/app.js --watch，按下enter键。

&nbsp;&nbsp;到这里，使用pm2启动管理一个项目的部已经完成。
![start](https://gitee.com/uploads/images/2018/0625/143836_13143c9d_1384885.gif "appStart.gif")


##### [配置文件方式](https://pm2.io/doc/en/runtime/reference/ecosystem-file/)：（支持.yml , .json , .config.js 结尾的配置文件启动） 

&nbsp;这里我们把配置文件命名为pm2.config.js,配置如下：（可根据项目实际需求进行删减）

```
module.exports = {
  "apps": [{
    "name": "koaServer", //项目名称
    "cwd": './bin/', //应用的启动路径
    "script": "app.js", //应用的启动文件
    "exec_mode": "cluster", //可选值fork,cluster(开启集群模式实现负载均衡),默认fork
    "instances": "max", //集群模式下启动实例个数,当值为0或者max,启动进程数量为CPU线程数
    "args": "", //传递给脚本的参数
    "interpreter": "node", //指定的脚本解释器,默认node
    "interpreter_args": "", //传递给解释器的参数
    "watch": ['controllers', 'bin'], //监听变化，重启应用。默认true,监听整个项目,false不启用监听,也可指定监听文件夹
    "ignore_watch": ["node_modules", "logs", "static"], //忽略监听的文件夹,支持正则表达式
    "log_date_format": "YYYY-MM-DD HH:mm:ss", //设置日志的时间格式
    "log_type": "json", //输出的日志信息为json格式
    "error_file": "./logs/system/error/error.log", //设置标准错误流日志要写入到哪个文件,代码错误可在此文件查找
    "out_file": "./logs/system/output/console.log", //设置标准输出流日志要写入到哪个文件,如应用的console.log()
    "pid_file": "./logs/system/pid/pid.log", //设置pid要写入到哪个文件
    "min_uptime": 60, //应用运行少于时间被认为是异常启动
    "max_restarts": 10, //最大异常重启次数，即小于min_uptime运行时间重启次数
    "max_memory_restart": "100M", //最大内存限制数,超出自动重启
    "autorestart": false, //默认为true,发生异常的情况下自动重启
    "cron_restart": "", //crontab时间格式定时重启应用， 目前只支持cluster模式
    "force": false, //默认false， 如果true， 可以重复启动一个脚本,pm2不建议这么做
    "restart_delay": "100ms", //异常重启情况下,延时重启时间
    "env": {
      "NODE_ENV": "development"
    }, //配置开发环境变量
    "env_production": {
      "NODE_ENV": "production"
    }, //配置生产环境变量

  }]
}
```
##### 稳定运行配置建议
- 定时重启设置(cron_restart)：应用进程运行时间久了可能会产生一些意料之外的问题，定时重启可以规避一些不可预测的情况发生
- 设置最大内存限制（max_memory_restart）：根据观察设定合理内存限制，防止内存泄露等问题的发生，保证应用正常运行
- 合理设置min_uptime：min_uptime是应用正常启动的最小持续运行时长，超出此时间则被判定为异常启动
- 设定异常重启延时restart_delay：对于异常情况导致应用停止,设定异常重启延迟可防止应用在不可测情况下不断重启的导致重启次数过多等问题
- 设置异常重启次数(max_restarts):如果应用不断异常重启，并超过一定的限制次数，说明此时的环境长时间处于不可控状态，服务器异常。 
![configStart](https://gitee.com/uploads/images/2018/0625/161250_1f04260c_1384885.gif "configStart.gif")

 **3.PM2的监控** 

&nbsp;&nbsp;pm2 list/ls 显示PM2管理的所有应用的信息

![list](https://gitee.com/uploads/images/2018/0626/095642_0e743a23_1384885.gif "list.gif")

&nbsp;&nbsp;pm2 monit 实时监控PM2管理的所有应用的信息

![monit](https://gitee.com/uploads/images/2018/0626/102648_5d9208f4_1384885.gif "monit.gif")

以上方式其实是存在也有缺点的，list方式没法实现实时监控，monit方式虽然可以实现实时监控，但是只能监控具体某一台服务器。

当使用多台服务器时（即服务器集群），不便于实现集中化监控管理且信息相对较少。因此,PM2官方推出了[keymetrics](https://keymetrics.io/)监控用于对PM2服务进程的监控与管理

![keymetrics](https://gitee.com/uploads/images/2018/0626/132044_1fbe516b_1384885.png "屏幕截图.png")

  **优点：** 

  - 便于对于多台服务器（即服务器集群）进行集中监控管理

  - 可以实时观察程序运行的稳定性

  - 支持远程进行基本的管理操作，比如启动，停止，重启等等。

 **缺点：** 

 - 该软件为商业付费软件,免费版本功能受限，且只有2台服务器免费配额且最多只能监控4个进程。

 - 该软件的服务端非自建,采用的是将应用监控数据定时上抛给第三方平台，如服务器与进程有敏感信息存在一定的数据安全问题

 **选用指南:** 

 - 服务器数量有限或者能够支付昂贵的使用费用且无需关心数据的安全问题可以选用Keymetrics,毕竟有官方团队开发维护,且特性功能丰富

 - 此外，国内有大神开源一个PM2项目开源项目PM2.5,目前网上暂无相关部署使用教程，有兴趣可以[点击这里](http://https://github.com/PaulGuo/PM25)了解下 

 **4.fork模式与cluser模式的区别** 
- fork不支持socket地址端口复用，cluster支持地址端口复用
- fork不支持定时重启，cluster支持定时重启
- 为了实现最大的CPU资源利用,一般都采用cluser模式（仅限于node应用）
- fork模式下实现多进程可以使用创建多个应用,app0，app1，app2，每个应用监听不同的端口

 **5.一些命令执行的说明** 
- start：启动并在进程列表中添加进程，当进程列表中已存在该进程，则重启进程
- stop：杀掉进程，但进程仍然会在进程列表
- restart：stop+start
- resurrect：重载进程列表应用，该命令必须是进程列表存在的情况下有效，即运行时必须先执行pm2 save
- reload：只有上一个进程重启完成进入服务状态，才会执行下一个进程的重启，保持至少一个进程处于服务状态，
- delete：stop+从进程列表删除进程信息

 **6.日志管理** &nbsp; pm2本身带有日志管理系统，主要分为两种：
-  pm2系统自身的日志，存放于$HOME/.pm2/pm2.log； 
-  pm2所管理的应用进程的日志存放于 $HOME/.pm2/logs/目录下，标准谁出日志存放于${APP_NAME}_out.log，标准错误日志存放于${APP_NAME}_error.log； 应用日志可以通过配置输出到自己指定的目录下（具体配置方法可参考上面配置文件）
- 因为PM2日志系统无法对日志进行分类细化，故在这里项目中引入第三方日志输出模块[winston](https://www.npmjs.com/package/winston)






 
  
 
   
   
    


