# BioPro Grid

BioPro Grid is a comprehensive agricultural intelligence platform designed to unify biological, operational, financial, and compliance workflows across the agricultural ecosystem. It digitizes farm-to-market processes and supports data-driven decisions through AI, geospatial workflows, and traceability-ready data architecture.

## Vision

BioPro Grid provides a single source of truth for stakeholders across agriculture and agribusiness:

- Farmers (smallholder, commercial, houseplant owners, pet owners)
- Agronomists, veterinarians, and extension officers
- Researchers and academic institutions
- Agribusiness companies (seeds, chemical products, equipment)
- Banks, insurers, and financial institutions
- Government regulators and NGOs
- Supply chain actors (buyers, transporters, retailers)

## Core Platform Capabilities

### 1) Biological Encyclopedia

- User-curated repository of plants, pests, diseases, animals, and related organisms
- Detailed taxonomy, growth requirements, toxicity, and organism relationships
- Moderated content contribution model for quality control

### 2) Chemical & Product Registry

- End-to-end management of pesticides, herbicides, fertilizers, and related inputs
- Regulatory metadata (bans, warnings, phased-out records, country context)
- Product efficacy ratings and historical usage insights

### 3) Field & Livestock Management

- GPS-based land parcel mapping and crop planning
- Crop rotation, irrigation, and cultivation recommendations
- Livestock records: health, treatment, breeding, weight, and medication tracking
- Machinery registration and telemetry integration

### 4) Scouting & Pest Detection

- Field scouting sessions with weather and crop-stage context
- Gemini-powered image recognition for organism detection and severity estimation
- Recommendation support for treatment decisions

### 5) Financial & Compliance Operations

- Budgets, journal entries, payroll, taxation, and depreciation workflows
- Compliance dashboards for food safety, environmental, and export standards
- Audit-readiness support for institutional and regulatory users

### 6) Marketplace & Supply Chain

- Listings for produce, inputs, equipment, and agricultural services
- Shipment and batch-level traceability across the value chain
- Blockchain-ready audit trail support

### 7) Learning, Research & Consultation

- Learning modules, quizzes, and exam workflows
- AI-assisted research with grounded responses
- Paid expert consultation and advisory workflows

### 8) Climate & Environmental Intelligence

- Weather integration and climate scenario planning
- Drought indices, evapotranspiration, and growing degree-day support
- Yield projection and adaptation recommendations
- Biodiversity and carbon project tracking

### 9) Collaboration & Group Workspaces

- Shared team data vaults for farmer groups, cooperatives, and researchers
- Role-based permissions and structured collaboration models

### 10) Offline-First Delivery

- Progressive Web App (PWA) architecture
- IndexedDB-backed local capability for low-connectivity environments
- Mobile-first layout and device compatibility support

## Architecture Overview

BioPro Grid follows a modular, domain-driven React + TypeScript architecture.

```text
biopro-grid/
├── public/
├── src/
│   ├── components/
│   ├── constants/
│   ├── contexts/
│   ├── hooks/
│   ├── services/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── firebaseConfig.ts
│   └── index.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Layered Design

- **Types layer (`src/types`)**: shared domain contracts and type safety
- **Services layer (`src/services`)**: domain logic, integrations, and persistence
- **Context layer (`src/contexts`)**: cross-app state and actions
- **Components layer (`src/components`)**: reusable UI and feature modules
- **App initialization (`src/App.tsx`)**: routing, providers, role-aware dashboard selection

## Detailed Entity Relationship Model (NoSQL)

BioPro Grid uses Firestore/IndexedDB patterns, so relationships are modeled in code and documents instead of SQL foreign keys.

### Core Patterns

- **Direct ID reference** (`farmId`, `userId`) for one-to-many
- **Array of IDs** (`memberIds[]`, `activeIngredientIds[]`) for many-to-many
- **Polymorphic reference** (`entityType` + `entityId`) for cross-domain linking
- **Join document** (`OrganismRelationship`, `PlantPartCompound`) for rich relationships
- **Embedded objects** for read performance and offline-friendly denormalization

### Domain Relationship Highlights

- **User/Profile**: `UserProfile.groupId` links to `CollaborativeGroup`; `friends[]` references other users.
- **Biological**: `BioEntity.taxonId` links to `Taxon`; `OrganismRelationship` links entity-to-entity relationships.
- **Chemicals**: `ChemicalProduct.companyId` links to manufacturer; `activeIngredientIds[]` links to compounds.
- **Farm/Livestock**: `LandParcel.farmerId` links to a user; `Animal` links to farm, species entity, medications, and observations.
- **Scouting**: `ScoutingSession` links field/farm/scout; `ScoutingObservation` links organism and crop entities.
- **Finance/Compliance**: budgets, journal entries, and tax filings anchor to farm IDs.
- **Supply Chain**: products, batches, and events chain through actor and batch IDs for traceability.
- **Collaboration/Learning**: groups link members and shared resources; user progress links to learning modules.
- **Biotech/Environmental**: constructs, transformation events, field trials, climate scenarios, and projections link crops, farms, and scenarios.

### Referential Integrity Strategy

Because the datastore does not enforce foreign keys, integrity is maintained at the service layer:

- pre-delete reference checks
- cascading cleanup for dependent records
- schema validation and guards in domain services

## Bridging Agriculture With Other Fields

BioPro Grid is intentionally cross-domain and already integrates agriculture with:

- **AI & technology** (Gemini for detection, research, and automation)
- **finance & economics** (accounting, lending, insurance, reconciliation)
- **climate science** (weather, drought indicators, projections)
- **health systems** (plant, animal, and food-safety workflows)
- **education & research** (learning modules, exams, consultation)
- **supply chain & trade** (marketplace, shipment tracking, traceability)
- **government & compliance** (bans, warnings, approvals, audits)
- **social collaboration** (groups, messaging, shared resources)

### High-Impact Expansion Opportunities

- predictive analytics (yield/pest/market signals)
- remote sensing and satellite-driven recommendations
- open-banking and parametric insurance integrations
- One Health dashboards and disease early warning systems
- accredited learning and CEU workflows
- regulator APIs and e-submission channels
- logistics APIs and smart-contract settlement
- cross-domain benchmarking and unified intelligence dashboards
- open developer API ecosystem

## Technology Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS
- Firebase (Auth, Firestore, Storage)
- IndexedDB (`idb`) for offline mode
- Google Gemini API (`@google/genai`) for AI capabilities
- Stripe for consultation payments
- Recharts for visualization
- Vite PWA plugin + Workbox
- Sentry monitoring
- Zod validation and Crypto-JS utilities

## Packaging the Project as a ZIP

If you want a distributable archive of your local project, run this from the project root:

```bash
zip -r biopro-grid.zip . -x ".git/*" "node_modules/*" "dist/*"
```

Or, to include only tracked repository files:

```bash
git archive -o biopro-grid.zip HEAD
```

## Design Principles

- **Domain-driven modularity** for extensibility
- **AI-first workflows** for diagnostics, analysis, and recommendations
- **Role-aware experiences** tailored to user responsibilities
- **Offline resilience** for rural and low-connectivity contexts
- **Traceability and compliance** for transparency and regulatory alignment

## Outcome

BioPro Grid is intended to serve as a daily operations platform for farmers, a research and advisory tool for experts, a compliance and monitoring interface for institutions, and a marketplace engine for agribusiness—delivered in one integrated, scalable system.
