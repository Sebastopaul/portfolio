# Portfolio Web - Spring Boot & Angular

## Description

Ce projet est un **portfolio web personnel** développé avec **Spring Boot (Java)** pour le backend et **Angular** pour le frontend.

L’application est conçue pour présenter :
- Les compétences
- Les formations
- Les expériences professionnelles
- D’autres informations personnelles pertinentes

Elle dispose de deux modes :
1. **Mode lecture** : consultable par tous pour voir les informations du portfolio
2. **Mode administrateur** : accessible via une route protégée pour ajouter/modifier les expériences, compétences et formations

Le projet est intégralement conteneurisé avec **Docker** pour simplifier le développement et le déploiement.

---

## Technologies principales

- **Backend** : Java 25 · Spring Boot 3.5.6 · Gradle 9.1
- **Frontend** : Angular 20
- **Base de données** : PostgreSQL
- **Conteneurisation** : Docker & Docker Compose
- **Automatisation du build** : Makefile

---

## Pré-requis

Avant de commencer, assurez-vous d’avoir installé :

- [Docker](https://www.docker.com/get-started)*
- [Docker Compose](https://docs.docker.com/compose/install/)*
- [Make](https://www.gnu.org/software/make/)

> Aucun outil supplémentaire (Java, Node, Gradle, Angular CLI) n’a besoin d’être installé localement : tout tourne via Docker.

---

## Installation et utilisation

### 1. Cloner le projet

```bash
git clone https://github.com/Sebastopaul/portfolio.git
cd portfolio
```

---

### 2. Configurer les variables d'environnement

```env
APP_ENV=dev

DB_HOST=db
DB_PORT=5432
DB_NAME=portfolio
DB_USER=portfolio_user
DB_PASSWORD=secret

FRONTEND_PORT=4200
BACKEND_PORT=8080
```

- `APP_ENV` : `dev` ou `prod`
- Les variables DB permettent de configurer la base de données du backend

---

### 3. Lancer les services (dev)

Avec **Make** :

```bash
make start
```

Sinon directement avec Docker Compose :

```bash
docker compose up -d
```

> Après le lancement :
> - Frontend : [http://localhost:4200](http://localhost:4200)
> - Backend : [http://localhost:8080](http://localhost:8080)

---

### 4. Arrêter les services

```bash
make stop
```

ou

```bash
docker compose down
```

---

### 5. Build des images Docker

Pour reconstruire les images backend et frontend :

```bash
make build
```

Ou séparément :

```bash
make build-backend
make build-frontend
```

---

### 6. Nettoyage des images et caches Docker

```bash
make clean
```

> Supprime les images et les caches Docker inutilisés.

---

### 7. Workflow pratique

- `make build-start` : build des images et lancement des containers
- `make build-restart` : arrêt, build, puis relance

---

### 8. Commandes utiles

- `make sync-node-modules` : synchronise les node_modules du container front et de l'hôte à l'aide du script `sync_node_modules.sh`.
Il est recommandé de lancer cette commande à chaque installation de package front ou nettoyage du node_modules.

---

### Notes

Le projet est pensé pour faciliter le développement et le déploiement.
Les Dockerfile se trouvant dans les dossiers backend et frontend sont utilisés par le `docker-compose`.
Cela permet de développer sur des environnements séparés et rend possible le **hot loading** en front et en back. 

Le Dockerfile à la racine du projet, quant à lui, crée une image unique contenant un **.jar monolithique**.
Celui-ci comprend à la fois le front et le back.
Il vise à simplifier le lancement et maintien de l'application sur un environnement de production.

---

### Arborescence du projet

```tree
.
├── .env                 # Variables d'environnement
├── Dockerfile           # Dockerfile monolithique
├── LICENSE              # Licence
├── Makefile             # Commandes pratiques
├── README.md            # Informations
├── backend              # Code Spring Boot
├── docker-compose.yml   # Stack Docker pour dev
└── frontend             # Code Angular
```

---

### Licence

© 2025 Sébastien Lamard. Tous droits réservés.  
Ce projet est personnel et ne peut pas être utilisé, copié ou vendu sans autorisation.