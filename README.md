##  ⚡Latest news

- v2 moved from beta to stable stage
- v2 became the main branch
- **v2.4.0: new-tab button moved next to the navigator options, swap with the overflow counter when tabs no longer fit, and `Backspace` to go up one directory**
- **v2.3.0: tab bar overflow counter, tab layout rework, and a Chinese translation aligned with Windows File Explorer terminology**

<h1>
  <img valign="middle" src="https://github.com/aleksey-hoffman/sigma-file-manager/raw/main/.github/media/logo-1024x1024.png" width="64px">
  &nbsp;&nbsp;Sigma File Manager
</h1>

"Sigma File Manager" is a free, open-source, quickly evolving, modern file manager (explorer / finder) app for Windows and Linux.

Designed, developed, and maintained by [Aleksey Hoffman](https://github.com/aleksey-hoffman)

<img src="./.github/media/sigma-file-manager-main.png">

English | [简体中文](./README.zh-CN.md)

## Community links
[Discord](https://discord.gg/sxZTztFVwX) | [Reddit](https://www.reddit.com/r/SigmaFileManager) | [YouTube](https://www.youtube.com/@sigma-dev) | [X (Twitter)](https://twitter.com/sigma__dev) | [Telegram](https://t.me/sigma_devs)
<br>Thanks to everyone who has been sharing this project with others!

<a href="https://www.producthunt.com/products/sigma-file-manager?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-sigma-file-manager" target="_blank" rel="noopener noreferrer"><img alt="Sigma File Manager - Free, open-source, cross-platform, modern file manager app | Product Hunt" width="250" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1161635&amp;theme=light&amp;t=1780918567069"></a>

## Features

#### Major features:

- **Smart global search:** Finds files and folders in seconds (searches full `1TB` drive in ~2 seconds). Its typo correction system handles typos, wrong case, wrong word order, missing words, missing symbols, and missing file extension.
- **Tabs:** Keep multiple directories open and switch between them instantly. When the tabs fit the header, a **New tab** button sits next to the navigator options; when too many tabs are open, a counter badge replaces it and lists the extra tabs in a scrollable dropdown.
- **Split view:** Any tab can be splitted into 2 panes which you can navigate indipendently and transfer files between them easily.
- **Extensions and marketplace:** Install extensions from the built-in marketplace or local folders. Extensions can add commands, pages, shortcuts, settings, and more.
- **Default file manager:** On Windows, Sigma can replace File Explorer for most everyday file actions.
- **LAN file sharing:** Share or stream files and folders over your local network, with browser access, QR codes, and FTP support.
- **Network locations (Alpha stage):** Connect to remote locations such as SSHFS, NFS, SMB, and CIFS.
- **Address bar:** Navigate with the keyboard, autocomplete paths, and quickly jump to parent folders.
- **Item filter:** Narrow large folders with glob patterns and property filters for size, dates, MIME type, and more.
- **Smart drag and drop:** Move or copy local files more comfortably, and handle web drops more smoothly.
- **Shortcuts and command palette:** Most actions are keyboard-friendly, with global shortcuts and a fast command palette for app and extension commands.
- **Home banner and visual effects:** Personalize the UI with custom images, videos, built-in artwork, transparency, blend modes, and other style controls.
- **Dashboard and quick access:** Reach favorites, tagged files, most visited locations, and history data from one central area.
- **Tags:** Organize your files and folders with tags.
- **Zip archives:** Compress files into `.zip` archives and extract them without leaving the app.
- **In-app updates:** Download and install updates directly from update notifications.
- **Quick view:** Instantly preview images, videos, audio, PDFs, and text files with `Space`, then move through files without opening external apps.
- **WSL drives:** On Windows, browse detected WSL distributions directly in the navigator.
- **Localization:** The app has translations for all most used languages, including a Chinese translation aligned with Windows File Explorer terminology. 
- And more. Extensions provide additional features like video downloading (1000+ sites supported, including YouTube, Twitch, etc.), media converter, image size optimizer, etc.

## What's new in this fork (v2.4.0)

This repository builds on [aleksey-hoffman/sigma-file-manager](https://github.com/aleksey-hoffman/sigma-file-manager) with the following improvements:

- **New-tab button next to the navigator options:** when all tabs fit the header, the **New tab** (+) button sits to the left of the navigator options so the tab strip is never shortened by it. When the tabs no longer fit, the + button is hidden and replaced in the same place by the counter badge showing the total number of tabs, whose dropdown keeps **New tab** (`Ctrl+T`) pinned at the top.
- **Backspace goes up one directory:** press `Backspace` in the navigator to open the parent directory, alongside `Alt+↑` and the ↑ toolbar button. Typing in inputs, open dialogs, and the item filter keep the normal Backspace behavior.
- **Tab bar overflow counter:** when tabs no longer fit the header, a bordered counter badge shows the total number of open tabs. Tabs that do not fit collapse into its dropdown (with a scrollable list) in the order they were opened, and clicking one switches to it.
- **Tab bar layout rework:** the first (oldest) tab is always fully visible and clickable; tab titles truncate with an ellipsis instead of being clipped; the command palette button moved from the left end of the window toolbar into the right-side action group so it no longer overlaps the first tab.
- **Chinese translation:** aligned terminology with Windows File Explorer (驱动器, 回收站, 主文件夹, 右键菜单, 文件夹), fixed ~370 mistranslations and machine-translation artifacts, translated all remaining strings, and localized the settings search keywords.

See [CHANGELOG.md](./CHANGELOG.md) for details.

## Code signing policy

<table>
  <tbody>
    <tr>
      <td>
          <a href="https://signpath.org" target="_blank">
            <img width="64px" align="center" src="https://signpath.org/assets/favicon-50x50.png">
          </a>
      </td>
      <td>
        <b>Free code signing on Windows provided by <a href="https://signpath.io" target="_blank">SignPath.io</a>, certificate by <a href="https://signpath.org" target="_blank">SignPath Foundation</a></b>
      </td>
    </tr>
  </tbody>
</table>

- Committers and reviewers: [Aleksey Hoffman](https://github.com/aleksey-hoffman)
- Approvers: [Aleksey Hoffman](https://github.com/aleksey-hoffman)
- Privacy policy: [PRIVACY_POLICY.md](./PRIVACY_POLICY.md). This program will not transfer any information to other networked systems unless specifically requested by the user or the person installing or operating it.

## Sponsors

<table>
  <tbody>
    <tr>
      <td>
          <a href="https://hover.com/UywpvNe0" target="_blank">
            <img width="128px" align="center" src="https://github.com/aleksey-hoffman/sigma-file-manager/raw/main/.github/media/hover-logo-svg-vector.svg">
          </a>
      </td>
      <td>
        <b>Hover is a popular service where you buy domain names for your website.</b>
        <br>Use my <a href="https://hover.com/UywpvNe0" target="_blank">Hover link</a> and we'll both get $2 off their domains.
      </td>
    </tr>
  </tbody>
</table>

## Supporters

Become the first.

Consider supporting the project on Patreon:

<a target="_blank" href="https://patreon.com/sigma_file_manager">
  <img
    src="https://raw.githubusercontent.com/aleksey-hoffman/sigma-file-manager/main/.github/media/patreon_button.png"
    width="164px"
  />
</a>
<br>
<a target="_blank" href="https://github.com/aleksey-hoffman/sigma-file-manager/wiki/Support-and-rewards">
  See other methods
</a>

The funding will be used for funding the development of this and my other big projects. I'm also working in collaboration with a few universities on a project that will help scientists speed up development of new medications and treatments for diseases, reducing the time need to find a new medication from 10 years (current average) to just a few months, and hopefully help humanity get rid of diseases (the project will be open-sourced later);

## Download & install

<p>
 <a href="https://github.com/wstaery/sigma-file-manager-wstaery/releases"><img src="https://img.shields.io/github/downloads/wstaery/sigma-file-manager-wstaery/total?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1kb3dubG9hZC1pY29uIGx1Y2lkZS1kb3dubG9hZCI+PHBhdGggZD0iTTEyIDE1VjMiLz48cGF0aCBkPSJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCIvPjxwYXRoIGQ9Im03IDEwIDUgNSA1LTUiLz48L3N2Zz4=&color=%2370b59d"></a>
 <a href="https://github.com/wstaery/sigma-file-manager-wstaery/releases/latest"><img src="https://img.shields.io/github/v/release/wstaery/sigma-file-manager-wstaery?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1yb2NrZXQtaWNvbiBsdWNpZGUtcm9ja2V0Ij48cGF0aCBkPSJNMTIgMTV2NXMzLjAzLS41NSA0LTJjMS4wOC0xLjYyIDAtNSAwLTUiLz48cGF0aCBkPSJNNC41IDE2LjVjLTEuNSAxLjI2LTIgNS0yIDVzMy43NC0uNSA1LTJjLjcxLS44NC43LTIuMTMtLjA5LTIuOTFhMi4xOCAyLjE4IDAgMCAwLTIuOTEtLjA5Ii8%2BPHBhdGggZD0iTTkgMTJhMjIgMjIgMCAwIDEgMi0zLjk1QTEyLjg4IDEyLjg4IDAgMCAxIDIyIDJjMCAyLjcyLS43OCA3LjUtNiAxMWEyMi40IDIyLjQgMCAwIDEtNCAyeiIvPjxwYXRoIGQ9Ik05IDEySDRzLjU1LTMuMDMgMi00YzEuNjItMS4wOCA1IC4wNSA1IC4wNSIvPjwvc3ZnPg%3D%3D&label=release&color=%23a6abe3"></a>
</p>

#### ⚡ Requirements:

**OS:** 64-bit: Windows, Linux, MacOS is supported but builds are not provided;

[All releases & changelog](https://github.com/wstaery/sigma-file-manager-wstaery/releases)


<table>
  <thead>
    <tr>
      <th>Platform</th>
      <th>Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows | Unsigned installable (might see antivirus errors)</td>
      <td>
        <a target="_blank" href="https://github.com/wstaery/sigma-file-manager-wstaery/releases/latest">
          Installable (.exe)
        </a>
      </td>
    </tr>
    <tr>
      <td>Linux | Portable (experimental)</td>
      <td>
        <a target="_blank" href="https://github.com/wstaery/sigma-file-manager-wstaery/releases/latest">
          Portable (.AppImage)
        </a>
      </td>
    </tr>
    <tr>
      <td>Linux | Flatpak</td>
      <td>
        <a target="_blank" href="https://github.com/wstaery/sigma-file-manager-wstaery/releases/latest">
          Installable (.flatpak)
        </a>
        <br>
        <code>flatpak install ./Sigma-File-Manager-*-linux.flatpak</code>
      </td>
    </tr>
    <tr>
      <td>If there's no compiled binary for your MacOS, Linux distro, you can build the app from the source code yourself
      </td>
      <td>
        <a target="_blank" href="https://github.com/wstaery/sigma-file-manager-wstaery/blob/main/CONTRIBUTING.md">
          See this guide
        </a>
      </td>
    </tr>
    <tr>
      <td>Linux utility for integrating AppImages into the system (launcher, dock)</td>
      <td>
        <a target="_blank" href="https://github.com/TheAssassin/AppImageLauncher">
          AppImageLauncher
        </a>
      </td>
    </tr>
  </tbody>
</table>

> Note: the upstream channels (winget, Microsoft Store, Snap) distribute the original author's builds. Get this fork's builds from this repository's [Releases](https://github.com/wstaery/sigma-file-manager-wstaery/releases) page.

## For developers

If you'd like to contribute your skills to improve this project, follow this guide: [CONTRIBUTING.md](./CONTRIBUTING.md)
