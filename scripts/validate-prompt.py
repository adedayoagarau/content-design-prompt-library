#!/usr/bin/env python3
"""
Validate Content Design Prompt Structure

This script checks that prompt files follow the required format:
- Have a title with version number
- Include a purpose statement
- Define variables
- Provide output format
- Include examples
"""

import sys
import re
from pathlib import Path


class PromptValidator:
    REQUIRED_SECTIONS = [
        r"##\s+.+v\d+\.\d+",  # Title with version
        r"\*\*Purpose\*\*:",  # Purpose statement
        r"===.+===",  # At least one section
        r"===\s+OUTPUT\s+(REQUIREMENTS|STRUCTURE)",  # Output format
        r"===\s+EXAMPLES?\s+===",  # Examples section
    ]
    
    def __init__(self, filepath):
        self.filepath = Path(filepath)
        self.content = ""
        self.errors = []
        self.warnings = []
    
    def read_file(self):
        """Read the prompt file."""
        try:
            with open(self.filepath, 'r', encoding='utf-8') as f:
                self.content = f.read()
            return True
        except FileNotFoundError:
            self.errors.append(f"File not found: {self.filepath}")
            return False
        except Exception as e:
            self.errors.append(f"Error reading file: {e}")
            return False
    
    def validate_structure(self):
        """Check for required sections."""
        for pattern in self.REQUIRED_SECTIONS:
            if not re.search(pattern, self.content, re.IGNORECASE):
                self.errors.append(f"Missing required section: {pattern}")
    
    def validate_variables(self):
        """Check that variables are defined and used consistently."""
        # Find all variables in format {{variable_name}}
        variables_used = set(re.findall(r'\{\{(\w+)\}\}', self.content))
        
        if not variables_used:
            self.warnings.append("No variables found in prompt")
        
        # Check if examples define these variables
        examples_section = re.search(
            r'===\s+EXAMPLES?\s+===(.*?)(?:===|$)',
            self.content,
            re.DOTALL | re.IGNORECASE
        )
        
        if examples_section:
            examples_text = examples_section.group(1)
            defined_vars = set(re.findall(r'(\w+):\s*"', examples_text))
            
            undefined = variables_used - defined_vars
            if undefined:
                self.warnings.append(
                    f"Variables used but not in examples: {', '.join(undefined)}"
                )
    
    def validate_output_format(self):
        """Check that output format is structured (JSON, YAML, or code block)."""
        output_section = re.search(
            r'===\s+OUTPUT\s+(REQUIREMENTS|STRUCTURE)\s+===(.*?)(?:===|$)',
            self.content,
            re.DOTALL | re.IGNORECASE
        )
        
        if output_section:
            output_text = output_section.group(2)
            has_structure = (
                '```json' in output_text or
                '```yaml' in output_text or
                '```yml' in output_text
            )
            if not has_structure:
                self.warnings.append(
                    "Output format should include JSON or YAML code block"
                )
    
    def validate_examples(self):
        """Check that at least 2 examples are provided."""
        examples_section = re.search(
            r'===\s+EXAMPLES?\s+===(.*?)(?:===|$)',
            self.content,
            re.DOTALL | re.IGNORECASE
        )
        
        if examples_section:
            examples_text = examples_section.group(1)
            example_count = len(re.findall(
                r'\*\*Example\s+\d+:',
                examples_text
            ))
            
            if example_count < 2:
                self.warnings.append(
                    f"Only {example_count} example(s) found. Recommend at least 2."
                )
    
    def validate(self):
        """Run all validations."""
        if not self.read_file():
            return False
        
        self.validate_structure()
        self.validate_variables()
        self.validate_output_format()
        self.validate_examples()
        
        return len(self.errors) == 0
    
    def print_results(self):
        """Print validation results."""
        print(f"\n{'='*60}")
        print(f"Validating: {self.filepath.name}")
        print(f"{'='*60}\n")
        
        if self.errors:
            print("❌ ERRORS:")
            for error in self.errors:
                print(f"  • {error}")
            print()
        
        if self.warnings:
            print("⚠️  WARNINGS:")
            for warning in self.warnings:
                print(f"  • {warning}")
            print()
        
        if not self.errors and not self.warnings:
            print("✅ All checks passed!")
        elif not self.errors:
            print("✅ No errors (warnings only)")
        
        print(f"\n{'='*60}\n")
        
        return len(self.errors) == 0


def main():
    if len(sys.argv) < 2:
        print("Usage: python validate-prompt.py <prompt-file.md>")
        sys.exit(1)
    
    filepath = sys.argv[1]
    validator = PromptValidator(filepath)
    
    is_valid = validator.validate()
    validator.print_results()
    
    sys.exit(0 if is_valid else 1)


if __name__ == "__main__":
    main()
