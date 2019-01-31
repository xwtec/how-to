# 如何使用 git

## 常用GIT命令

克隆远程版本库到本地
```
// 克隆版本库到当前文件夹的子文件夹中 
// 子文件夹默认命名为版本库的名称
git clone https://github.com/xwtec/how-to.git
```

在当前文件夹初始化本地git环境
```
git init
```

拉取远程版本库的最新内容
```
git fetch

// 拉取远程版本库origin的master分支到本地
git fetch origin master
```

拉取远程版本库的最新内容，并进行合并
```
git pull

// 约等于以下操作
git fetch origin master //从远程主机的master分支拉取最新内容 
git merge FETCH_HEAD    //将拉取下来的最新内容合并到当前所在的分支中
```

把本地文件改动增加到状态中
```
git add

// 把新增、改动文件增加到状态中
git add .
// 把删除、改动文件增加到状态中
git add -u
// 新增、删除、改动增加到状态中
git add --all
```

提交本地版本
```
git commit

// 提交改动，要求有提交信息
git commit -m "some message"
// 把本地文件所有变化增加到状态中并提交
git commit -a -m "some message"
```

本地版本推送到远程版本库
```
git push

// 推送master分支到远程主机
git push origin master
```

显示当前版本库状态
```
git status
```

分支操作
```
// 列出本地版本库分支
git branch
// 新建本地分支，命名为anewbranch
git branch anewbranch
// 删除一个本地分支
git branch -d anewbranch
// 切换本地分支
git checkout anewbranch
```

## 图形化界面客户端
windows
> TortoiseGit 