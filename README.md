# cartas
Una app interactiva de cartas anonimas

idea de paleta 

Me gusta esa actitud. Acá va todo lo que necesitás:

---

## 🗄️ Base de datos — Supabase

Creá una cuenta en [supabase.com](https://supabase.com) y una tabla llamada `cartas` con estas columnas:

| Columna | Tipo | Notas |
|---|---|---|
| `id` | uuid | Primary key, auto |
| `mensaje` | text | El contenido de la carta |
| `tema` | text | "duelo", "ansiedad", "soledad", "general" |
| `created_at` | timestamp | Auto |

Supabase te da una **API REST automática** para esa tabla. No necesitás escribir backend.

---

## 🧠 Lógica de la app

**Enviar carta**
1. Usuario escribe mensaje + elige tema
2. `fetch` POST a la API de Supabase con el body `{ mensaje, tema }`
3. Confirmación visual, limpiar formulario

**Leer carta**
1. Al cargar, hacés un `fetch` GET a Supabase con `?order=random` — ojo, Supabase no tiene orden random nativo, la vuelta es traer todas las IDs y elegir una al azar en el cliente, o usar una función de PostgreSQL
2. Mostrás la carta con animación de entrada
3. Botón "otra carta" que repite el proceso

**Contador**
- Un `fetch` GET con `?select=count` te devuelve el total sin traer todos los registros

---

## 📦 Recursos clave

- **[Supabase JS Client](https://supabase.com/docs/reference/javascript/introduction)** — mucho más cómodo que fetch crudo
- **[Supabase Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)** — importante: configuralo para que cualquiera pueda insertar pero no borrar ni editar
- Para el random: buscá `RANDOM()` en las funciones de PostgreSQL de Supabase, o simplemente traés los IDs con `select=id` y elegís uno en el cliente

---

## 🎨 Diseño — una idea de paleta

Algo que transmita calma, no clínico:
- Fondo crema `#FAF7F2`
- Texto oscuro suave `#2D2D2D`
- Acento verde salvia `#7C9E87` o terracota `#C07A5A`
- Fuente: **Lora** o **Merriweather** de Google Fonts — se siente manuscrito sin serlo

---

## ⚠️ Una cosa importante

Pensá en moderación desde el principio. Como es anónimo, alguien podría escribir algo dañino. La solución más simple para arrancar: **un campo `aprobada` boolean** en la tabla, que por default es `false`, y solo mostrás las que tienen `aprobada = true`. Vos las revisás manualmente desde el dashboard de Supabase antes de publicar.

Con el tiempo podés automatizar eso, pero para la primera versión está bien así.

---

Cuando tengas dudas en algún punto, avisame. Estoy acá.
