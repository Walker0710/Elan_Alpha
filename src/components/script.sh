#!/bin/bash

# Check if at least one argument is provided
if [ "$#" -lt 1 ]; then
  echo "Usage: $0 folder_name1 [folder_name2 ...]"
  exit 1
fi

# Iterate through each argument
for folder_name in "$@"; do
  # Create the folder
  mkdir -p "$folder_name"

  # Create the .jsx file and add default code
  jsx_file="$folder_name/$folder_name.jsx"
  css_file="$folder_name/$folder_name.css"

  cat > "$jsx_file" <<EOL
import './$folder_name.css';

function ${folder_name^}() {
  return (
    <div className="$folder_name">

    </div>
  );
}

export default ${folder_name^};
EOL

  # Create an empty .css file
  touch "$css_file"

  echo "Created $folder_name with $jsx_file and $css_file"
done
