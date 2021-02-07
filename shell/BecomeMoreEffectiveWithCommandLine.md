# Command line, a neglected tool which you should master

![image](./.assets/ghost_in_the_shell_hacker.gif)

## Why should you care?

## How to become more effective with command line

In this paragraph I’d like to show you a few utilities and concepts that may make your life easier.
This isn’t meant to be a complete introduction to these tools but rather an aggregation of things
that you may want to try and see on your own if that floats your boat. Keep in mind that this is a
very subjective list and something that works for me might not be the best choice for you.

### Improve your experience

#### Change your shell

![image](./.assets/youve_been_using_bash.jpg)

When you first open your terminal application you’ll most likely see a _boring_ prompt and your
shell will most likely be [bash](<https://en.wikipedia.org/wiki/Bash_(Unix_shell)>). (If you’re
using
[MacOs Catalina or later your default shell will be ZSH](https://www.theverge.com/2019/6/4/18651872/apple-macos-catalina-zsh-bash-shell-replacement-features).)
Bash is great and you certainly should make an effort to learn how to make a good use of it. It is
the most popular shell which means that if you ever ssh into some remote server, chances are you’ll
be welcomed by bash.

However, I think that you can benefit much more from using alternative shells. There are a few
alternatives available such as zsh, fish, ksh, etc. Today I’d like to focus on zsh because that’s
the one I’m using. There’s a number of features that make zsh great such as recursive path
expansion, spell checker, and much customisation. For me the greatest part is the zsh community
around the Oh-My-Zsh project: https://github.com/ohmyzsh/ohmyzsh.

I encourage you to setup oh-my-zsh on your machine. It offers a broad selection of
[themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes). Not only are they aesthetically appealing,
they often provide you with much more information than just your working directory path. For
instance, if you are a git user, you can pick a theme which will prompt you your current branch, if
you have some unstated changes, etc.

!image with example command line prompt

Another powerful feature of oh-my-zsh are **plugins**. To add a plugin you simply have to enable it
in your `~/.zshrc`. Whatever technology you’re using you’ll find something appropriate. See the full
list at: https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins. Some technology/language unrelated plugins
that I’d like to recommend are: `zsh-autosuggestions` - History based autosuggestions. See:
https://github.com/zsh-users/zsh-autosuggestions `z` - Allowed you to quickly jump to recently
visited directories, `colored-man-pages` - Make your man-pages more readable with the use of
colours, `fzf`

#### Finding things with no effort

Speaking of [fzf](https://github.com/junegunn/fzf)! For me **fzf** must be the most often used
command line utility. It makes searching for files, history entries, hosts, and processes so much
easier.

### Do more than one thing at a time – terminal multiplexing

![image](./.assets/saragossa.jpg)
