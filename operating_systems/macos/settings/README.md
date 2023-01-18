<link rel="stylesheet" type="text/css" href="/css/header.css">
<link rel="stylesheet" type="text/css" href="/css/bootstrap/5.3.0-alpha1/bootstrap.css">
<div class="sticky-top bg-white pt-1 pb-2" id="header-div-max"></div>
<details id="display-none"><summary></summary>
  <script src="/js/header.js" defer="defer"></script>
  <script src="/js/table/numbering.js" defer="defer"></script>
  <script src="/js/bootstrap/5.3.0-alpha1/bootstrap.bundle.js" defer="defer"></script>
</details>

# Maxos 설정 관리

## 설명

MacOS 를 세팅하는 방법을 알아봅니다.

## 최초 가장 간단한 프로그램 구성

프로그램 구성은 명령어 command 명령어 단위로 수행되는 경우가 많음으로 `code` 형태로 작성합니다.

```bash
# Homebrew installation
1. access: https://brew.sh/index_ko
2. copy: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
3. run: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Homebrew GUI module installation
brew install cask

# activate Home, End buttons in general (refs: https://gist.github.com/trusktr/1e5e516df4e8032cbc3d)
mkdir ~/Library/KeyBindings
vi ~/Library/KeyBindings/DefaultKeyBinding.dict
#---------- ~/Library/KeyBindings/DefaultKeyBinding.dict
/* ~/Library/KeyBindings/DefaultKeyBinding.Dict

This file remaps the key bindings of a single user on Mac OS X 10.5 to more
closely match default behavior on Windows systems. This makes the Command key
behave like Windows Control key. To use Control instead of Command, either swap
Control and Command in Apple->System Preferences->Keyboard->Modifier Keys...
or replace @ with ^ in this file.

Here is a rough cheatsheet for syntax.
Key Modifiers
^ : Ctrl
$ : Shift
~ : Option (Alt)
@ : Command (Apple)
# : Numeric Keypad

Non-Printable Key Codes

Standard
Up Arrow:     \UF700        Backspace:    \U0008        F1:           \UF704
Down Arrow:   \UF701        Tab:          \U0009        F2:           \UF705
Left Arrow:   \UF702        Escape:       \U001B        F3:           \UF706
Right Arrow:  \UF703        Enter:        \U000A        ...
Insert:       \UF727        Page Up:      \UF72C
Delete:       \UF728        Page Down:    \UF72D
Home:         \UF729        Print Screen: \UF72E
End:          \UF72B        Scroll Lock:  \UF72F
Break:        \UF732        Pause:        \UF730
SysReq:       \UF731        Menu:         \UF735
Help:         \UF746

OS X
delete:       \U007F

For a good reference see http://osxnotes.net/keybindings.html.

NOTE: typically the Windows 'Insert' key is mapped to what Macs call 'Help'.
Regular Mac keyboards do not even have the Insert key, but provide 'Fn' instead,
which is completely different.
*/
{
        "\UF729"   = "moveToBeginningOfLine:";                       /* Home         */
        "$\UF729"  = "moveToBeginningOfLineAndModifySelection:";     /* Shift + Home */
        "\UF72B"   = "moveToEndOfLine:";                             /* End          */
        "$\UF72B"  = "moveToEndOfLineAndModifySelection:";           /* Shift + End  */
        "$\UF727"  = "paste:";                                       /* Shift + Ins */
        "@\UF727"  = "copy:";                                        /* Cmd  + Ins  */
}
#----------


# activate Home, End buttons in shell
vi ~/.zshrc
#---------- ~/.zshrc
bindkey '\e[H'    beginning-of-line
bindkey '\e[F'    end-of-line
#----------

# (Optional) vactivate Home, End buttons in vim
~/.vimrc
#---------- ~/.vimrc
map  <C-A> <Home>
imap <C-A> <Home>
vmap <C-A> <Home>
map  <C-E> <End>
imap <C-E> <End>
vmap <C-E> <End>
#----------

# iterm installation
brew update
brew search iterm
brew install iterm2 --cask
brew list --cask

# iterm set colors
vi ~/.zshrc
#---------- ~/.zshrc
# Text {% raw %} {% endraw %} to resolve liquid syntax error in generating github page by Jekyll.
# To use this line, remove '{% raw %}' the beginning of line and '{% endraw %}' the end of line.
PS1="{% raw %}%{%F{033}%}%n%{%f%}@%{%F{green}%}%m:%{%F{yellow}%}%~%{$%f%}%{% endraw %}  "
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad
#----------

# minimum dev tools isntallation
brew install git
brew install sourcetree --cask
brew search visualstudiocode
brew install visual-studio-code --cask
```
