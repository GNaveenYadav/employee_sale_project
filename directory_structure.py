import os

def print_structure(start_path, depth=2):  # Change the depth as needed
    for root, dirs, files in os.walk(start_path):
        # Calculate the current depth
        level = root.replace(start_path, "").count(os.sep)
        if level > depth:
            continue
        
        indent = " " * 4 * level
        print(f"{indent}{os.path.basename(root)}/")
        
        sub_indent = " " * 4 * (level + 1)
        for file in files:
            print(f"{sub_indent}{file}")

# Provide the path to your project folder
start_path = "C:/EMPPROJECT/employee_sale_project"  # Update this path
print_structure(start_path, depth=2)  # Change depth here (2 = subdirectories only)
