# Repository Verification Checklist

Use this to verify everything is ready before launching.

## ✅ Files Check

### Core Documentation
- [ ] README.md exists and mentions "14 prompts" (not 180+)
- [ ] CONTRIBUTING.md has clear guidelines
- [ ] LICENSE is MIT
- [ ] CODE_OF_CONDUCT.md is present
- [ ] LAUNCH_GUIDE.md has promotion strategies
- [ ] QUICK_START.md has tutorial
- [ ] CHANGELOG.md is up to date

### Prompt Files (14 total)

**Foundations (7):**
- [ ] content-design/_foundations/microcopy-generation.md
- [ ] content-design/_foundations/error-message-design.md
- [ ] content-design/_foundations/success-state-content.md
- [ ] content-design/_foundations/empty-state-content.md
- [ ] content-design/_foundations/loading-state-content.md
- [ ] content-design/_foundations/placeholder-text-guidelines.md
- [ ] content-design/_foundations/destructive-action-copy.md

**Interactive (7):**
- [ ] content-design/_interactive/button-label-variations.md
- [ ] content-design/_interactive/call-to-action-sequence.md
- [ ] content-design/_interactive/form-field-labeling.md
- [ ] content-design/_interactive/tooltip-and-help-text.md
- [ ] content-design/_interactive/modal-dialog-content.md
- [ ] content-design/_interactive/alert-and-banner-content.md
- [ ] content-design/_interactive/contextual-onboarding.md

### Scripts & Automation
- [ ] scripts/validate-prompt.py exists and is executable
- [ ] scripts/generate-index.py exists and is executable
- [ ] setup.sh exists and is executable
- [ ] .github/workflows/validate.yml exists

### GitHub Configuration
- [ ] .github/ISSUE_TEMPLATE/bug_report.md exists
- [ ] .github/ISSUE_TEMPLATE/prompt_submission.md exists
- [ ] .github/ISSUE_TEMPLATE/feature_request.md exists
- [ ] .gitignore is configured

## ✅ Content Verification

Run these commands to verify content:

### Count prompts:
```bash
find content-design -name "*.md" | wc -l
# Should output: 14
```

### Validate prompt structure:
```bash
python scripts/validate-prompt.py content-design/_foundations/microcopy-generation.md
# Should show: ✅ All checks passed!
```

### Check for YOUR_USERNAME placeholder:
```bash
grep -r "YOUR_USERNAME" . --exclude-dir=.git
# Update any files that still have it
```

### Check for your-email placeholder:
```bash
grep -r "your-email@example.com" . --exclude-dir=.git
# Update any files that still have it
```

## ✅ Customization Check

Before launching, make sure you've updated:
- [ ] YOUR_USERNAME → your GitHub username (everywhere)
- [ ] your-email@example.com → your actual email
- [ ] LinkedIn URL → your LinkedIn profile
- [ ] Added your name to LICENSE and README credits

## ✅ Git Repository Check

After running setup.sh or git init:
- [ ] `.git` folder exists
- [ ] All files are committed
- [ ] Main branch is created
- [ ] Ready to add remote

## ✅ Pre-Launch Checklist

Before pushing to GitHub:
- [ ] All prompts are complete and tested
- [ ] Documentation is proofread
- [ ] Personal info is updated everywhere
- [ ] No placeholder text remains
- [ ] Scripts are executable
- [ ] Git repository is initialized

## ✅ Launch Day Checklist

After creating GitHub repository:
- [ ] Remote added: `git remote add origin [URL]`
- [ ] Pushed to main: `git push -u origin main`
- [ ] Repository is public
- [ ] Description and topics added
- [ ] Issues and Discussions enabled
- [ ] First release (v1.0.0) created
- [ ] Repository pinned to profile

## ✅ Post-Launch

After GitHub launch:
- [ ] Posted on Twitter/X
- [ ] Posted on LinkedIn
- [ ] Shared in relevant Slack communities
- [ ] Submitted to Reddit (if appropriate)
- [ ] Added to resume
- [ ] Updated portfolio

## 🎯 Quick Verification Script

Run this to check everything:

```bash
#!/bin/bash

echo "🔍 Verifying repository..."
echo ""

# Check prompt count
PROMPT_COUNT=$(find content-design -name "*.md" 2>/dev/null | wc -l)
echo "✓ Prompts found: $PROMPT_COUNT (expected: 14)"

# Check for placeholders
if grep -rq "YOUR_USERNAME" . --exclude-dir=.git 2>/dev/null; then
    echo "⚠️  Warning: YOUR_USERNAME placeholder still exists"
else
    echo "✓ No YOUR_USERNAME placeholders"
fi

if grep -rq "your-email@example.com" . --exclude-dir=.git 2>/dev/null; then
    echo "⚠️  Warning: Email placeholder still exists"
else
    echo "✓ No email placeholders"
fi

# Check git
if [ -d .git ]; then
    echo "✓ Git repository initialized"
else
    echo "⚠️  Warning: Git not initialized (run ./setup.sh or git init)"
fi

# Check scripts
if [ -x "scripts/validate-prompt.py" ]; then
    echo "✓ Validation script is executable"
else
    echo "⚠️  Warning: Validation script not executable (run chmod +x scripts/*.py)"
fi

echo ""
echo "=================================="
if [ $PROMPT_COUNT -eq 14 ]; then
    echo "✅ Repository looks good!"
else
    echo "⚠️  Some issues found - check above"
fi
echo "=================================="
```

Save this as `verify.sh`, make it executable, and run it:

```bash
chmod +x verify.sh
./verify.sh
```

---

## 🚨 Common Issues

### Issue: Prompt files missing
**Solution:** Check that you extracted the full archive

### Issue: Scripts not executable
**Solution:** Run `chmod +x scripts/*.py setup.sh`

### Issue: Placeholders still present
**Solution:** Run `./setup.sh` or manually find/replace

### Issue: Git commands fail
**Solution:** Make sure Git is installed: `git --version`

---

## ✅ Ready to Launch!

If all checks pass, you're ready to:
1. Create GitHub repository
2. Push your code
3. Configure settings
4. Launch publicly
5. Promote on social media

**Let's go! 🚀**
