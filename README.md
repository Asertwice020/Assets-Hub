# 📦 Assets-Hub
A centralized repository for hosting static project assets (e.g., configuration JSON files, logos, color tokens, theme files, metadata) that are delivered over the web via a CDN such as [jsDelivr](https://www.jsdelivr.com/). This enables fast, versioned, and organized access to public static files for frontend and backend applications.

---

## 🧠 Why This Repo Exists
Modern web applications often rely on static configuration or branding assets—like logos, theme colors, environment-specific settings, or company profiles—that don't change frequently but are still required by many parts of a system.

This repository provides:
- 📁 A clean folder-based structure per project
- 🌐 Free CDN access through GitHub and jsDelivr
- 🔖 Version tagging to lock static data per release
- ⚡️ High availability and global delivery

---

## 📂 Project Structure:
Each **top-level folder** in the repo represents a single project, microservice, or feature scope.

```
Assets-Hub
└── Project-1
    ├── assets
    │   ├── icons
    │   └── images
    ├── theme.json
    └── config.json
````

---

### ✅ With Version Tagging
It’s highly recommended to use **version tags** to prevent breaking changes when the main branch updates.

```bash
https://cdn.jsdelivr.net/gh/<your-github-username>/cdn-project-assets@v1.0.0/my-web-app/config.json
```

### ❌ Without Version (Not Recommended)

```bash
https://cdn.jsdelivr.net/gh/<your-github-username>/cdn-project-assets/my-web-app/config.json
```

---

## 🔖 Versioning with Git Tags

To create a versioned release:

```bash
git tag v1.0.0
git push origin v1.0.0
```

To rename or delete a tag:

```bash
git tag -d v1.0.0
git push origin :refs/tags/v1.0.0
git tag v1.0.1
git push origin v1.0.1
```

---

**Best Practices:**
* Use [Semantic Versioning](https://semver.org/)
* Never mutate files under a published tag

## 🛠 Use Cases
* Serve branding kits across apps
* Maintain shared config for multiple environments
* Load theme files dynamically
* Cache global constants or feature flags
* Deliver SVGs or assets to external platforms

---

## ⚠️ Notes
* Do **not** store sensitive data like tokens, passwords, or keys.
* All files are public and served globally without authentication.
* Versioning is critical—avoid breaking changes without new tags.
