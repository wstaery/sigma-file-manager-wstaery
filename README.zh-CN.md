##  ⚡最新动态

- v2 已从 beta 阶段进入正式阶段
- v2 已成为主分支
- **v2.4.0：新建标签页按钮移至导航器选项旁，标签溢出时替换为计数方框；新增 `Backspace` 返回上一级目录**
- **v2.3.0：新增标签栏溢出计数器、标签布局重构，以及全面对齐 Windows 文件资源管理器术语的中文翻译**

<h1>
  <img valign="middle" src="https://github.com/aleksey-hoffman/sigma-file-manager/raw/main/.github/media/logo-1024x1024.png" width="64px">
  &nbsp;&nbsp;Sigma File Manager
</h1>

"Sigma File Manager" 是一款免费、开源、快速演进的现代化文件管理器（资源管理器 / Finder）应用，支持 Windows 和 Linux。

由 [Aleksey Hoffman](https://github.com/aleksey-hoffman) 设计、开发和维护

<img src="./.github/media/sigma-file-manager-main.png">

[English](./README.md) | 简体中文

## 社区链接

[Discord](https://discord.gg/sxZTztFVwX) | [Reddit](https://www.reddit.com/r/SigmaFileManager) | [YouTube](https://www.youtube.com/@sigma-dev) | [X (Twitter)](https://twitter.com/sigma__dev) | [Telegram](https://t.me/sigma_devs)
<br>感谢每一位帮助分享本项目的朋友！

## 功能特性

#### 主要功能：

- **智能全局搜索：** 几秒内找到文件和文件夹（搜索整个 `1TB` 硬盘仅需约 2 秒）。其拼写纠错系统可以处理错别字、大小写错误、词序颠倒、漏词、漏符号和漏扩展名等各种情况。
- **标签页：** 同时打开多个文件夹，并在它们之间即时切换。标签放得下时，新建标签按钮位于导航器选项旁；标签过多放不下时，该位置替换为计数器方框，显示标签总数，放不下的标签收纳在其下拉列表中，随时可以点开选择。
- **分屏视图：** 任意标签页可拆分为两个窗格，独立导航，并在它们之间轻松传输文件。
- **扩展与市场：** 从内置市场或本地文件夹安装扩展。扩展可以添加命令、页面、快捷键、设置项等。
- **默认文件管理器：** 在 Windows 上，Sigma 可以在日常文件操作中替代文件资源管理器。
- **局域网文件共享：** 通过局域网共享或串流文件和文件夹，支持浏览器访问、二维码和 FTP。
- **网络位置（Alpha 阶段）：** 连接 SSHFS、NFS、SMB、CIFS 等远程位置。
- **地址栏：** 支持键盘导航、路径自动补全，并可快速跳转到上级文件夹。
- **项目筛选：** 使用 glob 模式和属性筛选（大小、日期、MIME 类型等）快速缩小大文件夹的显示范围。
- **智能拖放：** 更舒适地移动或复制本地文件，更流畅地处理来自网页的拖放。
- **快捷键与命令面板：** 大多数操作都支持键盘完成，提供全局快捷键和快速命令面板，可执行应用及扩展命令。
- **主页横幅与视觉效果：** 使用自定义图片、视频、内置艺术作品、透明度、混合模式等样式控制，打造个性化界面。
- **仪表板与快速访问：** 从一个中心区域直达收藏、带标签文件、最常访问位置和历史数据。
- **标签：** 使用标签整理你的文件和文件夹。
- **Zip 压缩包：** 将文件压缩为 `.zip` 压缩包，并可直接在应用内解压，无需离开。
- **应用内更新：** 直接从更新通知中下载并安装更新。
- **快速查看：** 按空格键即时预览图片、视频、音频、PDF 和文本文件，然后在不打开外部应用的情况下浏览文件。
- **WSL 驱动器：** 在 Windows 上，可直接在导航器中浏览检测到的 WSL 发行版。
- **本地化：** 应用已提供绝大多数常用语言的翻译，其中文翻译已全面对齐 Windows 文件资源管理器的术语习惯。
- 以及更多。扩展还提供了视频下载（支持 YouTube、Twitch 等 1000+ 站点）、媒体格式转换、图片体积优化等额外功能。

## 本 fork 的更新（v2.4.0）

本仓库在 [aleksey-hoffman/sigma-file-manager](https://github.com/aleksey-hoffman/sigma-file-manager) 基础上进行了以下改进：

- **新建标签页按钮移至导航器选项旁：** 标签全部放得下时，新建标签页「+」按钮位于导航器选项左侧，标签区不再被它占用；标签溢出时「+」隐藏，并在同一位置替换为显示标签总数的计数方框，其下拉菜单顶部仍固定「新建标签」(`Ctrl+T`)。
- **`Backspace` 返回上一级：** 在导航器中按 `Backspace` 即可进入上级目录，与 `Alt+↑` 和工具栏 ↑ 按钮并存；在输入框、对话框或筛选框打开时保持 `Backspace` 原有的删字行为。
- **标签栏溢出计数器：** 标签过多时，显示带边框的计数器方框，展示当前标签总数；放不下的标签按打开顺序收纳进计数器的下拉列表（列表可滚动），点击即可切换。
- **标签布局重构：** 第一个（最早打开的）标签始终完整可见、可点击；标签标题超长时显示省略号而非硬裁切；命令面板按钮从页头左端移至右侧按钮组，不再遮挡第一个标签。
- **中文翻译完善：** 参照 Windows 文件资源管理器统一术语（驱动器、回收站、主文件夹、右键菜单、文件夹等），修正约 370 处错译与机翻痕迹，补齐全部未翻译文案，设置搜索关键词也已本地化。

详见 [CHANGELOG.md](./CHANGELOG.md)。

## 代码签名政策

<table>
  <tbody>
    <tr>
      <td>
          <a href="https://signpath.org" target="_blank">
            <img width="64px" align="center" src="https://signpath.org/assets/favicon-50x50.png">
          </a>
      </td>
      <td>
        <b>Windows 上的免费代码签名由 <a href="https://signpath.io" target="_blank">SignPath.io</a> 提供，证书由 <a href="https://signpath.org" target="_blank">SignPath Foundation</a> 签发</b>
      </td>
    </tr>
  </tbody>
</table>

- 提交者和审查者：[Aleksey Hoffman](https://github.com/aleksey-hoffman)
- 批准者：[Aleksey Hoffman](https://github.com/aleksey-hoffman)
- 隐私政策：[PRIVACY_POLICY.md](./PRIVACY_POLICY.md)。除非用户或安装操作者明确要求，本程序不会向其他网络系统传输任何信息。

## 赞助商

<table>
  <tbody>
    <tr>
      <td>
          <a href="https://hover.com/UywpvNe0" target="_blank">
            <img width="128px" align="center" src="https://github.com/aleksey-hoffman/sigma-file-manager/raw/main/.github/media/hover-logo-svg-vector.svg">
          </a>
      </td>
      <td>
        <b>Hover 是一个广受欢迎的域名购买服务。</b>
        <br>使用我的 <a href="https://hover.com/UywpvNe0" target="_blank">Hover 链接</a>，我们都能获得 2 美元的域名优惠。
      </td>
    </tr>
  </tbody>
</table>

## 支持者

成为第一位支持者。

可以考虑在 Patreon 上支持本项目：

<a target="_blank" href="https://patreon.com/sigma_file_manager">
  <img
    src="https://raw.githubusercontent.com/aleksey-hoffman/sigma-file-manager/main/.github/media/patreon_button.png"
    width="164px"
  />
</a>
<br>
<a target="_blank" href="https://github.com/aleksey-hoffman/sigma-file-manager/wiki/Support-and-rewards">
  查看其他支持方式
</a>

这些资助将用于支持本项目的开发。原作者还在与几所大学合作一个帮助科学家加速新药和疗法研发的项目，目标是把发现一种新药所需的时间从当前的 10 年平均水平缩短到几个月（该项目之后会开源）。

## 下载与安装

<p>
 <a href="https://github.com/wstaery/sigma-file-manager-wstaery/releases"><img src="https://img.shields.io/github/downloads/wstaery/sigma-file-manager-wstaery/total?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1kb3dubG9hZC1pY29uIGx1Y2lkZS1kb3dubG9hZCI+PHBhdGggZD0iTTEyIDE1VjMiLz48cGF0aCBkPSJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCIvPjxwYXRoIGQ9Im03IDEwIDUgNSA1LTUiLz48L3N2Zz4=&color=%2370b59d"></a>
 <a href="https://github.com/wstaery/sigma-file-manager-wstaery/releases/latest"><img src="https://img.shields.io/github/v/release/wstaery/sigma-file-manager-wstaery?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1yb2NrZXQtaWNvbiBsdWNpZGUtcm9ja2V0Ij48cGF0aCBkPSJNMTIgMTV2NXMzLjAzLS41NSA0LTJjMS4wOC0xLjYyIDAtNSAwLTUiLz48cGF0aCBkPSJNNC41IDE2LjVjLTEuNSAxLjI2LTIgNS0yIDVzMy43NC0uNSA1LTJjLjcxLS44NC43LTIuMTMtLjA5LTIuOTFhMi4xOCAyLjE4IDAgMCAwLTIuOTEtLjA5Ii8%2BPHBhdGggZD0iTTkgMTJhMjIgMjIgMCAwIDEgMi0zLjk1QTEyLjg4IDEyLjg4IDAgMCAxIDIyIDJjMCAyLjcyLS43OCA3LjUtNiAxMWEyMi40IDIyLjQgMCAwIDEtNCAyeiIvPjxwYXRoIGQ9Ik05IDEySDRzLjU1LTMuMDMgMi00YzEuNjItMS4wOCA1IC4wNSA1IC4wNSIvPjwvc3ZnPg%3D%3D&label=release&color=%23a6abe3"></a>
</p>

#### ⚡ 系统要求：

**操作系统：** 64 位 Windows、Linux；macOS 受支持但不提供构建产物。

[所有版本与更新日志](https://github.com/wstaery/sigma-file-manager-wstaery/releases)


<table>
  <thead>
    <tr>
      <th>平台</th>
      <th>链接</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows | 未签名安装包（可能触发杀毒软件提示）</td>
      <td>
        <a target="_blank" href="https://github.com/wstaery/sigma-file-manager-wstaery/releases/latest">
          安装包 (.exe)
        </a>
      </td>
    </tr>
    <tr>
      <td>Linux | 便携版（实验性）</td>
      <td>
        <a target="_blank" href="https://github.com/wstaery/sigma-file-manager-wstaery/releases/latest">
          便携版 (.AppImage)
        </a>
      </td>
    </tr>
    <tr>
      <td>Linux | Flatpak</td>
      <td>
        <a target="_blank" href="https://github.com/wstaery/sigma-file-manager-wstaery/releases/latest">
          安装包 (.flatpak)
        </a>
        <br>
        <code>flatpak install ./Sigma-File-Manager-*-linux.flatpak</code>
      </td>
    </tr>
    <tr>
      <td>如果你的 macOS 或 Linux 发行版没有对应的编译产物，可以自行从源码构建
      </td>
      <td>
        <a target="_blank" href="https://github.com/wstaery/sigma-file-manager-wstaery/blob/main/CONTRIBUTING.md">
          参阅此指南
        </a>
      </td>
    </tr>
    <tr>
      <td>用于将 AppImage 集成进系统（启动器、任务栏）的 Linux 工具</td>
      <td>
        <a target="_blank" href="https://github.com/TheAssassin/AppImageLauncher">
          AppImageLauncher
        </a>
      </td>
    </tr>
  </tbody>
</table>

> 提示：上游官方渠道（winget、Microsoft Store、Snap）发布的是原作者维护的版本。本 fork 的构建产物请从本仓库的 [Releases](https://github.com/wstaery/sigma-file-manager-wstaery/releases) 页面下载。

## 面向开发者

如果你想为本项目贡献代码，请参阅指南：[CONTRIBUTING.md](./CONTRIBUTING.md)
