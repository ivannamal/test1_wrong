# Dynamic Review Test Repo

This repository contains a bug that should not be detected by basic static security analysis.
The problem appears only when the dynamic analyzer runs the test command.

Expected behavior:

- Static security review should pass
- Dependency installation should pass
- Dynamic review should fail during tests

The intentional bug is in `calculateDiscount`.
