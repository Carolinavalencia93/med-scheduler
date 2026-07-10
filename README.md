# 🏥 Med Scheduler

Aplicación web desarrollada con **Angular 21** para la gestión de citas médicas.

Este proyecto hace parte de mi portafolio profesional y está siendo construido siguiendo principios de **Clean Code**, **SOLID**, **Feature-Based Architecture** y **Componentes Standalone**, simulando el desarrollo de una aplicación empresarial desde cero.

> 🚧 Proyecto en desarrollo.

---

# 📸 Vista previa

> Próximamente se agregarán capturas de pantalla del Login, Dashboard y los diferentes módulos de la aplicación.

---

# 🚀 Tecnologías

- Angular 21
- TypeScript
- RxJS
- Angular Router
- Reactive Forms
- Angular Material
- SCSS
- HTML5
- CSS Grid
- Flexbox

---

# 🏛 Arquitectura

El proyecto utiliza una arquitectura **Feature-Based**, donde cada módulo del negocio es independiente y escalable.

```text
src/app
│
├── core
│   ├── guards
│   ├── interceptors
│   ├── models
│   └── services
│
├── features
│   ├── auth
│   ├── dashboard
│   ├── doctors
│   ├── patients
│   ├── appointments
│   ├── provider
│   ├── purchaser
│   └── cedi
│
├── layouts
│   ├── auth-layout
│   └── main-layout
│
├── shared
│
└── app.routes.ts
```

---

# 🧠 Principios aplicados

Durante el desarrollo se están aplicando buenas prácticas como:

- Clean Code
- SOLID
- Componentes Standalone
- Feature-Based Architecture
- Lazy Loading
- Session Management
- Reactive Programming con RxJS
- Separación de responsabilidades
- Componentes reutilizables
- Diseño escalable

---

# 🔐 Autenticación

La autenticación fue diseñada utilizando:

- JWT
- Session Management
- BehaviorSubject
- Route Guards
- Lazy Loading

Actualmente incluye:

- ✅ Inicio de sesión
- ✅ Persistencia de sesión
- ✅ Restauración de sesión
- ✅ Cierre de sesión
- ✅ Protección de rutas
- 🚧 HTTP Interceptor (Próximamente)

---

# 📂 Funcionalidades

## ✅ Infraestructura

- [x] Arquitectura Base
- [x] Feature-Based Architecture
- [x] Standalone Components
- [x] Lazy Loading
- [x] Route Configuration
- [x] Main Layout
- [x] Auth Layout

---

## 🔐 Autenticación

- [x] AuthService
- [x] Login
- [x] Session Management
- [x] Auth Guard
- [x] No Auth Guard
- [x] Reactive Forms
- [x] Validaciones
- [ ] HTTP Interceptor

---

## 🎨 Interfaz de Usuario

- [x] Login
- [x] Navbar
- [x] Sidebar
- [x] Dashboard
- [ ] Responsive Layout
- [ ] Shared Components

---

## 🏥 Módulos del sistema

- [x] Dashboard
- [ ] Doctors
- [ ] Patients
- [ ] Appointments
- [ ] Providers
- [ ] Purchasers
- [ ] CEDI

---

# 🛣 Roadmap

## Sprint 1

- ✅ Arquitectura
- ✅ Autenticación
- ✅ Layout principal
- ✅ Dashboard inicial

## Sprint 2

- ⏳ Gestión de Médicos

## Sprint 3

- ⏳ Gestión de Pacientes

## Sprint 4

- ⏳ Gestión de Citas

## Sprint 5

- ⏳ Interceptor HTTP
- ⏳ Manejo global de errores
- ⏳ Componentes reutilizables
- ⏳ Responsive Design

---

# 🏗 Flujo de la aplicación

```text
Login
    │
    ▼
Auth Guard
    │
    ▼
Main Layout
    │
 ┌──┴───────────────┐
 │                  │
 ▼                  ▼
Sidebar         Navbar
 │                  │
 └────────┬─────────┘
          ▼
      Dashboard
          │
          ▼
       Features
```

---

# ⚙️ Instalación

Clonar el repositorio

```bash
git clone https://github.com/Carolinavalencia93/med-scheduler.git
```

Ingresar al proyecto

```bash
cd med-scheduler
```

Instalar dependencias

```bash
npm install
```

Ejecutar el proyecto

```bash
ng serve
```

Abrir en el navegador

```text
http://localhost:4200
```

---

# 💡 Objetivo del proyecto

El propósito de este proyecto no es únicamente desarrollar una aplicación funcional, sino construir una solución con una arquitectura mantenible y escalable, aplicando prácticas utilizadas en proyectos empresariales reales.

Durante el desarrollo se priorizan aspectos como:

- Arquitectura limpia
- Escalabilidad
- Organización por Features
- Componentes reutilizables
- Buenas prácticas con RxJS
- Mantenibilidad
- Separación de responsabilidades

---

# 📌 Estado del proyecto

🚧 En desarrollo.

Actualmente el proyecto cuenta con autenticación, gestión de sesión, layout principal y un dashboard inicial. Continuará creciendo con nuevos módulos y funcionalidades.

---

# 👩‍💻 Autora

**Carolina Ñañez Valencia**

Ingeniera Informática

### LinkedIn

https://www.linkedin.com/in/carolina-ñañez-valencia

### GitHub

https://github.com/Carolinavalencia93
