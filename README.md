# User Flow API

Простой API для работы с пользователями.  
Поддерживает создание и вывод пользователей с `nickname` и `avatar` (картинка).  
Страница `/users` в браузере показывает список с пагинацией.

---

## Установка и запуск

### Клонируем репозиторий:

```bash
git clone https://github.com/aevser/UserFlowBackend.git
cd UserFlowBackend
```

### Копируем конфигурацию:

```bash
cp .env.example .env
```

### Настраиваем переменные окружения: 
```bash
OLD_USER_MINUTES=60 ( опционально )

```

### Создание базы

```bash
touch database/database.sqlite
```

### Поднимаем контейнеры:
```bash
docker-compose up -d --build
```

### Устанавливаем зависимости и выполняем миграции:
```bash
docker exec -it user_flow_app composer install
docker exec -it user_flow_app php artisan key:generate
docker exec -it user_flow_app php artisan migrate --seed
docker exec -it user_flow_app php artisan storage:link
```

### Открываем в браузере:
```bash
Страница пользователей: http://localhost:8000/users
```

### Команда для удаления старых пользователей:
```bash
docker exec -it user_flow_app php artisan schedule:run
```

### API

Проект также предоставляет собственный REST API, реализованный на Laravel и предназначенный для получения и создания пользователя.
API использует версионирование и доступен по префиксу:
```
api/v1
```

### Endpoints

```bash
GET /api/v1/users - получить список пользователей

perPage - опционально ( кол-во записей на странице )
page - опционально ( переключатель страниц )
```

```bash
POST /api/v1/users - создать пользователя

nickname - required
avatar - опционально
```





