# Code Integration Protocol

When code is provided in chat, integrate it into the repository by following this rule:

1. Use the filename that appears immediately before the code block.
2. Write the provided code into that corresponding file path.
3. Preserve the provided structure/content unless a syntax fix is required to make it valid in the target language.
4. If the target file does not exist, create it at the specified path.
5. After integration, run relevant checks and commit the result.

This protocol applies to future code snippets shared for this project.
