# Create module:
go mod init {{module_name}}

# Create workspace:
go work init ./hello {{path to module}}

# Install dependency:
go mod tidy

# Run module:
go run .