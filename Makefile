# Variables
BACKEND_DIR=backend
BACKEND_CONTAINER=portfolio-web-back
BACKEND_IMAGE_NAME=$(BACKEND_CONTAINER)
BACKEND_IMAGE_TAG=latest
BACKEND_IMAGE=$(BACKEND_IMAGE_NAME):$(BACKEND_IMAGE_TAG)
FRONTEND_DIR=frontend
FRONTEND_CONTAINER=portfolio-web-front
FRONTEND_IMAGE_NAME=$(FRONTEND_CONTAINER)
FRONTEND_IMAGE_TAG=latest
FRONTEND_IMAGE=$(FRONTEND_IMAGE_NAME):$(FRONTEND_IMAGE_TAG)

DOCKER=docker

# Couleurs pour l'affichage
GREEN=\033[0;32m
BLUE=\033[0;34m
CYAN=\033[0;36m
YELLOW=\033[1;33m
NC=\033[0m # reset

# -------------------------------------------------------------------
# Commandes Docker Compose
# -------------------------------------------------------------------

.PHONY: start
start:
	@printf "${GREEN}Démarrage des services Docker Compose...${NC}\n"
	docker compose up -d
	@printf "${CYAN}Frontend accessible : http://localhost:4200${NC}\n"
	@printf "${CYAN}Backend accessible : http://localhost:8080${NC}\n"

.PHONY: stop
stop:
	@printf "${YELLOW}Arrêt des services Docker Compose...${NC}\n"
	docker compose down

.PHONY: restart
restart: stop start

.PHONY: build-start
build-start: build start

.PHONY: build-restart
build-restart: stop build start

.PHONY: start-sync
start-sync: start sync-node-modules

# -------------------------------------------------------------------
# Build des images Docker
# -------------------------------------------------------------------

.PHONY: build-backend
build-backend: clean-backend
	@printf "${BLUE}Build de l'image backend...${NC}\n"
	$(DOCKER) build -t $(BACKEND_IMAGE) $(BACKEND_DIR)
	@printf "${GREEN}Backend prêt : $(BACKEND_IMAGE)${NC}\n"

.PHONY: build-frontend
build-frontend: clean-frontend
	@printf "${BLUE}Build de l'image frontend...${NC}\n"
	$(DOCKER) build -t $(FRONTEND_IMAGE) $(FRONTEND_DIR)
	@printf "${GREEN}Frontend prêt : $(FRONTEND_IMAGE)${NC}\n"

.PHONY: build
build: build-backend build-frontend

# -------------------------------------------------------------------
# Nettoyage des images
# -------------------------------------------------------------------

.PHONY: clean-backend
clean-backend:
	@printf  "${YELLOW}Nettoyage de l'image backend Docker...${NC}\n"
	$(DOCKER) rmi -f $(BACKEND_IMAGE) || true
	@printf "${GREEN}Image backend nettoyée${NC}\n"

.PHONY: clean-frontend
clean-frontend:
	@printf  "${YELLOW}Nettoyage de l'image frontend Docker...${NC}\n"
	$(DOCKER) rmi -f $(FRONTEND_IMAGE) || true
	@printf "${GREEN}Image frontend nettoyée${NC}\n"

.PHONY: clean
clean: clean-backend clean-frontend
	@printf  "${YELLOW}Nettoyage des caches Docker...${NC}\n"
	$(DOCKER) system prune -f
	@printf "${GREEN}Nettoyage terminé${NC}\n"

# -------------------------------------------------------------------
# Utilitaires
# -------------------------------------------------------------------

.PHONY: sync-node-modules
sync-node-modules:
	./sync_node_modules.sh

# -------------------------------------------------------------------
# Tests
# -------------------------------------------------------------------

.PHONY: test-front
test-front:
	$(DOCKER) exec $(FRONTEND_CONTAINER) "npm test"