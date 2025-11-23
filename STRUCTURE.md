# Repository Structure

This document explains the organization of the Content Design Prompt Library.

## Directory Layout

```
content-design-prompts/
├── README.md                          # Main repository overview
├── CONTRIBUTING.md                    # Contribution guidelines
├── CODE_OF_CONDUCT.md                 # Community standards
├── LICENSE                            # MIT License
├── .gitignore                         # Git ignore rules
│
├── content-design/                    # Main prompt library
│   ├── _foundations/                  # Core content patterns
│   │   ├── microcopy-generation.md
│   │   ├── error-message-design.md
│   │   ├── success-state-content.md
│   │   ├── empty-state-content.md
│   │   ├── loading-state-content.md
│   │   ├── placeholder-text-guidelines.md
│   │   └── destructive-action-copy.md
│   │
│   ├── _interactive/                  # UI component content
│   │   ├── button-label-variations.md
│   │   ├── call-to-action-sequence.md
│   │   ├── form-field-labeling.md
│   │   ├── tooltip-and-help-text.md
│   │   ├── modal-dialog-content.md
│   │   ├── alert-and-banner-content.md
│   │   └── contextual-onboarding.md
│   │
│   ├── _conversational-ai/            # Dialog & chat interfaces
│   │   ├── voice-tone-calibration.md
│   │   ├── multi-turn-dialog-design.md
│   │   ├── error-recovery-flows.md
│   │   ├── personality-consistency.md
│   │   ├── context-management.md
│   │   └── fallback-strategies.md
│   │
│   ├── _product-content/              # Marketing & product copy
│   │   ├── feature-announcements.md
│   │   ├── release-notes.md
│   │   ├── changelog-content.md
│   │   ├── marketing-copy.md
│   │   ├── educational-content.md
│   │   └── documentation.md
│   │
│   └── _accessibility-localization/   # Inclusive design
│       ├── screen-reader-content.md
│       ├── alternative-text.md
│       ├── aria-labels.md
│       ├── internationalization.md
│       ├── cultural-adaptation.md
│       └── rtl-content.md
│
├── examples/                          # Real-world implementations
│   ├── saas-dashboard/
│   ├── e-commerce/
│   ├── healthcare-app/
│   ├── fintech-product/
│   └── consumer-app/
│
├── scripts/                           # Utility scripts
│   ├── validate-prompt.py             # Validate prompt structure
│   ├── generate-index.py              # Auto-generate category indexes
│   └── convert-to-yaml.py             # Convert prompts to YAML
│
└── .github/                           # GitHub configuration
    ├── ISSUE_TEMPLATE/
    │   ├── bug_report.md
    │   ├── prompt_submission.md
    │   └── feature_request.md
    └── workflows/
        └── validate.yml               # CI/CD validation
```

## Naming Conventions

### File Names
- Use kebab-case: `button-label-variations.md`
- Be descriptive: `error-message-design.md` not `errors.md`
- Include version in header: `## Prompt Name v2.0`

### Variable Names
- Use snake_case: `user_name`, `button_type`
- Group related variables: `voice_trait_1`, `voice_trait_2`
- Prefix booleans: `is_required`, `has_icon`, `can_dismiss`

### Categories
- Prefix with underscore: `_foundations`, `_interactive`
- Keep shallow hierarchy (max 2 levels)
- Use plural nouns: `_foundations` not `_foundation`

## Adding New Prompts

### 1. Choose the Right Category

**Content Design Foundations** (`_foundations/`)
- Core UI patterns
- Applies across product types
- Examples: error messages, empty states, loading states

**Interactive Components** (`_interactive/`)
- Specific UI elements
- User-triggered interactions
- Examples: buttons, forms, modals, tooltips

**Conversational AI** (`_conversational-ai/`)
- Chat and voice interfaces
- Dialog management
- Examples: multi-turn flows, personality, context

**Product Content** (`_product-content/`)
- Marketing and communication
- Documentation and education
- Examples: release notes, announcements, help docs

**Accessibility & Localization** (`_accessibility-localization/`)
- Inclusive design patterns
- International audiences
- Examples: screen readers, RTL, cultural adaptation

### 2. Follow the Template

Every prompt must include:
1. Purpose statement
2. Variable definitions with examples
3. Structured output format (JSON/YAML)
4. At least 2 complete examples
5. Accessibility considerations
6. Version number

### 3. Update the README

Add your prompt to the appropriate section in README.md:

```markdown
### [Category Name]
- [Prompt Name](path/to/prompt.md) - Brief description
```

## Maintenance

### Versioning
- **v1.0**: Initial release
- **v1.1**: Minor updates (examples, clarifications)
- **v2.0**: Major changes (structure, approach)

### Deprecation
- Mark deprecated prompts with `[DEPRECATED]` in title
- Add deprecation notice at top
- Link to replacement prompt
- Keep for 6 months before removal

### Quality Checks
- All prompts validated by CI/CD
- Accessibility review required
- Community feedback incorporated
- Regular updates based on best practices

## Scripts

### Validate Prompt Structure
```bash
python scripts/validate-prompt.py content-design/_foundations/microcopy-generation.md
```

### Generate Category Index
```bash
python scripts/generate-index.py content-design/_foundations/
```

### Convert to YAML
```bash
python scripts/convert-to-yaml.py input.md output.yaml
```

## Questions?

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines or [open an issue](https://github.com/yourusername/content-design-prompts/issues).
