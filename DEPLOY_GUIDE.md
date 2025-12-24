# GitHub Pages 部署指南

## 一、前期准备

### 1. 注册 GitHub 账号
如果您还没有 GitHub 账号，请先注册：
1. 访问 [GitHub 官网](https://github.com/)
2. 点击 "Sign up" 按钮
3. 按照提示填写用户名、邮箱和密码
4. 完成邮箱验证

### 2. 安装 Git
如果您的电脑上还没有安装 Git，请先安装：
- Windows：下载 [Git for Windows](https://git-scm.com/download/win)
- Mac：通过 Homebrew 安装 `brew install git` 或下载 [安装包](https://git-scm.com/download/mac)
- Linux：使用包管理器安装，如 `sudo apt-get install git` (Ubuntu)

安装完成后，打开命令行工具，输入 `git --version` 验证安装成功。

## 二、创建 GitHub 仓库

1. 登录 GitHub 账号
2. 点击页面右上角的 "+" 图标，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**：可以使用 `yourusername.github.io`（这将创建一个用户/组织站点）或其他名称（这将创建一个项目站点）
   - **Description**：可选，填写仓库描述
   - **Visibility**：选择 "Public"（GitHub Pages 要求仓库必须是公开的）
   - **Initialize this repository with**：可以不勾选任何选项
4. 点击 "Create repository"

## 三、将本地项目推送到 GitHub

1. 打开命令行工具，进入您的项目目录：
   ```bash
   cd c:\Users\34343\Desktop\新建文件夹 (3)
   ```

2. 初始化 Git 仓库：
   ```bash
   git init
   ```

3. 配置 Git 用户名和邮箱：
   ```bash
   git config --global user.name "Your GitHub Username"
   git config --global user.email "your-email@example.com"
   ```

4. 将所有文件添加到暂存区：
   ```bash
   git add .
   ```

5. 提交文件：
   ```bash
   git commit -m "Initial commit"
   ```

6. 将本地仓库与 GitHub 仓库关联：
   ```bash
   git remote add origin https://github.com/yourusername/your-repository-name.git
   ```
   （请替换为您自己的 GitHub 用户名和仓库名称）

7. 推送代码到 GitHub：
   ```bash
   git push -u origin main
   ```
   （如果提示输入 GitHub 账号密码，请输入您的 GitHub 用户名和密码或个人访问令牌）

## 四、启用 GitHub Pages

1. 打开您的 GitHub 仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧导航栏中找到并点击 "Pages"
4. 在 "Source" 部分：
   - **Branch**：选择 "main"（或 "master"，取决于您的默认分支名称）
   - **Folder**：选择 "/ (root)"（因为我们的 index.html 在根目录）
5. 点击 "Save"

## 五、访问您的网站

启用 GitHub Pages 后，您的网站将可以通过以下 URL 访问：
- 如果您的仓库名称是 `yourusername.github.io`：https://yourusername.github.io/
- 如果您的仓库名称是其他名称：https://yourusername.github.io/your-repository-name/

**注意**：GitHub Pages 可能需要几分钟时间来部署您的网站，请耐心等待。

## 六、更新网站内容

如果您需要更新网站内容，只需：
1. 修改本地文件
2. 使用 `git add .`、`git commit -m "Update content"` 和 `git push` 命令将更改推送到 GitHub
3. 几分钟后，更新将自动部署到您的 GitHub Pages 网站

## 七、常见问题

1. **GitHub Pages 没有自动部署**
   - 检查仓库是否为公开仓库
   - 确认是否正确配置了分支和目录
   - 等待几分钟后刷新网站

2. **推送代码时出现认证错误**
   - 确保您的 GitHub 用户名和密码正确
   - 考虑使用个人访问令牌代替密码（推荐）
   - 检查远程仓库 URL 是否正确

3. **网站样式或脚本不加载**
   - 检查 HTML 文件中 CSS 和 JS 文件的引用路径是否正确
   - 确保所有文件都已正确推送到 GitHub

祝您部署成功！如果您在部署过程中遇到任何问题，请随时提问。