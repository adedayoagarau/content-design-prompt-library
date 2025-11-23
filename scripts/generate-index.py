#!/usr/bin/env python3
"""
Generate Index for Prompt Category

This script scans a category folder and generates a README.md
with links to all prompts in that category.
"""

import sys
import re
from pathlib import Path


def extract_prompt_info(filepath):
    """Extract title and purpose from a prompt file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract title (first ## heading)
        title_match = re.search(r'^##\s+(.+?)(?:\s+v\d+\.\d+)?$', content, re.MULTILINE)
        title = title_match.group(1) if title_match else filepath.stem.replace('-', ' ').title()
        
        # Extract purpose
        purpose_match = re.search(r'\*\*Purpose\*\*:\s*(.+?)(?:\n|$)', content)
        purpose = purpose_match.group(1) if purpose_match else "No description available"
        
        return title, purpose
    except Exception as e:
        print(f"Warning: Could not parse {filepath.name}: {e}")
        return filepath.stem.replace('-', ' ').title(), "No description available"


def generate_category_index(category_path):
    """Generate README.md for a category."""
    category_path = Path(category_path)
    
    if not category_path.is_dir():
        print(f"Error: {category_path} is not a directory")
        return False
    
    # Get category name
    category_name = category_path.name.replace('_', ' ').replace('-', ' ').title()
    
    # Get all markdown files except README
    prompt_files = sorted([
        f for f in category_path.glob('*.md')
        if f.name.lower() != 'readme.md'
    ])
    
    if not prompt_files:
        print(f"No prompt files found in {category_path}")
        return False
    
    # Generate README content
    readme_content = f"""# {category_name}

This category contains {len(prompt_files)} prompt{'s' if len(prompt_files) != 1 else ''} for {category_name.lower()}.

## Prompts in This Category

"""
    
    for prompt_file in prompt_files:
        title, purpose = extract_prompt_info(prompt_file)
        readme_content += f"### [{title}]({prompt_file.name})\n\n"
        readme_content += f"{purpose}\n\n"
        readme_content += "---\n\n"
    
    readme_content += """
## Contributing

Have suggestions for new prompts in this category? See [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines.

## Navigation

- [← Back to Main README](../../README.md)
- [View All Categories](../../README.md#library-contents)
"""
    
    # Write README
    readme_path = category_path / 'README.md'
    with open(readme_path, 'w', encoding='utf-8') as f:
        f.write(readme_content)
    
    print(f"✅ Generated index for {category_name}")
    print(f"   Location: {readme_path}")
    print(f"   Prompts indexed: {len(prompt_files)}")
    
    return True


def main():
    if len(sys.argv) < 2:
        print("Usage: python generate-index.py <category-folder>")
        print("\nExample:")
        print("  python generate-index.py content-design/_foundations/")
        sys.exit(1)
    
    category_path = sys.argv[1]
    success = generate_category_index(category_path)
    
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
