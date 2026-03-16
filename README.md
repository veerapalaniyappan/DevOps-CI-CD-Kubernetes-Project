# 🚀 DevOps CI/CD Kubernetes Project

## 📌 Project Overview

This project demonstrates an **end-to-end DevOps CI/CD pipeline** for deploying a containerized Node.js application into Kubernetes using modern DevOps tools and practices.

The pipeline automates:

* Docker image build and versioning
* Container image push to DockerHub
* Kubernetes deployment updates
* Rolling updates with zero downtime
* Horizontal scaling
* Self-healing demonstration

---

## 🧰 Tech Stack

* **Node.js** – Sample web application
* **Docker** – Containerization
* **DockerHub** – Container registry
* **Kubernetes** – Container orchestration
* **GitHub Actions** – CI/CD automation
* **Git** – Version control

---

## 🏗️ Project Architecture

```
Developer → GitHub Push → GitHub Actions CI
          → Docker Build → DockerHub Push
          → Update Deployment Manifest → Kubernetes Rolling Update
```

---

## 📂 Repository Structure

```
k8s-cicd-rolling-update
│
├── app/
│   ├── app.js
│   ├── package.json
│
├── docker/
│   └── Dockerfile
│
├── kubernetes/
│   ├── deployment.yaml
│   ├── service.yaml
│
└── .github/
    └── workflows/
        └── cicd.yml
```

---

## ⚙️ CI/CD Pipeline Flow

1️⃣ Developer commits code changes
2️⃣ GitHub Actions pipeline triggers automatically
3️⃣ Docker image built with commit SHA tag
4️⃣ Image pushed to DockerHub registry
5️⃣ Deployment manifest updated with new image tag
6️⃣ Kubernetes performs rolling update

---

## ☸️ Kubernetes Features Demonstrated

### ✅ Rolling Update

Application updated to new container version without downtime.

### ✅ Horizontal Scaling

Replica count increased dynamically to handle load.

### ✅ Self-Healing

Failed or deleted pods automatically recreated by Kubernetes.

---

## 🔐 Secrets Management

Sensitive credentials such as DockerHub access tokens are stored securely using **GitHub Repository Secrets**.

---

## 📈 Learning Outcomes

* Understanding CI/CD lifecycle
* Kubernetes deployment strategies
* Infrastructure as Code practices
* Container version management
* GitHub Actions automation

---

## 🚀 Future Enhancements

* Helm chart deployment
* Terraform infrastructure provisioning
* Multi-environment pipeline (Dev / QA / Prod)
* Cloud Kubernetes deployment (EKS / AKS / GKE)

---

## 👨‍💻 Author

**Veerasekaran Palani**
DevOps / Cloud Enthusiast
