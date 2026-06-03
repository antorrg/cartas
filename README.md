# 💌 Proyecto Cartas

Bienvenido al repositorio de **Cartas**, una aplicación web minimalista y rápida diseñada para que los usuarios puedan escribir, enviar y leer cartas temáticas. Este proyecto nace como una iniciativa para practicar y pulir mis habilidades en el desarrollo Frontend moderno y en la integración con Backend-as-a-Service (BaaS).

## 🚀 Sobre el Proyecto

El objetivo principal de esta aplicación es ofrecer una experiencia de usuario fluida y reactiva. Permite a los usuarios consultar cartas previamente aprobadas (con un contador en tiempo real) y redactar sus propios mensajes a través de una interfaz amigable.

### 🛠️ Stack Tecnológico

Este proyecto fue construido priorizando el rendimiento, la escalabilidad y el tipado estricto. Las tecnologías principales incluyen:

* **[Preact](https://preactjs.com/):** Elegido como alternativa ultraligera a React (solo 3kB), manteniendo la misma API y ecosistema de Hooks. Ideal para interfaces rápidas y eficientes.
* **[Vite](https://vitejs.dev/):** Utilizado como empaquetador (bundler) por su increíble velocidad en desarrollo y optimización en producción.
* **[TypeScript](https://www.typescriptlang.org/):** Proporciona tipado estático, reduciendo drásticamente los errores en tiempo de ejecución y mejorando la experiencia de desarrollo al conectar con la base de datos.
* **[Supabase](https://supabase.com/):** Actúa como Backend y Base de Datos PostgreSQL. Su cliente oficial (`@supabase/supabase-js`) se usa para realizar consultas asíncronas, filtrado (ej. cartas aprobadas) y operaciones de escritura.

## ✨ Funcionalidades Principales

* **Visualización de Cartas:** Feed dinámico de cartas aprobadas obtenidas directamente desde la base de datos relacional.
* **Contador en Tiempo Real:** Un componente dedicado (`Counter.tsx`) que gestiona el estado asíncrono para mostrar el volumen total de interacciones de manera eficiente.
* **Creación de Contenido:** Formularios controlados para redactar y publicar nuevas cartas, manejando estados de carga y validación.
* **Arquitectura Modular:** Separación clara de responsabilidades:
    * `api.ts`: Centraliza la lógica de negocio y las llamadas a la base de datos.
    * `components/`: Componentes de UI reutilizables (Modales, Tarjetas, Contadores).
    * `pages/`: Vistas completas de la aplicación (Home, CreateView).

## 🧠 Decisiones Técnicas y Arquitectura

* **Separación de Lógica y UI:** La lógica de consumo de datos está abstraída en el archivo `api.ts`. Esto permite que los componentes de la interfaz de usuario, como `Counter` o `Home`, permanezcan "limpios" y se centren únicamente en la presentación y el manejo del estado local (usando `useState` y `useEffect`).
* **Manejo de Estados Asíncronos:** Implementación robusta de llamadas a la API dentro de los hooks de Preact, controlando no solo los datos (Data), sino también los estados de carga (Loading) y de error (Error) para garantizar la mejor UX posible.

## ⚙️ Instalación y Uso Local

Para levantar este proyecto en tu entorno local, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd cartas
   ```

2. **Instalar las dependencias:**
   Puedes usar `npm`, `yarn` o `pnpm` (este último es el usado en el proyecto, según el `pnpm-lock.yaml`).
   ```bash
   pnpm install
   ```

3. **Configurar las Variables de Entorno:**
   Copia el archivo de ejemplo y agrega tus credenciales de Supabase.
   ```bash
   cp .env.example .env
   ```

4. **Levantar el entorno de desarrollo:**
   ```bash
   pnpm dev
   ```

---
*Si eres una persona con conocimientos de programación y estás revisando este código, te agradezco tu tiempo. Te invito a explorar el archivo `src/api.ts` para ver cómo se estructuraron las consultas a Supabase y la carpeta `src/components` para revisar el manejo del ciclo de vida de los componentes en Preact.*
