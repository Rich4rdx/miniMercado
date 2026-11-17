# 🛒 Mini Catálogo de Productos

Aplicación en Angular para agregar productos con nombre y precio y verlos en un listado. Es una práctica de **comunicación entre componentes**.

![Angular](https://img.shields.io/badge/Angular_16-DD0031?style=flat&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

## Qué practiqué

- Dividir la interfaz en componentes: formulario (`product-form`) y listado (`product-list`)
- Enviar datos del hijo al padre con `@Output` y `EventEmitter`
- Pasar datos del padre al hijo con `@Input`
- Enlace bidireccional en formularios con `ngModel`
- Validación básica: el nombre no puede estar vacío y el precio debe ser mayor que 0
- Renderizado de listas con `*ngFor`

## Cómo ejecutarlo

```bash
npm install
ng serve
```

Abre http://localhost:4200

## Autor

**Richard**: [github.com/Rich4rdx](https://github.com/Rich4rdx)
