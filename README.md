# 🏥 Med Scheduler

Aplicación web desarrollada con **Angular 21** para la gestión de citas médicas.

Este proyecto hace parte de mi portafolio profesional y está siendo construido siguiendo principios de **arquitectura limpia**, **buenas prácticas** y **escalabilidad**, simulando un entorno de desarrollo real.

---

# 🚀 Tecnologías

- Angular 21
- TypeScript
- RxJS
- Angular Router
- Reactive Forms
- SCSS
- Angular Material

---

# 🏛 Arquitectura

El proyecto está organizado utilizando una arquitectura **Feature-Based**, donde cada módulo del negocio es independiente y escalable.

```text
src/app
│
├── core
│   ├── guards
│   ├── interceptors
│   ├── services
│   └── models
│
├── features
│   ├── auth
│   ├── dashboard
│   ├── patients
│   ├── doctors
│   ├── appointments
│   ├── provider
│   ├── purchaser
│   └── cedi
│
├── shared
│
└── app.routes.ts
```

---

# 🔐 Autenticación

La autenticación fue diseñada utilizando:

- JWT
- Route Guards
- Session Management
- BehaviorSubject
- Lazy Loading

Características implementadas:

- Inicio de sesión
- Persistencia de sesión
- Restauración de sesión
- Cierre de sesión
- Protección de rutas

---

# 📂 Funcionalidades

## Sprint 1

- [x] Arquitectura base
- [x] Feature-Based Architecture
- [x] AuthService
- [x] Session Management
- [x] Route Configuration
- [ ] Auth Guard
- [ ] Login
- [ ] Reactive Forms
- [ ] HTTP Interceptor

---

# 📈 Objetivo del proyecto

Más que construir una aplicación funcional, el objetivo es desarrollar un proyecto siguiendo prácticas utilizadas en equipos de desarrollo profesionales:

- Clean Code
- SOLID
- Arquitectura escalable
- Organización por Features
- Lazy Loading
- Buenas prácticas con RxJS
- Componentes Standalone

---

# ⚙️ Instalación

```bash
git clone https://github.com/Carolinavalencia93/med-scheduler.git
```

```bash
cd med-scheduler
```

```bash
npm install
```

```bash
ng serve
```

---

# 📌 Estado del proyecto

🚧 En desarrollo.

Actualmente se encuentra en construcción y continuará creciendo con nuevas funcionalidades.

---

# 👩‍💻 Autora

**Carolina Ñañez Valencia**

Ingeniera Informática

LinkedIn:

https://www.linkedin.com/in/carolina-ñañez-valencia

GitHub:

https://github.com/Carolinavalencia93

