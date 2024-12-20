# ProjetDevops

## Description
...

## Prérequis
Avant de commencer, assurez-vous que vous avez installé Docker et Docker Compose sur votre machine.

## Installation
1. Clonez ce dépôt :

```bash
git clone https://github.com/Kae134/ProjetDevops
cd ProjetDevops
```

2. Placez-vous à la racine du projet et créez un fichier .env dans le dossier racine si ce n'est pas déjà fait. Voici un exemple de contenu pour .env :

```bash
DATABASE_URL=postgresql://postgres:password@db:5432/postgres
PORT=3000
```

## Commande docker

1. Construisez et démarrez les conteneurs :

```bash
docker-compose up --build
```
Cette commande va :

- Construire les images Docker pour le backend et le frontend.
- Lancer trois services :
    - backend : Votre application backend Node.js.
    - frontend : Votre application frontend React.
    - db : Un conteneur PostgreSQL pour la base de données.
Vous pouvez accéder à l'application: 
 - backend sur `http://localhost:3000`
 - frontend sur `http://localhost:5173`

2. Démarrer les conteneurs (sans reconstruire les images)
```bash
docker-compose up
```
Lance les services sans reconstruire les images, ce qui est plus rapide si vous n'avez pas apporté de modifications à la configuration ou aux fichiers.

3. Démarrer les conteneurs en arrière-plan
```bash
docker-compose up -d
```
`Cette` commande lance les services en arrière-plan (mode détaché), vous permettant d'utiliser votre terminal pour d'autres commandes.

4. Arrêter les conteneurs
```bash
docker-compose down
```
Arrête et supprime les conteneurs, les réseaux, et les volumes créés par docker-compose up.

5. Rebuild uniquement un service spécifique
```bash
docker-compose up --build backend
```
Reconstruit et démarre uniquement le service backend. Vous pouvez remplacer backend par frontend ou db pour d'autres services

## API Backend
Le backend expose une API RESTful avec les routes suivantes :
- GET /api/v1/tasklist : Récupère toutes les tâches.
- POST /api/v1/tasklist : Crée une nouvelle tâche.

