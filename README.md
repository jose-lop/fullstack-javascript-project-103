# 📘 Fullstack JavaScript Project 103

![Lint](https://github.com/jose-lop/fullstack-javascript-project-103/actions/workflows/lint.yml/badge.svg)
[![CI](https://github.com/jose-lop/fullstack-javascript-project-103/actions/workflows/ci.yml/badge.svg)](https://github.com/jose-lop/fullstack-javascript-project-103/actions/workflows/ci.yml)
[![Maintainability](https://qlty.sh/gh/jose-lop/projects/fullstack-javascript-project-103/maintainability.svg)](https://qlty.sh/gh/jose-lop/projects/fullstack-javascript-project-103)
[![Test Coverage](https://api.codeclimate.com/v1/badges/qltcp_XAP956euo67JdPNE/test_coverage)](https://codeclimate.com/github/jose-lop/fullstack-javascript-project-103/test_coverage)
[![Actions Status](https://github.com/jose-lop/fullstack-javascript-project-103/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/jose-lop/fullstack-javascript-project-103/actions)

---

## 🧪 Descripción

**gendiff** es una herramienta que compara archivos de configuración y muestra sus diferencias en varios formatos:

- **Stylish** (por defecto)
- **Plain**
- **JSON**

Soporta archivos `.json`, `.yaml` y `.yml`.

Proyecto de práctica del curso **Hexlet**: configuración de **linters**, **pruebas automatizadas** y **CI/CD con GitHub Actions**.

---

## 🎥 Demostración de uso

[![asciicast](https://asciinema.org/a/cXb6ehFK0R3F26ADW3GEYVkRG.svg)](https://asciinema.org/a/cXb6ehFK0R3F26ADW3GEYVkRG)

## 🎥 Demostración de uso

[![asciicast](https://asciinema.org/a/Qddj0wRnHIvX07gzj0qy6vEAj.svg)](https://asciinema.org/a/Qddj0wRnHIvX07gzj0qy6vEAj)

---

## ⚙️ Instalación

Clona el repositorio y ejecuta:

```bash
make install
# Gendiff

Herramienta de línea de comandos que compara dos archivos de configuración y muestra la diferencia en un formato legible.

---

## 🚀 Descripción

`gendiff` permite comparar archivos JSON, YAML o YML y mostrar sus diferencias en distintos formatos de salida.

Este proyecto forma parte del curso **Fullstack JavaScript** de Hexlet.

---

## 📹 Demostración (Asciinema)

Puedes ver la grabación del uso de la herramienta en el siguiente enlace:

👉 [https://asciinema.org/a/FtVpO040hpnBnQe43n5vflsBG](https://asciinema.org/a/FtVpO040hpnBnQe43n5vflsBG)

---

## 🔧 Instalación

```bash
git clone <tu-repo>
cd <tu-repo>
npm install
npm link
```

---

## 📝 Uso

### Comparar dos archivos

```bash
gendiff file1.yaml file2.yaml
```

### Ejemplo de salida

```bash
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
```

---

## 🗂 Formatos soportados

* JSON
* YAML / YML

---

## 📤 Formatos de salida disponibles

```bash
gendiff --format stylish file1.yml file2.yml
gendiff --format plain file1.yml file2.yml
gendiff --format json file1.yml file2.yml
```

---

## 🧪 Tests

```bash
make test
```

---

## 📦 Requisitos

* Node.js 18+

---

## 👤 Autor

toñito — Estudiante de programación Full Stack

---

## 📄 Licencia

MIT
📘 Gendiff – Comparador de archivos
Un proyecto del curso Full Stack JavaScript de Hexlet
📝 Descripción

Gendiff es una herramienta de línea de comandos que compara dos archivos y muestra la diferencia en distintos formatos.
Permite comparar archivos en formato JSON, YAML y YML.

Este proyecto implementa:

🔹 Parser de archivos

🔹 Generación de árbol de diferencias

🔹 Formato stylish

🔹 Formato plain

🔹 Formato json

🔹 Pruebas automatizadas con Jest

🚀 Instalación

Clona el repositorio:

git clone https://github.com/<tu-usuario>/fullstack-javascript-project-103.git
cd fullstack-javascript-project-103


Instala dependencias:

npm install


Instala el paquete globalmente:

npm link

🖥 Uso
📄 Formato por defecto (stylish)
gendiff file1.json file2.json

📄 Formato plain
gendiff -f plain file1.json file2.json

📄 Formato JSON
gendiff -f json file1.json file2.json

🧪 Pruebas

Ejecuta:

npm test

🎥 Demostración (asciinema)

👉 https://asciinema.org/a/xcpv3xjssvOaH0xL3O4IHc1iE

✔ Estado del proyecto




📂 Estructura
├── bin
│   └── gendiff.js
├── src
│   ├── parser.js
│   ├── buildTree.js
│   ├── index.js
│   └── formatters
│       ├── stylish.js
│       ├── plain.js
│       └── json.js
└── __tests__

📎 Licencia

Este proyecto se distribuye bajo la licencia MIT.

## Ejemplo — salida JSON

Ejecuta:

```bash
gendiff --format json filepath1.json filepath2.json

{
  "host": { "type": "unchanged", "value": "hexlet.io" },
  "timeout": { "type": "changed", "oldValue": 50, "newValue": 20 }
}

https://asciinema.org/a/o3SDy5MyVJ3SN2IDY1CegX7b2