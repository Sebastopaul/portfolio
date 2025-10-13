# Variables
BACKEND_DIR=backend
BACKEND_IMAGE_NAME=portfolio-web-back
BACKEND_IMAGE_TAG=latest
BACKEND_IMAGE=$(BACKEND_IMAGE_NAME):$(BACKEND_IMAGE_TAG)
FRONTEND_DIR=frontend/app
FRONTEND_IMAGE_NAME=portfolio-web-front
FRONTEND_IMAGE_TAG=latest
FRONTEND_IMAGE=$(FRONTEND_IMAGE_NAME):$(FRONTEND_IMAGE_TAG)

# Couleurs pour l'affichage
GREEN=\033[0;32m
BLUE=\033[0;34m
CYAN=\033[0;36m
YELLOW=\033[1;33m
NC=\033[0m # reset

# -------------------------------------------------------------------
# Commandes Docker Compose
# -------------------------------------------------------------------

start:
	@printf "${GREEN}Démarrage des services Docker Compose...${NC}\n"
	docker compose up -d
	@printf "${CYAN}Frontend accessible : http://localhost:4200${NC}\n"
	@printf "${CYAN}Backend accessible : http://localhost:8080${NC}\n"

stop:
	@printf "${YELLOW}Arrêt des services Docker Compose...${NC}\n"
	docker compose down

restart: stop start

build-start: build start

build-restart: stop build start

# -------------------------------------------------------------------
# Build des images Docker
# -------------------------------------------------------------------

build-backend: clean-backend
	@printf "${BLUE}Build de l'image backend...${NC}\n"
	docker build -t $(BACKEND_IMAGE) $(BACKEND_DIR)
	@printf "${GREEN}Backend prêt : $(BACKEND_IMAGE)${NC}\n"

build-frontend: clean-frontend
	@printf "${BLUE}Build de l'image frontend...${NC}\n"
	docker build -t $(FRONTEND_IMAGE) $(FRONTEND_DIR)
	@printf "${GREEN}Frontend prêt : $(FRONTEND_IMAGE)${NC}\n"

build: build-backend build-frontend

# -------------------------------------------------------------------
# Nettoyage des images
# -------------------------------------------------------------------

clean-backend:
	@printf  "${YELLOW}Nettoyage de l'image backend Docker...${NC}\n"
	docker rmi -f $(BACKEND_IMAGE) || true
	@printf "${GREEN}Image backend nettoyée${NC}\n"

clean-frontend:
	@printf  "${YELLOW}Nettoyage de l'image frontend Docker...${NC}\n"
	docker rmi -f $(FRONTEND_IMAGE) || true
	@printf "${GREEN}Image frontend nettoyée${NC}\n"

clean: clean-backend clean-frontend
	@printf  "${YELLOW}Nettoyage des caches Docker...${NC}\n"
	docker system prune -f
	@printf "${GREEN}Nettoyage terminé${NC}\n"
