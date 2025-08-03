# mmi-web

This repository follows a structured Git branching strategy for collaborative and stable development across multiple environments.

---

## 🗂️ Branching Strategy

We use the following branches for managing development and deployment:

| Branch       | Purpose                                      | Who Can Merge               |
|--------------|----------------------------------------------|-----------------------------|
| `main`       | Production-ready code (live app)             | Admin / Lead Only           |
| `staging`    | QA-tested code, ready for final validation   | Maintainers Only            |
| `dev`        | Active development and integration branch    | All Developers (via PR)     |
| `feature/*`  | Temporary feature/task branches              | Created by individual devs  |

---

>
>⚠️ Note: This is a private repo on GitHub Free. Branch protection rules (like PRs before merging) are not enforced by GitHub. Team members must follow the branching strategy manually as explaned.
>

## 🧑‍💻 Developer Workflow
> 🚫 **DO NOT push directly to `main`, `staging`, or `dev`**

### 1. Clone the Repo
```
git clone https://github.com/mystrymindinnovations/mmi-web.git
cd mmi-web
``` 

### 2. Checkout the dev Branch
✅ Make sure you're working from the latest development branch.
```
git checkout dev
git pull origin dev
```

### 3. Create a New Feature Branch
✅ Create a feature/task branch from dev.
```
git checkout -b feature/<feature-name>   (Example: feature/login-form, feature/payment-api, bugfix/image-load-issue)
```

### 4. Make Changes and Commit
✅ Add and commit your changes locally.
```
git add .
git commit -m "Add: short meaningful message"
```

### 5. Push Your Feature Branch to GitHub
✅ Push your branch so others can review.
```
git push origin feature/<feature-name>
```

### 6. Open a Pull Request (PR) to dev
✅ Create a PR from your feature/* branch to dev branch on GitHub.
```
 - Go to GitHub → Pull Requests → “New Pull Request”
 - Choose base: `dev`, compare: `feature/<your-feature-name>`
 - Add a meaningful title and description
 - Request reviewer if needed
```


## 🔄 Maintainer Workflow

### 1. Merge dev → staging
✅ When all required features are complete and tested on dev, promote to staging for QA.
> If PR **is not required on `staging`**, maintainers can do this using Git:
```
git checkout staging
git pull origin staging
git merge dev
git push origin staging
```
> Otherwise, create a Pull Request: dev → staging via GitHub UI.

### 2. Merge staging → main (Needs PR)
✅ When testing is successful on staging and ready for release, promote to production.
> ⚠️ `main` is a protected branch. You **must create a Pull Request** from `staging → main`.
```
Steps:
1. Go to GitHub → Pull Requests → “New Pull Request”
2. Base: `main`, Compare: `staging`
3. Add release notes if needed
4. Request review (admin/lead)
5. Merge after approval
```

> 🔁 If `main` is not protected (not recommended for production), you may directly merge using the following commands:
```
git checkout main
git pull origin main
git merge staging
git push origin main
```