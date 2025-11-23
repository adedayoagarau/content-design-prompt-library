#!/usr/bin/env python3
"""
Split Combined Prompt Document into Individual Files

This script takes a large markdown file containing multiple prompts
and splits it into individual .md files based on the category and filename.
"""

import sys
import re
from pathlib import Path


def parse_prompt_document(content):
    """Parse the document and extract individual prompts."""
    prompts = []
    
    # Match patterns like: ### **1. content-design/_foundations/microcopy-generation.md**
    pattern = r'###\s+\*\*\d+\.\s+([\w\-/]+\.md)\*\*\s*\n\n```markdown\n(.*?)\n```'
    
    matches = re.finditer(pattern, content, re.DOTALL)
    
    for match in matches:
        filepath = match.group(1)
        prompt_content = match.group(2)
        
        prompts.append({
            'path': filepath,
            'content': prompt_content
        })
    
    return prompts


def create_prompt_files(prompts, base_dir='.'):
    """Create individual prompt files from parsed data."""
    base_path = Path(base_dir)
    created_files = []
    
    for prompt in prompts:
        # Create full path
        file_path = base_path / prompt['path']
        
        # Create parent directories if needed
        file_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Write file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(prompt['content'])
        
        created_files.append(str(file_path))
        print(f"✅ Created: {file_path}")
    
    return created_files


def main():
    if len(sys.argv) < 2:
        print("Usage: python split-prompts.py <input-file.md> [output-directory]")
        print("\nExample:")
        print("  python split-prompts.py prompts.md ./content-design-prompts")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else '.'
    
    # Read input file
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: File not found: {input_file}")
        sys.exit(1)
    
    print(f"📖 Reading: {input_file}")
    print(f"📂 Output directory: {output_dir}\n")
    
    # Parse prompts
    prompts = parse_prompt_document(content)
    
    if not prompts:
        print("❌ No prompts found in document")
        print("\nExpected format:")
        print('### **1. content-design/_foundations/example.md**')
        print('```markdown')
        print('## Prompt Title v1.0')
        print('...')
        print('```')
        sys.exit(1)
    
    print(f"Found {len(prompts)} prompts\n")
    
    # Create files
    created = create_prompt_files(prompts, output_dir)
    
    print(f"\n{'='*60}")
    print(f"✅ Successfully created {len(created)} prompt files")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
