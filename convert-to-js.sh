#!/bin/bash

# Script to convert TypeScript React files to JavaScript
# This removes type annotations and converts .tsx/.ts to .jsx/.js

cd /vercel/share/v0-project/frontend/src

echo "[v0] Starting TypeScript to JavaScript conversion..."

# Function to convert a single file
convert_file() {
    local file=$1
    local output_file="${file%.tsx}.jsx"
    output_file="${output_file%.ts}.js"
    
    if [ "$file" == "$output_file" ]; then
        return # Skip if already .js or .jsx
    fi
    
    echo "[v0] Converting: $file -> $output_file"
    
    # Read the file and remove TypeScript-specific syntax
    cat "$file" | \
        # Remove type imports and exports
        sed 's/import type {/import {/g' | \
        sed 's/export type {/export {/g' | \
        # Remove type annotations
        sed 's/: [A-Za-z<>|,\[\] ]*//g' | \
        sed 's/<[^>]*>//g' | \
        # Remove React.FC and similar type definitions
        sed 's/React\.FC<[^>]*>//' | \
        sed 's/React\.ReactNode//' | \
        sed 's/Readonly<{[^}]*}>//' | \
        # Remove TypeScript interfaces and types in React.ReactNode
        sed "s/children: React.ReactNode/children/" | \
        # Remove 'as' type assertions
        sed 's/ as [A-Za-z<>|,\[\] ]*//g' | \
        # Remove readonly keywords
        sed 's/readonly //g' | \
        # Clean up extra spaces
        sed 's/  */ /g' > "$output_file"
    
    rm "$file"
}

# Convert all TypeScript files
for file in $(find . -type f \( -name "*.tsx" -o -name "*.ts" \)); do
    convert_file "$file"
done

echo "[v0] Conversion complete!"
ls -la app/ | head -20
