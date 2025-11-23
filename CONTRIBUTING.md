# Contributing to Content Design Prompt Library

Thank you for your interest in contributing! This library thrives on community input and real-world testing.

## 🌟 Ways to Contribute

### 1. Add New Prompts
Submit prompts for:
- New content types not yet covered
- Specialized use cases (healthcare, fintech, gaming, etc.)
- Regional or cultural variations
- Accessibility-specific patterns

### 2. Improve Existing Prompts
- Add more example variables
- Include A/B test results
- Share user research findings
- Document edge cases
- Improve clarity or organization

### 3. Share Real-World Results
- A/B test data
- User feedback
- Accessibility audit findings
- Localization insights
- Performance metrics

### 4. Report Issues
- Inconsistencies
- Outdated practices
- Accessibility concerns
- Confusing documentation

## 📋 Prompt Template Standard

All prompts must follow this structure:

```markdown
## [Prompt Name] v[Version Number]

**Purpose**: [One sentence describing what this prompt generates]

---

**PROMPT:**

[Actual prompt text with {{variables}}]

=== [SECTION NAME] ===
[Section content with clear variable definitions]

=== OUTPUT REQUIREMENTS ===

[Structured output format - JSON, YAML, or markdown]

=== EXAMPLES ===

**Example 1: [Scenario Name]**
- variable_name: "example value"
- another_variable: "another value"
```

## ✅ Quality Checklist

Before submitting, ensure your prompt includes:

- [ ] Clear purpose statement
- [ ] All variables defined with examples
- [ ] Structured output format (JSON/YAML)
- [ ] At least 2 complete examples
- [ ] Accessibility considerations
- [ ] Localization notes (where applicable)
- [ ] Version number (start with v1.0)
- [ ] Your name in credits (if desired)

## 📝 Submission Process

### Option 1: Pull Request (Recommended)

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/content-design-prompts.git
   cd content-design-prompts
   ```

2. **Create a branch**
   ```bash
   git checkout -b add-[prompt-name]
   ```

3. **Add your prompt**
   - Place in appropriate category folder
   - Follow naming convention: `kebab-case-name.md`
   - Update the README with link to your prompt

4. **Commit and push**
   ```bash
   git add .
   git commit -m "Add [Prompt Name] for [use case]"
   git push origin add-[prompt-name]
   ```

5. **Open Pull Request**
   - Provide clear description
   - Link to any supporting materials
   - Tag relevant category labels

### Option 2: GitHub Issue

If you're not comfortable with Git:

1. Open a [new issue](https://github.com/yourusername/content-design-prompts/issues)
2. Use the "Prompt Submission" template
3. Paste your prompt in markdown format
4. Include all required sections
5. Community will help format and merge

## 🎨 Style Guidelines

### Writing Style
- **Clear over clever**: Prioritize clarity
- **Action-oriented**: Use active voice
- **Concise**: Remove unnecessary words
- **Inclusive**: Use gender-neutral language
- **Accessible**: Plain language where possible

### Variable Naming
- Use snake_case: `user_name`, `button_label`
- Be descriptive: `primary_cta_text` not `text1`
- Group related variables: `voice_trait_1`, `voice_trait_2`

### Examples
- Provide realistic scenarios
- Cover diverse use cases
- Include edge cases
- Show variety in complexity

### Code Blocks
- Use appropriate syntax highlighting
- Keep JSON/YAML properly formatted
- Include comments where helpful
- Test all code examples

## 🚫 What We Don't Accept

- Prompts that encourage dark patterns
- Content that violates accessibility standards
- Discriminatory or harmful language
- Copyrighted material without attribution
- Prompts without clear output formats
- Overly complex prompts (split into multiple if needed)

## 🏆 Recognition

Contributors will be:
- Listed in the CONTRIBUTORS.md file
- Credited in prompt headers (optional)
- Mentioned in release notes
- Featured on social media (with permission)

## 📚 Resources

### Content Design
- [Nielsen Norman Group](https://www.nngroup.com/articles/)
- [Material Design Writing](https://m3.material.io/foundations/content-design)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/writing)
- [Atlassian Design System](https://atlassian.design/content/)

### Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project](https://www.a11yproject.com/)
- [WebAIM](https://webaim.org/)

### Conversation Design
- [Conversation Design Institute](https://www.conversationdesigninstitute.com/)
- [Voiceflow Blog](https://www.voiceflow.com/blog)

### Prompt Engineering
- [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/claude/docs/prompt-engineering)
- [OpenAI Best Practices](https://platform.openai.com/docs/guides/prompt-engineering)

## 💬 Questions?

- **General questions**: [Start a discussion](https://github.com/yourusername/content-design-prompts/discussions)
- **Bug reports**: [Open an issue](https://github.com/yourusername/content-design-prompts/issues)
- **Security concerns**: Email directly (see README)

## 📜 Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to:

- Be respectful and inclusive
- Provide constructive feedback
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy toward others

## 🙏 Thank You

Every contribution, no matter how small, helps content designers worldwide create better experiences. We appreciate your time and expertise!

---

**Questions about contributing?** Open a discussion or reach out directly. We're here to help!
