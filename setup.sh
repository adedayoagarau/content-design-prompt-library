#!/bin/bash

# GitHub Setup Script for Content Design Prompt Library
# This script helps you customize and push your repository to GitHub

echo "=================================="
echo "Content Design Prompt Library"
echo "GitHub Setup Assistant"
echo "=================================="
echo ""

# Function to replace text in files
replace_in_file() {
    local file=$1
    local search=$2
    local replace=$3
    
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s|$search|$replace|g" "$file"
    else
        # Linux
        sed -i "s|$search|$replace|g" "$file"
    fi
}

# Get user information
echo "Let's customize your repository..."
echo ""

read -p "Enter your GitHub username: " GITHUB_USER
read -p "Enter your email address: " USER_EMAIL
read -p "Enter your full name: " USER_NAME
read -p "Enter your LinkedIn profile URL (optional): " LINKEDIN_URL

echo ""
echo "Updating files with your information..."

# Update README
replace_in_file "README.md" "YOUR_USERNAME" "$GITHUB_USER"
replace_in_file "README.md" "\[LinkedIn\](https://linkedin.com/in/yourprofile)" "[LinkedIn]($LINKEDIN_URL)"

# Update CONTRIBUTING
replace_in_file "CONTRIBUTING.md" "YOUR_USERNAME" "$GITHUB_USER"

# Update LAUNCH_GUIDE
replace_in_file "LAUNCH_GUIDE.md" "YOUR_USERNAME" "$GITHUB_USER"

# Update QUICK_START
replace_in_file "QUICK_START.md" "YOUR_USERNAME" "$GITHUB_USER"
replace_in_file "QUICK_START.md" "your-email@example.com" "$USER_EMAIL"

# Update issue templates
for file in .github/ISSUE_TEMPLATE/*.md; do
    replace_in_file "$file" "YOUR_USERNAME" "$GITHUB_USER"
done

echo "✅ Files updated successfully!"
echo ""

# Initialize Git
echo "Initializing Git repository..."
git init
git add .
git commit -m "Initial commit: Content Design Prompt Library

- 14 production-ready prompts (7 foundations + 7 interactive)
- Complete documentation and contributing guidelines
- Validation scripts and automation tools
- Issue templates for community contributions
- Roadmap to 100+ prompts

Created by $USER_NAME"

echo "✅ Git repository initialized!"
echo ""

# Prompt for GitHub repository creation
echo "=================================="
echo "Next Steps:"
echo "=================================="
echo ""
echo "1. Go to GitHub.com and create a new repository:"
echo "   - Name: content-design-prompts"
echo "   - Description: Production-ready prompts for content designers working with AI"
echo "   - Public repository"
echo "   - Do NOT initialize with README"
echo ""
echo "2. After creating the repository, run these commands:"
echo ""
echo "   git remote add origin https://github.com/$GITHUB_USER/content-design-prompts.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Configure repository settings:"
echo "   - Add topics: content-design, ux-writing, prompts, ai, conversation-design"
echo "   - Enable Issues and Discussions"
echo "   - Add to pinned repositories"
echo ""
echo "4. Create your first release (v1.0.0)"
echo ""
echo "5. Launch! Use the social media templates in LAUNCH_GUIDE.md"
echo ""
echo "=================================="
echo "Setup complete! Ready to launch 🚀"
echo "=================================="
