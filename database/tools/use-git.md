# 如何使用 git

## 常用 GIT 命令

### clone

克隆远程版本库到本地

```sh
// 克隆版本库到当前文件夹的子文件夹中
// 子文件夹默认命名为版本库的名称
git clone https://github.com/xwtec/how-to.git
```

### init

在当前文件夹初始化本地 git 环境

```sh
git init
```

### fetch

拉取远程版本库的最新内容

```sh
// 拉取远程版本库origin的master分支到本地
git fetch origin master
```

### pull

拉取远程版本库的最新内容，并进行合并

```sh
git pull

// 约等于以下操作
//从远程主机的master分支拉取最新内容
git fetch origin master
//将拉取下来的最新内容合并到当前所在的分支中
git merge FETCH_HEAD
```

### add

把本地文件改动增加到状态中

```sh
// 把新增、改动文件增加到状态中
git add .
// 把删除、改动文件增加到状态中
git add -u
// 新增、删除、改动增加到状态中
git add --all
```

### commit

提交本地版本

```sh
// 提交改动，要求有提交信息
git commit -m "some message"
// 把本地文件所有变化增加到状态中并提交
git commit -a -m "some message"
```

### push

推送本地已提交的版本库到远程版本库

```sh
// 推送master分支到远程主机
git push origin master
```

### status

显示当前版本库状态

```sh
git status
```

### branch

列举、新建、删除分支

```sh
// 列出本地版本库分支
git branch
// 新建本地分支，命名为anewbranch
git branch anewbranch
// 删除一个本地分支
git branch -d anewbranch
```

### checkout

切换本地分支

```sh
// 切换到anewbranch分支
git checkout anewbranch
```

### merge

合并分支

```sh
// 合并anewbranch分支到当前分支
// 合并操作可能会引起冲突，需要解决
git merge anewbranch
```

## 图形化界面客户端

windows

> TortoiseGit

## git 工作流程

### git-flow 工作流程简介

![git-workflow](https://raw.githubusercontent.com/xwtec/how-to/master/database/img/git-workflow.png "git-workflow")

Vincent Driessen 的分支模型是一个 git 分支和发布管理规范，用来帮助开发人员在大型的软件项目中追踪 features、hotfixes 和 releases。

- 代码库的常设 master 和 develop 分支；
- master 为生产环境，该分支禁止直接进行改动，只能从 release 和 hotfix 进行合并操作；
- develop 为开发环境，负责管理开发记录、功能集成、测试历史；
- 所有的开发和迭代都在临时分支上，完成后删除临时分支；
- 发布和部署时，新建临时发布分支，做发布前的调试修改，最后合并到 master 与 develop，发布完成后删除该分支；
- 生产环境发现 BUG 需紧急修复，在 master 分支上新建修复分支，修复完成后，同时合并到 master 与 develop 两条分支上，删除当前分支；

## 集中式工作流程简介

对于熟悉 SVN 环境工作的开发者，该工作流程不需要适应一个全新流程就可以体验 Git，工作流也可以作为向更 Git 风格工作流迁移的友好过渡。

## forking 工作流程简介

这套流程最大特点就是开发参与者可以不直接参与到项目中来，想贡献代码只要 fork 目标项目后，就可以得到一个一模一样的自有项目，做完修改后，提交 Pull Request 给原项目，如原项目的维护者采纳了，即算贡献完成。
