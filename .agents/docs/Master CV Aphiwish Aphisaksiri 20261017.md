**Aphiwish Aphisaksiri** | Software Engineer

[Aphiwish.com](http://Aphiwish.com) | [aphiwish.aph@gmail.com](mailto:aphiwish.aph@gmail.com) | [github.com/Aphiwish-Aphisaksiri](http://github.com/Aphiwish-Aphisaksiri) | [linkedin.com/in/aphiwish-aphisaksiri](http://linkedin.com/in/aphiwish-aphisaksiri) | \+66 814240959 | Bangkok,Thailand

---

**Professional Summary**

Software Engineer specializing in agentic AI systems, from production backend services to full-stack platforms. At Omise, built a **Go microservice for KYC automation** and integrated three AI agents into a legacy Rails platform; independently architected **ProjectHub**, a full-stack agentic RAG platform with dual-path tool-calling over locally-hosted LLMs. Uses a self-built agent-workflow methodology to keep AI-assisted development disciplined, cutting rework without slowing delivery.  
---

**Skills**  
**Languages & Frameworks:** TypeScript, JavaScript, Python, Go, Rails, SQL, Next.js, React, Node.js, FastAPI  
**Data & AI:** PostgreSQL, MongoDB, pgvector, ChromaDB, RAG Pipelines, Ollama, Vector Embeddings, Local LLM  
**DevOps & Tools:** Git, Docker, CI/CD, REST APIs, WebSocket, Vitest, pytest, Postman, Jira, Confluence  
---

**Experiences**  
**Software Engineer Contractor \- AI & Platform Engineering**  
*Omise | May 2026 – Current | Golang, Ruby on Rails, GitOps, PII Filtering, Microservices Architecture, CI/CD (SonarQube), REST APIs*

Building **AI-powered automation for merchant risk assessment**, spanning backend microservices, legacy platform integration, and cross-functional delivery with Legal, Product, and Compliance teams.

* Contributing to Omise's **Re-KYC automation initiative**, building AI-assisted tooling to modernize a fully manual merchant document review and risk-assessment process, collaborating cross-functionally with Legal, KYC Operations, and Product through biweekly steering meetings.  
* Designed and built a **Summary Agent microservice** in **Go** within our backend KYC platform, including a **custom PII-filtering** layer that strips sensitive merchant data before it reaches the LLM — reducing attack surface and supporting compliance requirements.  
* Owned the **Summary Agent end-to-end**: requirements gathering, service/handler/repository/model architecture, database migrations, and **table-driven test coverage**, through production deployment via GitOps across a full CI/CD pipeline (automated testing, SonarQube, GitHub Copilot review, peer review, GolangCI-Lint).  
* Integrated three **AI agents** (OCR extraction, website verification, and summary generation) into Omise's legacy **Ruby on Rails** admin platform by building new frontend views, controllers, and API clients — enabling document validation and merchant risk assessment directly within analysts' existing workflow.  
* Demoed the end-to-end KYC agent integration to the Product Manager, KYC team, and Engineering Director. Gain hands-on experience with **GitOps deployment**, infrastructure-as-code, and cross-repository release coordination.

**Software Engineer in Test intern**  
*LINE MAN Wongnai | May 2024 – July 2024 | JavaScript, MongoDB, Postman, API Testing, QA Automation, Jira, Confluence*

Worked as a Software Engineer in Test Intern in the LINE MAN Wongnai Junior 2024 program, performing **quality assurance for new features** on the LINE MAN food delivery platform across the full software delivery pipeline.

* Designed and executed comprehensive **test plans** for a promotional banner feature, a post-order monetization flow offering a discounted coupon package, covering the full happy path and edge cases: UI validation against Figma specs, **payment gateway flow** (**K-Bank Mock API integration**), coupon issuance and redemption, and 15-minute session timeout behavior  
* Developed **automated API tests** in **JavaScript using Postman** to validate feature requests, data flow, and response integrity across frontend-backend boundaries, integrating test status reports with development documentation in Confluence  
* Performed **manual database validation** and integrity checks by querying the company's **MongoDB** database to verify data consistency after feature execution  
* Participated in the **CI/CD delivery pipeline** by logging verified issues with build versions into the deployment queue and coordinating approvals using **Jira and Confluence**

---

**Projects**  
**ProjectHub — Full-Stack Project Management App with Integrated AI Chatbot |** [GitHub](http://github.com/Aphiwish-Aphisaksiri/ProjectHub)  
*Nov 2025 – Mar 2026 | Next.js, FastAPI, Docker, Ollama, pgvector, SSE Streaming, Cloudflare Architecture*

ProjectHub is an AI-native project management platform built to move beyond static task tracking. I architected this system to explore the synergy between Autonomous Agentic Workflows and Hybrid Web Architectures.

* Built an end-to-end AI chat assistant backed by locally-hosted LLMs via Ollama (Gemma 4, **185 tok/s** on RTX 5070), implementing a dual-path architecture: an agentic tool-calling loop (up to 5 iterations, 10 tools covering semantic search, structured queries, and full CRUD) for capable models, with automatic RAG fallback (pgvector cosine similarity, nomic-embed-text 768-dim) for non-tool-capable models.  
* Engineered a custom frame-delimited SSE streaming protocol multiplexing thinking tokens, tool call indicators, notices, and telemetry over a single stream — with thinking mode exposing real-time model reasoning for **Gemma 4** \+ with graceful fallback.  
* Implemented runtime multi-model switching with dynamic capability detection, automatic path selection between **agentic/RAG/plain generation**, and a blocklist for known model incompatibilities.  
* Built a full-stack project management platform (**Next.js 16, React 19, TypeScript, Tailwind CSS 4**) with CRUD for projects, tasks, and notes — featuring a drag-and-drop Kanban board (dnd-kit), markdown notes (react-markdown \+ GFM), and NextAuth v4 authentication (bcrypt, JWT) with server-side identity guards via Prisma 7 ORM over PostgreSQL 18\.  
* Architected a secure production infrastructure by containerizing the full stack (4 services via Docker Compose) and deploying it through **Cloudflare** for DNS orchestration and SSL/TLS termination, exposing the platform via a custom subdomain (projecthub.aphiwish.com) with edge security and DDoS protection.  
* Wrote frontend and backend tests (**Vitest \+ pytest-asyncio**) with GitHub Actions CI running automatically on every push, and instrumented a ChatLog table capturing per-request **ML telemetry** (tokens, latency, similarity scores) for LLM observability.

**Agent-Workflow — Agentic Development Framework** | [GitHub](https://github.com/Aphiwish-Aphisaksiri/agent-workflow)  
*May 2026 – Present | Agentic Workflows, LLM Orchestration, Process Engineering*

A platform-agnostic AI agent workflow system designed to enforce structured software development phases, significantly reducing LLM hallucinations and accelerating development iteration cycles.

* Engineered a universal, **phase-driven AI workflow** system supporting major LLM coding platforms (GitHub Copilot, Cursor, Claude Code, Codex) to standardize and optimize human-AI collaboration in software engineering.  
* Minimized LLM hallucinations and subsequent debugging time by **segmenting AI execution into strict, specialized phases** (Plan, Refine, Implement, Fix, Meta); effectively preventing agents from making undocumented architectural decisions or drifting from the original scope.  
* Accelerated development iteration speed compared to ad-hoc AI pair programming by **decoupling planning and refinement** **from codebase execution**, enabling AI agents to write code more autonomously on pre-approved, deterministic feature blueprints.  
* Designed a highly customizable **context architecture** that dynamically injects project-specific rules, tech stack constraints, and UI guidelines into agent prompts.  
* Established a **transparent decision documentation** system that automatically tracks planning resolutions, open questions, and architectural choices in centralized, markdown-based progress trackers, preserving vital historical context for complex codebases.

**Cloud-Native Portfolio Platform** | [aphiwish.com](http://aphiwish.com) | [GitHub](https://github.com/Aphiwish-Aphisaksiri/Portfolio)  
*Apr 2026 | Next.js, TypeScript, Vercel, Cloudflare, Zod, React Three Fiber*

* Architected an automated **GitOps deployment pipeline** using **Vercel**, establishing PR preview environments and zero-downtime production builds for seamless continuous integration.  
* Proxied global traffic through **Cloudflare** to a custom domain (**aphiwish.com**), leveraging edge computing for optimized caching, strict SSL validation, and DDoS protection.  
* Built a secure serverless contact API using **Next.js Route Handlers** and the **Resend API**, implementing **Zod** schema validation and a custom IP-based rate limiter to mitigate spam.  
* Developed a high-performance interactive 3D frontend utilizing React Three Fiber and Tailwind CSS v4, achieving perfect **100/100 Lighthouse scores for Performance and SEO**.  
* Maintained strict professional engineering workflows utilizing **GitHub Issues and PR-based** version control for systematic feature tracking and code review.

**Brain Organoid Data Acquisition System (BOAS) \- Capstone Project** | [GitHub](https://github.com/Aphiwish-Aphisaksiri/BrainOrganoidDataAcquisitionSystem)  
*Aug 2024 \- Apr 2025 | Python, Object Oriented Programming, Multithreading*

Architected and delivered a **real-time multi-threaded desktop application** for electrophysiological signal acquisition, processing, visualization, and recording from brain organoid experiments interfacing with custom ADC hardware. Developed as the capstone for my B.Eng. in Biomedical Engineering (GPAX 3.99, First Class Honors).

* Designed an **abstract base thread framework** as a reusable design pattern enforcing deterministic frequency control and clean lifecycle management (start, stop, frequency) across every system component — each functional layer (DAQ, filter, recorder, each UI panel) runs as an independent thread  
* Engineered a pointer-based circular buffer replacing an array-shifting FIFO implementation, achieving O(1) writes for **low-latency inter-thread data flow** between the DAQ producer and multiple consumers using NumPy arrays — directly iterated from architecture patterns developed during CYBATHLON 2024  
* Diagnosed and resolved a system-level data loss issue caused by MCU throughput limits (BlueNRG-LP) — determined 4 channels at 8,000 Hz/24-bit as the hardware ceiling through systematic testing, evaluated a dual-MCU approach but identified **CPU saturation from concurrent 1.25 Mbaud serial ports** as a new bottleneck, and documented constraints to inform the final hardware configuration  
* Applied real-time **digital signal processing** — Butterworth bandpass filter (0.25–1,500 Hz), 50 Hz IIR notch filter for powerline suppression — with runtime-adjustable parameters via the UI and filter coefficients serialized to JSON for reproducibility  
* Built a multi-panel real-time GUI in DearPyGUI rendering 4 simultaneous live signal channels with oscilloscope-style sweep mode, per-channel auto-scaling, and unit toggle (raw/µV)  
* Delivered a production-ready standalone executable via **PyInstaller \+ PyArmor** with an automated obfuscation and packaging pipeline, and implemented data recording (HDF5 streaming \+ MATLAB export) for compatibility with neuroscience analysis workflows

**Brain Knob — BCI System for CYBATHLON 2024**  
*Aug 2022 \- Nov 2024 | Python, Scikit-Learn, Digital Signal Processing (EEG), TCP / MQTT Sockets, Real-time State Machines, DearPyGUI*

Developed and deployed Brain Knob, a complete real-time **Brain-Computer Interface** **system** representing Mahidol University at the international CYBATHLON 2024 competition in Switzerland. The system enabled a pilot with tetraplegia to control virtual avatars (wheelchair, robotic arm, screen cursor) using only imagined motor movements decoded from EEG signals.

* Collected and cleaned raw **16-channel EEG data** from a medical-grade g.tec cap (512 Hz) — removing powerline noise, muscle movement, and eye-blink artifacts — and trained per-class binary LDA classifiers via Scikit-Learn outputting predict\_proba confidence scores across 4 motor-imagery commands (Left/Right/Foot/Action).  
* Implemented a **cumulative voting mechanism** using 0.2s prediction windows, requiring 3 consecutive matching predictions before issuing a command and resetting on any mismatch — significantly reducing false triggers from signal noise during competition  
* Implemented a cascade state machine driving seamless mode transitions between three device types based on game server events, with hot-swappable ML model files changeable at runtime without restart.  
* Built the full communication layer — a DearPyGUI real-time dashboard (EEG plotter, class probability bars, joystick visualizer), a custom **TCP binary socket** to the Cybathlon game server with heartbeat and auto-reconnect, and **MQTT over WebSocket** broadcasting live HUD status to a web frontend.  
* Built a real-time pilot feedback display providing live command confirmation during training, optimization, and competition sessions.

**Real-time inventory AI and Object detection using YOLOv11** | [GitHub](https://github.com/Aphiwish-Aphisaksiri/DishSoapDetection)  
*Aug 2024 \- Dec 2024 | Computer Vision, PyTorch, OpenCV, Hyperparameter tuning, Dataset Curation*

Developed a real-time object detection system by **fine-tuning YOLOv11n** as a proof-of-concept for inventory and medical supply-chain applications, as the final project for EGBI443 Image Processing. The system targets a challenging real-world scenario — 25 classes of visually similar dish soap bottles on supermarket shelves, simulating the difficulty of identifying varied medical supplies with similar shape, size, and color in clustered arrangements.

* Sourced and prepared a **1,256-image dataset** from **Roboflow** (25 classes, 640×640, auto-orientation, 70/20/10 train/val/test split) representing supermarket shelf arrangements under varied lighting and occlusion conditions  
* Conducted systematic hyperparameter experiments across multiple training runs (SGD vs Adam, batch sizes 16/32, learning rates 0.01/0.001, weight decay, momentum) — selecting **Adam with lr=0.001 as the optimal configuration**  
* Achieved best-checkpoint mAP50 of 0.792 and mAP50-95 of 0.715 at epoch 75/100, with precision 0.747 and recall 0.777 on the validation set  
* Deployed the trained model to a Python real-time inference application (**Ultralytics \+ OpenCV** \+ webcam) performing live object detection with bounding boxes and confidence scores at inference speed suitable for real-time inventory scanning

---

**Education**  
Mahidol University | Bachelor of Engineering in Biomedical Engineering | GPA: 3.99/4.00 (First Class Honors) | 2021- 2025  
Additional: English – IELTS Academic 8.0 | Academic Excellence Medal \- EIT | Merit Scholarship (Faculty of Engineering) 